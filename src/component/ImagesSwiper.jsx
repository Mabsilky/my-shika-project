import React, { useState } from "react";

const ImageSwiper = () => {
  const images = [
    {
      src: "https://saujanahirisan.com.my/site-admin/uploads/cms/block/IMG_9995.JPG",
      alt: "image 1",
      style: { width: "100%", height: 255 }, // Adjusted width
    },
    {
      src: "https://cdn.images.express.co.uk/img/dynamic/25/590x/1181541_1.jpg",
      alt: "image 2",
      style: { width: "100%", height: 255 },
    },
    {
      src: "https://www.trulioo.com/wp-content/uploads/2016/03/Top_10_foreign_exchange_platforms.jpg",
      alt: "image 3",
      style: { width: "100%", height: 255 },
    },
    {
      src: "https://currencymart.net/images/currency-exchange/what-is-the-fee-for-currency-exchange/img-ArgRYRNdJA85jNikls51YzBl.webp",
      alt: "image 4",
      style: { width: "98%", height: 255 },
    },
    {
      src: "https://dr5dymrsxhdzh.cloudfront.net/blog/images/a6cb7b7e0/2021/03/world-currency-exchange-table-graph-picture-id818517624.jpg",
      alt: "image 5",
      style: { width: "100%", height: 250 },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    let nextIndex;
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % images.length;
    } else {
      nextIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setCurrentIndex(nextIndex);
  };

  return (
    <div className="image-swiper">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        style={images[currentIndex].style}
      />
      <div
        style={{
          textAlign: " center",
        }}
      >
        <button className="swipe mx-3 " onClick={() => handleSwipe("<")}>
          Prev
        </button>
        <button className="swipe mx-3 my-2" onClick={() => handleSwipe(">")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSwiper;
