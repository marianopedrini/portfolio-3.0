import Link from 'next/link';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <>
      <header className="container-xl !pt-14 fixed right-0 z-50" id="header">
        <div>
          <nav className="hidden md:flex justify-center lg:justify-end">
            <ul className="flex gap-x-10">
              <li className="text-xl">
                <Link href="/">about</Link>
              </li>
              <li className="text-xl">
                <Link href="/">work</Link>
              </li>
              <li className="text-xl">
                <Link href="/">contact</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Nav */}
          {/* <nav className="block md:hidden">
            <ul className="flex gap-x-10">
              <li className="text-xl">
                <Link href="/">about</Link>
              </li>
              <li className="text-xl">
                <Link href="/">work</Link>
              </li>
              <li className="text-xl">
                <Link href="/">contact</Link>
              </li>
            </ul>
          </nav> */}
          <MobileNav />
        </div>
      </header>
    </>
  );
};
export default Header;
