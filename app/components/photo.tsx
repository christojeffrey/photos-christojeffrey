"use client";
import Image from "next/image";
import { PhotoType } from "../type";
import { StoreContext } from "../store";
import { useContext } from "react";

import Imgix from "react-imgix";
import "lazysizes";
export default function Photo({ src }: { src: string }) {
  // uppte is shown on click
  const [storeData, setStoreData] = useContext(StoreContext);

  const srcString = `https://christojeffrey.imgix.net${src}`;
  const lqip = `${srcString}?w=400&fm=avif&auto=compress&fit=crop&blur=400&px=24&auto=format`;
  function handleClick() {
    // setStoreData({ isShown: !storeData.isShown, photoData: photoData });
  }
  return (
    <>
      <div className="rounded-lg relative overflow-hidden mb-1 md:mb-2 lg:mb-4" onClick={handleClick}>
        {/* <Image src={srcString} alt="image" style={{ width: "100%", height: "auto" }} width={0} height={0} sizes="100vw" loading="lazy" /> */}
        <Imgix
          className="lazyload"
          src={srcString}
          // sizes="100vw"
          attributeConfig={{
            src: "data-src",
            srcSet: "data-srcset",
            sizes: "data-sizes",
          }}
          htmlAttributes={{
            src: lqip,
            width: 400,
            height: 250,
          }}
          imgixParams={{
            auto: "compress",
            fit: "crop",
            fm: "avif",
          }}
        />
      </div>
    </>
  );
}
