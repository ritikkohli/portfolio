export default function Navbar() {
    return (
      <div className="h-12 fixed w-screen flex px-10 justify-between items-center">
        <a href="/" className="text-white transition duration-200 active:scale-75"><i className="ri-code-box-line text-2xl"></i></a>
        <button className="font-semibold text-white p-1 transition duration-200 rounded-md bg-black active:scale-90"><a href="#">Contact me</a></button>
      </div>    
    );
  }  