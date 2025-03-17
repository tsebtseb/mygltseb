"use client"
import Image from "next/image";
import Link from "next/link";
import GLLogo from '/public/gllogo.png';
import TextGLLogo from '/public/textgllogo.png'; 

import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

interface linkProps{
    name: string,
    href: string
}

const links: linkProps[]=[
    {name: 'Home', href: '/'},
    {name: 'Novel', href: '/novel'},
    {name: 'Comic', href: '/comic'},
    {name: 'Series', href: '/series'}
];

export default function Navbar(){
    const pathname=usePathname();
    return (
        <div className="w-full mx-auto items-center justify-between px-5 sm:px-6 py-3 lg:px-8 flex">
            <div className="flex items-center justify-center">
                <Link href="/" className="w-26 mx-2">
                    <Image src={GLLogo} alt="logo" priority/>
                </Link>
                <Link href="/" className="w-40 ml-2 overflow-hidden">
                    <Image src={TextGLLogo} alt="logo" priority/>
                </Link>
                <ul className="lg:flex gap-x-6 ml-16 hidden justify-between">
                    {links.map((link,index)=>(
                        <div key={index}>
                            {pathname===link.href?(//current path
                                <li>
                                    <Link href={link.href} className="text-white font-semibold underline text-lg">{link.name}</Link>
                                </li>
                            ):(//other path
                                <li>
                                    <Link href={link.href} className="text-gray-300 font-normal text-lg">{link.name}</Link>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-x-8 justify-center">
                <Search className="w-7 h-7 text-gray-300 cursor-pointer hover:text-white" />
            </div>
        </div>
    )
}