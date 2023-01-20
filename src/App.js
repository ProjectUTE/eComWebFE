import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="config">
      {/* <div className="preloader is-active">
        <div className="preloader__wrap">
          <img className="preloader__img" src="images/preloader.png" alt="" />
        </div>
      </div> */}
      <div id="app">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
