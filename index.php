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
  	<div class="col-lg-6 std-hlfscreen">
  	<button class="btn btn-primary" onclick="APP_JS.createOneStarSVG()">Generate 1 STAR-graph</button>
  	<button class="btn btn-primary" onclick="APP_JS.animateStar()">Animation (10)</button>
  	<button class="btn btn-primary" onclick="APP_JS.generateBgStars()">Backgrnd stars</button>
  	<hr/>
  	<div id="svg-canvas01"></div>
  	</div>
  	<div class="col-lg-6 std-hlfscreen" id="planet-text">
  		<button class="btn btn-primary" onclick="APP_JS.createOneStar()">Generate 1 STAR</button>
  		<hr/>
  		<ul id="starPropList">
  			<li id="strNm">Name: ...</li>
  			<li id="strChrm">Chromacity: ...</li>
  			<li id="strTp">Type: ...</li>
  			<li id="strSlM">Solar mass: ...</li>
  			<li id="strSlRad">Sol.radius: ...</li>
  			<li id="strLim">Luminosity: ...</li>
  		</ul>
  	</div>
  </div>
</div>



<?php 

    echo $pgGnrtr->createSiteLowerPart();
    
?>