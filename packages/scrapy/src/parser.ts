import axios from "axios";
import * as cheerio from 'cheerio';
import { MetaData } from "./type.js";
async function OGPParser(website_url: string) {
     if (!website_url.startsWith("https://")) throw new Error("Provide a valid Url starting with https://");
     const { data } = await axios.get(website_url);
     const $ = cheerio.load(data);
     const title = $('title').text();
     const result: MetaData = {
          title,
          og: {},
          twitter: {},
          alternateImage:'https://res.cloudinary.com/dejzy9q65/image/upload/v1706806074/preview_ha6nqf.png'
     }
     //get all metatags
     const metaDescription = $('meta[name="description"]').attr('content');
     if (metaDescription) result.description = metaDescription;
     const metaKeywords = $('meta[name="keywords"]').attr('content');
     if (metaKeywords) result.keywords = metaKeywords;

     //Og meta tags
     $('meta[property^="og:"]').each((i, el) => {
          let content = $(el).attr('content');
          const property = $(el).attr('property');
          if (content && property) {
               (result.og as Record<string, string | undefined>)[property] = content;
          }
     });

     //twitter meta tags
     $('meta[name^="twitter:"]').each((_, el) => {
          let content = $(el).attr('content');
          const property = $(el).attr('name');
          if (content && property) {
               (result.twitter as Record<string, string | undefined>)[property] = content;
          }
     });

     //finding an alternate image from the website incase there's no Og image
     $('img').each((_, el) => {
          const src = $(el).attr('src');
          if (src?.startsWith('https://')) {
               result.alternateImage = src;
               return;
          }
     });
     return result;
}
export default OGPParser;