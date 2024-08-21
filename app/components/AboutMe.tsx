import Education from './EducationC';
import Experience from './Experience';
import AboutMeSkills from './AboutMeSkills';
import Languages from './Languages';


const AboutMe = () => {

    return (
        <section id="about" className="py-16  text-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
                <div className="flex flex-col md:flex-row items-center">



                    <p className="text-lg leading-relaxed">
                        With a deep-seated passion for Time Deep Learning, I have dedicated my
                        academic and professional career to mastering the intricacies of Artificial Intelligence...
                    </p>
                </div>

                {/* Experience Section */}
                <Experience />

                {/* Education Section */}
                <Education />

                {/* Skills Section */}
                <AboutMeSkills />

                {/* Languages Section */}
                <Languages />


            </div>
        </section>
    );
};

export default AboutMe;
