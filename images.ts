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
  {
    src: "/green-book-dana-porter.jpg",
    alt: "green book dana porter",
  },
  {
    src: "/library-aisle.jpg",
    alt: "library aisle",
  },
  {
    src: "/carnival-light.jpg",
    alt: "carnival light",
  },
  {
    src: "/hi-cyn.jpg",
    alt: "hi cyn",
  },
  {
    src: "/studying-in-library.jpg",
    alt: "studying in library",
  },
  {
    src: "/library-book.jpg",
    alt: "library book",
  },
  {
    src: "/books-and-lips.jpg",
    alt: "books and lips",
  },
  {
    src: "/toronto-road.jpg",
    alt: "toronto road",
  },
  {
    src: "/cn-tower.jpg",
    alt: "cn tower",
  },
  {
    src: "/city-lush.jpg",
    alt: "city lush",
  },
  {
    src: "/dark-road.jpg",
    alt: "dark road",
  },
  {
    src: "/feet.jpg",
    alt: "feet",
  },
  {
    src: "/niagara-background.jpg",
    alt: "niagara background",
  },
  {
    src: "/montreal-road.jpg",
    alt: "montreal road",
  },
  {
    src: "/niagara-bridge.jpg",
    alt: "niagara bridge",
  },
  {
    src: "/niagara-road.jpg",
    alt: "niagara road",
  },
  {
    src: "/niagara-to-us.jpg",
    alt: "niagara to us",
  },
  {
    src: "/notredame-left.jpg",
    alt: "notredame left",
  },
  {
    src: "/niagara-traffic.jpg",
    alt: "niagara traffic",
  },
  {
    src: "/park.jpg",
    alt: "park",
  },
  {
    src: "/notredame-right.jpg",
    alt: "notredame right",
  },
  {
    src: "/ferris-wheel.jpg",
    alt: "ferris wheel",
  },
  {
    src: "/montreal-road-2.jpg",
    alt: "montreal road 2",
  },
  {
    src: "/montreal-highway.jpg",
    alt: "montreal-highway",
  },
  {
    src: "/dark-way.jpg",
    alt: "dark way",
  },
  {
    src: "/blurry-face.jpg",
    alt: "blurry face",
  },
  {
    src: "/experimental.jpg",
    alt: "experimental",
  },
  {
    src: "/shoe.jpg",
    alt: "shoe",
  },
  {
    src: "/montreal-metro.jpg",
    alt: "montreal-metro",
  },
  {
    src: "/bagel-train.jpg",
    alt: "bagel train",
  },
  {
    src: "/skatepark.jpg",
    alt: "skatepark",
  },
  {
    src: "/shoes.jpg",
    alt: "shoes",
  },
  {
    src: "/colorful-building.jpg",
    alt: "colorful-building",
  },
  {
    src: "/commute.jpg",
    alt: "commute",
  },
  {
    src: "/gas.jpg",
    alt: "gas",
  },
];

const cdnImages = [
  "https://s6.imgcdn.dev/9jSEv.jpg",
  "https://s6.imgcdn.dev/9jGOg.jpg",
  "https://s6.imgcdn.dev/9jviN.jpg",
  "https://s6.imgcdn.dev/9jxSq.jpg",
  "https://s6.imgcdn.dev/9j2mB.jpg",
  "https://s6.imgcdn.dev/9jOuu.jpg",
  "https://s6.imgcdn.dev/9jZaL.jpg",
  "https://s6.imgcdn.dev/9j9Wa.jpg",
  "https://s6.imgcdn.dev/9jVhw.jpg",
  "https://s6.imgcdn.dev/9jfKt.jpg",
  "https://s6.imgcdn.dev/9jtZT.jpg",
  "https://s6.imgcdn.dev/9jW8D.jpg",
  "https://s6.imgcdn.dev/9jLry.jpg",
  "https://s6.imgcdn.dev/9j3i9.jpg",
  "https://s6.imgcdn.dev/9jmu2.jpg",
  "https://s6.imgcdn.dev/9jbm8.jpg",
  "https://s6.imgcdn.dev/9jq1i.jpg",
  "https://s6.imgcdn.dev/9jFWH.jpg",
  "https://s6.imgcdn.dev/9jgPC.jpg",
  "https://s6.imgcdn.dev/9jXhS.jpg",
  "https://s6.imgcdn.dev/9jEZe.jpg",
  "https://s6.imgcdn.dev/9j880.jpg",
  "https://s6.imgcdn.dev/9jokM.jpg",
  "https://s6.imgcdn.dev/9jprd.jpg",
  "https://s6.imgcdn.dev/9wj1V.jpg",
  "https://s6.imgcdn.dev/9wDql.jpg",
  "https://s6.imgcdn.dev/9wh4h.jpg",
  "https://s6.imgcdn.dev/9wwdK.jpg",
  "https://s6.imgcdn.dev/9wMho.jpg",
  "https://s6.imgcdn.dev/9wcPO.jpg",
  "https://s6.imgcdn.dev/9wu9n.jpg",
  "https://s6.imgcdn.dev/9w48g.jpg",
  "https://s6.imgcdn.dev/9wIkv.jpg",
  "https://s6.imgcdn.dev/9wNvN.jpg",
  "https://s6.imgcdn.dev/9wQqq.jpg",
  "https://s6.imgcdn.dev/9wn0u.jpg",
  "https://s6.imgcdn.dev/9wk4B.jpg",
  "https://s6.imgcdn.dev/9wsdL.jpg",
  "https://s6.imgcdn.dev/9w5ja.jpg",
  "https://s6.imgcdn.dev/9wKTw.jpg",
  "https://s6.imgcdn.dev/9wP9t.jpg",
  "https://s6.imgcdn.dev/9wTJT.jpg",
  "https://s6.imgcdn.dev/9wlnD.jpg",
  "https://s6.imgcdn.dev/9wzv9.jpg",
  "https://s6.imgcdn.dev/9w048.jpg",
  "https://s6.imgcdn.dev/9waFy.jpg",
  "https://s6.imgcdn.dev/9wB3i.jpg",
  "https://s6.imgcdn.dev/9w702.jpg",
  "https://s6.imgcdn.dev/9wSjH.jpg",
  "https://s6.imgcdn.dev/9wrTS.jpg",
  "https://s6.imgcdn.dev/9wvRC.jpg",
  "https://s6.imgcdn.dev/9wxJe.jpg",
  "https://s6.imgcdn.dev/9wAn0.jpg",
  "https://s6.imgcdn.dev/9wOxM.jpg",
  "https://s6.imgcdn.dev/9wZFd.jpg",
  "https://s6.imgcdn.dev/9wV7h.jpg",
  "https://s6.imgcdn.dev/9wRCl.jpg",
  "https://s6.imgcdn.dev/9wf3V.jpg",
  "https://s6.imgcdn.dev/9wWwK.jpg",
  "https://s6.imgcdn.dev/9wdTo.jpg",
  "https://s6.imgcdn.dev/9w3RO.jpg",
];

export default cdnImages;
