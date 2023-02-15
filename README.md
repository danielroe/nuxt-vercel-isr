# Nuxt ❤️ Vercel

This is a tiny demo to show off, based on [nuxt-on-the-edge](https://github.com/pi0/nuxt-on-the-edge) by [@pi0](https://github.com/pi0) which itself was inspired by [other](https://github.com/Rich-Harris/sveltekit-on-the-edge) [projects](https://github.com/vercel-labs/react-on-the-edge).

This is meant to be a demo of Nuxt route rules on Vercel:

- [/](https://nuxt-vercel-isr.vercel.app/) - revalidated every 60 seconds, in the background
- [/static](https://nuxt-vercel-isr.vercel.app/static) - generated on demand and then cached permanently
- [/dynamic](https://nuxt-vercel-isr.vercel.app/dynamic) - always fresh

The only config required:

```js
export default defineNuxtConfig({
  routeRules: {
    '/**': { swr: true },
    '/static': { static: true },
    '/dynamic': { swr: false, cache: false },
  },
})
```

## Setup

Enable corepack:

```bash
npx corepack enable
```

Make sure to install the dependencies:

```bash
pnpm install
```

## Development

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

The easiest way to deploy your app is to link the repo to your Vercel account. Alternatively, you can create a production build locally using `pnpm build`.

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment#presets) for more information.
