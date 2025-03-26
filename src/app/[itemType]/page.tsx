"use client";
import Navbar from "../components/Navbar";
import { glData, glList } from "@/lib/gldata";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import GLPlayModal from "../components/GLPlayModal";

const categoryColors: { [key: string]: { borderColor: string, textColor: string } } = {
  "romance": { borderColor: "border-pink-500", textColor: "text-pink-500" },
  "romance-drama": { borderColor: "border-[#00cbc3]", textColor: "text-[#00cbc3]" },
  "slice of life": { borderColor: "border-emerald-300", textColor: "text-emerald-300" },
  "fantasy": { borderColor: "border-purple-400", textColor: "text-purple-400" },
  "comedy": { borderColor: "border-yellow-300", textColor: "text-yellow-300" },
  "thriller/mystery": { borderColor: "border-red-500", textColor: "text-red-500" },
  "horror": { borderColor: "border-red-500", textColor: "text-red-500" },
  "action": { borderColor: "border-sky-300", textColor: "text-sky-300" },
};

export default function CategoryTypePage() {
  const pathname = usePathname();
  const [data, setData] = useState<glList[]>([]);
  const [selectedItem, setSelectedItem] = useState<glList | null>(null); 
  const [isOpen, setOpen] = useState(false);
  const [text,setText]=useState("");

  useEffect(() => {
    if (pathname === "/novel") {
      setData(glData.filter((item) => item.type === "novel"));
      setText("Novel");
    } else if (pathname === "/comic") {
      setData(glData.filter((item) => item.type === "comic"));
      setText("Comic");
    } else if (pathname === "/series") {
      setData(glData.filter((item) => item.type === "series"));
      setText("Series");
    } else {
      setData([]);
    }
  }, [pathname]);

  const handleOpenModal = (item: glList) => {
    //console.log("Opening modal for:", item.title); 
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-white my-2 mx-4">{text}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 overflow-y-auto gap-6 mx-auto sm:px-4 lg:px-8">
        {data.map((item) => {
          const categoryStyle = categoryColors[item.category.toLowerCase()] || {
            borderColor: "border-[#00cbc3]",
            textColor: "text-[#00cbc3]",
          };
          return (
            <div key={item.id} className="relative h-60 group" onClick={() => handleOpenModal(item)}>
              <Image
                src={item.imageString}
                alt=""
                width={600}
                height={400}
                className="rounded-sm absolute w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#202124] to-transparent">
                <h3 className="text-white font-bold">{item.title}</h3>
                <button
                  className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}
                >
                  {item.category}
                </button>
              </div>
              <div className="h-60 relative z-10 w-full transform transition duration-500 group-hover:scale-125 opacity-0 group-hover:opacity-100"> 
                              {/* if hover-overlay to overlap image */}
                                <Image src={item.imageString} alt="" width={700} height={700} className="absolute w-full h-full -z-10 rounded-lg object-cover"/>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#202124] to-transparent">
                                    <h3 className="text-white font-bold">{item.title}</h3>
                                <button className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}>{item.category}</button>
                            </div>
                </div>
            </div>
          );
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
    </div>
  );
}
