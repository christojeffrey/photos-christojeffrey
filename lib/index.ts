import { getPlaiceholder } from "plaiceholder";

export async function getCSS(fileName: string) {
  try {
    const src = fileName;

    const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));

    const { css } = await getPlaiceholder(buffer);

    return css;
  } catch (err) {
    err;
    return "error";
  }
}

export { getBase64 } from "./getBase64";
