# CryptoGecks Website

## Getting started with development:

Install nodejs v13. This should come with npm.

Install sass npm package globally:
```
npm i --global sass
```

Dependency Versions:
| Package | Version |
| -- | -- |
| node | 13.7.x |
| npm | 6.13.x |
| sass | 1.49.x |

When editing stylesheets, **modify scss file only**. From the project root directory, watch for changes with the sass module:

```
sass --watch src/scss:public/css
```

TODO:
- Do we need css file in two locations? (`static/css` and `public/css`). Ive kept `public/css`
- Do we need dupe html files? (`layout/index.html`). I've kept `public/index.html`.
- Check site functionality upon deployment.