import { getBlurData } from "@/lib";

import FullScreenPreview from "./image-preview";
import { PhotoType } from "./type";

import Photo from "./components/photo";

// add revalidate
export default async function Home() {
  let photos: any[] = await getData();
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
            {photos.reverse().map(async (photoData, index) => {
              return (
                <div key={index}>
                  <Photo src={photoData.attributes.origin_path} />
                </div>
              );
            })}
          </div>
        </section>
      </FullScreenPreview>
    </main>
  );
}

async function getData() {
  const url = "https://api.imgix.com/api/v1/sources/66a9166fc23b2eb7987ade8d/assets";
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer ak_24dc45931c90154c413e311d4e31a055cd8fecaf4ee78990b86b06db8a18a39e", // it's alright it's read only
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
  // const res = await fetch("https://admin-api.christojeffrey.com/photos", { next: { tags: ["photos"] } });
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // return (await res.json()).photos;
}
