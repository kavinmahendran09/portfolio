import React from "react";
import styled from "styled-components";
import {
  SiTypescript,
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* Ensure icons wrap to the next line on smaller screens */
  justify-content: center; /* Center-align icons horizontally */
  align-items: center; /* Center-align icons vertically */
  gap: 40px; /* Space between icons */
  padding: 20px; /* Add padding around the container */
  background-color: transparent; /* Set background to transparent */
`;

const Item = styled.div<{ color: string }>`
  font-size: 2.5rem; /* Icon size */
  color: #ffffff; /* Default white color */
  transition: color 0.3s ease; /* Smooth color transition on hover */

  &:hover {
    color: ${(props) => props.color}; /* Change to respective logo color on hover */
    cursor: pointer; /* Add pointer cursor effect on hover */
  }
`;

const TechStack: React.FC = () => {
  const techIcons = [
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
    { name: "Python", icon: <SiPython />, color: "#3776ab" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "React", icon: <SiReact />, color: "#61dafb" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#68a063" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572b6" },
  ];

  return (
    <Container>
      {techIcons.map((tech, index) => (
        <Item key={index} color={tech.color} title={tech.name}>
          {tech.icon}
        </Item>
      ))}
    </Container>
  );
};

export default TechStack;
