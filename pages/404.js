import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <main className="container mx-auto">
        <h1>Oh no, 404!</h1>
        <div className="">
          <p>What should you do now?!</p>
          <p>Don't panic, you just need click the link below</p>
          <Link href={'/blog'}>Ir al blog</Link>
        </div>
      </main>
    </>
  );
}
