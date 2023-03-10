import { FaComments } from 'react-icons/fa';

function SectionIntro() {
  return (
    <div className="section__intro u-s-m-b-46">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section__text-wrap">
              <h1 className="section__heading u-c-secondary u-s-m-b-12">
                LATEST FROM BLOG
              </h1>
              <span className="section__span u-c-silver">
                START YOU DAY WITH FRESH AND LATEST NEWS
              </span>
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
          {[...Array(3).keys()].map((item) => (
            <div className="col-lg-4 col-md-6 u-s-m-b-30" key={item}>
              <div className="bp-mini bp-mini--img u-h-100">
                <div className="bp-mini__thumbnail">
                  {/*====== Image Code ======*/}
                  <a
                    className="aspect aspect--bg-grey aspect--1366-768 u-d-block"
                    href="blog-detail.html"
                  >
                    <img
                      className="aspect__img"
                      src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/blog/post-2.33454e236d5f8298c4f5c9c8dc54ffb8.jpg"
                      alt=""
                    />
                  </a>
                  {/*====== End - Image Code ======*/}
                </div>
                <div className="bp-mini__content">
                  <div className="bp-mini__stat">
                    <span className="bp-mini__stat-wrap">
                      <span className="bp-mini__publish-date">
                        <a>
                          <span>25 February 2018</span>
                        </a>
                      </span>
                    </span>
                    <span className="bp-mini__stat-wrap">
                      <span className="bp-mini__preposition">By</span>
                      <span className="bp-mini__author">
                        <a href="#">Dayle</a>
                      </span>
                    </span>
                    <span className="bp-mini__stat">
                      <span className="bp-mini__comment">
                        <a
                          href="blog-detail.html"
                          className="d-inline-flex align-items-center"
                        >
                          <FaComments className="u-s-m-r-4" />
                          <span>8</span>
                        </a>
                      </span>
                    </span>
                  </div>
                  <div className="bp-mini__category">
                    <a>Learning</a>
                    <a>News</a>
                    <a>Health</a>
                  </div>
                  <span className="bp-mini__h1">
                    <a href="blog-detail.html">
                      Life is an extraordinary Adventure
                    </a>
                  </span>
                  <p className="bp-mini__p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="blog-t-w">
                    <a className="gl-tag btn--e-transparent-hover-brand-b-2">
                      Travel
                    </a>
                    <a className="gl-tag btn--e-transparent-hover-brand-b-2">
                      Culture
                    </a>
                    <a className="gl-tag btn--e-transparent-hover-brand-b-2">
                      Place
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function LatestFromBlog() {
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

export default LatestFromBlog;
