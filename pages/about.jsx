import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">Hi, it´s Elena!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
