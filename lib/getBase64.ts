import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function getBase64(fileName: string) {
  try {
    const file = await fs.readFile("./public" + fileName);

    const { base64 } = await getPlaiceholder(file);

    // console.log(base64);
    return base64;
  } catch (err) {
    console.log("err", err);
    return "asfd";
  }
}

export default getBase64;
