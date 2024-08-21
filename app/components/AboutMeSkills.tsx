import Image from 'next/image';
import { FaRegLightbulb, FaProjectDiagram, FaClipboardList } from "react-icons/fa"; // Example icons

const skillLevels = {
    Python: 100,
    Postgresql: 100,
    Node: 100,
    React: 100,
    Git: 100,
    Tensorflow: 100,
    Pytorch: 100,
    Pandas: 100,
    Numpy: 100,
    Matplotlib: 100,
    Docker: 100,
};

const AboutMeSkills = () => (
    <div className="mt-12">
        <h3 className="text-3xl font-bold mb-4">Technical Skills</h3>
        <ul className="grid grid-cols-2 gap-6">
            {Object.entries(skillLevels).map(([skill, level]) => (
                <li key={skill} className="flex items-center">
                    <div className="flex-shrink-0">
                        <Image
                            src={`/assets/${skill}.png`}
                            alt={`${skill.charAt(0).toUpperCase() + skill.slice(1)} Logo`}
                            width={40} // adjust as needed
                            height={40} // adjust as needed
                            className="w-10 h-10 object-contain"
                        />
                    </div>
                    <div className="w-full ml-4">
                        <span className="block font-semibold">{skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
                        <div className="w-full bg-gray-800 h-2 mt-1 rounded">
                            <div
                                className="bg-blue-600 h-full rounded"
                                style={{ width: `${level}%` }}
                            ></div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>

        <div className="mt-12">
            <h3 className="text-3xl font-bold mb-4">Soft Skills</h3>
            <div className="space-y-8">
                <div className="flex items-start">
                    <FaProjectDiagram className="text-blue-600 w-8 h-8 mr-4" />
                    <div>
                        <h4 className="font-semibold text-xl">Business Analysis & Project Management</h4>
                        <p className="text-gray-300 leading-relaxed">
                            <strong className="text-blue-500">Requirements Elicitation & Stakeholder Communication:</strong> Expertise in gathering key business requirements and translating them into actionable insights. Skilled in facilitating effective communication between stakeholders and technical teams to align project objectives and deliverables.
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <FaClipboardList className="text-green-600 w-8 h-8 mr-4" />
                    <div>
                        <h4 className="font-semibold text-xl">Business Requirement Documentation</h4>
                        <p className="text-gray-300 leading-relaxed">
                            <strong className="text-green-500">Documentation:</strong> Proficient in drafting comprehensive business requirement documents (BRDs), ensuring clear and concise articulation of business needs and proposed solutions.
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <FaRegLightbulb className="text-yellow-600 w-8 h-8 mr-4" />
                    <div>
                        <h4 className="font-semibold text-xl">Kanban & Agile Methodologies</h4>
                        <p className="text-gray-300 leading-relaxed">
                            <strong className="text-yellow-500">Kanban & Agile:</strong> Experienced in Agile and Kanban project management methodologies, utilizing tools like Trello for efficient project tracking, workflow management, and team collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutMeSkills;
