import { MainLayout } from '~/layouts';
import LatestFromBlog from './sections/LatestFromBlog';
import PrimarySlider from './sections/PrimarySlider';
import Service from './sections/Service';
import TopTrending from './sections/TopTrending';
import ClientFeedback from './sections/ClientFeedback';
import TopScroll from '~/components/TopScroll';

function Home() {
  return (
    <>
      <MainLayout>
        {/* Section 1 */}
        <PrimarySlider />
        {/* Section 3 */}
        <TopTrending />
        {/* {Secstion 9} */}
        <Service />
        {/* Section 10 */}
        <LatestFromBlog />
        {/* Section 11 */}
        <ClientFeedback />
      </MainLayout>
      <TopScroll />
    </>
  );
}

export default Home;
