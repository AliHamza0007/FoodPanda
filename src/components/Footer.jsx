import { Link } from "react-router-dom";
// import Tada from "react-reveal/Tada";
import { FiFacebook } from "react-icons/fi";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="container px-4">
        <div className="row ">
          <div className="col-12  pb-5 ">
            <hr />
            <div className="d-flex justify-content-between  align-items-center py-4">
              <div className="footer__logo ">
                <svg
                  fill="
  rgb(197, 190, 190)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 166 32"
                  height={30}
                  data-testid="brand-icon-combined"
                  aria-hidden="true"
                  focusable="false"
                  id="brand-logo-combined-root-fp"
                >
                  <path
                    d="M39.99 12.05h2.3V9.88c0-2.63 1.44-4.39 4.3-4.39l1.44.29v2.63l-1.58-.29c-.86 0-1.29.59-1.29 1.47v2.46h2.87v2.63h-2.87v11.13H42.3V14.69H40v-2.63h-.01v-.01Zm15.48-.29c3.73 0 7.03 2.92 7.03 7.17s-3.3 7.17-7.03 7.17c-3.73 0-7.03-2.92-7.03-7.17s3.3-7.17 7.03-7.17Zm0 11.7c2.73 0 4.16-2.05 4.16-4.54s-1.44-4.54-4.16-4.54-4.16 2.04-4.16 4.54c-.01 2.49 1.43 4.54 4.16 4.54Zm15.32-11.7c3.73 0 7.03 2.92 7.03 7.17s-3.3 7.17-7.03 7.17c-3.73 0-7.03-2.92-7.03-7.17s3.3-7.17 7.03-7.17Zm0 11.7c2.73 0 4.16-2.05 4.16-4.54s-1.44-4.54-4.16-4.54-4.16 2.04-4.16 4.54c-.01 2.49 1.43 4.54 4.16 4.54Zm22.06 2.34h-2.58l-.28-1.17-.15-.15-.15.15c-.86.88-2.3 1.47-3.73 1.47-3.73 0-6.89-2.92-6.89-7.17s3.16-7.17 6.89-7.17c1.4 0 2.86.59 3.73 1.47l.15.15.15-.15V5.5h2.87v20.31l-.01-.01Zm-6.74-11.41c-2.73 0-4.19 2.04-4.19 4.54s1.46 4.54 4.19 4.54c2.43 0 4.16-2.04 4.16-4.54s-1.72-4.54-4.16-4.54Zm9.62-2.35h2.58l.26 1.17.17.15.15-.15c.86-.88 2.3-1.47 3.73-1.47 3.73 0 6.89 2.92 6.89 7.18s-3.16 7.17-6.89 7.17c-1.4 0-2.86-.59-3.73-1.47l-.15-.15-.17.15V32h-2.84V12.04Zm6.74 11.41c2.73 0 4.16-2.05 4.16-4.54s-1.44-4.54-4.16-4.54c-2.43 0-4.16 2.04-4.16 4.54s1.72 4.54 4.16 4.54Zm14.27-6.2h2.35v-.6c0-1.66-1.11-2.42-2.64-2.42-1.24 0-2.08.6-2.53 1.84l-2.57-.55c.57-2.35 2.53-3.82 5.13-3.82 3.62 0 5.42 1.82 5.42 5.48v8.62h-2.37l-.27-1.82c-.95 1.35-2.35 2.05-4.22 2.05-2.4 0-4.18-1.45-4.18-4.21s2.35-4.55 5.89-4.55l-.01-.02Zm-1.22 6.22c.95 0 1.78-.3 2.48-.9.73-.64 1.08-1.49 1.08-2.62v-.3h-2.46c-1.73 0-2.8.83-2.8 2.14-.01.99.59 1.68 1.7 1.68Zm9.01-11.44h2.58l.28 1.17.15.15.15-.15c.58-.88 2.01-1.47 3.16-1.47 3.44 0 5.45 2.35 5.45 5.56v8.49h-2.87v-8.49c-.09-1.87-.97-2.92-2.87-2.92-1.7 0-3.1 1.4-3.16 3.1v8.32h-2.87V12.04h-.01l.01-.01Zm27.39 13.76h-2.58l-.28-1.17-.15-.15-.15.15c-.86.88-2.3 1.47-3.73 1.47-3.73 0-6.89-2.92-6.89-7.17s3.16-7.17 6.89-7.17c1.4 0 2.87.59 3.73 1.47l.15.15.15-.15V5.49h2.87V25.8l-.01-.01Zm-6.74-11.41c-2.73 0-4.19 2.04-4.19 4.54s1.46 4.54 4.19 4.54c2.44 0 4.16-2.04 4.16-4.54s-1.72-4.54-4.16-4.54Zm14.91 2.87h2.35v-.6c0-1.66-1.11-2.42-2.64-2.42-1.24 0-2.08.6-2.53 1.84l-2.57-.55c.57-2.35 2.53-3.82 5.13-3.82 3.62 0 5.42 1.82 5.42 5.48v8.62h-2.37l-.27-1.82c-.95 1.35-2.35 2.05-4.22 2.05-2.4 0-4.18-1.45-4.18-4.21s2.35-4.55 5.89-4.55l-.01-.02Zm-1.22 6.22c.95 0 1.78-.3 2.49-.9.73-.64 1.08-1.49 1.08-2.62v-.3h-2.46c-1.73 0-2.8.83-2.8 2.14 0 .99.59 1.68 1.7 1.68h-.01ZM28 0H4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"
                    fill="inherit"
                  />
                  <path
                    d="M11.66 14.02a.596.596 0 0 0 .327-1.054.597.597 0 0 0-.437-.135c-.31.03-.55.29-.55.6.02.34.31.61.65.6l.01-.01Zm8.35-1.07c.09-.07.2-.12.32-.13.34-.01.63.25.65.6 0 .33-.27.6-.6.6-.33 0-.6-.27-.6-.6 0-.18.08-.36.23-.47Z"
                    fill="#fff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.81 11.62v-.02a.654.654 0 0 1 .09-.72c.89-1.07 1.16-2.51.71-3.83-.05-.15-.27-.19-.49-.23-.2-.04-.41-.07-.49-.2-.07-.12-.05-.31 0-.5l.03-.16c.04-.21.06-.41-.05-.51-.04-.04-.08-.07-.11-.11-.07-.07-.15-.13-.22-.19l-.07-.06c-.8-.59-1.78-.88-2.78-.82-.86.04-1.79.33-2.45.91-.32.23-.73.29-1.11.18l-.05-.02c-.67-.24-1.36-.41-2.06-.53-1.87-.29-3.78-.11-5.56.53h-.04c-.36.14-.77.08-1.08-.16-1.24-1.1-3.74-1.37-5.37.01-1.79 1.51-1.88 4.13-.57 5.68.17.2.21.48.09.72-.79 1.6-1.2 3.36-1.2 5.15 0 6.38 5.37 11.02 12 11.02s12-4.64 12-11.02c0-1.78-.41-3.53-1.19-5.12h-.03Zm-10.89 4.54c.95 0 1.72.21 1.72.57s-.77 1.2-1.72 1.2-1.72-.83-1.72-1.2.77-.57 1.72-.57ZM6.29 9.44a.572.572 0 0 1-.15-.16c-.02-.03-.03-.05-.05-.08-.29-.53-.36-1.15-.19-1.73.34-1.13 1.54-1.79 2.68-1.64.3.04.59.13.85.28.11.06.21.14.3.23.04.03.06.07.08.12.01.07 0 .15-.06.2-.05.05-.11.09-.17.12-1.1.64-1.99 1.56-2.82 2.51-.13.15-.28.3-.49.15h.02Zm2.92 9.06c-.99-.11-1.86-1.16-2.18-2.22-.14-.47-.49-2.61 1.05-4.16.51-.52 1.23-.97 2.23-1.27.32-.08.66-.12.99-.12.49 0 1.09.08 1.56.43.99.73 1.01 1.95.42 2.58-.59.63-1.92 2.07-2.26 3.25-.34 1.18-.81 1.63-1.81 1.52v-.01Zm6.72 3.54h-.03c-1.91-.01-3.46-1.36-3.46-2.72 0-.47.2-.71.72-.58.3.07 1.51.38 2.61.39h.28c1.08 0 2.26-.3 2.59-.38h.02c.51-.13.72.11.72.58 0 1.36-1.55 2.71-3.46 2.72l.01-.01Zm8.87-5.77c-.33 1.06-1.19 2.11-2.18 2.22-.99.11-1.46-.34-1.81-1.52-.34-1.18-1.67-2.63-2.26-3.25-.59-.63-.58-1.86.42-2.58.47-.34 1.06-.43 1.56-.43.33 0 .67.04.99.12 1 .3 1.72.75 2.23 1.27 1.54 1.55 1.19 3.69 1.05 4.16v.01Zm1.1-7.07s-.03.06-.05.08c-.04.06-.09.11-.15.16-.2.14-.35 0-.49-.15-.83-.95-1.72-1.87-2.82-2.51a.656.656 0 0 1-.17-.12.242.242 0 0 1-.06-.2c.02-.05.04-.09.08-.12.09-.09.19-.17.3-.23.27-.15.56-.24.86-.28 1.14-.15 2.34.51 2.68 1.64.17.58.11 1.2-.18 1.73Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="footer__social">
                <ul className="list-unstyled d-flex gap-3 ">
                  <li>
                    <Link
                      className="icon"
                      to="https://www.facebook.com/foodpanda.pk/"
                      title="foodpanda on Facebook"
                    >
                      <FiFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="icon"
                      to="https://www.instagram.com/foodpanda_pakistan/"
                      title="foodpanda on Instagram"
                    >
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row  text-lg-start text-center py-2 ">
              <div className="col-lg-3   col-12 order-lg-2">
                <ul className="list-unstyled lh-1 d-flex    gap-2 flex-wrap justify-content-lg-start  justify-content-center ">
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/press.htm"
                    >
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-link">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/pandapay"
                    >
                      Refunds with pandapay
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/pandapay-user-account-terms-and-conditions"
                    >
                      Pandapay User Account Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/terms-and-conditions.htm"
                    >
                      Terms and conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/privacy.htm"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodora.com/security"
                    >
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/apps"
                    >
                      Download foodpanda Apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/human-rights-policy"
                    >
                      Human rights policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3   col-12 order-lg-2">
                <ul className="list-unstyled lh-1 d-flex    gap-2 flex-wrap justify-content-lg-start  justify-content-center  ">
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/careers"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/suggest-a-restaurant"
                    >
                      Suggest a restaurant
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://corporate.foodpanda.pk"
                    >
                      Corporate Customer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/cashback-terms"
                    >
                      Cashback Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/all-cuisines"
                    >
                      All cuisines
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://magazine.foodpanda.pk/"
                    >
                      foodpanda Magazine
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.partner.foodpanda.pk/s/?language=en_US&countryIsoCode=PK&utm_source=foodpanda_homepage&utm_medium=referral"
                    >
                      Partner with us
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="https://pandago.pk/">
                      pandago - Request a rider
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/deals"
                    >
                      foodpanda Vouchers&amp;Promo
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3   col-12 order-lg-2 ">
                <ul className="list-unstyled lh-1 d-flex    gap-2 flex-wrap justify-content-lg-start  justify-content-center  ">
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/all-cities-pakistan"
                    >
                      All cities
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/coronavirus-covid-19"
                    >
                      Update on COVID-19 in Pakistan
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/groceries"
                    >
                      pandamart Grocery Delivery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/pandapro"
                    >
                      pandapro - monthly subscription programme
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/homechefs"
                    >
                      foodpanda home chef
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/affiliates"
                    >
                      Become an affiliate
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to="https://www.foodpanda.pk/contents/ramzan-deals"
                    >
                      Ramzan deals
                    </Link>
                  </li>
                </ul>
              </div>{" "}
              <div className="col-lg-3  brand col-12 order-lg-1 order-4  ">
                  {/* <Tada> */}
                <Link className="footer-link" to="/">
                    © 2023 foodpanda
                </Link>
                    {/* </Tada> */}
              </div>
            </div>
            <hr />
            <div className="othercountries py-2 other-color">
              <p>
                <Link
                  className="other-country-link"
                  to="https://www.foodpanda.la"
                >
                  Laos
                </Link>{" "}
                &nbsp; | &nbsp;
                <Link
                  className="other-country-link"
                  to="https://www.foodpanda.com.kh/"
                >
                  Cambodia
                </Link>{" "}
                &nbsp; | &nbsp;
                <Link
                  className="other-country-link"
                  to="https://www.foodpanda.com.mm/"
                >
                  Myanmar
                </Link>{" "}
                &nbsp; | &nbsp;
                <Link
                  className="other-country-link"
                  to="https://www.foodpanda.co.th/"
                >
                  Thailand
                </Link>{" "}
                &nbsp; | &nbsp;
                <Link
                  className="other-country-link"
                  to="https://www.foodpanda.hk/"
                >
                  Hong Kong
                </Link>{" "}
                &nbsp; | &nbsp;
                <Link
                  className="other-country-link"
                  to="https://www.foodpanda.com.tw"
                >
                  Taiwan
                </Link>{" "}
                &nbsp; | &nbsp;
                <Link
                  className="other-country-link"
                  to="https://www.foodpanda.my/"
                >
                  Malaysia
                </Link>{" "}
                &nbsp; | &nbsp;
                <Link
                  className="other-country-link"
                  to="https://www.foodpanda.ph/"
                >
                  Philippines
                </Link>{" "}
                &nbsp; | &nbsp;
                <Link
                  className="other-country-link"
                  to="https://www.foodpanda.sg/"
                >
                  Singapore
                </Link>{" "}
                &nbsp; | &nbsp;
                <Link
                  className="other-country-link"
                  to="https://www.foodpanda.com.bd/"
                >
                  Bangladesh
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
