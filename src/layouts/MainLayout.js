import React from 'react';
import PropTypes from 'prop-types';
import TopScroll from '~/components/TopScroll';
import { Header, Footer } from './components';

function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div className="app-content">{children}</div>
      <Footer />
      <TopScroll />
    </React.Fragment>
  );
}

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
