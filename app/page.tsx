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
      <div className="w-full columns-1 md:columns-2 lg:columns-4 gap-1 md:gap-2 lg:gap-4 ">
        {images.reverse().map(async (image, index) => {
          // const base64 = await getBase64(image);
          const css = await getCSS(image);

          // if css string, return error
          if (typeof css === "string") {
            return <>error</>;
          }
          return (
            <div key={index} className="rounded-lg relative overflow-hidden mb-1 md:mb-2 lg:mb-4">
              <div className="absolute inset-0 transform scale-150 filter blur-2xl z-[-1]" style={css} />
              <Image src={image} alt="image" style={{ width: "100%", height: "auto" }} width={0} height={0} sizes="100vw" className="rounded-lg" priority />
            </div>
          );
        })}
      </div>
    </main>
  );
}
