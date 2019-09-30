import React from "react";
import SkillCategory from "./SkillCategory";

const Skills = () => (
  <div>
    <SkillCategory
      SkillHeadline="Development"
      skillSet={[
        "Angular 2+",
        "Apache",
        "Bootstrap",
        "Bourbon",
        "CSS3",
        "Django",
        "Drupal",
        "Foundation",
        "Gatsby",
        "Git",
        "Grunt",
        "Gulp",
        "HTML5",
        "JavasSript",
        "jQuery",
        "Modernizr",
        "Node",
        "npm",
        "PHP",
        "Pug/Jade",
        "Python",
        "React",
        "SASS/SCSS",
        "Skeleton",
        "SQL",
        "SVG",
        "TypeScript",
        "Vue",
        "Webpack",
        "Wordpress",
      ]}
    />
    <SkillCategory
      SkillHeadline="Tools"
      skillSet={[
        "Adobe Suite",
        "After Effects",
        "Flash",
        "Framer",
        "Illustrator",
        "InDesign",
        "InVision",
        "Lightroom",
        "MAMP/LAMP",
        "Photoshop",
        "Sketch",
        "Vim",
        "VS Code",
        "XD",
      ]}
    />
    <SkillCategory
      SkillHeadline="Achievments"
      skillSet={[
        "Cisco Security - Green Belt",
        "Cisco Security - White Belt",
        "Paul Harris Fellow",
        "Spot Award - 2017",
      ]}
    />
  </div>
);

export default Skills;
