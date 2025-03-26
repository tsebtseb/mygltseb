"use client"
import { Button } from "@/components/ui/button";
import { CirclePlay } from 'lucide-react';
import { useState } from "react";
import GLPlayModal from "./GLPlayModal";

interface GLDataType {
    id: number;
    title: string;
    type: "novel" | "series" | "comic";
    creator: string;
    category: string;
    status: "ongoing" | "finish";
    noOfEpisode: number;
    overview: string;
  }

  const MockData: GLDataType={
    id: 1,
    title: "The Secret of Us",
    type: "series",
    creator: "Saratswadee Wongsomphet",
    category: "romance-drama",
    status: "finish",
    noOfEpisode: 8,
    overview: "A captivating romance drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when the Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P’Mhor.",    
  }
export default function MockVideo(){
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
            <video poster='/allgl/tsou.jpg' autoPlay muted loop
            src="/video/tsouvideo.mp4" className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]" >
            </video>
            <div className="absolute w-[90%] lg:w-[40%] mx-auto mb-6">
                <h1 className="text-white text-4xl md:test-5xl lg:text-6xl font-bold">{MockData.title}</h1>
                <p className="text-white text-lg mt-4 line-clamp-3">{MockData.overview}</p>
                <div className="flex gap-x-3 mt-3">
                    <Button className="bg-white text-black px-6 py-5 hover:text-white" onClick={()=>setOpen(true)}>
                        <CirclePlay />
                         See more
                    </Button>
                </div>
                 <GLPlayModal
                          id={MockData.id}
                          title={MockData.title}
                          type={MockData.type}
                          creator={MockData.creator}
                          category={MockData.category}
                          status={MockData.status}
                          noOfEpisode={MockData.noOfEpisode}
                          overview={MockData.overview}
                          state={isOpen}
                          changeState={setOpen}
                        />
            </div>
        </div>
    )
}