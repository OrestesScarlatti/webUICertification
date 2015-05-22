<?php

namespace globant\Utilities;

Class ScriptCssInyector {

    const JSFILE = 'JSInclution';
    const CSSFILE = 'CSSInclution';
    const JSPATHFILES = 'js';    
    const CSSPATHFILES = 'css';    

    public static function inyectJSReference() {        
        $lines = file(dirname(__FILE__) . DIRECTORY_SEPARATOR . self::JSFILE);
        $linesRead='';
        foreach ($lines as $line) {            
            $line = trim(str_replace('${DIRECTORY_SEPARATOR}', DIRECTORY_SEPARATOR, $line));            
            $linesRead.= file_get_contents(dirname(__FILE__). DIRECTORY_SEPARATOR. '..' . DIRECTORY_SEPARATOR. '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR .self::JSPATHFILES.DIRECTORY_SEPARATOR .$line);
            $linesRead.= PHP_EOL;
        }
        return $linesRead;
    }

    public static function inyectCSSReference() {
        $linesRead='';
        $lines = file(dirname(__FILE__) . DIRECTORY_SEPARATOR . self::CSSFILE);
        foreach ($lines as $line) {            
            $line = trim(str_replace('${DIRECTORY_SEPARATOR}', DIRECTORY_SEPARATOR, $line));
            $linesRead.= trim(file_get_contents( dirname(__FILE__). DIRECTORY_SEPARATOR. '..' . DIRECTORY_SEPARATOR. '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR .self::CSSPATHFILES.DIRECTORY_SEPARATOR .$line));
        }
        return $linesRead;
    }

}
