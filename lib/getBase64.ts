import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function getBase64(fileName: string) {
  try {
    const src = fileName;

    const buffer = await fetch(src, { cache: "no-store" }).then(async (res) => Buffer.from(await res.arrayBuffer()));

    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (err) {
    err;
    return "error";
  }
}

export default getBase64;
