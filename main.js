import { createServer } from 'node:http';
import { mainPage } from './source/controllers.js';

const PORT = 3000;

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if(pathname === '/'){
    mainPage(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 — Страница не найдена</h1>');
  }
});


server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});