import { Button } from "@/components/ui/button";

export default function MockVideo(){
    return (
        <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
            <video poster='/tsou.jpg' autoPlay muted loop
            src="/video/tsouvideo.mp4" className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]" >
            </video>
            <div className="absolute w-[90%] lg:w-[40%] mx-auto mb-2">
                <h1 className="text-white text-4xl md:test-5xl lg:text-6xl font-bold">The Secret of Us</h1>
                <p className="text-white text-lg mt-4 line-clamp-3">A captivating romance drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when the Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P’Mhor.</p>
                <div className="flex gap-x-3 mt-4">
                    <Button className="bg-white text-black px-6 py-5 hover:text-white">See more</Button>
                </div>
            </div>
        </div>
    )
}