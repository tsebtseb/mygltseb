"use client";
import ThNavbar from "../componenets/ThNavbar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { thglData, thglList } from "../lib/thgldata";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import GLPlayModal from "@/app/components/GLPlayModal";
interface thGLDataType {
  id: number;
  title: string;
  type: "นิยาย" | "ซีรี่ส์" | "คอมมิค";
  creator: string;
  category: string;
  status: "จบแล้ว" | "ยังไม่จบ";
  noOfEpisode: number;
  overview: string;
  opinion: string;
  imageString: string;
}
const categoryColors: {
  [key: string]: { borderColor: string; textColor: string };
} = {
  โรแมนติก: { borderColor: "border-pink-500", textColor: "text-pink-500" },
  โรแมนติกดราม่า: {
    borderColor: "border-[#00cbc3]",
    textColor: "text-[#00cbc3]",
  },
  ชีวิตประจำวัน: {
    borderColor: "border-emerald-300",
    textColor: "text-emerald-300",
  },
  แฟนตาซี: { borderColor: "border-purple-400", textColor: "text-purple-400" },
  ตลก: { borderColor: "border-yellow-300", textColor: "text-yellow-300" },
  "ระทึกขวัญ/สืบสวน": {
    borderColor: "border-red-500",
    textColor: "text-red-500",
  },
  สยองขวัญ: { borderColor: "border-red-500", textColor: "text-red-500" },
  แอ็กชัน: { borderColor: "border-sky-300", textColor: "text-sky-300" },
};

export default function Page() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [initialData] = useState<thglList[]>(thglData);
  const [filterdata, setFilterdata] = useState<thglList[]>(thglData);
  const [selectedItem, setSelectedItem] = useState<thGLDataType | null>(null); //keep select item
  const [isOpen, setOpen] = useState(false);

  const handleOpenModal = (item: thGLDataType) => {
    // console.log("Opening modal for:", item.title);
    setSelectedItem(item);
    setOpen(true);
  };

  const searchHandler = useCallback(() => {
    const filteredData = initialData.filter((item) => {
      return item.title.toLowerCase().includes(searchInput.toLowerCase()); //filter base on input include in title
    });
    setFilterdata(filteredData);
  }, [initialData, searchInput]);

  useEffect(() => {
    //Debounce effect =>delay when searching to see whether search run
    const timer = setTimeout(() => {
      searchHandler();
    }, 300);
    return () => {
      clearTimeout(timer); //clean up function
    };
  }, [searchHandler]);

  useEffect(() => {
    console.log("Filter data updated:", filterdata);
  }, [filterdata]);

  return (
    <div>
      <ThNavbar />
      <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="p-5 lg:p-0">
          <div className="relative w-full my-2">
            <Input
              id="searchInput"
              type="string"
              placeholder="ค้นหาจากชื่อเรื่อง..."
              className="w-full bg-[#60646d] border-slate-400 shadow-sm text-white placeholder:text-[#c7d0e1]"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Search className="absolute w-6 h-6 right-7 top-1/2 -translate-y-1/2 text-[#c7d0e1] hover:text-white" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
            {filterdata.length > 0 ? (
              filterdata.map((item) => {
                const categoryStyle = categoryColors[
                  item.category.toLowerCase()
                ] || {
                  borderColor: "border-[#00cbc3]",
                  textColor: "text-[#00cbc3]",
                };
                return (
                  <div
                    key={item.id}
                    className="relative h-50 group"
                    onClick={() => handleOpenModal(item)}
                  >
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
                      <Image
                        src={item.imageString}
                        alt=""
                        width={800}
                        height={800}
                        className="absolute w-full h-full -z-10 rounded-lg object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#202124] to-transparent">
                        <h3 className="text-white font-bold">{item.title}</h3>
                        <button
                          className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}
                        >
                          {item.category}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-full text-center text-white text-lg font-bold mt-6">
                <h1>ไม่พบรายการที่ค้นหา</h1>
              </div>
            )}

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
      </div>
    </div>
  );
}
