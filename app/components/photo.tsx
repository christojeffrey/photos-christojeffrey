"use client";
import Image from "next/image";
import { PhotoType } from "../type";
import { StoreContext } from "../store";
import { useContext } from "react";
export default function Photo({ photoData }: { photoData: PhotoType }) {
  // uppte is shown on click
  const [storeData, setStoreData] = useContext(StoreContext);

  function handleClick() {
    setStoreData({ isShown: !storeData.isShown, photoData: photoData });
  }
  return (
    <>
      <div className="rounded-lg relative overflow-hidden mb-1 md:mb-2 lg:mb-4" onClick={handleClick}>
        <Image src={photoData.medium.url} alt="image" style={{ width: "100%", height: "auto" }} width={0} height={0} sizes="100vw" className="rounded-lg" priority placeholder="blur" blurDataURL={photoData.blurBase64} />
      </div>
    </>
  );
}
