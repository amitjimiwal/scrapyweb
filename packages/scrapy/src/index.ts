import puppeteer from 'puppeteer';
interface site {
     title?: string | null;
     description?: string | null;
     url:string|null;
}
async function scrape() {
     const browser = await puppeteer.launch();
     const context = await browser.createBrowserContext();
     const page = await context.newPage();
     await page.goto('https://anujkumar05.hashnode.dev/easy-guide-to-understanding-packagejson');
     const metaInformation = await page.evaluate(function () {
          const siteInfo: site = {
               url:String("https://res.cloudinary.com/dejzy9q65/image/upload/v1706806074/preview_ha6nqf.png"),
          };
          const metaTag = document.querySelectorAll('meta');
          const metaTagArray = Array.from(metaTag);

          //description tag
          const metaDescriptionTag = metaTagArray.filter(tag => tag.hasAttribute('name') && tag.getAttribute('name') === 'description')[0];
          siteInfo.description = metaDescriptionTag ? metaDescriptionTag.getAttribute('content') : 'No Meta Description tags found';

          //title 
          const metaOgTitle = metaTagArray.filter(tag => tag.hasAttribute('property') && tag.getAttribute('property') == 'og:title')[0];
          siteInfo.title = metaOgTitle ? metaOgTitle.getAttribute('content') : document.title

          //image
          let metaOgImage = metaTagArray.filter(tag => tag.hasAttribute('property') && tag.getAttribute('property') == 'og:image')[0];
          if(!metaOgImage || !metaOgImage.getAttribute('content')?.startsWith('https://')){
               //if the site doesn't has a meta information tag, then search for all the images in the webpage and return any image that starts with valid https:// format
               const allImages=Array.from(document.querySelectorAll('img'));
               for(let image of allImages){
                    const src=image.getAttribute('src');
                    if(image.getAttribute('src')?.startsWith('https://')){
                         siteInfo.url=src;
                         break;
                    }
               }
               
          }else{
               siteInfo.url=metaOgImage.getAttribute('content');
          }
          return siteInfo;
     })
     await browser.close();
     return metaInformation;
}
export default scrape;