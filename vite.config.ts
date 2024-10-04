import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

import { resolve } from "path";

export default defineConfig(() => ({
	resolve: {
		extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
		alias: [
			{ find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
			{ find: "@fonts", replacement: fileURLToPath(new URL("./public/fonts", import.meta.url)) },
			{ find: "@images", replacement: fileURLToPath(new URL("./public/images", import.meta.url)) },
			{ find: "@icons", replacement: fileURLToPath(new URL("./public/icons", import.meta.url)) },
			{
				find: "@company-web",
				replacement: fileURLToPath(new URL("./src/company-web", import.meta.url)),
			},
			{ find: "@webshop", replacement: fileURLToPath(new URL("./src/webshop", import.meta.url)) },
			{ find: "@shared", replacement: fileURLToPath(new URL("./src/shared", import.meta.url)) },
			{
				find: "@storybook-only",
				replacement: fileURLToPath(new URL("./src/_storybook-only", import.meta.url)),
			},
		],
		// "@fonts": resolve(__dirname, "fonts"),
		// "@images": resolve(__dirname, "images"),
		// "@icons": resolve(__dirname, "icons"),
		// "@company-web": resolve(__dirname, "src", "company-web"),
		// "@webshop": resolve(__dirname, "src", "webshop"),
		// "@shared": resolve(__dirname, "src", "shared"),
	},
	build: {
		outDir: resolve(__dirname, "build/"),
		assetsDir: "",
		manifest: true,
		emptyOutDir: true,
		target: "ES2020",
		rollupOptions: {
			input: {
				webshop: resolve(__dirname, "src/webshop/webshop.ts"),
				"company-web": resolve(__dirname, "src/company-web/company-web.ts"),
			},
			output: {
				chunkFileNames: undefined,
			},
		},
	},
}));
