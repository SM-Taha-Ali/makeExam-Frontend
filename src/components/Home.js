import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      {/*Navigation bar*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-default navbar-fixed-top">
        <a className="navbar-brand" href="index.html">
          Men<span>tor</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li>
              <a href="#feature">Features</a>
            </li>
            <li>
              <a href="#organisations">Organisations</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#" data-target="#login" data-toggle="modal">
                Sign in
              </a>
            </li>
            <li className="btn-trial">
              <a href="#footer">Free Trail</a>
            </li>
          </ul>
        </div>
      </nav>

      {/*/ Navigation bar*/}
      {/*Modal box*/}
      <div className="modal fade" id="login" role="dialog">
        <div className="modal-dialog  ">
          {/* Modal content no 1*/}
          <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title d-flex flex-row justify-content-center">Login</h4>
            <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body padtrbl">
              <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <div className="form-group">
                  <form name="" id="loginForm">
                    <div className="form-group has-feedback">
                      {/*--- username ------------*/}
                      <input
                        className="form-control"
                        placeholder="Username"
                        id="loginid"
                        type="text"
                        autoComplete="off"
                      />
                      <span
                        style={{
                          display: "none",
                          fontWeight: "bold",
                          position: "absolute",
                          color: "red",
                          padding: 4,
                          fontSize: 11,
                          backgroundColor: "rgba(128, 128, 128, 0.26)",
                          zIndex: 17,
                          right: 27,
                          top: 5,
                        }}
                        id="span_loginid"
                      />
                      {/*-Alredy exists  ! */}
                      <span className="glyphicon glyphicon-user form-control-feedback" />
                    </div>
                    <div className="form-group has-feedback">
                      {/*--- password ------------*/}
                      <input
                        className="form-control"
                        placeholder="Password"
                        id="loginpsw"
                        type="password"
                        autoComplete="off"
                      />
                      <span
                        style={{
                          display: "none",
                          fontWeight: "bold",
                          position: "absolute",
                          color: "grey",
                          padding: 4,
                          fontSize: 11,
                          backgroundColor: "rgba(128, 128, 128, 0.26)",
                          zIndex: 17,
                          right: 27,
                          top: 5,
                        }}
                        id="span_loginpsw"
                      />
                      {/*-Alredy exists  ! */}
                      <span className="glyphicon glyphicon-lock form-control-feedback" />
                    </div>
                      <div className="">
                        <div className="checkbox icheck">
                          <label>
                            <input type="checkbox" id="loginrem" /> Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-green btn-block btn-flat"
                          onclick="userlogin()"
                        >
                          Sign In
                        </button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ Modal box*/}

      <div className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Banner*/}
      <div className="banner">
        <div className="bg-color">
          <div className="container">
            <div className="banner-text text-center">
              <div className="text-border">
                <h2 className="text-dec">Trust &amp; Quality</h2>
              </div>
              <div className="intro-para text-center quote">
                <p className="big-text">
                  Learning Today . . . Leading Tomorrow.
                </p>
                <p className="small-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium enim repellat sapiente quos architecto
                  <br />
                  Laudantium enim repellat sapiente quos architecto
                </p>
                <a href="#footer" className="btn get-quote">
                  GET A QUOTE
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
          <div className="feature-info">
            <div className="row">
              <div className="col-md-4">
                <div className="fea">
                  <div className="heading pull-right">
                    <h4>Latest Technologies</h4>
                    <p>
                      Donec et lectus bibendum dolor dictum auctor in ac erat.
                      Vestibulum egestas sollicitudin metus non urna in eros
                      tincidunt convallis id id nisi in interdum.
                    </p>
                  </div>
                  <div className="fea-img pull-left">
                    <i className="fa fa-css3" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fea">
                  <div className="heading pull-right">
                    <h4>Toons Background</h4>
                    <p>
                      Donec et lectus bibendum dolor dictum auctor in ac erat.
                      Vestibulum egestas sollicitudin metus non urna in eros
                      tincidunt convallis id id nisi in interdum.
                    </p>
                  </div>
                  <div className="fea-img pull-left">
                    <i className="fa fa-drupal" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fea">
                  <div className="heading pull-right">
                    <h4>Award Winning Design</h4>
                    <p>
                      Donec et lectus bibendum dolor dictum auctor in ac erat.
                      Vestibulum egestas sollicitudin metus non urna in eros
                      tincidunt convallis id id nisi in interdum.
                    </p>
                  </div>
                  <div className="fea-img pull-left">
                    <i className="fa fa-trophy" />
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
                    <i className="fa fa-male" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <div className="orga-stru">
                    <h3>20%</h3>
                    <p>Says Yes!!</p>
                    <i className="fa fa-male" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <div className="orga-stru">
                    <h3>15%</h3>
                    <p>Can't Say!!</p>
                    <i className="fa fa-male" />
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
                  <h4 className="sm-txt">(Revised and Updated for 2016)</h4>
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
                Sign up for our free weekly software design courses, we’ll send
                them right to your inbox.
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
            <h2>Upcoming Workshop</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="service-box text-center">
                <div className="icon-box">
                  <i className="fa fa-html5 color-green" />
                </div>
                <div className="icon-text">
                  <h4 className="ser-text">Mentor HTML5 Workshop</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box text-center">
                <div className="icon-box">
                  <i className="fa fa-css3 color-green" />
                </div>
                <div className="icon-text">
                  <h4 className="ser-text">Mentor CSS3 Workshop</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box text-center">
                <div className="icon-box">
                  <i className="fa fa-joomla color-green" />
                </div>
                <div className="icon-text">
                  <h4 className="ser-text">Mentor Joomla Workshop</h4>
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
                  <p className="pm-staff-profile-name">Bryan Johnson</p>
                  <p className="pm-staff-profile-title">
                    Lead Software Engineer
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
                  <p className="pm-staff-profile-name">Bryan Johnson</p>
                  <p className="pm-staff-profile-title">
                    Lead Software Engineer
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
                  <p className="pm-staff-profile-name">Bryan Johnson</p>
                  <p className="pm-staff-profile-title">
                    Lead Software Engineer
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
      <section id="testimonial" className="section-padding">
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
      </section>
      {/*/ Testimonial*/}
      {/*Courses*/}
      <section id="courses" className="section-padding">
        <div className="container">
          <div className="header-section text-center">
            <h2>Courses</h2>
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
            <div className="col-md-4 col-sm-6 padleft-right">
              <figure className="imghvr-fold-up">
                <img src="img/course01.jpg" className="img-responsive" />
                <figcaption>
                  <h3>Course Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam atque, nostrum veniam consequatur libero fugiat,
                    similique quis.
                  </p>
                </figcaption>
                <a href="#" />
              </figure>
            </div>
            <div className="col-md-4 col-sm-6 padleft-right">
              <figure className="imghvr-fold-up">
                <img src="img/course02.jpg" className="img-responsive" />
                <figcaption>
                  <h3>Course Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam atque, nostrum veniam consequatur libero fugiat,
                    similique quis.
                  </p>
                </figcaption>
                <a href="#" />
              </figure>
            </div>
            <div className="col-md-4 col-sm-6 padleft-right">
              <figure className="imghvr-fold-up">
                <img src="img/course03.jpg" className="img-responsive" />
                <figcaption>
                  <h3>Course Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam atque, nostrum veniam consequatur libero fugiat,
                    similique quis.
                  </p>
                </figcaption>
                <a href="#" />
              </figure>
            </div>
            <div className="col-md-4 col-sm-6 padleft-right">
              <figure className="imghvr-fold-up">
                <img src="img/course04.jpg" className="img-responsive" />
                <figcaption>
                  <h3>Course Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam atque, nostrum veniam consequatur libero fugiat,
                    similique quis.
                  </p>
                </figcaption>
                <a href="#" />
              </figure>
            </div>
            <div className="col-md-4 col-sm-6 padleft-right">
              <figure className="imghvr-fold-up">
                <img src="img/course05.jpg" className="img-responsive" />
                <figcaption>
                  <h3>Course Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam atque, nostrum veniam consequatur libero fugiat,
                    similique quis.
                  </p>
                </figcaption>
                <a href="#" />
              </figure>
            </div>
            <div className="col-md-4 col-sm-6 padleft-right">
              <figure className="imghvr-fold-up">
                <img src="img/course06.jpg" className="img-responsive" />
                <figcaption>
                  <h3>Course Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam atque, nostrum veniam consequatur libero fugiat,
                    similique quis.
                  </p>
                </figcaption>
                <a href="#" />
              </figure>
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
                  <span className="amount">200</span>
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
                  <span className="amount">800</span>
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
                  <h4>Year Plan</h4>
                  <span className="fa fa-usd curency" />{" "}
                  <span className="amount">1200</span>
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
          ©2022 ExamMaker. All rights reserved
          <div className="credits"></div>
        </div>
      </footer>
    </>
  );
};

export default Home;
