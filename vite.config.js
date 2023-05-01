import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				about: resolve(__dirname, 'pages/about.html'),
				portfolio: resolve(__dirname, 'pages/portfolio.html'),
				contact: resolve(__dirname, 'pages/contact.html'),
			},
		},
	},
	base: '/fem-arch-studio-website/',
});
