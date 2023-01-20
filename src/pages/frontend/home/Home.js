import { MainLayout } from '~/layouts';
import {
  ClientFeedback,
  LatestFromBlog,
  PrimarySlider,
  Service,
  TopTrending,
} from './sections';

function Home() {
  return (
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
  );
}

export default Home;
