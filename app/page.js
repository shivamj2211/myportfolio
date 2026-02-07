import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Connect from './sections/Connect';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <Hero />
      <Experience />
      <Projects />
      <Connect />
    </main>
  );
}
