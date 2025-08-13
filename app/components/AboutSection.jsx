"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>Mongodb</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Jharkhand Rai University</li>
                <li>Bachelor of computer Applications</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    }
]


const AboutSection = () => {
    const [activeTab, setActiveTab] = useState(TAB_DATA[0].id);
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setActiveTab(id);
        });
    };


  return (
   <section className='text-white' id='about'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center'>
        <Image src='/images/about-image.png' width={300} height={300} alt='desktop'/>
       <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
         <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
        <p>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          {/* Tab section */}
        <div className='flex justify-start mt-8'>
            <TabButton
            selectTab={() => handleTabChange("skills")}
            active={activeTab === "skills"}
            >
                {" "}
                Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={activeTab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={activeTab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
        </div>
        <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === activeTab).content}
        </div>
       </div>
    </div>
   </section>
  )
}

export default AboutSection