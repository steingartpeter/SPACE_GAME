<?php


    include $_SERVER['DOCUMENT_ROOT'] . '/SPACE_GAME/APP_CODE/PHP/BASIC_APP.php';
    
    $pgGnrtr = new APP0924();
    
    echo $pgGnrtr->createHeaderLinks();

	echo $pgGnrtr->createSTDNAV();
?>



<div class="container">
	<div class="jumbotron" id="jumb-start">
		UNIVERSE-GENERATOR
	</div>
</div>


<div class="container">
  <div class="row">
  	<div class="col-lg-6 std-hlfscreen" id="svg-canvas01">
  	
  	</div>
  	<div class="col-lg-6 std-hlfscreen" id="planet-text">
  		<button class="btn btn-primary" onclick="APP_JS.teszt01()">Generate 1 STAR</button>
  		<hr/>
  		<ul>
  			<li>Name: ...</li>
  			<li>Chromacity: ...</li>
  			<li>Type: ...</li>
  			<li>Solar mass: ...</li>
  			<li>Sol.radius: ...</li>
  			<li>Luminosity: ...</li>
  		</ul>
  	</div>
  </div>
</div>



<?php 

    echo $pgGnrtr->createSiteLowerPart();
    
?>