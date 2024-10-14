import Link from 'next/link';

const navItems = [
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/AboutMe', label: 'About Me' },
  { href: '/consulting', label: 'Consulting' },
];

export function NavItems() {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}