<!DOCTYPE html>
<?php
$requestURIJS = 'http' . (isset($_SERVER['HTTPS']) ? 's' : '') . '://' . "{$_SERVER['HTTP_HOST']}" . preg_replace('/index.php/', '', $_SERVER['REQUEST_URI']) . 'globant/WebUICertification/Boundaries/FileInyectorBoundary.php?type=js';
$requestURICSS = 'http' . (isset($_SERVER['HTTPS']) ? 's' : '') . '://' . "{$_SERVER['HTTP_HOST']}" . preg_replace('/index.php/', '', $_SERVER['REQUEST_URI']) . 'globant/WebUICertification/Boundaries/FileInyectorBoundary.php?type=css';
?>

<html>
    <head>
        <meta charset="UTF-8">        
        <title></title>
        <link rel="stylesheet" type="text/css" href="<?php echo $requestURICSS; ?>">        
        <script src="<?php echo $requestURIJS; ?>"></script>        
        <!--<script src="js/angular.min.js"></script>-->
    </head>
    <body>    
        <div class="tetrisWrapperBox">
            <div id="tetrisPanel" class="tetrisBox" >            

            </div>
            <div class="nextPanel">
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>

                <div class="breakFloat"></div>

                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>

                <div class="breakFloat"></div>

                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>

                <div class="breakFloat"></div>

                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
                <div class="nextSharpGrid"></div>
            </div>
        </div>        
        <script>const DOMAINSHAPE = 4;
            var n = 9;
            var m = 20;

            var texture = ['url(img/rule0.jpg)'];
            currentShape = null;
            var r = (r || 0);
