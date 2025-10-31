import { createServer } from 'node:http';

const PORT = 3000;
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Привет с Node.js!</h1><p>Это простой HTML-сервер.</p>');
});


server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});