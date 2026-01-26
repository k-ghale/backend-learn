
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

 app.get('/', (req, res) => {
     res.send("Server is ready.");
 });

app.get('/api/vv/jokes', (req, res) => {
    const jokes = [
  {
    id: 1,
    title: "JS Relationships",
    joke: "Why did JavaScript break up with HTML? It needed some space."
  },
  {
    id: 2,
    title: "Debugging Life",
    joke: "JavaScript developers don’t panic — they just console.log everything."
  },
  {
    id: 3,
    title: "Under Control",
    joke: "Why was the JS developer calm? Everything was under control."
  },
  {
    id: 4,
    title: "Promises",
    joke: "A JavaScript promise walked into a bar… it said, 'I’ll then explain.'"
  },
  {
    id: 5,
    title: "Lonely Array",
    joke: "Why did the array feel lonely? It had no push."
  }];
  res.send(jokes);
})

app.listen(PORT, () => {
    console.log(`Server is listening on localhost:${PORT}`)
})