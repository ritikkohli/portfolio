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
            img="https://assets.materialup.com/uploads/b517ef76-cee5-4f26-ac38-01f857c7bfd8/preview.png"
            src="https://my-react-henna.vercel.app/"
          />
          <ProjectCard 
            title="Blog website" 
            stacksUsed="NodeJS, Express, ReactJS, Bootstrap" 
            img="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
            src="https://github.com/ritikkohli/blogManagement"
          />
          <ProjectCard 
            title="QR generator" 
            stacksUsed="NodeJS, ReactJS, axios"
            img="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Fma6NCuXVCZRvQvR6684Xg.png"
            src="https://qr-code-ritik.netlify.app/"
          />
          <ProjectCard 
            title="Pinterest clone" 
            stacksUsed="NodeJS, ReactJS, axios"
            img="https://assets-global.website-files.com/64baacfcb337b7364622226f/64fa12c9ab32b2b56e66c3df_pinterest-launch-checklist-2020.jpeg"
            src="https://github.com/ritikkohli/pinterest-clone"
          />
          </div> 
      </div>    
    );
}