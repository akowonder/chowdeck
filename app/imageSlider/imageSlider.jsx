

import img from "../../public/img.jpg"




export default function ImageSlider() {
  return (
    <>
      <img src={img} alt="image not found"/>
    </>
  )
}
/*
export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <img 
        src={Images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        style={{ width: "100%", borderRadius: "8px" }}
      />
    </div>
  );
}
  */
