import PropTypes from 'prop-types';
import { Header, Footer } from './components';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="app-content">{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
