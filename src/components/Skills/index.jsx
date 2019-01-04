import React from "react";
import SkillCategory from "./SkillCategory";

const Skills = () => (
  <div>
    <SkillCategory
      SkillHeadline="Development"
      skillSet={[
        "HTML5",
        "CSS3",
        "SASS",
        "Bouron",
        "Skeleton",
        "Bootstrap",
        "Foundation",
        "Javascript",
        "Gulp",
        "Grunt",
        "jQuery",
        "Node.js",
        "Modernizr",
        "PHP",
        "Wordpress",
        "Drupal",
        "Python",
        "Django",
        "SQL",
        "Git"
      ]}
    />
    <SkillCategory
      SkillHeadline="Tools"
      skillSet={[
        "Vim",
        "Sublime Text",
        "MAMP/lamp",
        "Adobe Suite",
        "Sketch",
        "SVG",
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Edge Animate",
        "Dreamweaver",
        "Lightroom",
        "Flash",
        "Fireworks",
        "After Effects"
      ]}
    />
    <SkillCategory
      SkillHeadline="Achievments"
      skillSet={["Paul Harris Fellow", "Spot Award - 2017"]}
    />
  </div>
);

export default Skills;
