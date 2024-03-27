"use client";
import Image from "next/image";
import { PhotoType } from "../type";
import { StoreContext } from "../store";
import { useContext } from "react";
export default function Photo({ photoData, blurData }: { photoData: PhotoType; blurData: any }) {
  // uppte is shown on click

  const [storeData, setStoreData] = useContext(StoreContext);

  function handleClick() {
    console.log("clicked");
    setStoreData({ isShown: !storeData.isShown, photoData: photoData, blurData: blurData });
  }
  return (
    <>
      <div className="rounded-lg relative overflow-hidden mb-1 md:mb-2 lg:mb-4" onClick={handleClick}>
        <div className="absolute inset-0 transform scale-150 filter blur-2xl z-[-1]" style={blurData?.css} />
        <Image src={photoData.medium.url} alt="image" style={{ width: "100%", height: "auto" }} width={0} height={0} sizes="100vw" className="rounded-lg" priority />
      </div>
    </>
  );
}