//            var x = (x || (Math.ceil(n / 2) - (DOMAINSHAPE / 2)));
            var x = (x || 2);
            var y = (y || 0);
            var rLast = (r || 0);
            var xLast = (xLast || x);
            var yLast = (yLast || y);
            var shapes = {
                0: {//I
                    blocks: [
                        [
                            [0, 1, 0, 0], //first form line
                            [0, 1, 0, 0],
                            [0, 1, 0, 0],
                            [0, 1, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0], //second form 90°
                            [1, 1, 1, 1],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 1, 0], //third form 90°
                            [0, 0, 1, 0],
                            [0, 0, 1, 0],
                            [0, 0, 1, 0]
                        ],
                        [
                            [0, 0, 0, 0], //third form 90°
                            [1, 1, 1, 1],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ]
                    ]
                    , texture: 'url(img/rule0.jpg)'
                    , name: 'I'
                }
                , 1: {//J
                    blocks: [
                        [
                            [0, 1, 0, 0], //first form line
                            [0, 1, 0, 0],
                            [1, 1, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [1, 0, 0, 0], //second form 90°
                            [1, 1, 1, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 1, 0], //third form 90°
                            [0, 1, 0, 0],
                            [0, 1, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [1, 1, 1, 0], //third form 90°
                            [0, 0, 1, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ]
                    ]
                    , texture: 'blue'
                    , name: 'J'}
                , 2: {//L
                    blocks: [
                        [
                            [0, 1, 0, 0], //first form line
                            [0, 1, 0, 0],
                            [0, 1, 1, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 1, 1], //second form 90°
                            [0, 1, 0, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 1, 0], //third form 90°
                            [0, 0, 1, 0],
                            [0, 0, 1, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 1, 0], //fouth form 90°
                            [1, 1, 1, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ]
                    ]
                    , texture: 'blue'
                    , name: 'L'
                }
                , 3: {//O
                    blocks: [
                        [
                            [0, 1, 1, 0], //first form line
                            [0, 1, 1, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 1, 0], //second form 90°
                            [0, 1, 1, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 1, 0], //third form 90°
                            [0, 1, 1, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 1, 0], //third form 90°
                            [0, 1, 1, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ]
                    ]
                    , texture: 'blue'
                    , name: 'O'}
                , 4: {//S
                    blocks: [
                        [
                            [0, 1, 1, 0], //first form line
                            [1, 1, 0, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], //second form 90°
                            [0, 1, 1, 0],
                            [0, 0, 1, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 1, 0], //third form 90°
                            [1, 1, 0, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], //third form 90°
                            [0, 1, 1, 0],
                            [0, 0, 1, 0],
                            [0, 0, 0, 0]
                        ]
                    ]
                    , texture: 'blue'
                    , name: 'S'}
                , 5: {//T
                    blocks: [
                        [
                            [1, 1, 1, 0], //first form line
                            [0, 1, 0, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], //second form 90°
                            [1, 1, 0, 0],
                            [0, 1, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], //third form 90°
                            [1, 1, 1, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], //third form 90°
                            [0, 1, 1, 0],
                            [0, 1, 0, 0],
                            [0, 0, 0, 0]
                        ]
                    ]
                    , texture: 'blue'
                    , name: 'T'}
                , 6: {//Z
                    blocks: [
                        [
                            [1, 1, 0, 0], //first form line
                            [0, 1, 1, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], //second form 90°
                            [1, 1, 0, 0],
                            [1, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [1, 1, 0, 0], //third form 90°
                            [0, 1, 1, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], //third form 90°
                            [1, 1, 0, 0],
                            [1, 0, 0, 0],
                            [0, 0, 0, 0]
                        ]
                    ]
                    , texture: 'blue'
                    , name: 'Z'
                }
            };

            function generateGrid(n, m) {
                var $pannel = $('#tetrisPanel');
                var k = 0;
                for (var i = 0; i < m; i++) {
                    for (var j = 0; j < n; j++) {
                        var $grid = $('<div id="grid' + j + '' + i + '"class="tetrisGrid" >' + '(' + j + ',' + i + ')' + '</div>');
                        $grid.data({x: j, y: i});
                        $pannel.append($grid);
                        ++k;
                    }
                    $pannel.append('<div class="breakFloat"></div>');
                }
            }

            function moveShape(sharp) {
                if (isValidPlace(r, x, (y + 1), sharp)) {
                    draw(r, xLast, yLast, sharp, 'none');
                    ++y;
                    draw(r, x, y, sharp, texture[0]);
                    xLast = x;
                    yLast = y;
                } else {
                    console.groupEnd([currentShape.name, '-moveShape ', y].join(''));
                    window.clearTimeout(tetrisTimer);
                    getNewShape();
                    tetrisTimer = window.setInterval(moveShape, 600, currentShape);
                }

//                console.groupEnd([currentShape.name,'-moveShape ',y].join(''));
            }

            function redrawShape(r, sharp) {
                if (isValidPlace(r, x, y, sharp)) {
                    draw(rLast, xLast, yLast, sharp, 'none');
                    draw(r, x, y, sharp, texture[0]);
                    xLast = x;
                    yLast = y;
                    rLast = r;
                }
            }
            function draw(r, xCoord, yCoord, sharp, texture) {
                var i, j;
//                console.group(['rotation = ', r, ' (', xCoord, ',', yCoord, ')'].join(''));
                for (i = 0; i < DOMAINSHAPE; i++) {
                    for (j = 0; j < DOMAINSHAPE; j++) {
                        if (sharp.blocks[r][i][j]) {
//                            console.group(['#grid', (j + xCoord), (i + yCoord), ' texture', texture].join(''));
//                            console.log(['(j,i) = (', j, ',', i, ')'].join(''));
//                            console.log(['((xCoord+j),(yCoord+i)) = (', (xCoord + j), ',', (yCoord + i), ')'].join(''));
//                            console.log($(['#grid', (j + xCoord), (i + yCoord)].join(''))[0]);
//                            console.log(sharp.blocks[r][i][j]);
//                            console.log(sharp.blocks[r][i].join(','));
//                            console.log(sharp.blocks[r].join('\n'));
//                            console.groupEnd(['#grid', (j + xCoord), (i + yCoord), ' texture', texture].join(''));
                            $(['#grid', (j + xCoord), (i + yCoord)].join('')).css({'backgroundImage': texture})
                                    .attr({'filled-shape': (texture === 'none' ? '0' : '1')});
                        }
                    }
                }
//                console.groupEnd(['rotation = ', r, ' (', xCoord, ',', yCoord, ')'].join(''));
            }

            function isValidPlace(r, x, y, shape) {
                var i, j;
//                console.group([currentShape.name,'-isValidPlace y :',y].join(''));
                for (i = 0; i < DOMAINSHAPE; i++) {
                    for (j = 0; j < DOMAINSHAPE; j++) {
//                        if (shape.blocks[r][i][j] && ) {
//                            $("div[filled-shape=1]").attr('filled-shape', '3');
//                            return false;
//                        }

                        if (shape.blocks[r][i][j] && ((y + i) > (m - 1) || parseInt($(['#grid', (j + x), (i + y)].join('')).attr('filled-shape')) === 3)) {
                            $("div[filled-shape=1]").attr('filled-shape', '3');
//                            console.group(shape.name);
//                            console.log(['(', (j + x), ',', (i + y), ')'].join(''));
//                            console.groupEnd(shape.name);
//                            console.groupEnd([currentShape.name,'-isValidPlace y :',y].join(''));

                            return false;
                        }
                    }

                }
//                console.groupEnd([currentShape.name,'-isValidPlace y :',y].join(''));
                return true;
            }

            function isValidSideMove(r, x, y, shape) {
                var i, j;
                for (i = 0; i < DOMAINSHAPE; i++) {
                    for (j = 0; j < DOMAINSHAPE; j++) {
                        if (shape.blocks[r][i][j] && (x + j) < 0 && !Boolean($(['#grid', (j + x), (i + y)].join('')).attr('filled-shape'))) {
                            return false;
                        }

                        if (shape.blocks[r][i][j] && (x + j) > (n - 1) && !Boolean($(['#grid', (j + x), (i + y)].join('')).attr('filled-shape'))) {
                            return false;
                        }
                    }
                }
                return true;
            }

            function getNewShape() {
                x = 2;
                y = -1;
                xLast = x;
                yLast = y;
//                r = 1 + Math.random() * DOMAINSHAPE;
//                r = parseInt(r > DOMAINSHAPE ? (DOMAINSHAPE - 1) : r, 0);
                r = 3;
                rLast = r;
                var shapePosition = 1 + Math.random() * DOMAINSHAPE;
                shapePosition = parseInt(shapePosition > DOMAINSHAPE ? (DOMAINSHAPE - 1) : shapePosition, 0);
                currentShape = shapes[(shapePosition)];
                console.group([currentShape.name, '-moveShape ', y].join(''));
                console.log(['rotation : ', r, '\ndescription form :\n', currentShape.blocks[r].join('\n')].join(''));
                console.log(['new coor (', x, ',', y, '), old = (', xLast, ',', yLast, ')'].join(''));

//                return shapes[(shapePosition)];
            }

            function rotateShape(shape) {
                if (isValidSideMove(((r + 1) < DOMAINSHAPE ? (r + 1) : 0), x, y, shape)) {
                    (r < (DOMAINSHAPE - 1) ? (++r) : (r = 0));
                    redrawShape(r, shape);
                }
            }

            function moveLeft(shape, texture) {
                if (isValidSideMove(r, (x - 1), y, shape)) {
                    --x;
                    redrawShape(r, shape);
                }
            }

            function moveRight(shape, texture) {
                if (isValidSideMove(r, (x + 1), y, shape)) {
                    ++x;
                    redrawShape(r, shape); 
                }
            }

            function moveDown(shape, texture) {
                if (isValidSideMove(r, (x + 1), y, shape)) {
                    ++y;
                    redrawShape(r, shape);
                }
            }

            $(document).ready(function () {
                getNewShape();
//                currentShape = shapes[0];
                generateGrid(n, m);
//                draw(r, 0, 16, shapes[0], texture[0]);
//                isValidPlace(r, 0, 17, shapes[0]);
//                draw(r, x, y, currentShape, texture[0]);
                tetrisTimer = window.setInterval(moveShape, 600, currentShape);
                $(window).keydown(function (e) {
//                    console.log(e.charCode || e.keyCode);
                    switch (e.charCode || e.keyCode) {
                        case 37:
                            if (tetrisTimer) {
                                moveLeft(currentShape);
                            }
                            break;
                        case 38:
                            if (tetrisTimer) {
                                rotateShape(currentShape);
                            }
                            break;
                        case 39:
                            if (tetrisTimer) {
                                moveRight(currentShape);
                            }
                            break;
                        case 40:
                            if (tetrisTimer) {
                                moveDown(currentShape);
                            }
                            break;
                        case 80:
                            if (tetrisTimer) {
                                window.clearInterval(tetrisTimer);
                                tetrisTimer = null;
                            } else {
                                tetrisTimer = window.setInterval(moveShape, 600, currentShape);
                            }
                            //                            $('#start').unclick(tetris.pause).val('resume').click(tetris.resume);
                            break;
//                        case 106:
//                            moveLeft();
//                            break; // J
//                        case 76:
//                        case 108:
//                            moveRight();
//                            break; // L
//                        case 75:
//                        case 107:
//                            tetris.moveDown();
//                            break; // K
//                        case 73:
//                        case 105:
//                            tetris.rotate();
                            //                            break; // I
                    }
                });
                //                moveShape();
            });
        </script>
    </body>
</html>
