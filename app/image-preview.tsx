"use client";
import { useState } from "react";
import Image from "next/image";
// create context

import { StoreContext } from "./store";

export default function FullScreenPreview(props: { children: React.ReactNode }) {
  {
    /* prevent children scroll when isShown */
  }
  const [storeData, setStoreData] = useState<any>({ isShown: false });

  const closePreview = () => {
    setStoreData({ isShown: false });
  };
  return (
    <StoreContext.Provider value={[storeData, setStoreData] as any}>
      <div className="relative overflow-hidden">
        {props.children}
        <div className={`fixed top-0 bottom-0 right-0 left-0 ${storeData.isShown ? "visible" : "invisible"}`} onClick={closePreview}>
          {storeData.isShown && (
            <>
              {/* background */}
              <div className="absolute bg-black bg-opacity-50 h-screen w-screen top-0 bottom-0 right-0 left-0 z-[-1]" />
              {/* image */}
              <Image
                src={storeData.photoData.medium.url}
                className="p-4"
                alt="image"
                onClick={(e) => {
                  closePreview();
                }}
                objectFit="contain"
                layout="fill"
              />
            </>
          )}
        </div>
      </div>
    </StoreContext.Provider>
  );
}
