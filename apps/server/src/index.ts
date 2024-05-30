import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import parse from '@notamit/ogpparser';
import { errorHandler } from './errorhandler.js';
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(
     cors({
          origin: String(process.env.CORS_ORIGIN),
     })
);
app.get('/scrape', async function (req: Request, res: Response, next: NextFunction) {
     let websiteUrl = req.query.url;
     if (!websiteUrl || !String(websiteUrl).startsWith('https://')) {
          next(new Error("invalid url"))
          return;
     }
     try {
          const data = await parse(String(websiteUrl));
          res.json({
               success: true,
               data
          })
     } catch (error: any) {
          next(new Error(error.message));
          return;
     }
})
app.use(errorHandler);
app.listen(port, () => {
     console.log(` TS Server is running on port ${port}`);
});