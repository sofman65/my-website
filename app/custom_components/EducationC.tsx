import Image from 'next/image';

const Education = () => (
  <div className="mt-12">
    <h3 className="text-3xl font-bold mb-4">Education</h3>
    <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
        <Image
          src="/assets/UTH-logo-text-english.png"
          alt="UTH Logo"
          width={96} // adjust as needed
          height={96} // adjust as needed
          className="w-24 h-24 md:w-24 md:h-auto"
        />
      </div>
      <div className="flex-1">
        <p className="text-lg md:text-xl">
          5-year Diploma (Integrated M.Sc.) in Electrical and Computer Engineering, <b>GPA: 7.63/10</b>
        </p>
      </div>
    </div>
  </div>
);

export default Education;
