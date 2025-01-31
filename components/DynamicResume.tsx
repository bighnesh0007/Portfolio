import { useState } from "react"
import { Button } from "@/components/ui/button"

type WorkExperience = {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
};

type Education = {
  degree: string;
  school: string;
  year: string;
};

type Section = {
  title: string;
  content: (WorkExperience | Education | string)[];
};

const resumeSections: Section[] = [
  {
    title: "Work Experience",
    content: [
      {
        role: "Senior Web Developer",
        company: "Tech Solutions Inc.",
        period: "2020 - Present",
        responsibilities: [
          "Led a team of 5 developers on various client projects",
          "Implemented CI/CD pipelines, improving deployment efficiency by 40%",
          "Mentored junior developers and conducted code reviews",
        ],
      },
      {
        role: "Web Developer",
        company: "Digital Creations",
        period: "2017 - 2020",
        responsibilities: [
          "Developed responsive websites for clients across various industries",
          "Optimized website performance, improving load times by 30%",
          "Collaborated with designers to implement pixel-perfect designs",
        ],
      },
    ],
  },
  {
    title: "Education",
    content: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Tech University",
        year: "2013 - 2017",
      },
    ],
  },
  {
    title: "Skills",
    content: ["JavaScript (React, Node.js)", "TypeScript", "HTML5 & CSS3", "Python", "SQL", "Git", "AWS"],
  },
]

export default function DynamicResume() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center space-x-4 mb-8">
        {resumeSections.map((section, index) => (
          <Button
            key={section.title}
            onClick={() => setActiveSection(index)}
            variant={activeSection === index ? "default" : "outline"}
          >
            {section.title}
          </Button>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4">{resumeSections[activeSection].title}</h3>
        {Array.isArray(resumeSections[activeSection].content) ? (
          <ul className="list-disc list-inside space-y-4">
            {resumeSections[activeSection].content.map((item, index) => (
              <li key={index}>
                {typeof item === "string" ? (
                  item
                ) : (
                  <div>
                    <h4 className="font-semibold">
                      {"role" in item ? item.role : item.degree}
                    </h4>
                    <p>
                      {"company" in item ? item.company : item.school}
                    </p>
                    <p className="text-sm text-gray-600">
                      {"period" in item ? item.period : item.year}
                    </p>
                    {"responsibilities" in item && (
                      <ul className="list-disc list-inside ml-4 mt-2">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>{resumeSections[activeSection].content}</p>
        )}
      </div>
    </div>
  )
}

