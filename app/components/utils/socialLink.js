export default function SocialLink(prop) {
    return (
        <a href={prop.link} className="text-white flex items-center gap-2 transition duration-200 hover:-translate-y-1">
            <i className={prop.icon}></i>{prop.name}
        </a>
    );
}
  