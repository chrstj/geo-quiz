import Link from "next/link";

function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-10xl mx-auto'>
      <Link href={"/"} className='flex gap-1'>
        <h1 className='rounded-lg bg-[#1f2937] text-white p-2'>GEO-QUIZ🌏</h1>
      </Link>
    </div>
  );
}

export default Header;
