function SectionContent() {
  return (
    <div className="section__content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
            <form className="f-cart">
              <div className="row">
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="f-cart__pad-box">
                    <h1 className="gl-h1">ESTIMATE SHIPPING AND TAXES</h1>
                    <span className="gl-text u-s-m-b-30">
                      Enter your destination to get a shipping estimate.
                    </span>
                    <div className="u-s-m-b-30">
                      {/*====== Select Box ======*/}
                      <label className="gl-label" htmlFor="shipping-country">
                        COUNTRY *
                      </label>
                      <select
                        className="select-box select-box--primary-style"
                        id="shipping-country"
                      >
                        <option selected value>
                          Choose Country
                        </option>
                        <option value="uae">United Arab Emirate (UAE)</option>
                        <option value="uk">United Kingdom (UK)</option>
                        <option value="us">United States (US)</option>
                      </select>
                      {/*====== End - Select Box ======*/}
                    </div>
                    <div className="u-s-m-b-30">
                      {/*====== Select Box ======*/}
                      <label className="gl-label" htmlFor="shipping-state">
                        STATE/PROVINCE *
                      </label>
                      <select
                        className="select-box select-box--primary-style"
                        id="shipping-state"
                      >
                        <option selected value>
                          Choose State/Province
                        </option>
                        <option value="al">Alabama</option>
                        <option value="al">Alaska</option>
                        <option value="ny">New York</option>
                      </select>
                      {/*====== End - Select Box ======*/}
                    </div>
                    <div className="u-s-m-b-30">
                      <label className="gl-label" htmlFor="shipping-zip">
                        ZIP/POSTAL CODE *
                      </label>
                      <input
                        className="input-text input-text--primary-style"
                        type="text"
                        id="shipping-zip"
                        placeholder="Zip/Postal Code"
                      />
                    </div>
                    <div className="u-s-m-b-30">
                      <a
                        className="f-cart__ship-link btn--e-transparent-brand-b-2"
                        href="cart.html"
                      >
                        CALCULATE SHIPPING
                      </a>
                    </div>
                    <span className="gl-text">
                      Note: There are some countries where free shipping is
                      available otherwise our flat rate charges or country
                      delivery charges will be apply.
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="f-cart__pad-box">
                    <h1 className="gl-h1">NOTE</h1>
                    <span className="gl-text u-s-m-b-30">
                      Add Special Note About Your Product
                    </span>
                    <div>
                      <label htmlFor="f-cart-note" />
                      <textarea
                        className="text-area text-area--primary-style"
                        id="f-cart-note"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="f-cart__pad-box">
                    <div className="u-s-m-b-30">
                      <table className="f-cart__table">
                        <tbody>
                          <tr>
                            <td>SHIPPING</td>
                            <td>$4.00</td>
                          </tr>
                          <tr>
                            <td>TAX</td>
                            <td>$0.00</td>
                          </tr>
                          <tr>
                            <td>SUBTOTAL</td>
                            <td>$379.00</td>
                          </tr>
                          <tr>
                            <td>GRAND TOTAL</td>
                            <td>$379.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <button className="btn btn--e-brand-b-2" type="submit">
                        {' '}
                        PROCEED TO CHECKOUT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
function EstimateShipping() {
  return (
    <div className="u-s-p-b-60">
      {/*====== Section Content ======*/}
      <SectionContent />
      {/*====== End - Section Content ======*/}
    </div>
  );
}

export default EstimateShipping;
