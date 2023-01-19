import React from 'react';
import {
  Information,
  company,
  contactUs,
  socials,
  payments,
  newsletter,
} from './footerData';

function Footer() {
  return (
    <footer>
      <div className="outer-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="outer-footer__content u-s-m-b-40">
                <span className="outer-footer__content-title">Contact Us</span>
                {contactUs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="outer-footer__text-wrap d-flex align-items-center gap-1">
                      <Icon />
                      <span>{item.value}</span>
                    </div>
                  );
                })}
                <div className="outer-footer__social">
                  <ul>
                    {socials.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li>
                          <a className="s-fb--color-hover" hrefLang="#">
                            <Icon />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="outer-footer__content u-s-m-b-40">
                    <span className="outer-footer__content-title">
                      Information
                    </span>
                    <div className="outer-footer__list-wrap">
                      <ul>
                        {Information.map((item) => (
                          <li>
                            <a hrefLang="">{item.value}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="outer-footer__content u-s-m-b-40">
                    <div className="outer-footer__list-wrap">
                      <span className="outer-footer__content-title">
                        Our Company
                      </span>
                      <ul>
                        {company.map((item) => (
                          <li>
                            <a hrefLang="">{item.value}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="outer-footer__content">
                <span className="outer-footer__content-title">
                  Join our Newsletter
                </span>
                <form className="newsletter">
                  <div className="u-s-m-b-15">
                    {newsletter.map((item) => (
                      <div className="radio-box newsletter__radio">
                        <input type="radio" id={item.id} name="gender" />
                        <div className="radio-box__state radio-box__state--primary">
                          <label className="radio-box__label" htmlFor={item.id}>
                            {item.value}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="newsletter__group">
                    <label htmlFor="newsletter" />
                    <input
                      className="input-text input-text--only-white"
                      type="text"
                      id="newsletter"
                      placeholder="Enter your Email"
                    />
                    <button
                      className="btn btn--e-brand newsletter__btn"
                      type="submit"
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                  <span className="newsletter__text">
                    Subscribe to the mailing list to receive updates on
                    promotions, new arrivals, discount and coupons.
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="lower-footer__content">
                <div className="lower-footer__copyright">
                  <span>Copyright © 2018</span>
                  <a hrefLang="index.html">Reshop</a>
                  <span>All Right Reserved</span>
                </div>
                <div className="lower-footer__payment">
                  <ul>
                    {payments.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li>
                          <Icon />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
