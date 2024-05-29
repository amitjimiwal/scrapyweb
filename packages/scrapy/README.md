# OGP PARSER
[![npm](https://img.shields.io/npm/v/@notamit/ogpparser)](https://www.npmjs.com/package/@notamit/ogpparser)
[![npm](https://img.shields.io/npm/dt/@notamit/ogpparser)](https://www.npmjs.com/package/@notamit/ogpparser)
[![npm](https://img.shields.io/npm/l/@notamit/ogpparser)](https://www.npmjs.com/package/@notamit/ogpparser)
[![npm](https://img.shields.io/bundlephobia/min/@notamit/ogpparser)](https://www.npmjs.com/package/@notamit/ogpparser)
[![npm](https://img.shields.io/npm/types/@notamit/ogpparser)](https://www.npmjs.com/package/@notamit/ogpparser)

A npm package that extracts Open Graph Protocol [(ogp.me)](https://ogp.me) metadata from a given URL that can be used to generate link previews.

## Installation
To install `@notamit/ogpparser`

```bash
  # with npm:
  npm install @notamit/ogpparser --save

  # with yarn:
  yarn add @notamit/ogpparser

  # with pnpm:
  pnpm add @notamit/ogpparser

  # with bun:
  bun add @notamit/ogpparser
```

## 🧰  Usage
`@notamit/ogpparser` exports `parse` async function. It requires 1 argument, the URL of the page you want to extract metadata from. It returns a promise that resolves to an object containing the metadata.

Inside your `.js/.ts` file, import the `parse` function and use it.
```js
import parse from "@notamit/ogpparser";
async function test() {
    const metadata=await parse('https://www.youtube.com/watch?v=znWS3zkdrq4');
    return metadata;
);
test().then(res =>{
    console.log(res);
}).catch(err =>{
    //handling errors
    console.error(err);
})
}
```` 
### Sample response:
```json
{
  title: 'Chai aur code Live ☕️ - YouTube',
  og: {
    'og:site_name': 'YouTube',
    'og:url': 'https://www.youtube.com/watch?v=znWS3zkdrq4',
    'og:title': 'Chai aur code Live ☕️',
    'og:image': 'https://i.ytimg.com/vi/znWS3zkdrq4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUShHMA8=&rs=AOn4CLBXY4-LhSGoyrs_IWkZeZzimQIANA',
    'og:image:width': '1280',
    'og:image:height': '720',
    'og:description': 'https://courses.chaicode.com/learn/Interview-Preparation-With-JavascriptCoupon: YOUTUBE200',
    'og:type': 'video.other',
    'og:video:url': 'https://www.youtube.com/embed/znWS3zkdrq4',
    'og:video:secure_url': 'https://www.youtube.com/embed/znWS3zkdrq4',
    'og:video:type': 'text/html',
    'og:video:width': '1280',
    'og:video:height': '720'
  },
  twitter: {
    'twitter:card': 'player',
    'twitter:site': '@youtube',
    'twitter:url': 'https://www.youtube.com/watch?v=znWS3zkdrq4',
    'twitter:title': 'Chai aur code Live ☕️',
    'twitter:description': 'https://courses.chaicode.com/learn/Interview-Preparation-With-JavascriptCoupon: YOUTUBE200',
    'twitter:image': 'https://i.ytimg.com/vi/znWS3zkdrq4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUShHMA8=&rs=AOn4CLBXY4-LhSGoyrs_IWkZeZzimQIANA',
    'twitter:app:name:iphone': 'YouTube',
    'twitter:app:id:iphone': '544007664',
    'twitter:app:name:ipad': 'YouTube',
    'twitter:app:id:ipad': '544007664',
    'twitter:app:url:iphone': 'vnd.youtube://www.youtube.com/watch?v=znWS3zkdrq4&feature=applinks',
    'twitter:app:url:ipad': 'vnd.youtube://www.youtube.com/watch?v=znWS3zkdrq4&feature=applinks',
    'twitter:app:name:googleplay': 'YouTube',
    'twitter:app:id:googleplay': 'com.google.android.youtube',
    'twitter:app:url:googleplay': 'https://www.youtube.com/watch?v=znWS3zkdrq4',
    'twitter:player': 'https://www.youtube.com/embed/znWS3zkdrq4',
    'twitter:player:width': '1280',
    'twitter:player:height': '720'
  },
  alternateImage: 'https://res.cloudinary.com/dejzy9q65/image/upload/v1706806074/preview_ha6nqf.png',
  description: 'https://courses.chaicode.com/learn/Interview-Preparation-With-JavascriptCoupon: YOUTUBE200',
  keywords: 'video, sharing, camera phone, video phone, free, upload'
}
```
### PACKAGE 
[```@notamit/ogpparser```](https://www.npmjs.com/package/@notamit/ogpparser)

### PARAMS

**Parameters**

| Name | Description                                        | Location | Sample Value                                |
|------|----------------------------------------------------|----------|---------------------------------------------|
| Url  | Link of the page that you want to extract metadata | Argument    | https://www.youtube.com/watch?v=znWS3zkdrq4 |

## ⚙️ Configuration
| Setting           | Value              |
| ----------------- | ------------------ |
| Runtime           | Nodejs>=(18.12.1)          |
| Entrypoint        | `src/index.ts`    |
| Build Commands    | `npm run start` |

## Author
[Amit Jimiwal](https://www.github.com/amitjimiwal)

