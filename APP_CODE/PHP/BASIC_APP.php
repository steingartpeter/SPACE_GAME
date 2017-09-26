<?php
//<M>
//
//</M>




class APP0924{
//<CL>
//
//</CL>
    
    
    
    public function __construct(){
    //<SF>
    // A konstruktor.
    //</SF>
        //echo "<h5>APP0924 konstruktor meghívva!</h5>";   
    }
    
    
    public function generateSiteUpperPart(){
    //<SF>
    // A site teteje legenerálása.
    //</SF>
        $html = "";
        
        $html .= "<!DOCTYPE html>";
        $html .= "<html>";
        $html .= '<head>
            <meta charset="utf-8">';
        $html .= $this->createHeaderLinks();
        $html .= "</head></body>";
        
        
    }
    
    
    public function createHeaderLinks(){
    //<SF>
    // A head linkek legenerálása.
    //</SF>
        $html = "";
        
        $html .= '<script src="/SPACE_GAME/APP_CODE/JSCRIPT/LIBS/jquery/jquery-3.2.1.min.js"></script>';
        //$html .= '<script src="/SPACE_GAME/APP_CODE/JSCRIPT/LIBS/popper/popper.min.js"></script>';
        //$html .= '<script src="/SPACE_GAME/APP_CODE/JSCRIPT/LIBS/bootstrap/bootstrap.min.js"></script>';
        $html .= '<script src="/SPACE_GAME/APP_CODE/JSCRIPT/LIBS/bootstrap337/js/bootstrap.min.js"></script>';
        $html .= '<script src="/SPACE_GAME/APP_CODE/JSCRIPT/app.js"></script>';
        
        $html .= '<link rel="stylesheet" href="/SPACE_GAME/APP_CODE/JSCRIPT/LIBS/bootstrap337/css/bootstrap.min.css" />';
        $html .= '<link rel="stylesheet" href="/SPACE_GAME/STYLE/bootstrap/bootstrap-grid.min.css" />';
        $html .= '<link rel="stylesheet" href="/SPACE_GAME/STYLE/bootstrap/bootstrap-reboot.min.css" />';
        $html .= '<link rel="stylesheet" href="/SPACE_GAME/STYLE/basic_style.css" />';
        
        
        return $html;
    }
    
    
    public function createSTDNAV(){
    //<SF>
    // 2017. szept. 26.<br>
    // A standard boostrapos NAV elem legenrálása, jelenleg javarészt dummy elemekkel.<br>
    // PARAMÉTEREK:
    //×-
    // @-- @param ... = ... -@
    //-×
    //MÓDOSTÁSOK:
    //×-
    // @-- ... -@
    //-×
    //</SF>
    	$html = "";
    	$html .= '<!-- STANDARD NAV generálása PHP ból -->';
    	
    	$html .= '<nav class="navbar navbar-inverse navbar-fixed-top">';
    	$html .= '<div class="container-fluid">';
    	$html .= '<div class="navbar-header">';
    	$html .= '<a class="navbar-brand" href="#">Space Project 001</a>';
    	$html .= '</div>';
    	$html .= '<div>';
    	$html .= '<ul class="nav navbar-nav">';
    	$html .= '<li class="active"><a href="#">START</a></li>';
    	$html .= '<li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Lap 1</a>';
    	$html .= '<ul class="dropdown-menu">';
    	$html .= '<li><a href="#">1.1 Menuelem</a></li>';
    	$html .= '<li><a href="#">1.2 Menuelem</a></li>';
    	$html .= '<li><a href="#">1.3 Menuelem</a></li>';
    	$html .= '</ul>';
    	$html .= '</li>';
    	$html .= '<li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Lap 2</a>';
    	$html .= '<ul class="dropdown-menu">';
    	$html .= '<li><a href="#">2.1 Menuelem</a></li>';
    	$html .= '<li><a href="#">2.2 Menuelem</a></li>';
    	$html .= '<li><a href="#">2.3 Menuelem</a></li>';
    	$html .= '</ul>';
    	$html .= '</li>';
    	$html .= '<li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Lap 3</a>';
    	$html .= '<ul class="dropdown-menu">';
    	$html .= '<li><a href="#">3.1 Menuelem</a></li>';
    	$html .= '<li><a href="#">3.2 Menuelem</a></li>';
    	$html .= '<li><a href="#">2.3 Menuelem</a></li>';
    	$html .= '</ul>';
    	$html .= '</li>';
    	$html .= '</ul>';
    	$html .= '</div>';
    	$html .= '</div>';
    	$html .= '</nav>';
    	
    	return $html;
    	
    }
    
    public function createSiteLowerPart(){
    //<SF>
    //
    //</SF>
        
        $html = "";
        
        $html .= "</body></html>";
        
        return $html;
        
    }
    
    
}
?>