<?php
//<M>
//
//</M>
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
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p>
</div>



<?php 

    echo $pgGnrtr->createSiteLowerPart();
    
?>