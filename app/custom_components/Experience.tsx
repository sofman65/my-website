import Image from 'next/image';

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

const Experience = () => (
    <div className="mt-12">
        <h3 className="text-3xl font-bold mb-4">Experience</h3>
        {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start mb-8">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                    <Image
                        src={`/assets/${exp.logo}`}
                        alt={`${exp.company} Logo`}
                        width={64} // adjust as needed
                        height={64} // adjust as needed
                        className="w-16 h-16 md:w-16 md:h-auto"
                    />
                </div>
                <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-semibold">{exp.title} at {exp.company} - {exp.location}</h4>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>
);

export default Experience;
