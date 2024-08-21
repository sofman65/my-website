import GetStarted from "./GBHLogo";
import styles from "../styles/styles";
import SocialMediaLinks from "./SocialMediaLinks";
import GbH_Logo from "./GBHLogo";

const Hero = () => {

    const pink_gradiant = 'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]'
    const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]'
    const blue_gradiant = 'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]'
    const bg_highlight_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900'
    const text_gradient = ' bg-gradient-to-br from-indigo-400 via-blue-500 to-teal-400 text-transparent bg-clip-text'

    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className={`flex flex-row items-center py-[6px] px-4  rounded-[10px] mb-2`}>
                    <div className="w-4 h-4 bg-white rounded-full animate-scale-pulse" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white ">Welcome!</span>

                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Sofianos <br className="sm:block hidden" />{" "}
                        <span className={`${text_gradient}`}>Lampropoulos</span>{" "}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GbH_Logo />
                    </div>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Full Stack Developer & <span className={`${text_gradient}`}>AI</span>{" "}Specialist
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    I am a versatile Full Stack Engineer with a strong foundation in AI/ML. Check out my latest projects in Machine Learning, Data Science, and Full Stack Development.
                </p>
            </div>
            <div className="relative flex-1 flex flex-col items-center justify-center md:my-0 my-10">
                <img
                    src={'/sofianos-hero.png'}
                    alt="sofianos-hero"
                    className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain rounded-md"
                />

            </div>


            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GbH_Logo />
            </div>
        </section>
    );
};

export default Hero;
