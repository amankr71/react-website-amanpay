import React from 'react'

const Header=()=>{
  return(
  <>
  <header>
      <section className="container main-hero-container">
          <div className="row">
              <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                  <h1 className="display-2">Online Payment Made <br/>Easy For You.</h1>
                  <p className="main-hero-para">
                      Aman Kumar is here.hghhhh kjjbkjbkbkjbkjbkjkmn kbk.ajbj
                      khhbk...................... hbjbjkkkkkkkkkkkkllklknlklk
                      ghhhbaa vhvh iuhii gftxf iiiiiiiiiiiiiiiiiiiiibhjb jhk,
                      uugsesr yfykhl
                  </p>
                  <h3>Get early access for you</h3>
                  <div className="input-group mt-3">
                      <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text"
                       placeholder="Enter Your Email"></input>

                      <div className="input-group-button">Get it now</div>
                  </div>
              </div>
              <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                  <img src="./images/hero1.jpg" alt="ok" className="img-fluid"/>
                  <img src="./images/hero2.jpg" alt="ok" className="img-fluid main-hero-img2"/>
                </div>
          </div>
      </section>
  </header>
  </>
  );
};

export default Header;
