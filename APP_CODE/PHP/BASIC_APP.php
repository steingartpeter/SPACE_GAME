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
        $html .= '<script src="/SPACE_GAME/APP_CODE/JSCRIPT/LIBS/popper/popper.min.js"></script>';
        $html .= '<script src="/SPACE_GAME/APP_CODE/JSCRIPT/LIBS/bootstrap/bootstrap.min.js"></script>';
        $html .= '<script src="/SPACE_GAME/APP_CODE/JSCRIPT/app.js"></script>';
        
        $html .= '<link rel="stylesheet" href="/SPACE_GAME/STYLE/bootstrap/bootstrap.min.css" />';
        $html .= '<link rel="stylesheet" href="/SPACE_GAME/STYLE/bootstrap/bootstrap-grid.min.css" />';
        $html .= '<link rel="stylesheet" href="/SPACE_GAME/STYLE/basic_style.css" />';
        
        
        return $html;
    }
    
    
    public function createSiteLowerPart(){
    //<SF>
    //
    //</SF>
        
        $html = "";
        
        $html .= "</body></html>";
        
        return $tml;
        
    }
    
    
}
?>