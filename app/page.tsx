import Link from "next/link"
import logo from "@/assets/chowdeckImg.png";
import Header from "@/components/header";
import ImageSlider from "@/components/imageSlider"
import Image from "next/image";
import deliveryImage from "@/assets/delivery-logo.jpg"

export default function LandingPage() {
    
    return (
        <div className="w-full max-w-sm mx-auto">
          <Header img={logo} altMessage="chowdeck logo" width={100} height={100} link="/"/>

          <div className="my-10">
            <h2 className="text-center text-2xl">We bring you</h2>  
            <ImageSlider />
            <h2 className="text-center text-2xl">wherever you are</h2>
            
          </div>
          
          <div>
            <Image src={deliveryImage} alt="Delivery parcel"/>
          </div>
            <div >
                <Link href="/signUp"><p className="bg-green-700 py-3 rounded mx-3 text-center text-white text-xs">Get started</p></Link>
                
                <p className="text-center text-xs my-3">Already have an account? <Link href="/logInPage"><span className="underline text-green-900">Log in</span></Link></p>
            </div>
            
            
        </div>
    )
}