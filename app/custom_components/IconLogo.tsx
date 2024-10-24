import Link from 'next/link';
import Image from 'next/image';
export function IconLogo() {
  return (
    <Link href="/">
      <h2 className="text-2xl font-bold bg-gradient-to-br from-indigo-400 via-blue-500 to-teal-400 text-transparent bg-clip-text">
        <Image src={'/assets/BRAND LOGO.png'} alt="sofianos-hero" width={400} height={400} />
      </h2>
    </Link>
  );
}