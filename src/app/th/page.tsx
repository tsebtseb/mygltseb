// import GlListAdd from "./components/GlListAdd";
import ThMockVideo from './componenets/ThMockVideo'
import ThNavbar from "./componenets/ThNavbar";
import ThGlListAdd from "./componenets/ThGlListAdd"



export default function Home() {
  return (
    <div>
        <ThNavbar />
        <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="p-5 lg:p-0">
            <ThMockVideo />
            <h1 className="text-4xl font-bold text-white">รวม GL</h1>
            <ThGlListAdd />
          </div>
        </div>
    </div>
  );
}