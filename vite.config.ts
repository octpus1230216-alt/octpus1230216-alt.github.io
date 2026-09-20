import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Vite + Tailwind CSS v4：通过官方 Vite 插件接入，无需 tailwind.config.js / postcss.config.js
// DeepSeek Key 放在 .env.local（不进 Git），由 dev server 代理转发时注入，前端代码零暴露
export default defineConfig(({ mode }) => {
  // 第三个参数传 '' 表示加载所有环境变量（不限于 VITE_ 前缀，避免 Key 被打进前端包）
  const env = loadEnv(mode, process.cwd(), '')
  const apiKey = env.DEEPSEEK_API_KEY
  console.log(
    apiKey
      ? '[proxy] DeepSeek Key 已加载，聊天走 LLM'
      : '[proxy] 未检测到 DEEPSEEK_API_KEY，聊天将降级到本地知识库',
  )

  return {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/api/deepseek': {
          target: 'https://api.deepseek.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/deepseek/, ''),
          // 在转发请求上直接注入鉴权头（比 headers 选项更可靠）；没 Key 时不注入→401→前端降级
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              if (apiKey) proxyReq.setHeader('Authorization', `Bearer ${apiKey}`)
            })
          },
        },
      },
    },
  }
})
