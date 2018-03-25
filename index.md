<!DOCTYPE html>
<html lang="fr">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Allon'z enfants de la balle</title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/stylish-portfolio.css" rel="stylesheet">
    <link href="css/stylish_modified.css" rel="stylesheet">
    <link href="dist/css/jquery.mb.YTPlayer.min.css" media="all" rel="stylesheet" type="text/css">

  </head>

  <body id="page-top">
    <!-- Navigation -->
    <a class="menu-toggle rounded" href="#">
      <i class="fa fa-bars"></i>
    </a>
    <nav id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="sidebar-brand">
          <a class="js-scroll-trigger" href="#page-top">Menu</a>
        </li>
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="#page-top">Home</a>
        </li>
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="#about">About</a>
        </li>
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="#exercices">Exercices</a>
        </li>
      </ul>
    </nav>

    <!-- Header -->


    <header class="masthead">

      <div id="P1" class="player" 
     data-property="{videoURL:'https://youtu.be/eZdD6oncT-4',containment:'header',startAt:0,mute:true,autoPlay:true,loop:true,opacity:1,anchor:'top',showControls:false,useOnMobile:true}">
      </div>

      <div class="text-center my-auto ml7">
        <h1 class="mb-1 text-wrapper">
          <span class="letters">Allonz enfants de la balle</span>
        </h1>
      </div>

      <!--


      <img class="img-header-01" style="margin-top: 0;position: absolute;top: 0;width: 100%;z-index: -1;height: 100%;"src="img/bg-masthead.jpg" alt="">

      <div class="overlay">
        <img class="img-header-01" style="margin-top: 60px;" src="img/image31.png" alt="">
      </div>-->



    </header>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalCenter">
  X
</button>

<!-- Modal -->
<div class="modal fade" id="ModalCenter" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

    <!-- exercices -->
    <section class="content-section" id="exercices">
      <div class="container">
        <div class="content-section-heading text-center">
          <h3 class="text-secondary mb-0">LE KIT PÉDAGOGIQUE</h3>
          <h2 class="mb-5">LE KIT PÉDAGOGIQUE</h2>
        </div>
        <div class="row no-gutters" id="pop-Ups">

          <div class="col-lg-4  col-md-6" v-for="item in items">
            <a class="exercices-item" href="#">
              <span class="caption">
                <span class="caption-content">
                  <h2>{{ item.title }}</h2>
                  <p class="mb-0">{{ item.message }}</p>
                </span>
              </span>
              <img class="img-fluid" v-bind:src="'img/' + item.image + '.jpg'" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="content-section bg-light" id="about">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h2>Stylish exercices is the perfect theme for your next project!</h2>
            <p class="lead mb-5">This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
              <a href="https://unsplash.com/">Unsplash</a>!</p>
            <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">Télécharger le kit</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="content-section bg-primary text-white text-center" id="services">
      <div class="container">
        <div class="content-section-heading">
          <h3 class="text-secondary mb-0">LES CONTRIBUTEURS</h3>
        </div>
        <div class="row" style="padding-top: 40px;">
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
             <span class="rounded-circle mx-auto mb-3"><img src="img/logo2.png"></span>
          </div>

          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
             <span class="rounded-circle mx-auto mb-3"><img style="height: 120px;" src="img/logo3.png"></span>
          </div>

          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
             <span class="rounded-circle mx-auto mb-3"><img style="height: 112px;" src="img/logo4.png"></span>
          </div>

          <div class="col-lg-3 col-md-6">
            <span class="rounded-circle mx-auto mb-3">
              <i class="icon-mustache"></i>
            </span>
            <h4>
              <strong>Question</strong>
            </h4>
            <p class="text-faded mb-0">I mustache you a question...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer text-center">
      <div class="container">
        <p class="text-muted small mb-0">Copyright &copy; Your Website 2017</p>
      </div>
    </footer>

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded js-scroll-trigger" href="#page-top">
      <i class="fa fa-angle-up"></i>
    </a>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>


    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

    <!-- Custom scripts for this template -->
    <script src="js/stylish-portfolio.min.js"></script>
    <script src="js/stylish-completed.js"></script>
    <script src="dist/jquery.mb.YTPlayer.js"></script>
    

  </body>

</html>
