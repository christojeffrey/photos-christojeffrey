import { getCSSRemote } from "@/lib";
import Image from "next/image";

type Photo = {
  full: {
    url: string;
  };
  thumb: {
    url: string;
  };
  medium: {
    url: string;
  };
  title: string;
};
export default async function Home() {
  let photos: Photo[] = await getData();
  return (
    <main className="flex md:flex-row min-h-screen flex-col items-start justify-between p-6">
      {/* sidebar */}
      <div className="top-6 md:sticky w-[200px]">
        <div className="p-5">photos by Christopher Jeffrey</div>
      </div>
      {/* photos */}
      <div className="w-full columns-1 md:columns-2 lg:columns-4 gap-1 md:gap-2 lg:gap-4 ">
        {photos.reverse().map(async (image, index) => {
          // const base64 = await getBase64(image);
          const css = await getCSSRemote(image.medium.url);

          // if css string, return error
          if (typeof css === "string") {
            return <>error</>;
          }
          return (
            <div key={index} className="rounded-lg relative overflow-hidden mb-1 md:mb-2 lg:mb-4">
              <div className="absolute inset-0 transform scale-150 filter blur-2xl z-[-1]" style={css} />
              <Image src={image.medium.url} alt="image" style={{ width: "100%", height: "auto" }} width={0} height={0} sizes="100vw" className="rounded-lg" priority />
            </div>
          );
        })}
      </div>
    </main>
  );
}
async function getData() {
  const res = await fetch("https://admin-api.christojeffrey.com/photos");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return (await res.json()).photos;
}
