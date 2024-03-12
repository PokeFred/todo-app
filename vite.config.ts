import { defineConfig } from 'vite'
import type { CommonServerOptions } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'

const serverConfig: CommonServerOptions = {
    host: '127.0.0.1',
    port: 3000,
    strictPort: true,
}

export default defineConfig({
    server: serverConfig,
    preview: serverConfig,
    plugins: [sveltekit(), enhancedImages()],
})
