"use client";
import { useEffect, useRef, useState } from "react";
import { StoreContext } from "./store";
import Imgix from "react-imgix";
import "lazysizes";
import { X } from "lucide-react";
export default function FullScreenPreview(props: { children: React.ReactNode }) {
  const [storeData, setStoreData] = useState<any>({ isShown: false });
  const [srcString, setSrcString] = useState("");
  const [lqip, setLqip] = useState("");

  const closePreview = () => {
    setStoreData({ isShown: false });
  };
  const boundingRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  console.log("testing");
  const [maxWidth, setMaxWidth] = useState(100);
  const [maxHeight, setMaxHeight] = useState(100);
  const [imageClass, setImageClass] = useState("");

  const resize = () => {
    if (!boundingRef.current) {
      console.log("not yet set!");
      return;
    }
    const bounding = boundingRef.current.getBoundingClientRect();
    setMaxWidth(bounding.width);
    setMaxHeight(bounding.height);
    console.log("resized!");
  };
  useEffect(() => {
    // recalculate on resize
    resize();
    console.log("caluclate!");
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  // calculate on ref change
  useEffect(() => {
    console.log("recalculate on ref change");
    resize();
    console.log(storeData);
    // if opened, add lazyload classname
    if (storeData.isShown) {
      setImageClass("lazyload");
      setSrcString(`https://christojeffrey.imgix.net${storeData.src}`);
      setLqip(`https://christojeffrey.imgix.net${storeData.src}?w=400&fm=avif&auto=compress&fit=crop&blur=200&px=24&auto=format`);
    } else {
      setImageClass("");
      setSrcString("");
      setLqip("");
    }
  }, [storeData]);

  return (
    <StoreContext.Provider value={[storeData, setStoreData] as any}>
      <div className="relative overflow-hidden">
        {props.children}
        <>
          <dialog open={storeData.isShown} className="fixed h-[95vh] w-[95vw] top-0 left-0 right-0 bottom-0">
            {/* here's a dialog? */}
            <div className="relative h-full w-full flex items-center justify-center" ref={boundingRef}>
              <button onClick={closePreview} className="absolute top-0 right-0">
                <X />
              </button>
              <div className="overflow-hidden">
                {srcString !== "" && (
                  <Imgix
                    ref={imageRef}
                    // className={`${imageClass}`}
                    src={srcString}
                    sizes="100vw"
                    // attributeConfig={{
                    //   src: "data-src",
                    //   srcSet: "data-srcset",
                    //   sizes: "data-sizes",
                    // }}
                    htmlAttributes={{
                      src: lqip,
                      style: { maxHeight: maxHeight + "px", maxWidth: maxWidth + "px" },
                    }}
                    imgixParams={{
                      auto: "compress",
                      fit: "crop",
                      fm: "avif",
                    }}
                  />
                )}
              </div>
            </div>
          </dialog>
        </>
      </div>
    </StoreContext.Provider>
  );
}
