# OWASP® Dungeons & Daemons

OWASP® Dungeons & Daemons is a collection of LRP games for promoting awareness and knowlege about application security and security practices.

Please visit: https://dd.sydseter.com

## License

OWASP® Dungeons & Daemons (c) by Johan Sydseter

OWASP® Dungeons & Daemons is licensed under a
Creative Commons Attribution-ShareAlike 4.0 International License.

You should have received a copy of the license along with this
work. If not, see <https://creativecommons.org/licenses/by-sa/4.0/>.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```bash
npm install          # Install dependencies
npm run build        # Build production version

# Open site in default browser
xdg-open build/index.html #Linux
open build/index.html # Mac
start build/index.html # Windows
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
