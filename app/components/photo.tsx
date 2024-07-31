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
  const lqip = `${srcString}?w=400&fm=avif&auto=compress&fit=crop&blur=200&px=24&auto=format`;
  function handleClick() {
    console.log("show dialog");
    setStoreData({ isShown: true, src: src });
  }
  return (
    <>
      <div className="rounded-lg relative overflow-hidden" onClick={handleClick}>
        {/* <Image src={srcString} alt="image" style={{ width: "100%", height: "auto" }} width={0} height={0} sizes="100vw" loading="lazy" /> */}
        <Imgix
          className="lazyload"
          src={srcString}
          sizes="100vw"
          attributeConfig={{
            src: "data-src",
            srcSet: "data-srcset",
            sizes: "data-sizes",
          }}
          htmlAttributes={{
            src: lqip,
            width: 600,
            height: 400,
            style: { width: "100%", height: "auto" },
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
