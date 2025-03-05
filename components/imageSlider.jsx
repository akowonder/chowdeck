"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../assets/img.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";


const images = [img, img1, img2];

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="my-3">
        {images.map((image, index) => (
          <Image 
            key={index}
            src={image}
            alt="no image"
            width={150}
            height={200}
                        
          />
        ))}
      </div>
    </>
  );
}
