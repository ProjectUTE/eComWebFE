import {
  FaEnvelope,
  FaHeart,
  FaPlusCircle,
  FaSearchPlus,
  FaStar,
} from 'react-icons/fa';

function SectionIntro() {
  return (
    <div className="section__intro u-s-m-b-16">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section__text-wrap">
              <h1 className="section__heading u-c-secondary u-s-m-b-12">
                TOP TRENDING
              </h1>
              <span className="section__span u-c-silver">CHOOSE CATEGORY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionContent() {
  return (
    <div className="section__content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="filter-category-container">
              <div className="filter__category-wrapper">
                <button
                  className="btn filter__btn filter__btn--style-1 js-checked"
                  type="button"
                  data-filter="*"
                >
                  ALL
                </button>
              </div>
              <div className="filter__category-wrapper">
                <button
                  className="btn filter__btn filter__btn--style-1"
                  type="button"
                  data-filter=".headphone"
                >
                  HEADPHONES
                </button>
              </div>
              <div className="filter__category-wrapper">
                <button
                  className="btn filter__btn filter__btn--style-1"
                  type="button"
                  data-filter=".smartphone"
                >
                  SMARTPHONES
                </button>
              </div>
              <div className="filter__category-wrapper">
                <button
                  className="btn filter__btn filter__btn--style-1"
                  type="button"
                  data-filter=".sportgadget"
                >
                  SPORT GADGETS
                </button>
              </div>
              <div className="filter__category-wrapper">
                <button
                  className="btn filter__btn filter__btn--style-1"
                  type="button"
                  data-filter=".dslr"
                >
                  DSLR
                </button>
              </div>
            </div>
            <div className="filter__grid-wrapper u-s-m-t-30">
              <div className="row">
                {[...Array(9).keys()].map((item) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item headphone"
                      key={item}
                    >
                      <div className="product-o product-o--hover-on product-o--radius">
                        <div className="product-o__wrap">
                          <a
                            className="aspect aspect--bg-grey aspect--square u-d-block"
                            href="product-detail.html"
                          >
                            <img
                              className="aspect__img"
                              src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/product/electronic/product2.ea1932957badfdefe7e4a1e7d50f4ea9.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-o__action-wrap">
                            <ul className="product-o__action-list">
                              <li>
                                <a
                                  data-modal="modal"
                                  data-modal-id="#quick-look"
                                  data-tooltip="tooltip"
                                  data-placement="top"
                                  title="Quick View"
                                >
                                  <FaSearchPlus />
                                </a>
                              </li>
                              <li>
                                <a
                                  data-modal="modal"
                                  data-modal-id="#add-to-cart"
                                  data-tooltip="tooltip"
                                  data-placement="top"
                                  title="Add to Cart"
                                >
                                  <FaPlusCircle />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="signin.html"
                                  data-tooltip="tooltip"
                                  data-placement="top"
                                  title="Add to Wishlist"
                                >
                                  <FaHeart />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="signin.html"
                                  data-tooltip="tooltip"
                                  data-placement="top"
                                  title="Email me When the price drops"
                                >
                                  <FaEnvelope />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <span className="product-o__category">
                          <a href="shop-side-version-2.html">Electronics</a>
                        </span>
                        <span className="product-o__name">
                          <a href="product-detail.html">
                            Red Wireless Headphone
                          </a>
                        </span>
                        <div className="product-o__rating gl-rating-style">
                          {[...Array(5).keys()].map((item) => (
                            <FaStar key={item} />
                          ))}
                          <span className="product-o__review">(23)</span>
                        </div>
                        <span className="product-o__price">
                          $125.00
                          <span className="product-o__discount">$160.00</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="load-more">
              <button className="btn btn--e-brand" type="button">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopTrending() {
  return (
    <div className="u-s-p-b-60">
      {/*====== Section Intro ======*/}
      <SectionIntro />
      {/*====== End - Section Intro ======*/}
      {/*====== Section Content ======*/}
      <SectionContent />
      {/*====== End - Section Content ======*/}
    </div>
  );
}

export default TopTrending;
