import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Login from "./Login";
import "./style.css";

const Home = () => {
  return (
    <>
      {/*Navigation bar*/}
      <Header />
      {/* Navigation bar*/}

      {/*Banner*/}
      <div className="banner">
        <div className="bg-color">
          <div className="container">
            <div className="banner-text text-center">
              <div className="text-border">
                <h2 className="text-dec">FAST &amp; EASY</h2>
              </div>
              <div className="intro-para text-center quote">
                <p className="big-text">
                  Start making your Exam today.
                </p>
                <p className="small-text">
                  Fastest and easiest way to create exams with the largest database of question banks of all boards in Karachi.
                  <br />
                  Start your free trial by clicking the button below.
                </p>
                <a href="#footer" className="btn get-quote">
                  CREATE EXAM FREE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ Banner*/}
      {/*Feature*/}
      <section id="feature" className="section-padding">
        <div className="container">
          <div className="header-section text-center">
            <h2>Features</h2>
            <p>
              Quality features are provided with the cheapest rates.
              Our promise, your belief.
              <br /> An application that brings ease in the teacher's life.
            </p>
            <hr className="bottom-line" />
          </div>
          <div className="feature-info">
            <div className="row">
              <div className="col-md-4">
                <div className="fea">
                  <div className="heading pull-right">
                    <h4>Exam/Test Maker</h4>
                    <p>
                      We provide a platform where you can create your daily tests and
                      exams in a minute with our largest question bank of all boards in Karachi.
                    </p>
                  </div>
                  <div className="fea-img pull-left">
                    <Link to="/exam-maker"><i className="fas zoom fa-arrow-circle-right"></i></Link>

                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fea">
                  <div className="heading pull-right">
                    <h4>Custom Question Bank</h4>
                    <p>
                      We provide you a customizable largest question bank of all
                      past papers of all boards in Karachi. You are allowed to add
                      custom questions.
                    </p>
                  </div>
                  <div className="fea-img pull-left">
                    <Link to="/exam-maker"><i className="fas zoom fa-arrow-circle-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fea">
                  <div className="heading pull-right">
                    <h4>Conduct Test Online</h4>
                    <p>
                      We provide an online platform where you can conduct test online
                      by just sending the link to your students or just by registering
                      them here.
                    </p>
                  </div>
                  <div className="fea-img pull-left">
                    <Link to="/test-conduct"><i className="fas zoom fa-arrow-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ feature*/}
      {/*Organisations*/}
      <section id="organisations" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <div className="orga-stru">
                    <h3>65%</h3>
                    <p>Say NO!!</p>
                    <i className="fas fa-male"></i>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <div className="orga-stru">
                    <h3>20%</h3>
                    <p>Says Yes!!</p>
                    <i className="fas fa-male"></i>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <div className="orga-stru">
                    <h3>15%</h3>
                    <p>Can't Say!!</p>
                    <i className="fas fa-male"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-info">
                <hgroup>
                  <h3 className="det-txt">
                    {" "}
                    Is inclusive quality education affordable?
                  </h3>
                  <h4 className="sm-txt">(Revised and Updated for 2021)</h4>
                </hgroup>
                <p className="det-p">
                  Donec et lectus bibendum dolor dictum auctor in ac erat.
                  Vestibulum egestas sollicitudin metus non urna in eros
                  tincidunt convallis id id nisi in interdum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Organisations*/}
      {/*Cta*/}
      <section id="cta-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-center">Subscribe Now</h2>
              <p className="cta-2-txt">
                Sign up to make your exams and tests with least effort in a minute.
              </p>
              <div className="cta-2-form text-center">
                <form action="#" method="post" id="workshop-newsletter-form">
                  <input
                    name=""
                    placeholder="Enter Your Email Address"
                    type="email"
                  />
                  <input
                    className="cta-2-form-submit-btn"
                    defaultValue="Subscribe"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Cta*/}
      {/*work-shop*/}
      <section id="work-shop" className="section-padding">
        <div className="container">
          <div className="header-section text-center">
            <h2>Upcoming Features</h2>
            <p>
              We are always working at our best to provide you with best features.
              <br /> Some of our new features coming soon.
            </p>
            <hr className="bottom-line" />
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="service-box text-center">
                <div className="icon-box">
                  <i className="fas fa-landmark"></i>
                </div>
                <div className="icon-text">
                  <h4 className="ser-text">Punjab Board <br /> Question Bank</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box text-center">
                <div className="icon-box">
                  <i className="fas fa-landmark"></i>
                </div>
                <div className="icon-text">
                  <h4 className="ser-text">Federal Board <br /> Question Bank</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box text-center">
                <div className="icon-box">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <div className="icon-text">
                  <h4 className="ser-text">Student Online Attendance Portal</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ work-shop*/}
      {/*Faculity member*/}
      <section id="faculity-member" className="section-padding">
        <div className="container">
          <div className="header-section text-center">
            <h2>Meet Our Faculty Member</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="pm-staff-profile-container">
                <div className="pm-staff-profile-image-wrapper text-center">
                  <div className="pm-staff-profile-image">
                    <img
                      src="img/mentor.jpg"
                      alt=""
                      className="img-thumbnail img-circle"
                    />
                  </div>
                </div>
                <div className="pm-staff-profile-details text-center">
                  <p className="pm-staff-profile-name">Syed Muhammad Hammad</p>
                  <p className="pm-staff-profile-title">
                    Co-Founder FelcaSoft
                  </p>
                  <p className="pm-staff-profile-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec et placerat dui. In posuere metus et elit placerat
                    tristique. Maecenas eu est in sem ullamcorper tincidunt.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="pm-staff-profile-container">
                <div className="pm-staff-profile-image-wrapper text-center">
                  <div className="pm-staff-profile-image">
                    <img
                      src="img/mentor.jpg"
                      alt=""
                      className="img-thumbnail img-circle"
                    />
                  </div>
                </div>
                <div className="pm-staff-profile-details text-center">
                  <p className="pm-staff-profile-name">Syed Muhammad Taha</p>
                  <p className="pm-staff-profile-title">
                    Co-Founder FelcaSoft
                  </p>
                  <p className="pm-staff-profile-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec et placerat dui. In posuere metus et elit placerat
                    tristique. Maecenas eu est in sem ullamcorper tincidunt.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="pm-staff-profile-container">
                <div className="pm-staff-profile-image-wrapper text-center">
                  <div className="pm-staff-profile-image">
                    <img
                      src="img/mentor.jpg"
                      alt=""
                      className="img-thumbnail img-circle"
                    />
                  </div>
                </div>
                <div className="pm-staff-profile-details text-center">
                  <p className="pm-staff-profile-name">Faraz ke Bhai</p>
                  <p className="pm-staff-profile-title">
                    Professional Teacher
                  </p>
                  <p className="pm-staff-profile-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec et placerat dui. In posuere metus et elit placerat
                    tristique. Maecenas eu est in sem ullamcorper tincidunt.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Faculity member*/}
      {/*Testimonial*/}
      {/* <section id="testimonial" className="section-padding">
        <div className="container">
          <div className="header-section text-center">
            <h2 className="white">See What Our Customer Are Saying?</h2>
            <p className="white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line bg-white" />
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="text-comment">
                <p className="text-par">
                  "Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, nec sagittis sem"
                </p>
                <p className="text-name">Abraham Doe - Creative Dırector</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="text-comment">
                <p className="text-par">
                  "Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, nec sagittis sem"
                </p>
                <p className="text-name">Abraham Doe - Creative Dırector</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*/ Testimonial*/}
      {/* Courses*/}
      <section id="templates" className="section-padding">
        <div className="container">
          <div className="header-section text-center">
            <h2>Our Templates</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="kboard col-lg-4 col-md-12 p-3">
              <div className="card" >
                <div className="img-container">
                  <img className="kboard-img" src="/images/kboard.png" alt="Card image cap" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Karachi Board Template</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-success">Get Template</a>
                </div>
              </div>
            </div>
            <div className="fboard col-lg-4 col-md-12 p-3">
              <div className="card" >
              <div className="img-container">
                <img className="fboard-img" src="/images/fboard.jpg" alt="Card image cap" />
              </div>
                <div className="card-body">
                  <h5 className="card-title">Federal Board Template</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-success">Get Template</a>
                </div>
              </div>
            </div>
            <div className="cboard col-lg-4 col-md-12 p-3">
              <div className="card" >
              <div className="img-container">
                <img className="cboard-img" src="/images/cboard.jpg" alt="Card image cap" />
              </div>
                <div className="card-body">
                  <h5 className="card-title">Cambridge Board Template</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-success">Get Template</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/*/ Courses*/}
      {/*Pricing*/}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="header-section text-center">
            <h2>Our Pricing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="price-table">
                {/* Plan  */}
                <div className="pricing-head">
                  <h4>Monthly Plan</h4>
                  <span className="fa fa-usd curency" />{" "}
                  <span className="amount">2.99</span>
                </div>
                {/* Plean Detail */}
                <div className="price-in mart-15">
                  <a href="#" className="btn btn-bg green btn-block">
                    PURCHACE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="price-table">
                {/* Plan  */}
                <div className="pricing-head">
                  <h4>Quarterly Plan</h4>
                  <span className="fa fa-usd curency" />{" "}
                  <span className="amount">14.99</span>
                </div>
                {/* Plean Detail */}
                <div className="price-in mart-15">
                  <a href="#" className="btn btn-bg yellow btn-block">
                    PURCHACE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="price-table">
                {/* Plan  */}
                <div className="pricing-head">
                  <h4>Yearly Plan</h4>
                  <span className="fa fa-usd curency" />{" "}
                  <span className="amount">29.99</span>
                </div>
                {/* Plean Detail */}
                <div className="price-in mart-15">
                  <a href="#" className="btn btn-bg red btn-block">
                    PURCHACE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Pricing*/}
      {/*Contact*/}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="header-section text-center">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage" />
          <form action="" method="post" role="form" className="contactForm">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12 left">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control form"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validation" />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validation" />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validation" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 right">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    defaultValue={""}
                  />
                  <div className="validation" />
                </div>
              </div>
            </div>
            <div>
              {/* Button */}
              <button
                type="submit"
                id="submit"
                name="submit"
                className="form contact-form-button light-form-button oswald light"
              >
                SEND EMAIL
              </button>
            </div>
          </form>
        </div>
      </section>
      {/*/ Contact*/}
      {/*Footer*/}
      <footer id="footer" className="footer">
        <div className="container text-center">
          <h3>Start Your Free Trial Now!</h3>
          <form className="mc-trial">
            <div className="row">
              <div className="form-group col-md-4 col-md-offset-2 col-sm-4">
                <div className=" controls">
                  <input
                    name="name"
                    placeholder="Enter Your Name"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              {/* End email input */}
              <div className="form-group col-md-4 col-sm-4">
                <div className=" controls">
                  <input
                    name="EMAIL"
                    placeholder="Enter Your email"
                    className="form-control"
                    type="email"
                  />
                </div>
              </div>
              {/* End email input */}
              <div className="col-md-4 col-sm-4">
                <p>
                  <button
                    name="submit"
                    type="submit"
                    className="btn btn-block btn-submit"
                  >
                    Submit <i className="fa fa-arrow-right" />
                  </button>
                </p>
              </div>
            </div>

          </form>
          {/* End newsletter-form */}
          <ul className="social-links">
            <li>
              <a href="#link">
                <i className="fa fa-twitter fa-fw" />
              </a>
            </li>
            <li>
              <a href="#link">
                <i className="fa fa-facebook fa-fw" />
              </a>
            </li>
            <li>
              <a href="#link">
                <i className="fa fa-google-plus fa-fw" />
              </a>
            </li>
            <li>
              <a href="#link">
                <i className="fa fa-dribbble fa-fw" />
              </a>
            </li>
            <li>
              <a href="#link">
                <i className="fa fa-linkedin fa-fw" />
              </a>
            </li>
          </ul>
          ©2022 MyExam-Maker. All rights reserved
          <div className="credits"></div>
        </div>
      </footer>
    </>
  );
};

export default Home;
