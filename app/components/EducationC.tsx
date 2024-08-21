import Image from 'next/image';

const Education = () => (
  <div className="mt-12">
    <h3 className="text-3xl font-bold mb-4">Education</h3>
    <div className="flex items-center">
      <Image
        src="/assets/UTH-logo-text-english.png"
        alt="UTH Logo"
        width={96} // adjust as needed
        height={96} // adjust as needed
        className="w-24 h-auto mr-4"
      />
      <p className="text-lg">
        5-year Diploma (Integrated M.Sc.) in Electrical and Computer Engineering, <b>GPA: 7.63/10</b>
      </p>
    </div>
  </div>
);

export default Education;
