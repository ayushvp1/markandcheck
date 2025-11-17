import Header from './Header';
import OurStory from './OurStory';
import About from './About';
import Services from './Services';
import WhyPAH from './WhyPAH';
import Industries from './Industries';
import Blogs from './Blogs';
import ExpertTeam from './ExpertTeam';
import StatsAndCareers from './StatsAndCareers';
import Clients from './Clients';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <OurStory />
      <Services />
      <Clients />
      <WhyPAH />
      <Industries />
      <About />
      <Blogs />
      <ExpertTeam />
      <StatsAndCareers />
      <Contact />
    </div>
  );
}