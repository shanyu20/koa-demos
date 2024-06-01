const fs = require('fs');
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./index.html');
};

const hello = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./hello.html');
};

const clock = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./clock.html')
}

app.use(route.get('/', main));
app.use(route.get('/hello', hello));
app.use(route.get('/clock', clock));
app.listen(3000);
