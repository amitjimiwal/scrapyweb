import OGPParser from "./parser.js";
import { MetaData } from "./type.js";
async function parse(Url: string): Promise<MetaData> {
     if (!Url) throw new Error("Provide a Url");
     const result = await OGPParser(Url);
     return result;
}
export default parse;
