async function fetchWebApi(endpoint, method, body) {
  const token = await fetch('/get-token').then(res => res.text());
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks() {
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

async function displayTopTracks() {
  const topTracks = await getTopTracks();
  const trackList = document.getElementById('track-list');
  
  topTracks.forEach(({ name, artists, album }) => {
    const listItem = document.createElement('li');
    const albumCover = document.createElement('img');
    albumCover.src = album.images[0].url;
    albumCover.alt = `${name} album cover`;
    albumCover.className = 'album-cover';

    const trackInfo = document.createElement('div');
    trackInfo.className = 'track-info';
    trackInfo.textContent = `${name} by ${artists.map(artist => artist.name).join(', ')}`;

    listItem.appendChild(albumCover);
    listItem.appendChild(trackInfo);
    trackList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', displayTopTracks);
