import { getBase64 } from "@/lib";
import Image from "next/image";

const images = [
  {
    src: "/airplane-window.jpg",
    alt: "airplane-window",
  },
  {
    src: "/japan-car.jpg",
    alt: "japan airport car",
  },
  {
    src: "/sidewalk-sit.jpg",
    alt: "sitting on sidewalk",
  },
  {
    src: "/sun-kissed.jpg",
    alt: "sun kissed",
  },
  {
    src: "/man-airport.jpg",
    alt: "man at airport",
  },

  {
    src: "/bus-stop.jpg",
    alt: "bus stop broad daylight",
  },
  {
    src: "/pedestrian-daylight.jpg",
    alt: "pedestrian daylight",
  },
  {
    src: "/bus-window.jpg",
    alt: "bus window",
  },
  {
    src: "/night-satay.jpg",
    alt: "night satay",
  },
  {
    src: "/girl-school-aisle.jpg",
    alt: "a girl standing at the end of an aisle",
  },
  {
    src: "/car-window.jpg",
    alt: "sun kissed car window",
  },
  {
    src: "/cold-night.jpg",
    alt: "cold night",
  },
  {
    src: "/random-pink-flowers.jpg",
    alt: "sun kissed car window",
  },
  {
    src: "/top-light-school.jpg",
    alt: "top light school",
  },
  {
    src: "/indonesian-flag-gbk.jpg",
    alt: "indonesian-flag-gbk jakarta",
  },

  {
    src: "/waterloo-downtown.jpg",
    alt: "waterloo-downtown",
  },
  {
    src: "/blue-school.jpg",
    alt: "blue school",
  },
  {
    src: "/cold-night-2.jpg",
    alt: "another cold night",
  },
  {
    src: "/golden-store.jpg",
    alt: "goldern store",
  },
  {
    src: "/waterloo-city.jpg",
    alt: "waterloo city",
  },
  {
    src: "/gbk-light.jpg",
    alt: "gbk light",
  },
  {
    src: "/google-building-waterloo.jpg",
    alt: "google building in waterloo",
  },
  {
    src: "/bees-on-sweet-drink.jpg",
    alt: "bees on sweet drink",
  },
  {
    src: "/cold-night-further.jpg",
    alt: "cold night further",
  },
];

export default function Home() {
  return (
    <main className="flex md:flex-row min-h-screen flex-col items-start justify-between p-6">
      {/* sidebar */}
      <div className="top-6 md:sticky w-[200px]">
        <div className="p-5">photos by Christopher Jeffrey</div>
      </div>
      {/* photos */}
      <div className="w-full columns-1 md:columns-2 lg:columns-4 gap-0">
        {images.map(async (image, index) => {
          const base64 = await getBase64(image.src);
          return (
            <div key={index} className="rounded-lg relative p-1 md:p-2 lg:p-4">
              <Image src={image.src} alt={image.alt} placeholder="blur" blurDataURL={base64} style={{ width: "100%", height: "auto" }} width={0} height={0} sizes="100vw" className="rounded-lg" />
            </div>
          );
        })}
      </div>
    </main>
  );
}
