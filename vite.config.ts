import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Inject your custom Vite settings safely here:
  vite: {
    base: '/RedstoneChicken/redstonechicken.github.io/', // Must match your exact repository name on GitHub
  }
});
