import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Cover from "./components/cover";
import Stacks from "./components/stacks";
import Work from "./components/work";
import 'remixicon/fonts/remixicon.css';

export default function Home() {
  return (
    <>
      <div id="background"></div>
      <Navbar/>
      <Sidebar/>
      <div className="float-right w-4/5 mt-12">  
        <Cover/>
        <Stacks/>
        <Work/>
      </div>
    </>    
  );
}
