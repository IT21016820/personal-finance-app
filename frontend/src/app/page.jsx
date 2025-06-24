import ImgCarousel from '@/components/ImgCarousel/ImgCarousel.jsx';
import OverviewCards from '@/components/OverviewCards/OverviewCards.jsx';
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection.jsx';

export default function Home() {
  return (
    <main>
      {/* <ImgCarousel /> */}
       <WelcomeSection />
      <OverviewCards />
    </main>
  );
}
