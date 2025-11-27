import Header from './Header';
import OurStory from './OurStory';
import Services from './Services';
import WhyPAH from './WhyPAH';
import Industries from './Industries';
import Blogs from './Blogs';
import ExpertTeam from './ExpertTeam';
import StatsAndCareers from './StatsAndCareers';
import Clients from './Clients';
import Contact from './Contact';
import LatestUpdatesPreview from './LatestUpdatesPreview';

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <OurStory />
      <Services />
      {/* <Blogs /> */}
      <LatestUpdatesPreview />

      <Clients />
      <WhyPAH />
      <Industries />
      <ExpertTeam />
      <StatsAndCareers />
      <Contact />
    </div>
  );
}