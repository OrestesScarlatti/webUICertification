<?php

require_once __DIR__ . '/../../../vendor/autoload.php';

use globant\Controllers\InyectCssJSController as InyectCssJSController;

try {
    $controller = null;
    switch ($_GET['type']) {
        case 'js':
            header("Content-Type:text/javascript");
            $controller = new InyectCssJSController();
            $result = $controller->inyectJsFiles();
            break;
        case 'css':
            header("Content-Type:text/css");
            $controller = new InyectCssJSController();
            $result = $controller->inyectCSSFiles();
            break;
    }
} catch (Exception $e) {
    
}
echo $result;
