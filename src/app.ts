import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
