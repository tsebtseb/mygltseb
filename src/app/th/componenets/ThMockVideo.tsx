"use client"
import { Button } from "@/components/ui/button";
import { CirclePlay } from 'lucide-react';
import { useState } from "react";
import GLPlayModal from "@/app/components/GLPlayModal";

interface GLDataType {
    id: number;
    title: string;
    type: "นิยาย" | "ซีรี่ส์" | "คอมมิค";
    creator: string;
    category: string;
    status: "จบแล้ว" | "ยังไม่จบ";
    noOfEpisode: number;
    overview: string;
  }

  const MockData: GLDataType={
    id: 1,
    title: "ใจซ่อนรัก",
    type: "ซีรี่ส์",
    creator: "สรัสวดี วงศ์สมเพ็ชร",
    category: "โรแมนติกดราม่า",
    status: "จบแล้ว",
    noOfEpisode: 8,
    overview: "เรื่องราวโรแมนติกดราม่าของหมอฟ้าลดา หมอผิวหนังผู้เพอร์เฟคแต่กลับมีความหลังที่ข่มขื่นกับรักครั้งเก่า เอิน สนิธาดา ฟ้าลดาพยายามสร้างกำแพงปิดบังความรู้สึกของตัวเองไม่ให้หวั่นไหวอีกครั้ง แจ่โชคชะตากลับนำพาให้ทั้งสองมาเจอกันอีกครั้ง พร้อมกับน้องเอินที่กลับมาเป็ยดาวรุ่งสดใสที่พร้อมเอาหัวใจพี่หมอกลับคืนมา.",    
  }
export default function MockVideo(){
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
            <video poster='/allgl/tsou.jpg' autoPlay muted loop
            src="/video/tsouvideo.mp4" className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]" >
            </video>
            <div className="absolute w-[90%] lg:w-[40%] mx-auto mb-2">
                <h1 className="text-white text-4xl md:test-5xl lg:text-6xl font-bold">{MockData.title}</h1>
                <p className="text-white text-lg mt-4 line-clamp-3">{MockData.overview}</p>
                <div className="flex gap-x-3 mt-3">
                    <Button className="bg-white text-black px-6 py-5 hover:text-white" onClick={()=>setOpen(true)}>
                        <CirclePlay />
                         อ่านต่อ
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