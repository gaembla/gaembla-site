import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {

  // <Layout>
  //   <Seo title="404: Not found" />
  //   <h1>404: Not Found</h1>
  //   <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  // </Layout>

  return <body>
<!-- BEGIN BODY -->

<div class="main-wrapper">

  <!-- BEGIN CONTENT -->

  <main class="content">
    <!-- BEGIN ERROR BLOCK -->
    <div class="error-block">
              <img src="img/error-block__img.svg" class="error-block__img" alt="">
              <img src="img/error-block__img-decor.svg" class="error-block__img-decor" alt="">
              <a href="#" class="btn btn-border">Page not found</a>
    </div>
          <img src="img/error-block__decor.svg" class="error-block__decor" alt="">
    <!-- ERROR BLOCK EOF   -->
  </main>

  <!-- CONTENT EOF   -->

  <!-- BEGIN HEADER -->

  <header class="header">
    <div class="wrapper">
      <div class="header-content">
        <div class="header-logo">
          <img src="img/header-logo.svg" alt="">
        </div>
        <nav class="header-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </nav>
        <div class="btn-menu js-btn-menu"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div>
      </div>
    </div>
  </header>

  <!-- HEADER EOF   -->

  <!-- BEGIN FOOTER -->

  <footer class="footer">
    <div class="wrapper">
      <div class="footer-content">
        <span>© Gaembla 2021</span>
        <ul>
          <li><a href="#"><i class="icon-instagram"></i></a></li>
          <li><a href="#"><i class="icon-facebook"></i></a></li>
          <li><a href="#"><i class="icon-twitter"></i></a></li>
        </ul>
      </div>
    </div>
  </footer>

  <!-- FOOTER EOF   -->

</div>
  </body>
}

export default NotFoundPage
