import { getBlurData } from "@/lib";

import FullScreenPreview from "./image-preview";
import { PhotoType } from "./type";

import Photo from "./components/photo";

// add revalidate
export default async function Home() {
  let photos: PhotoType[] = await getData();
  return (
    <main className="">
      <FullScreenPreview>
        <section className="flex md:flex-row min-h-screen flex-col items-start justify-between p-6">
          {/* sidebar */}
          <div className="top-6 md:sticky w-[200px]">
            <div className="p-5">photos by Christopher Jeffrey</div>
          </div>
          {/* photos */}
          <div className="w-full columns-1 md:columns-2 lg:columns-4 gap-1 md:gap-2 lg:gap-4 ">
            {await Promise.all(
              photos.reverse().map(async (photoData, index) => {
                const blurData = await getBlurData(photoData.medium.url);
                return (
                  <div key={index}>
                    <Photo photoData={photoData} blurData={blurData} />
                  </div>
                );
              })
            )}
          </div>
        </section>
      </FullScreenPreview>
    </main>
  );
}

async function getData() {
  const res = await fetch("https://admin-api.christojeffrey.com/photos", { next: { tags: ["photos"] } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return (await res.json()).photos;
}
