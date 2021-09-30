import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  // <Layout>
  //   <Seo title="404: Not found" />
  //   <h1>404: Not Found</h1>
  //   <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  // </Layout>

  return (
    <div className="main-wrapper">
      {/* BEGIN CONTENT */}
      <main className="content">
        {/* BEGIN ERROR BLOCK */}
        <div className="error-block">
          <img
            src="img/error-block__img.svg"
            className="error-block__img"
            alt=""
          />
          <img
            src="img/error-block__img-decor.svg"
            className="error-block__img-decor"
            alt=""
          />
          <a href="#" className="btn btn-border">
            Page not found
          </a>
        </div>
        <img
          src="img/error-block__decor.svg"
          className="error-block__decor"
          alt=""
        />
        {/* ERROR BLOCK EOF   */}
      </main>
      {/* CONTENT EOF   */}
      {/* BEGIN HEADER */}
      <header className="header">
        <div className="wrapper">
          <div className="header-content">
            <div className="header-logo">
              <img src="img/header-logo.svg" alt="" />
            </div>
            <nav className="header-nav">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </nav>
            <div className="btn-menu js-btn-menu">
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
            <span>© Gaembla 2021</span>
            <ul>
              <li>
                <a href="#">
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* FOOTER EOF   */}
    </div>
  )
}

export default NotFoundPage
