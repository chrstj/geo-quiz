import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>Verdens flagg</h1>
      <h3 className='text-2xl font bold mb-4 text-center'>
        Velg en kategori (12 spørsmål)
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 justify-center mx-auto'>
        <Link href='/mix'>
          <img src='/images/mix.jpg' />
        </Link>
        <Link href='/europe'>
          <img src='/images/europe.jpg' />
        </Link>
        <Link href='/africa'>
          <img src='/images/africa.jpg' />
        </Link>
        <Link href='/asia'>
          <img src='/images/asia.jpg' />
        </Link>
        <Link href='/north-america'>
          <img src='/images/north-amerika.jpg' />
        </Link>
        <Link href='/south-america'>
          <img src='/images/south-amerika.jpg' />
        </Link>
        <Link href='/oceania'>
          <img src='/images/oseania.jpg' />
        </Link>
      </div>
    </div>
  );
}
