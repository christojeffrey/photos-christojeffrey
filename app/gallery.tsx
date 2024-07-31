"use client";
import { Masonry } from "react-plock";
import Photo from "./components/photo";
import { RevealWrapper } from "next-reveal";

export default function Gallery({ photos }: { photos: any[] }) {
  return (
    <Masonry
      items={photos}
      config={{
        columns: [1, 2, 3],
        gap: [24, 12, 6],
        media: [640, 768, 1024],
      }}
      render={(photoData: any, index) => (
        <RevealWrapper key={index} delay={index * 200} className="load-hidden" origin="bottom" distance="20px">
          <Photo src={photoData.attributes.origin_path} />
        </RevealWrapper>
      )}
    />
  );
}
