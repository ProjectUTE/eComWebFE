import { MainLayout } from '~/layouts';

function Blog() {
  return (
    <MainLayout>
      <div className="u-s-p-y-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12">
              {[...Array(4).keys()].map((item) => (
                <div className="bp bp--img u-s-m-b-30" key={item}>
                  <div className="bp__wrap">
                    <div className="bp__thumbnail">
                      {/*====== Image Code ======*/}
                      <a
                        className="aspect aspect--bg-grey aspect--1366-768 u-d-block"
                        href="blog-detail.html"
                      >
                        <img
                          className="aspect__img"
                          src="images/blog/post-2.jpg"
                          alt=""
                        />
                      </a>
                      {/*====== End - Image Code ======*/}
                    </div>
                    <div className="bp__info-wrap">
                      <div className="bp__stat">
                        <span className="bp__stat-wrap">
                          <span className="bp__publish-date">
                            <a href="blog-right-sidebar.html">
                              <span>25 February 2018</span>
                            </a>
                          </span>
                        </span>
                        <span className="bp__stat-wrap">
                          <span className="bp__author">
                            <a href="blog-right-sidebar.html">Dayle</a>
                          </span>
                        </span>
                        <span className="bp__stat-wrap">
                          <span className="bp__comment">
                            <a href="blog-detail.html">
                              <i className="far fa-comments u-s-m-r-4" />
                              <span>8</span>
                            </a>
                          </span>
                        </span>
                        <span className="bp__stat-wrap">
                          <span className="bp__category">
                            <a href="blog-right-sidebar.html">Learning</a>
                            <a href="blog-right-sidebar.html">News</a>
                            <a href="blog-right-sidebar.html">Health</a>
                          </span>
                        </span>
                      </div>
                      <span className="bp__h1">
                        <a href="blog-detail.html">
                          Life is an extraordinary Adventure
                        </a>
                      </span>
                      <span className="bp__h2">A post with the image</span>
                      <div className="blog-t-w">
                        <a
                          className="gl-tag btn--e-transparent-hover-brand-b-2"
                          href="blog-right-sidebar.html"
                        >
                          Travel
                        </a>
                        <a
                          className="gl-tag btn--e-transparent-hover-brand-b-2"
                          href="blog-right-sidebar.html"
                        >
                          Culture
                        </a>
                        <a
                          className="gl-tag btn--e-transparent-hover-brand-b-2"
                          href="blog-right-sidebar.html"
                        >
                          Place
                        </a>
                      </div>
                      <p className="bp__p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
                      </p>
                      <div className="gl-l-r">
                        <div>
                          <span className="bp__read-more">
                            <a href="blog-detail.html">READ MORE</a>
                          </span>
                        </div>
                        <ul className="bp__social-list">
                          <li>
                            <a className="s-fb--color" href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a className="s-tw--color" href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a className="s-insta--color" href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a className="s-wa--color" href="#">
                              <i className="fab fa-whatsapp" />
                            </a>
                          </li>
                          <li>
                            <a className="s-gplus--color" href="#">
                              <i className="fab fa-google-plus-g" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <nav className="post-center-wrap u-s-p-y-60">
                {/*====== Pagination ======*/}
                <ul className="blog-pg">
                  <li className="blog-pg--active">
                    <a href="blog-right-sidebar.html">1</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html">2</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html">3</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html">4</a>
                  </li>
                  <li>
                    <a
                      className="fas fa-angle-right"
                      href="blog-right-sidebar.html"
                    />
                  </li>
                </ul>
                {/*====== End - Pagination ======*/}
              </nav>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="blog-w-master">
                <div className="u-s-m-b-60">
                  <div className="blog-w">
                    <span className="blog-w__h">SEARCH</span>
                    <form className="blog-search-form">
                      <label htmlFor="post-search" />
                      <input
                        className="input-text input-text--primary-style"
                        type="text"
                        id="post-search"
                        placeholder="Search"
                      />
                      <button
                        className="btn btn--icon fas fa-search"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
                <div className="u-s-m-b-60">
                  <div className="blog-w">
                    <span className="blog-w__h">RECENT POSTS</span>
                    <ul className="blog-w__b-l">
                      {[...Array(4).keys()].map((item) => (
                        <li key={item}>
                          <div className="b-l__block">
                            <div className="b-l__date">
                              <span>25</span>
                              <span>July</span>
                              <span>2018</span>
                            </div>
                            <span className="b-l__h">
                              <a href="blog-detail.html">
                                Life is an extraordinary Adventure
                              </a>
                            </span>
                            <span className="b-l__p">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text.
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="u-s-m-b-60">
                  <div className="blog-w">
                    <span className="blog-w__h">RECENT COMMENTS</span>
                    <ul className="blog-w__b-l-2">
                      {[...Array(4).keys()].map((item) => (
                        <li key={item}>
                          <div className="b-l__block">
                            <span className="b-l__text">admin</span>
                            <span className="b-l__text">on</span>
                            <span className="b-l__h-2">
                              <a href="blog-detail.html">
                                Life is all about opportunity
                              </a>
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="blog-w">
                    <span className="blog-w__h">TAGS</span>
                    <div className="blog-t-w">
                      {[...Array(10).keys()].map((item) => (
                        <a
                          key={item}
                          className="gl-tag btn--e-transparent-hover-brand-b-2"
                          href="blog-right-sidebar.html"
                        >
                          Dresses
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Blog;
