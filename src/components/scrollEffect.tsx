// import React, { useEffect, useState } from "react";


// function About () {
//   return <div> About</div>
// }

// function Project () {
//   return <div> Project</div>
// }

// const data = [
//   {
//     id: "about",
//     component: About
//   },
//   {
//     id: "project",
//     component: Project
//   }
// ]


// const ScrollEffect = () => {
//   const [activeSection, setActiveSection] = useState("");

//   const handleScroll = () => {
//     const sections = document.querySelectorAll("section");
//     sections.forEach((section) => {
//       const rect = section.getBoundingClientRect();
//       if (rect.top >= 0 && rect.top < window.innerHeight / 3) {
//         setActiveSection(section.id);
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);



//   return (
//     <div>
//       {data.map((id) => (
//         <section
//           key={id}
//           id={id}
//           style={{
//             height: "100vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "24px",
//             border: "1px solid black",
//             color: activeSection === id ? "red" : "black",
//             fontWeight: activeSection === id ? "bold" : "normal",
//           }}
//         >
//           {id.toUpperCase()}
//         </section>
//       ))}
//     </div>
//   );
// };

// export default ScrollEffect;
