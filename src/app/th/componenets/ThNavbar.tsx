"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import GLLogo from "/public/gllogo.png";
import TextGLLogo from "/public/textgllogo.png";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter,usePathname } from "next/navigation";
import { Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";


interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "หน้าแรก", href: "/th" },
  { name: "นิยาย", href: "/th/novel" },
  { name: "คอมมิค", href: "/th/comic" },
  { name: "ซีรี่ส์", href: "/th/series" },
];


export default function ThNavbar() {
  const pathname = usePathname();

  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(
    pathname.startsWith("/th") ? "ไทย" : "อังกฤษ"
  ); //current state of select language

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    const url = new URL(window.location.href); //get full url including query
    let newPath = url.pathname; //extract only path nothing else remove
    if(language === "อังกฤษ"){
      newPath=pathname.replace(/^\/th/, "") || "/";
    }else{
      if(!newPath.startsWith("/th")&&language==="ไทย"){
        newPath=`/th${pathname}`;
      }
    }
    router.push(newPath+url.search || "/"); //update url including query params
  }; //if user select en remove /th from url,if select th-add /th to current url
  return (
    <div className="w-full mx-auto items-center justify-between px-5 sm:px-6 py-3 lg:px-8 flex">
      <div className="flex items-center justify-center sm:mr-auto">
        <Link href="/th" className="w-26 mx-2">
          <Image src={GLLogo} alt="logo" priority />
        </Link>
        <Link href="/th" className="w-40 ml-2 overflow-hidden">
          <Image src={TextGLLogo} alt="logo" priority />
        </Link>
        <ul className="lg:flex gap-x-6 ml-16 hidden justify-between">
          {links.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? ( //current path
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                //other path
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-300 font-normal text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8 justify-center">
        <Search className="w-7 h-7 text-gray-300 cursor-pointer hover:text-white" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="sm:w-7 sm:overflow-hidden lg:w-auto ">
              <Globe />
              <p className="hidden lg:block">{selectedLanguage}</p>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>ภาษา</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={selectedLanguage === "อังกฤษ"}
              onCheckedChange={() => handleLanguageChange("อังกฤษ")}
            >
              อังกฤษ
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedLanguage === "ไทย"}
              onCheckedChange={() => handleLanguageChange("ไทย")}
            >
              ไทย
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
