# CryptoGecks Website

## Getting started with development:

Install Nodejs v16 (see their website for install instructions). This software should come with npm.

Install sass npm package. This is a project dependency for development as defined in `package.json` and should automatically install after running the following command (make sure you are in the project root directory):

```
npm i
```

You can also install this module globally for use outside the project:
```
npm i --global sass
```

Dependency Versions:
| Package | Version |
| -- | -- |
| node | 16.14.x |
| npm | 8.5.x |
| sass | 1.49.x |

When editing stylesheets, **modify scss file only**. From the project root directory, watch for changes with the sass module:
```
sass --watch src/scss:public/css
```

This command can be indirectly run using:
```
npm run watch-css
```

TODO:
- Do we need css file in two locations? (`static/css` and `public/css`). Ive kept `public/css`
- Do we need dupe html files? (`layout/index.html`). I've kept `public/index.html`.
- Check site functionality upon deployment.