import Image from 'next/image';

const GbH_Logo = () => (
    <div className="flex justify-center items-center w-[140px] h-[140px] cursor-pointer">
        <Image
            src="/assets/GbH_Logo.jpg"
            alt="GbH Logo"
            width={140} // adjust as needed
            height={140} // adjust as needed
            className="object-contain rounded-full"
        />
    </div>
);

export default GbH_Logo;
