export default function TechCard(prop) {
    return (
        <div className="h-72 w-44 bg-white/30 rounded-lg p-4 backdrop-blur-sm">
        <h1 className="text-lg font-semibold">{prop.title}</h1>
        {
            prop.stackArray.map((item)=>(
                <h1 className="bg-white text-black font-semibold w-fit px-2 m-2 rounded-md">{item}</h1>
            ))
        }
    </div>
    );
  }
  