"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Javascript, React, Framer Motion",
    image: "/images/projects/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/satishydv/Portfolio",
    previewUrl: "https://ai-resume-analyzer-lime-chi.vercel.app/",
  },
  {
    id: 2,
    title: "Zenify",
    description: "Service-based SaaS Application",
    image: "/images/projects/2.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/satishydv/Zenify",
    previewUrl: "https://zenify-lake.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "React, Next.js, Sanity CMS, shadcn/ui",
    image: "/images/projects/3.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/satishydv/Ecommerce-2",
    previewUrl: "https://ecommerce-2-rose.vercel.app/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "React.js, Next.js, Tailwind CSS",
    image: "/images/projects/4.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/satishydv/Yumzy",
    previewUrl: "https://yumzy-nine.vercel.app/",
  },
  {
    id: 5,
    title: "Resume Analyzer",
    description: "AI-based Resume Analyzer",
    image: "/images/projects/5.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/satishydv/ai-resume-analyzer",
    previewUrl: "https://ai-resume-analyzer-lime-chi.vercel.app/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Coming Soon...",
    image: "/images/projects/6.png",
    tag: ["All", "Fullstack"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Fullstack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
