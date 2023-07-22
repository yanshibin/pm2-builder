const pm2 = require('pm2');
const path = require('path');

pm2.start({
  name: 'server',
    script: path.join(__dirname, 'executable/server'),
    env: {
      DATABASE_URL: "file:$(pwd)/prisma/dev.db",
    }
}, (error, apps) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log('Server started successfully');
  pm2.disconnect();
});