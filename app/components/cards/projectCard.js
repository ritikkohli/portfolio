export default function ProjectCard(prop) {
    return (
        <a href={prop.src} className="projectCard h-56 w-56 bg-white rounded-lg m-4 cursor-pointer">
        <img src={prop.img} className="h-32 w-full object-cover rounded-t-lg"/>
        <div className="p-2">
            <h1 className="text-lg font-semibold mb-1">{prop.title}</h1>
            <p className="text-xs mr-2">{prop.stacksUsed}</p>
        </div>
    </a>
    );
  }
  