import ProjectCard from "./cards/projectCard";

export default function Work() {
    return (
      <div className="h-screen w-full">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold px-4 w-min bg-white mt-4 rounded-md">WORK</h1>
        </div>
        <div className="flex">
          <ProjectCard
            title="TodoApp"
            stacksUsed="NodeJS, NextJS, ReactJS, React-toastify, Tailwind CSS" 
            img="/images/todo.png"
            src="https://my-react-henna.vercel.app/"
          />
          <ProjectCard 
            title="Blog website" 
            stacksUsed="NodeJS, Express, ReactJS, Bootstrap" 
            img="/images/blog.png"
            src="https://github.com/ritikkohli/blogManagement"
          />
          <ProjectCard 
            title="QR generator" 
            stacksUsed="NodeJS, ReactJS, axios"
            img="/images/qr.webp"
            src="https://qr-code-ritik.netlify.app/"
          />
          <ProjectCard 
            title="Pinterest clone" 
            stacksUsed="NodeJS, ReactJS, axios"
            img="/images/pinterest.jpeg"
            src="https://github.com/ritikkohli/pinterest-clone"
          />
          </div> 
      </div>    
    );
}