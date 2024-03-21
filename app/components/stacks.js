import TechCard from "./cards/techCard";

export default function Stacks() {
    return (
      <div className="h-80 w-full flex justify-evenly items-center rounded-lg">
            <TechCard title={"Frontend"} stackArray={['HTML','CSS','Javascript','Tailwind','ReactJS','NextJS']}/>
            <TechCard title={"Backend"} stackArray={['nodeJS','Express']}/>
            <TechCard title={"Database"} stackArray={['MongoDB','mySQL','Redis']}/>
            <TechCard title={"Devops"} stackArray={[]}/>
      </div>    
    );
  }
  