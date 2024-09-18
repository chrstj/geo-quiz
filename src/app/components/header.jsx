import Link from "next/link";
import { BsFlag } from "react-icons/bs";

function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-10xl mx-auto'>
      <Link href={"/"} className='flex gap-1'>
        <h1>
          <BsFlag />
        </h1>
      </Link>
    </div>
  );
}

export default Header;
