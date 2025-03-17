import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import MockVideo from "./components/MockVideo";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="p-5 lg:p-0">
          <MockVideo />
        </div>
      </div>
    </div>
  );
}