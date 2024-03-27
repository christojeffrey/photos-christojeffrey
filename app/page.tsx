"use client";
import { getBlurData } from "@/lib";

import FullScreenPreview from "./image-preview";
import { PhotoType } from "./type";

import Photo from "./components/photo";
import { useEffect, useState } from "react";

export default function Home() {
  const [photos, setPhotos] = useState<PhotoType[]>([]);

  useEffect(() => {
    fetch("https://admin-api.christojeffrey.com/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setPhotos(data.photos);
      });
  }, []);

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
              const blurData = await fetch("/api", {
                method: "POST",
                body: JSON.stringify({ src: photoData.medium.url }),
              });
              return (
                <div key={index}>
                  <Photo photoData={photoData} blurData={blurData} />
                </div>
              );
            })}
          </div>
        </section>
      </FullScreenPreview>
    </main>
  );
}
