import Header from "./components/Header";
import Hero from "./components/main/Hero";
import Profile from "./components/main/Profile";
import Stats from "./components/main/Stats";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen md:max-w-full mx-auto">
      <Header/>
      <main className="flex flex-col w-full">
        <Hero/>
        <Stats/>
        <Profile/>
      </main>
    </div>
  );
}
