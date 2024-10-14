"use client"

import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { FaRegLightbulb, FaProjectDiagram, FaClipboardList } from "react-icons/fa";
// Removed the import for Meteors as it cannot be found
import { Button } from "@/components/ui/button";
import { Meteors } from '../custom_components/ui/meteors';

const skillLevels = {
  python: 100,
  postgresql: 100,
  node: 100,
  react: 100,
  git: 100,
  tensorflow: 100,
  pytorch: 100,
  pandas: 100,
  numpy: 100,
  matplotlib: 100,
  docker: 100,
};

const experiences = [
  {
    company: "Nexi Greece",
    title: "Application Developer",
    location: "Greece",
    logo: "Nexi.png",
    responsibilities: [
      "Engaged in the design, development, and maintenance of software applications.",
      "Collaborated with cross-functional teams to gather and address software requirements.",
      "Employed agile methodologies for timely delivery and quality code.",
      "Utilized debugging and troubleshooting skills to ensure optimal application performance.",
      "Continuously updated technical knowledge and skills to adapt to emerging technologies.",
      "Participated in code reviews to maintain code quality and ensure consistent design patterns."
    ]
  },
  {
    company: "Oliveex",
    title: "Data Engineer Intern",
    location: "Volos, Thessaly",
    logo: "oliveex.png",
    responsibilities: [
      "Assisted with the design and implementation of database schema.",
      "Conducted exploratory data analysis and descriptive statistics.",
      "Performed feature engineering for enhanced model performance.",
      "Developed machine learning models for time series prediction of sensor label data.",
      "Applied deep learning techniques for outlier detection in sensor time series data using LSTM, LSTM Autoencoder, Isolation Forest, DBSCAN, and Interquantile Range.",
      "Utilized Git for version control and collaboration."
    ]
  }
];

const AboutMePage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen  text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* <Meteors number={20} /> */}

      <section ref={ref} className={`max-w-7xl mx-auto ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="fle  flex-col lg:flex-row items-center justify-between mb-16">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-base font-semibold text-blue-400">ABOUT SPACE SLAM</h2>
            <h1 className="text-3xl lg:text-5xl font-bold mt-2 mb-4">
              Welcome, I'm Sofianos.
            </h1>
            <p className="text-lg text-gray-300">
              At Space Slam, we believe in the power of AI and automation to drive business success. Whether you're an entrepreneur, coder, or tech innovator, this is your space to unlock the full potential of AI. Let us help you <span className="text-blue-400 font-bold">slam through the barriers</span> holding your business back.
            </p>
            <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
              Discover Our Vision
            </Button>
          </div>
          <div className="lg:w-1/2">
            <Image src="/sofianos-hero.png" alt="Sofianos" width={500} height={500} className="rounded-lg shadow-2xl" />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8">Technical Skills</h3>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {Object.entries(skillLevels).map(([skill, level]) => (
              <li key={skill} className="flex flex-col items-center">
                <div className="flex-shrink-0 mb-2">
                  <Image
                    src={`/assets/${skill}.png`}
                    alt={skill}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
          </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8">Soft Skills</h3>
          <div className="space-y-8">
            <div className="flex items-start">
              <FaProjectDiagram className="text-blue-600 w-8 h-8 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-xl">Business Analysis & Project Management</h4>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-blue-500">Requirements Elicitation & Stakeholder Communication:</strong> Expertise in gathering key business requirements and translating them into actionable insights. Skilled in facilitating effective communication between stakeholders and technical teams to align project objectives and deliverables.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaClipboardList className="text-green-600 w-8 h-8 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-xl">Business Requirement Documentation</h4>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-green-500">Documentation:</strong> Proficient in drafting comprehensive business requirement documents (BRDs), ensuring clear and concise articulation of business needs and proposed solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaRegLightbulb className="text-yellow-600 w-8 h-8 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-xl">Kanban & Agile Methodologies</h4>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-yellow-500">Kanban & Agile:</strong> Experienced in Agile and Kanban project management methodologies, utilizing tools like Trello for efficient project tracking, workflow management, and team collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8">Experience</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start mb-12">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <Image
                  src={`/assets/${exp.logo}`}
                  alt={`${exp.company} Logo`}
                  width={64}
                  height={64}
                  className="w-16 h-16 md:w-16 md:h-auto"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold mb-2">{exp.title} at {exp.company} - {exp.location}</h4>
                <ul className="list-disc ml-5 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300">{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8">Education</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Image
                src="/assets/UTH-logo-text-english.png"
                alt="UTH Logo"
                width={96}
                height={96}
                className="w-24 h-24 md:w-24 md:h-auto"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg md:text-xl">
                5-year Diploma (Integrated M.Sc.) in Electrical and Computer Engineering, <b className="text-blue-400">GPA: 7.63/10</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;