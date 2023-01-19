function SectionIntro() {
  return (
    <div className="section__intro u-s-m-b-46">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section__text-wrap">
              <h1 className="section__heading u-c-secondary u-s-m-b-12">
                CLIENTS FEEDBACK
              </h1>
              <span className="section__span u-c-silver">
                WHAT OUR CLIENTS SAY
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
        {/*====== Testimonial Slider ======*/}
        <div className="slider-fouc">
          <div className="owl-carousel" id="testimonial-slider">
            <div className="testimonial">
              <div className="testimonial__img-wrap">
                <img
                  className="testimonial__img"
                  src="images/about/test-1.jpg"
                  alt=""
                />
              </div>
              <div className="testimonial__content-wrap">
                <span className="testimonial__double-quote">
                  <i className="fas fa-quote-right" />
                </span>
                <blockquote className="testimonial__block-quote">
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
                  </p>
                </blockquote>
                <span className="testimonial__author">
                  John D. / DVNTR Inc.
                </span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__img-wrap">
                <img
                  className="testimonial__img"
                  src="images/about/test-2.jpg"
                  alt=""
                />
              </div>
              <div className="testimonial__content-wrap">
                <span className="testimonial__double-quote">
                  <i className="fas fa-quote-right" />
                </span>
                <blockquote className="testimonial__block-quote">
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
                  </p>
                </blockquote>
                <span className="testimonial__author">
                  John D. / DVNTR Inc.
                </span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__img-wrap">
                <img
                  className="testimonial__img"
                  src="images/about/test-3.jpg"
                  alt=""
                />
              </div>
              <div className="testimonial__content-wrap">
                <span className="testimonial__double-quote">
                  <i className="fas fa-quote-right" />
                </span>
                <blockquote className="testimonial__block-quote">
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
                  </p>
                </blockquote>
                <span className="testimonial__author">
                  John D. / DVNTR Inc.
                </span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__img-wrap">
                <img
                  className="testimonial__img"
                  src="images/about/test-4.jpg"
                  alt=""
                />
              </div>
              <div className="testimonial__content-wrap">
                <span className="testimonial__double-quote">
                  <i className="fas fa-quote-right" />
                </span>
                <blockquote className="testimonial__block-quote">
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean."
                  </p>
                </blockquote>
                <span className="testimonial__author">
                  John D. / DVNTR Inc.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*====== End - Testimonial Slider ======*/}
      </div>
    </div>
  );
}

function ClientFeedback() {
  return (
    <div className="u-s-p-b-90 u-s-m-b-30">
      {/*====== Section Intro ======*/}
      <SectionIntro />
      {/*====== End - Section Intro ======*/}
      {/*====== Section Content ======*/}
      <SectionContent />
      {/*====== End - Section Content ======*/}
    </div>
  );
}

export default ClientFeedback;
