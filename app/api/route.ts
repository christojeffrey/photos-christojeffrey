export const dynamic = "force-dynamic"; // defaults to auto\

import { getPlaiceholder } from "plaiceholder";

export async function POST(request: Request) {
  const { src } = await request.json();
  try {
    const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));

    let blurData = await getPlaiceholder(buffer);

    return Response.json({ blurData });
  } catch (err) {
    err;
  }
}
