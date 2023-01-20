import { useEffect, useRef } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';

function TopScroll() {
  const topScrollElm = useRef();

  useEffect(() => {
    function handleTopScroll() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        topScrollElm.current.classList.add('visible');
      } else {
        topScrollElm.current.classList.remove('visible');
      }
    }
    window.addEventListener('scroll', handleTopScroll);
    return () => window.removeEventListener('scroll', handleTopScroll);
  }, []);

  function handleBackTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div id="topScroll" ref={topScrollElm} onClick={handleBackTop}>
      <FaLongArrowAltUp />
    </div>
  );
}

export default TopScroll;
