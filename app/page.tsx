import { getBase64 } from "@/lib";
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
          const base64 = await getBase64(image);
          return (
            <div key={index} className="rounded-lg relative p-1 md:p-2 lg:p-4">
              <Image src={image} alt="image" placeholder="blur" blurDataURL={base64} style={{ width: "100%", height: "auto" }} width={0} height={0} sizes="100vw" className="rounded-lg" loading="lazy" quality={30} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
