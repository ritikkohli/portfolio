import SocialLink from "./utils/socialLink";

export default function Sidebar() {
    return (
      <div className="w-1/5 h-screen fixed mt-12 px-10 flex flex-col items-start gap-64 pt-10">
        <div className="flex flex-col gap-4">
          <SocialLink name="Github" link="https://github.com/ritikkohli" icon="ri-github-line text-2xl"/>
          <SocialLink name="Linkedin" link="https://www.linkedin.com/in/ritikkohli73" icon="ri-linkedin-line text-2xl"/>
          <SocialLink name="Twitter" link="https://twitter.com/ritikkohli73" icon="ri-twitter-x-line text-2xl"/>
          <SocialLink name="Mail" link="mailto:ritikkohli73@gmail.com" icon="ri-mail-line text-2xl"/>
        </div>
  

        <div>
          {/* <SocialLink name="All projects" link="#" icon="ri-github-line text-2xl"/> */}
          <SocialLink name="Resume" link="/files/resume.pdf" icon="ri-download-line text-2xl"/>
        </div>
      </div>    
    );
  }
  