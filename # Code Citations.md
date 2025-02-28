
# Code Citations

## License: unknown
https://github.com/ahmadhabibi14/yome/tree/9b54f93ea04d6f65842f3c2ab028d850c5d2440a/spotify_api.js

```
fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify
```


## License: unknown
https://github.com/0elek/sp/tree/d922db270e789080c4671f41db4d5d8ce9caebe8/index.js

```
${endpoint}`, {
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
```

git commit -m "Initial commit with updated app.js and .gitignore"