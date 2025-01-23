import { useScroll } from "@/components/ScrollProvider/provider";
import { useEffect } from "react";

function About() {
  return <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.

  Currently, Im a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
  
  In the past, Ive had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.
  
  In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
  K
  o
  r
  o
  k
   
  s
  e
  e
  d
  s
  .</p>
}

function Project() {
  return <p>
    I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.

Currently, Im a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.

In the past, Ive had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.

In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
K
o
r
o
k
 
s
e
e
d
s
.
  </p>
}

const data = [
  {id: "about", comp: <About/>},
  {id: "project", comp: <Project/>}
]

function Details() {
  const {setActiveSection} = useScroll()

  const handleScroll = () => {
      console.log("scroll")

    const data = document.querySelectorAll("section");
    data.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="py-24 details w-full basis-3/6 overflow-y-scroll">
    <div className="flex flex-col text-3xl gap-40">
      {data.map(({id, comp}) => <section key={id} id={id} className="text-3xl"><div>{comp}</div></section>)}
      {/* <section id="about">
    I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.

Currently, Im a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.

In the past, Ive had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.

In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
K
o
r
o
k
 
s
e
e
d
s
.
  </section>
      <section id="project">
    I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.

Currently, Im a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.

In the past, Ive had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.

In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
K
o
r
o
k
 
s
e
e
d
s
.
  </section> */}
    </div>
  </div>;
}

export default Details;
