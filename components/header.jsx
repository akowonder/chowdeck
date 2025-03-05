import Link from "next/link"
import Image from "next/image"



export default function Header({img, altMessage, link, ...props}) {
    return (
        <div className="flex justify-between mt-2 mx-2 items-center">
            
            <Link href={link}>
                <Image src={img} alt={altMessage} {...props}/> 
            </Link>
            <Link href="/" className="text-xs underline text-green-900">Continue as guest</Link>
        </div>
    )
}