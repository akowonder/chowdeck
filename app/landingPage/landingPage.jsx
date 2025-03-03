import Header from "../header/header"
import { logo } from "../chowdeckImg.png"
import SignUp from "../signUp/signUp" //remove this component later
import ImageSlider from "../imageSlider/imageSlider"


export default function LandingPage() {
    
    return (
        <>
            <Header />
            <ImageSlider />
            <div id="get-started-button">
                <button>Get Started</button>
                <p>Already have an account? <a href="">Log in</a></p>
            </div>
            <p>"</p>
            <SignUp />
        </>
    )
}