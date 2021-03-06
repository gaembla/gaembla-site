import React, { useEffect, useState, useCallback } from "react"
import {Link} from 'react-scroll'

import { Helmet } from "react-helmet"

import "../styles/style.css"

import HeaderLogo from "../images/header-logo.svg"
import MainBlockDecor from "../images/main-block__decor.svg"
import MainBlockImg from "../images/main-block__img.jpg"
import MainBlockImgDecor from "../images/main-block__img-decor.png"
import InfoBlockDecor from "../images/info-block__decor.svg"
import MainAboutBackground from "../images/main-about__bg.jpg"
import MainAboutDecor from "../images/main-about__decor.png"
import MainTeamInfoInterestedDecor from "../images/main-team__info-interested-decor.svg"
import MainTeamImg from "../images/main-team__img.jpg"
import MainTeamImgDecor from "../images/main-team__img-decor.png"
import MainContactsInfoDecor from "../images/main-contacts__info-decor.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

function createGoHireJobs() {
  return { __html: "<gohire-jobs></gohire-jobs>" }
}

const IndexPage = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.dispatchEvent( new Event('load') );
  },
  [],
  );

  const handleToggleMenu = useCallback(() => {
    setIsActive(!isActive);
    if (!isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isActive])

  return (
    <>
      <Helmet title="Gaembla.com">
        <script
          src="https://widget.gohire.io/widget/OP6XcrtX"
        />
      </Helmet>
      <div className="main-wrapper">
        {/* BEGIN CONTENT */}
        <main className="content">
          {/* BEGIN MAIN BLOCK */}
          <section id="home" className="main-block">
            <div className="section-gradient" />
            <div className="wrapper">
              <img src={MainBlockDecor} className="main-block__decor" alt="" />
              <div className="main-block__content">
                <h1 className="title1">We are Gaembla</h1>
                <p>
                  We are an iGaming transformation tech company at the forefront
                  of new developments and possibilities across the industry. We
                  create and operate iGaming solutions that are powered by
                  innovation and dedication.
                </p>
              </div>
              <div className="main-block__img">
                <img src={MainBlockImg} alt="" />
                <img
                  src={MainBlockImgDecor}
                  className="main-block__img-decor"
                  alt=""
                />
              </div>
            </div>
          </section>
          {/* MAIN BLOCK EOF   */}
          {/* BEGIN INFO BLOCK */}
          <section id="info" className="info-block">
            <div className="wrapper">
              <img src={InfoBlockDecor} className="info-block__decor" alt="" />
              <div className="info-block__items">
                <div className="info-block__item">
                  <h2 className="title2">Our Company Values</h2>
                  <p>
                    We base our business ethos on transparency, credibility, and
                    accountability. These are the values we reinforce throughout
                    our company and work to cultivate at every level of
                    operation. We take responsibility and uphold these values as
                    they are the bedrock for our continued success.
                  </p>
                </div>
                <div className="info-block__item">
                  <h2 className="title2">Vision</h2>
                  <p>
                    To be become a trendsetter in the iGaming Industry, through
                    cutting edge innovations and a mobile focused unique
                    experience for our customers.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* INFO BLOCK EOF   */}
          {/* BEGIN MAIN ABOUT */}
          <section className="main-about">
            <div className="wrapper">
              <img
                src={MainAboutBackground}
                className="main-about__bg"
                alt=""
              />
              <img src={MainAboutDecor} className="main-about__decor" alt="" />
              <div className="main-about__block">
                <h2 className="title2">About Us</h2>
                <p>
                  We are GAEMBLA, a company that was created by a group
                  of experts with vast knowledge and love for everything that is
                  Gambling and Entertainment. Coming from a long history of
                  international casino operations and software development along
                  with a rich track record of successful ventures in many
                  different verticals , we aim to take iGaming yet a little bit
                  further. Key aspects for our ongoing success are ambitious
                  targets, an efficient business-model and a well-defined
                  strategy. With over 30 years of industry experience and an
                  outstanding team of highly talented professionals , we ensure
                  a strong position in every niche we enter.
                </p>
              </div>
            </div>
          </section>
          {/* MAIN ABOUT EOF   */}
          {/* BEGIN MAIN TEAM */}
          <section id="careers" className="main-team">
            <div className="section-gradient" />
            <div className="section-gradient section-gradient2" />
            <div className="wrapper">
              <img src={InfoBlockDecor} className="info-block__decor" alt="" />
              <div className="main-team__content">
                <div className="main-team__info">
                  <div className="main-team__info-block">
                    <h2 className="title2">Join Our Team</h2>
                    <p>
                      Our growing game tech presence springs directly from the
                      minds and work ethic of a standout team. Recognising how
                      crucial it is to attract and retain exceptional talent, we
                      prioritise a work culture and employee experience that
                      allows our team members to feel a sense of ownership and
                      pride within the company. We???re committed to training and
                      developing the best in the field???with groundbreaking
                      projects and continual support.
                    </p>
                    <a
                      href="https://careers.gaembla.com"
                      className="btn btn-white"
                    >
                      see all openings
                    </a>
                  </div>
                  <div className="main-team__info-interested">
                    <img
                      src={MainTeamInfoInterestedDecor}
                      className="main-team__info-interested-decor"
                      alt=""
                    />
                    <h3 className="title3">
                      Interested in learning more about
                      <br /> Gaembla job opportunities?
                    </h3>
                    <p>
                      Check out our current openings, or feel free to reach out
                      <br /> and introduce yourself by dropping a message here.
                    </p>
                    <div className="main-team__info-interested-items">
                      {<div dangerouslySetInnerHTML={createGoHireJobs()} />}
                    </div>
                  </div>
                </div>
                <div className="main-team__img">
                  <img
                    data-src={MainTeamImg}
                    src={MainTeamImg}
                    className="js-img"
                    alt=""
                  />
                  <img
                    data-src={MainTeamImgDecor}
                    src={MainTeamImgDecor}
                    className="js-img main-team__img-decor"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          {/* MAIN TEAM EOF   */}
          {/* BEGIN MAIN CONTACTS */}
          <section id="contacts" className="main-contacts">
            <div className="section-gradient" />
            <div className="wrapper">
              <div className="main-contacts__content">
                <div className="main-contacts__info">
                  <img
                    src={MainContactsInfoDecor}
                    className="main-contacts__info-decor"
                    alt=""
                  />
                  <h2 className="title2">Contact Us</h2>
                  <p>
                    Have questions or feedback? Interested in Gaembla
                    partnership? career opportunities? We look forward to
                    hearing from you, get in touch with us today!
                  </p>
                </div>
                <div className="main-contacts__form">
                  <form>
                    <div className="box-field">
                      <label className="box-field__label">Full Name</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="box-field">
                      <label className="box-field__label">Your Email</label>
                      <input className="form-control" type="email" />
                    </div>
                    <div className="box-field box-field__textarea">
                      <label className="box-field__label">Message</label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* MAIN CONTACTS EOF   */}
        </main>
        {/* CONTENT EOF   */}
        {/* BEGIN HEADER */}
        <header className="header">
          <div className="wrapper">
            <div className="header-content">
              <div className="header-logo">
                <img src={HeaderLogo} alt="" />
              </div>
              <nav className={`header-nav ${isActive && 'active'}`}>
                <ul>
                  <li>
                    <Link onClick={handleToggleMenu} activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
                  </li>
                  <li>
                  <Link onClick={handleToggleMenu}  to="info" spy={true} smooth={true}>About Us</Link>
                  </li>
                  <li>
                  <Link onClick={handleToggleMenu}  to="careers" spy={true} smooth={true}>Careers</Link>
                  </li>
                  {/*<li>
                  <Link  to="blog" spy={true} smooth={true}>Blog</Link>
                  </li>*/}
                  <li>
                  <Link onClick={handleToggleMenu} to="contacts" spy={true} smooth={true}>Contacts</Link>
                  </li>
                </ul>
              </nav>
              <div className={`btn-menu js-btn-menu ${isActive && 'active'}`} onClick={handleToggleMenu}>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
              </div>
            </div>
          </div>
        </header>
        {/* HEADER EOF   */}
        {/* BEGIN FOOTER */}
        <footer className="footer">
          <div className="wrapper">
            <div className="footer-content">
              <span>?? Gaembla 2021</span>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="icon-instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="icon-facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="icon-twitter"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {/* FOOTER EOF   */}
      </div>
    </>
  )
}

export default IndexPage
