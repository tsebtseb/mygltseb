"use client"
import { thglData } from "../lib/thgldata";
import Image from "next/image"
import { useState } from "react";
import GLPlayModal from "@/app/components/GLPlayModal";
const categoryColors: { [key: string]: { borderColor: string, textColor: string } } = {
  "โรแมนติก": { borderColor: "border-pink-500", textColor: "text-pink-500" },
  "โรแมนติกดราม่า": { borderColor: "border-[#00cbc3]", textColor: "text-[#00cbc3]" },
  "ชีวิตประจำวัน": { borderColor: "border-emerald-300", textColor: "text-emerald-300" },
  "แฟนตาซี": { borderColor: "border-purple-400", textColor: "text-purple-400" },
  "ตลก": { borderColor: "border-yellow-300", textColor: "text-yellow-300" },
  "ระทึกขวัญ/สืบสวน": { borderColor: "border-red-500", textColor: "text-red-500" },
  "สยองขวัญ": { borderColor: "border-red-500", textColor: "text-red-500" },
  "แอ็กชัน": { borderColor: "border-sky-300", textColor: "text-sky-300" },
};

interface thGLDataType {
  id: number;
  title: string;
  type: "นิยาย" | "ซีรี่ส์" | "คอมมิค";
  creator: string;
  category: string;
  status:  "จบแล้ว" | "ยังไม่จบ";
  noOfEpisode: number;
  overview: string;
  opinion: string;
  imageString: string;
}

export default function GlListAdd(){

  const [selectedItem, setSelectedItem] = useState<thGLDataType | null>(null); //keep select item
  const [isOpen, setOpen] = useState(false);

  const handleOpenModal = (item: thGLDataType) => {
    console.log("Opening modal for:", item.title); // Debugging
    setSelectedItem(item);
    setOpen(true);
  };
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
          {thglData.map((item)=>{
            const categoryStyle = categoryColors[item.category.toLowerCase()] || { borderColor: "border-[#00cbc3]", textColor: "text-[#00cbc3]" };
            return(
              <div key={item.id} className="relative h-50 group" onClick={() => handleOpenModal(item)}>
              <Image src={item.imageString} alt="" width={600} height={400} className="rounded-sm absolute w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#202124] to-transparent">
                <h3 className="text-white font-bold">{item.title}</h3>
                <button className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}>{item.category}</button>
              </div>
              <div className="h-60 relative z-10 w-full transform transition duration-500 group-hover:scale-125 opacity-0 group-hover:opacity-100"> 
                {/* if hover-overlay to overlap image */}
                  <Image src={item.imageString} alt="" width={800} height={800} className="absolute w-full h-full -z-10 rounded-lg object-cover"/>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#202124] to-transparent">
                      <h3 className="text-white font-bold">{item.title}</h3>
                  <button className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}>{item.category}</button>
              </div>
                  
              </div>
            </div>
            )
          })}

        {selectedItem ? (
        <GLPlayModal
          id={selectedItem.id}
          title={selectedItem.title}
          type={selectedItem.type}
          creator={selectedItem.creator}
          category={selectedItem.category}
          status={selectedItem.status}
          noOfEpisode={selectedItem.noOfEpisode}
          overview={selectedItem.overview}
          state={isOpen}
          changeState={setOpen}
        />
      ) : null}
        </div>
    )
}