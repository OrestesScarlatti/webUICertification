<?php
namespace globant\Controllers;

use globant\Utilities\ScriptCssInyector as ScriptCssInyector;

class InyectCssJSController {
            
    public function __construct() {
    }
    
    public function inyectJsFiles(){        
         return ScriptCssInyector::inyectJSReference();
    }
    
    public function inyectCSSFiles(){        
         return ScriptCssInyector::inyectCSSReference();
    }
}
