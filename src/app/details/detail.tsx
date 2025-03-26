"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import { glData } from "@/lib/gldata";
import Image from "next/image";

const categoryColors: {
  [key: string]: { borderColor: string; textColor: string };
} = {
  "romance": { borderColor: "border-pink-500", textColor: "text-pink-500" },
  "romance-drama": {
    borderColor: "border-[#00cbc3]",
    textColor: "text-[#00cbc3]",
  },
  "slice of life": {
    borderColor: "border-emerald-300",
    textColor: "text-emerald-300",
  },
  "fantasy": { borderColor: "border-purple-400", textColor: "text-purple-400" },
  "comedy": { borderColor: "border-yellow-300", textColor: "text-yellow-300" },
  "thriller/mystery": {
    borderColor: "border-red-500",
    textColor: "text-red-500",
  },
  "horror": { borderColor: "border-red-500", textColor: "text-red-500" },
  "action": { borderColor: "border-sky-300", textColor: "text-sky-300" },
};

export default function Details() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const title = searchParams.get("title");
  //For path parameters (e.g., /details/The-Secret-of-Us): Use [title].tsx.
  //For query parameters (e.g., /details?title=The+Secret+of+Us): Use a static file (page.tsx) and access the parameters using useSearchParams.

  // console.log("Title from URL:", title);
  const item = glData.find((e) => e.id === id) || glData.find((e) => e.title === title); //find match id then find match title
  if (!item)
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h1 className="text-6xl text-white">No matching item found.</h1>
      </div>
    );

  const categoryStyle = categoryColors[item.category.toLowerCase()] || {
    borderColor: "border-[#00cbc3]",
    textColor: "text-[#00cbc3]",
  };

  return (
    <div>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-auto">
        <div className="flex-col p-5 lg:p-0 mt-2">
          <h1 className="text-3xl font-bold text-white">{item.title}</h1>
          <div className="flex w-full flex-row justify-between">
            <div className="flex gap-x-2 items-center my-2">
              <p className="text-white">{item.type}</p>
              <p className="border py-0.5 px-1 border-gray-200 rounded text-white">{item.status}</p>
              <p className="text-gray-400">episodes: {item.noOfEpisode}</p>
            </div>
            <p className="my-2 text-gray-300">{item.creator}</p>
          </div>
          <div className="flex-col gap-x-2 items-start">
            <button
              className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-md px-3 my-4`}
            >
              {item.category}
            </button>
          </div>
          <div className="flex w-full  items-center justify-center my-4">
          <div className="relative max-w-[600px] max-h-[500px] overflow-hidden">
          <Image
              src={item.imageString}
              alt=""
              width={600}
              height={350}
              className="object-cover object-center"
            />
          </div>
          </div>
          <div className=" text-gray-300 whitespace-pre-line">
            <h2 className="text-white my-4 font-bold text-2xl">Overview</h2>
            {item.overview.split("\n").map((line, index) => {
              if (line.includes("{{video:")) {
                const videoUrl = line.match(/{{video:(.*?)}}/)?.[1]; // Extract URL
                return videoUrl ? (
                  <div key={index} className="flex justify-center w-full">
                    <div className="w-full max-w-3xl">
                      <iframe
                        className="w-full aspect-video rounded-lg shadow-md my-1"
                        key={index}
                        width="700"
                        height="450"
                        src={videoUrl}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : null;
              }
              return (
                <p key={index} className="whitespace-pre-line">
                  {line.split("\t").map((part, i) => (
                    <span key={i}>
                      {i > 0 && <span className="inline-block w-8"></span>}
                      {part}
                    </span>
                  ))}
                </p>
              );
            })}
          </div>

          <div className="flex-col w-full text-gray-300 whitespace-pre-line">
          <h2 className="text-white my-4 font-bold text-2xl">Review & Opinions (Spoiler!)</h2>
          {item.opinion.split("\n").map((line, index) => {
              if (line.includes("{{video:")) {
                const videoUrl = line.match(/{{video:(.*?)}}/)?.[1]; 
                return videoUrl ? (
                  <div key={index} className="flex justify-center w-full">
                    <div className="w-full max-w-3xl">
                      <iframe
                        className="w-full aspect-video rounded-lg shadow-md my-1"
                        key={index}
                        width="700"
                        height="450"
                        src={videoUrl}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : null;
              }
              return (
                <p key={index} className="whitespace-pre-line">
                  {line.split("\t").map((part, i) => (
                    <span key={i}>
                      {i > 0 && <span className="inline-block w-8"></span>}
                      {part}
                    </span>
                  ))}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
