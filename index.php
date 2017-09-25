<?php
//<M>
//
//</M>
    include $_SERVER['DOCUMENT_ROOT'] . '/SPACE_GAME/APP_CODE/PHP/BASIC_APP.php';
    
    $pgGnrtr = new APP0924();
    
    echo $pgGnrtr->createHeaderLinks();


?>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>


<div class="container">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p>
</div>

<?php 

    echo $pgGnrtr->createSiteLowerPart();
    
?>