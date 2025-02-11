import { Metadata } from "next";
import HomePageHero from "./(home)/Hero";

export const metadata: Metadata = {
  title: 'Fardin Ahmed | Web Developer & Digital Creator',
  description: 'Welcome to the personal portfolio and blog of Fardin Ahmed, a passionate web developer specializing in WordPress, Next.js, React, and custom web solutions. Explore my projects, insights, and expertise in web development, e-commerce, and digital innovation. Let’s build something amazing together!',
}

const HomePage = () => {
  return (
    <div>
      <HomePageHero />
    </div>
  );
};

export default HomePage;
