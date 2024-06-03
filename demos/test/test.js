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

const form = ctx => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  if  (ctx.request.querystring) {
    ctx.response.type = 'json';
    ctx.response.body = {
      url: ctx.request.url,
      ctr_query: ctx.request.query,
      ctx_querystring: ctx.request.querystring
    }
  } else {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./form.html')
  }
}

app.use(route.get('/', main));
app.use(route.get('/hello', hello));
app.use(route.get('/clock', clock));
app.use(route.get('/form', form))
app.listen(3000, ()=>
  console.log('App started on http://localhost:3000')
);
