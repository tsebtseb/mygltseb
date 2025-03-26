"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter
} from "@/components/ui/dialog";
import { X, BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

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

//Thai version
interface thGLDataType {
  id: number;
  title: string;
  type: "นิยาย" | "ซีรี่ส์" | "คอมมิค";
  creator: string;
  category: string;
  status: "จบแล้ว" | "ยังไม่จบ";
  noOfEpisode: number;
  overview: string;
}

type glcardprops = (GLDataType | thGLDataType) & {
  state: boolean;
  changeState: (newState: boolean) => void;
};

const categoryColors: { [key: string]: { borderColor: string, textColor: string } } = {
  "romance": { borderColor: "border-pink-500", textColor: "text-pink-500" },
  "romance-drama": { borderColor: "border-[#00cbc3]", textColor: "text-[#00cbc3]" },
  "slice of life": { borderColor: "border-emerald-300", textColor: "text-emerald-300" },
  "fantasy": { borderColor: "border-purple-400", textColor: "text-purple-400" },
  "comedy": { borderColor: "border-yellow-300", textColor: "text-yellow-300" },
  "thriller/mystery": { borderColor: "border-red-500", textColor: "text-red-500" },
  "horror": { borderColor: "border-red-500", textColor: "text-red-500" },
  "action": { borderColor: "border-sky-300", textColor: "text-sky-300" },
  "โรแมนติก": { borderColor: "border-pink-500", textColor: "text-pink-500" },
  "โรแมนติกดราม่า": { borderColor: "border-[#00cbc3]", textColor: "text-[#00cbc3]" },
  "ชีวิตประจำวัน": { borderColor: "border-emerald-300", textColor: "text-emerald-300" },
  "แฟนตาซี": { borderColor: "border-purple-400", textColor: "text-purple-400" },
  "ตลก": { borderColor: "border-yellow-300", textColor: "text-yellow-300" },
  "ระทึกขวัญ/สืบสวน": { borderColor: "border-red-500", textColor: "text-red-500" },
  "สยองขวัญ": { borderColor: "border-red-500", textColor: "text-red-500" },
  "แอ็กชัน": { borderColor: "border-sky-300", textColor: "text-sky-300" },
};


export default function GLPlayModal({
  id,
  title,
  type,
  creator,
  category,
  status,
  noOfEpisode,
  overview,
  state,
  changeState,
}: glcardprops) {

  const router = useRouter();
  const pathname = usePathname();
  const handleReadMore = () => {
    if(pathname.startsWith("/th")){
      router.push(`/th/details?id=${id}&title=${encodeURIComponent(title)}`);
    }else{
      router.push(`/details?id=${id}&title=${encodeURIComponent(title)}`);
    }
  }
  const [selectLanButton]=useState(pathname.startsWith("/th")?"อ่านเพิ่ม":"Read More");
  const [selectLanEp]=useState(pathname.startsWith("/th")?"จำนวนตอน:":"episodes:")

  const categoryStyle = categoryColors[category.toLowerCase()] || { borderColor: "border-[#00cbc3]", textColor: "text-[#00cbc3]" };
  return (

    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="border border-gray-300 sm:max-w-[425px] bg-[#36393e] w-full overflow-y-auto max-h-screen flex flex-col">
        <DialogClose className="absolute top-3 right-3 p-2 rounded-full bg-[#36393e] hover:bg-gray-700 z-50">
          <X className="w-4 h-4 text-white" />
        </DialogClose>
        <div className="flex-1 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white mt-4">{title}</DialogTitle>
          <DialogDescription className="flex-col gap-x-2 items-start h-full">
          <button className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}>{category}</button>
          <p className="my-2 text-gray-300">{creator}</p>
          <p className="text-gray-400 my-2">
          {type} | {status} | {selectLanEp} {noOfEpisode}
          </p>
          </DialogDescription>
          <DialogDescription className="text-gray-300">
            {overview.split("\n").map((line, index) => {
              if (line.includes("{{video:")) {
                const videoUrl = line.match(/{{video:(.*?)}}/)?.[1]; // Extract URL
                return videoUrl ? (
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-md my-1"
                    key={index}
                    height="245"
                    src={videoUrl}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : null;
              }
              return (
                <p key={index} className="whitespace-pre-line">
                  {line.split("\t").map((part, i) => (
                    <span key={i}>
                      {i > 0 && <span className="inline-block w-4"></span>}
                      {part}
                    </span>
                  ))}
                </p>
              );
            })}
          </DialogDescription>
        </DialogHeader>
        </div>
        <div className="flex w-full justify-center items-center">
        <DialogFooter className="justify-center">
            <Button type="button" className="hover:text-gray-200 hover:bg-gray-600" onClick={handleReadMore}>
              {selectLanButton}
              <BookOpenText /> 
            </Button>
        </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
