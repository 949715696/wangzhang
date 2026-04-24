// next.config.js
module.exports = {
  // 这行代码最关键：它明确告诉服务器我们的 Payload 配置文件在哪里
  env: {
    PAYLOAD_CONFIG_PATH: './payload.config.ts',
  },
}