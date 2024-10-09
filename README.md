# SPEED APP


```
SPEED
├─ package.json
├─ README.md
├─ speed-nest-project
│  ├─ .env
│  ├─ .eslintrc.js
│  ├─ .prettierrc
│  ├─ dist
│  │  ├─ api
│  │  │  └─ articles
│  │  │     ├─ article.controller.d.ts
│  │  │     ├─ article.controller.js
│  │  │     ├─ article.controller.js.map
│  │  │     ├─ article.schema.d.ts
│  │  │     ├─ article.schema.js
│  │  │     ├─ article.schema.js.map
│  │  │     ├─ article.service.d.ts
│  │  │     ├─ article.service.js
│  │  │     ├─ article.service.js.map
│  │  │     ├─ articles.controller.d.ts
│  │  │     ├─ articles.controller.js
│  │  │     ├─ articles.controller.js.map
│  │  │     ├─ articles.module.d.ts
│  │  │     ├─ articles.module.js
│  │  │     ├─ articles.module.js.map
│  │  │     └─ dto
│  │  │        ├─ create-article.dto.d.ts
│  │  │        ├─ create-article.dto.js
│  │  │        └─ create-article.dto.js.map
│  │  ├─ app.controller.d.ts
│  │  ├─ app.controller.js
│  │  ├─ app.controller.js.map
│  │  ├─ app.module.d.ts
│  │  ├─ app.module.js
│  │  ├─ app.module.js.map
│  │  ├─ app.service.d.ts
│  │  ├─ app.service.js
│  │  ├─ app.service.js.map
│  │  ├─ main.d.ts
│  │  ├─ main.js
│  │  ├─ main.js.map
│  │  └─ tsconfig.build.tsbuildinfo
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ api
│  │  │  └─ articles
│  │  │     ├─ article.controller.ts
│  │  │     ├─ article.schema.ts
│  │  │     ├─ article.service.ts
│  │  │     ├─ articles.controller.ts
│  │  │     ├─ articles.module.ts
│  │  │     └─ dto
│  │  │        └─ create-article.dto.ts
│  │  ├─ app.controller.spec.ts
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  └─ main.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  ├─ article.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
├─ speed-next-app
│  ├─ .babelrc
│  ├─ .env
│  ├─ .eslintrc.json
│  ├─ .next
│  │  ├─ app-build-manifest.json
│  │  ├─ app-path-routes-manifest.json
│  │  ├─ build-manifest.json
│  │  ├─ BUILD_ID
│  │  ├─ cache
│  │  │  ├─ .tsbuildinfo
│  │  │  ├─ eslint
│  │  │  │  └─ .cache_p58ha0
│  │  │  ├─ swc
│  │  │  │  └─ plugins
│  │  │  │     └─ v7_windows_x86_64_0.106.15
│  │  │  └─ webpack
│  │  │     ├─ client-production
│  │  │     │  ├─ 0.pack
│  │  │     │  └─ index.pack
│  │  │     ├─ edge-server-production
│  │  │     │  ├─ 0.pack
│  │  │     │  └─ index.pack
│  │  │     └─ server-production
│  │  │        ├─ 0.pack
│  │  │        ├─ 1.pack
│  │  │        ├─ index.pack
│  │  │        └─ index.pack.old
│  │  ├─ export-marker.json
│  │  ├─ images-manifest.json
│  │  ├─ next-minimal-server.js.nft.json
│  │  ├─ next-server.js.nft.json
│  │  ├─ package.json
│  │  ├─ prerender-manifest.json
│  │  ├─ react-loadable-manifest.json
│  │  ├─ required-server-files.json
│  │  ├─ routes-manifest.json
│  │  ├─ server
│  │  │  ├─ app
│  │  │  │  ├─ create-article
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.nft.json
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ create-article.html
│  │  │  │  ├─ create-article.meta
│  │  │  │  ├─ create-article.rsc
│  │  │  │  ├─ edit-article
│  │  │  │  │  └─ [id]
│  │  │  │  │     ├─ page.js
│  │  │  │  │     ├─ page.js.nft.json
│  │  │  │  │     └─ page_client-reference-manifest.js
│  │  │  │  ├─ favicon.ico
│  │  │  │  │  ├─ route.js
│  │  │  │  │  └─ route.js.nft.json
│  │  │  │  ├─ favicon.ico.body
│  │  │  │  ├─ favicon.ico.meta
│  │  │  │  ├─ index.html
│  │  │  │  ├─ index.meta
│  │  │  │  ├─ index.rsc
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.nft.json
│  │  │  │  ├─ page_client-reference-manifest.js
│  │  │  │  ├─ show-article
│  │  │  │  │  └─ [id]
│  │  │  │  │     ├─ page.js
│  │  │  │  │     ├─ page.js.nft.json
│  │  │  │  │     └─ page_client-reference-manifest.js
│  │  │  │  ├─ _not-found
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.nft.json
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ _not-found.html
│  │  │  │  ├─ _not-found.meta
│  │  │  │  └─ _not-found.rsc
│  │  │  ├─ app-paths-manifest.json
│  │  │  ├─ chunks
│  │  │  │  ├─ 131.js
│  │  │  │  ├─ 543.js
│  │  │  │  ├─ 682.js
│  │  │  │  ├─ 948.js
│  │  │  │  └─ font-manifest.json
│  │  │  ├─ font-manifest.json
│  │  │  ├─ functions-config-manifest.json
│  │  │  ├─ interception-route-rewrite-manifest.js
│  │  │  ├─ middleware-build-manifest.js
│  │  │  ├─ middleware-manifest.json
│  │  │  ├─ middleware-react-loadable-manifest.js
│  │  │  ├─ next-font-manifest.js
│  │  │  ├─ next-font-manifest.json
│  │  │  ├─ pages
│  │  │  │  ├─ 404.html
│  │  │  │  ├─ 500.html
│  │  │  │  ├─ _app.js
│  │  │  │  ├─ _app.js.nft.json
│  │  │  │  ├─ _document.js
│  │  │  │  ├─ _document.js.nft.json
│  │  │  │  ├─ _error.js
│  │  │  │  └─ _error.js.nft.json
│  │  │  ├─ pages-manifest.json
│  │  │  ├─ server-reference-manifest.js
│  │  │  ├─ server-reference-manifest.json
│  │  │  └─ webpack-runtime.js
│  │  ├─ static
│  │  │  ├─ chunks
│  │  │  │  ├─ 138-cb6233c21924f5b3.js
│  │  │  │  ├─ 23-a07edd13a7b12957.js
│  │  │  │  ├─ 448-3e06b44c016ac05f.js
│  │  │  │  ├─ app
│  │  │  │  │  ├─ create-article
│  │  │  │  │  │  └─ page-da4dec7f97fbe2b8.js
│  │  │  │  │  ├─ edit-article
│  │  │  │  │  │  └─ [id]
│  │  │  │  │  │     └─ page-4e1ef0c400e73187.js
│  │  │  │  │  ├─ layout-72a34a073d912a1f.js
│  │  │  │  │  ├─ page-ca12dca9b926e64d.js
│  │  │  │  │  ├─ show-article
│  │  │  │  │  │  └─ [id]
│  │  │  │  │  │     └─ page-87e61a113757b981.js
│  │  │  │  │  └─ _not-found
│  │  │  │  │     └─ page-0cc4858ce7ae42a0.js
│  │  │  │  ├─ fd9d1056-2737f78bfff3f6bf.js
│  │  │  │  ├─ framework-f66176bb897dc684.js
│  │  │  │  ├─ main-app-aaf59271e400b7a5.js
│  │  │  │  ├─ main-dba73245756b878b.js
│  │  │  │  ├─ pages
│  │  │  │  │  ├─ _app-6a626577ffa902a4.js
│  │  │  │  │  └─ _error-1be831200e60c5c0.js
│  │  │  │  ├─ polyfills-42372ed130431b0a.js
│  │  │  │  └─ webpack-921b8c72383a9d96.js
│  │  │  ├─ css
│  │  │  │  ├─ 1a63c02c6252f740.css
│  │  │  │  ├─ 617599c2571e0ba5.css
│  │  │  │  └─ 628765f20b848f76.css
│  │  │  ├─ IKNl-s8ZFI9NuSCIuxrAn
│  │  │  │  ├─ _buildManifest.js
│  │  │  │  └─ _ssgManifest.js
│  │  │  └─ media
│  │  │     ├─ 26a46d62cd723877-s.woff2
│  │  │     ├─ 55c55f0601d81cf3-s.woff2
│  │  │     ├─ 581909926a08bbc8-s.woff2
│  │  │     ├─ 6d93bde91c0c2823-s.woff2
│  │  │     ├─ 97e0cb1ae144a2a9-s.woff2
│  │  │     ├─ a34f9d1faa5f3315-s.p.woff2
│  │  │     └─ df0a9ae256c0569c-s.woff2
│  │  ├─ trace
│  │  └─ types
│  │     ├─ app
│  │     │  ├─ create-article
│  │     │  │  └─ page.ts
│  │     │  ├─ edit-article
│  │     │  │  └─ [id]
│  │     │  │     └─ page.ts
│  │     │  ├─ layout.ts
│  │     │  ├─ page.ts
│  │     │  └─ show-article
│  │     │     └─ [id]
│  │     │        └─ page.ts
│  │     └─ package.json
│  ├─ jest.config.js
│  ├─ jest.setup.ts
│  ├─ next-env.d.ts
│  ├─ next.config.mjs
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.mjs
│  ├─ README.md
│  ├─ src
│  │  ├─ app
│  │  │  ├─ create-article
│  │  │  │  └─ page.tsx
│  │  │  ├─ edit-article
│  │  │  │  └─ [id]
│  │  │  │     └─ page.tsx
│  │  │  ├─ favicon.ico
│  │  │  ├─ fonts
│  │  │  │  ├─ GeistMonoVF.woff
│  │  │  │  └─ GeistVF.woff
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  ├─ moderation
│  │  │  │  └─ page.tsx
│  │  │  ├─ page.tsx
│  │  │  └─ show-article
│  │  │     └─ [id]
│  │  │        └─ page.tsx
│  │  └─ components
│  │     ├─ Article.ts
│  │     ├─ ArticleCard.tsx
│  │     ├─ BootstrapClient.ts
│  │     ├─ CreateArticle.tsx
│  │     ├─ Moderation.tsx
│  │     ├─ Navbar.tsx
│  │     ├─ ShowArticleDetails.tsx
│  │     ├─ ShowArticleList.tsx
│  │     └─ UpdateArticleInfo.tsx
│  ├─ tailwind.config.ts
│  ├─ tsconfig.json
│  └─ __tests__
│     ├─ ArticleCard.test.tsx
│     ├─ CreateArticleComponent.test.tsx
│     ├─ ModerationList.test.tsx
│     ├─ Navbar.test.tsx
│     └─ ShowArticleDetails.test.tsx
└─ speed-react-app
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   ├─ README.md
   └─ src
      ├─ App.css
      ├─ App.js
      ├─ App.test.js
      ├─ index.css
      ├─ index.js
      ├─ logo.svg
      ├─ moderation.js
      ├─ reportWebVitals.js
      ├─ setupTests.js
      ├─ styles.css
      └─ SubmitArticleForm.js

```