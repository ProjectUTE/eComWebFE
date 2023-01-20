import { FaHeadphonesAlt, FaRedo, FaTruck } from 'react-icons/fa';

function Service() {
  return (
    <div className="u-s-p-b-60">
      {/*====== Section Content ======*/}
      <div className="section__content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 u-s-m-b-30">
              <div className="service u-h-100">
                <div className="service__icon">
                  <FaTruck />
                </div>
                <div className="service__info-wrap">
                  <span className="service__info-text-1">Free Shipping</span>
                  <span className="service__info-text-2">
                    Free shipping on all US order or order above $200
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 u-s-m-b-30">
              <div className="service u-h-100">
                <div className="service__icon">
                  <FaRedo />
                </div>
                <div className="service__info-wrap">
                  <span className="service__info-text-1">
                    Shop with Confidence
                  </span>
                  <span className="service__info-text-2">
                    Our Protection covers your purchase from click to delivery
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 u-s-m-b-30">
              <div className="service u-h-100">
                <div className="service__icon">
                  <FaHeadphonesAlt />
                </div>
                <div className="service__info-wrap">
                  <span className="service__info-text-1">24/7 Help Center</span>
                  <span className="service__info-text-2">
                    Round-the-clock assistance for a smooth shopping experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== End - Section Content ======*/}
    </div>
  );
}

export default Service;
