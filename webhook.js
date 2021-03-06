const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const crypto = require('crypto');
const childProcess = require('child_process');

// 加载 secrets.json
const secrets = JSON.parse(fs.readFileSync('./secrets.json', { encoding: 'utf-8' }))

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx) => {
  console.log('收到 Webhook 请求');
  const body = ctx.request.body;

  // 签名密钥
  const secret = secrets.secret;

  // 取头部
  const sig = ctx.headers['x-hub-signature-256'];

  if (!sig) {
    ctx.status = 403;
    return;
  }

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(Buffer.from(JSON.stringify(body), 'utf8'));

  const digest = `sha256=${hmac.digest('hex')}`;

  if (digest !== sig) {
    ctx.status = 403;
    return;
  }

  if (body.ref !== 'refs/heads/main') {
    ctx.status = 200;
    ctx.body = '非 main 分支，未变更。';
    return;
  }
  // 拉取代码
  childProcess.exec('git pull');

  ctx.status = 202;
  ctx.body = '进行 pull。';
});

app.listen(5002);