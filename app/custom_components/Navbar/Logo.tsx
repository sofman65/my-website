import Link from 'next/link';
import Image from 'next/image';
export function Logo() {
  return (
    <Link href="/">
      <h2 className="text-2xl font-bold bg-gradient-to-br from-indigo-400 via-blue-500 to-teal-400 text-transparent bg-clip-text">
        <Image src={'/assets/PRIMARY LOGO.png'} alt="sofianos-hero" width={150} height={50} />
      </h2>
    </Link>
  );
}