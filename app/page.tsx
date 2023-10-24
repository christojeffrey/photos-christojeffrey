import { getBase64, getCSS } from "@/lib";
import Image from "next/image";

import images from "@/images";

export default function Home() {
  return (
    <main className="flex md:flex-row min-h-screen flex-col items-start justify-between p-6">
      {/* sidebar */}
      <div className="top-6 md:sticky w-[200px]">
        <div className="p-5">photos by Christopher Jeffrey</div>
      </div>
      {/* photos */}
      <div className="w-full columns-1 md:columns-2 lg:columns-4 gap-0">
        {images.reverse().map(async (image, index) => {
          // const base64 = await getBase64(image);
          const css = await getCSS(image);

          // if css string, return error
          if (typeof css === "string") {
            return <>error</>;
          }
          return (
            <div key={index} className="rounded-lg relative p-1 md:p-2 lg:p-4">
              <Image src={image} alt="image" style={{ width: "100%", height: "auto", ...css }} placeholder="blur" width={0} height={0} sizes="100vw" className="rounded-lg" priority loading="eager" />
            </div>
          );
        })}
      </div>
    </main>
  );
}
