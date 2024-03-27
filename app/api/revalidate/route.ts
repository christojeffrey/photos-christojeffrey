import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const tag: any = request.nextUrl.searchParams.get("tag");
  revalidateTag(tag);
  return new Response(JSON.stringify({ revalidated: true, now: Date.now(), tag: tag }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
