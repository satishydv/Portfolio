"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2 space-y-4'>
                <li>
                    <a 
                        href="https://coursera.org/share/6585a7ab693fb8dc55913e3c74465af2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                        AWS Cloud Technical Essentials
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a 
                        href="https://coursera.org/share/1342c6c35153e5f33e6f41f8a84dc8e0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                        Microsoft Azure SQL 
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                        </svg>
                    </a>
                </li>
                
            </ul>
        ),
    },
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
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8'>
        <Image src='/images/about-image.png' width={500} height={500} alt='desktop'/>
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
        <div className='mt-8 mb-8'>
            {TAB_DATA.find((t) => t.id === activeTab).content}
        </div>
       </div>
    </div>
   </section>
  )
}

export default AboutSection