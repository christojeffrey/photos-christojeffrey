import { getPlaiceholder } from "plaiceholder";

export async function getBlurData(src: string) {
  try {
    const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));

    return await getPlaiceholder(buffer);
  } catch (err) {
    err;
  }
}
