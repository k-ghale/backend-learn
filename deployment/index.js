require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const gitHubData = {
  "login": "kghale",
  "id": 13732979,
  "node_id": "MDQ6VXNlcjEzNzMyOTc5",
  "avatar_url": "https://avatars.githubusercontent.com/u/13732979?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kghale",
  "html_url": "https://github.com/kghale",
  "followers_url": "https://api.github.com/users/kghale/followers",
  "following_url": "https://api.github.com/users/kghale/following{/other_user}",
  "gists_url": "https://api.github.com/users/kghale/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kghale/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kghale/subscriptions",
  "organizations_url": "https://api.github.com/users/kghale/orgs",
  "repos_url": "https://api.github.com/users/kghale/repos",
  "events_url": "https://api.github.com/users/kghale/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kghale/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2015-08-10T14:52:08Z",
  "updated_at": "2023-03-14T06:21:58Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kabin', (req, res) => {
  res.send("Kabin Ghale")
})

app.get('/world', (req,res) => {
  res.send("Hello World")
})

app.get('/login', (req, res) => {
  res.send(`<h1> Welcome to backend-programming. </h1>`);
})

app.get('/github', (req, res) => {
  res.json(gitHubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})