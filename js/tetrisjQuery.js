
(function ($) {
    $.fn.tetrisjQuery = function (options) {

        var el;
        var $el;
        var DOMAINSHAPE = 4;
        //var textures = ['url(img/rule0.jpg)'];
        var tetrisTimer = null;
        var shape = null;
        var nextShape = null;
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
                        [0, 1, 0, 0], //third form 90°
                        [0, 1, 0, 0],
                        [0, 1, 0, 0],
                        [0, 1, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0], //third form 90°
                        [1, 1, 1, 1],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ]
                ]
                , texture: 'blue'
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

        var defaults = {
            n: 9,
            m: 20,
            textures: ['url(img/rule0.jpg)', 'url(img/rule1.jpg)', 'url(img/rule2.png)', 'url(img/rule3.jpg)'],
            currentShape: null,
            r: 0,
            x: 2,
            y: 0,
            rLast: 0,
            xLast: 0,
            gridPrefix: 'grid',
            gridClass: 'tetrisGrid',
            attrFilledGrid: 'filled-shape',
            elementtoFill: 'div',
            yLast: 0,
            fps: 400
        };

        var settings = null;
//        //var settings = $.extend({}, defaults, options);
        var ini = function (element, options) {
            el = element;
            $el = $(element);
            settings = $.extend({}, defaults, options);
            generateGrid();

            settings.r = (settings.r || 0);
            settings.x = (settings.x || 2);
            settings.y = (settings.y || 0);
            settings.rLast = (settings.r || 0);
            settings.xLast = (settings.xLast || settings.x);
            settings.yLast = (settings.yLast || settings.y);
            getNewShape();

            draw(settings.r, settings.x, settings.y, shape.texture);
//            moveDown();
//            moveDown();
//            tetrisTimer= '8';
            tetrisTimer = window.setInterval(moveDown, settings.fps);
            startEvents();
        }

        var generateGrid = function () {
            var k = 0;
            for (var i = 0; i < settings.m; i++) {
                for (var j = 0; j < settings.n; j++) {
                    var $grid = $(['<div id="', settings.gridPrefix, j, i, '" class="', settings.gridClass, '">', '</div>'].join(''));
                    $grid.data({x: j, y: i});
                    $el.append($grid);
                    ++k;
                }
                $el.append('<div class="breakFloat"></div>');
            }
        }


        var clearBuffer = function (r, x, y) {
            //clear the old position of shape            
            draw(settings.rLast, settings.xLast, settings.yLast, 'none');

            // draw to the next one               
            draw(r, x, y, shape.texture);
            // change stats
//            $('#level').html(tetris.level + 1);
//            $('#lines').html(tetris.lines);
//            $('#score').html(tetris.score);
            // reset coordinates
            settings.xLast = x;
            settings.yLast = y;
            settings.rLast = r;
        }

        var draw = function (r, x, y, texture) {
            var i, j;
            for (i = 0; i < DOMAINSHAPE; i++) {
                for (j = 0; j < DOMAINSHAPE; j++) {
                    if (shape.blocks[r][i][j]) {
                        $(['#', settings.gridPrefix, (j + x), (i + y)].join('')).css({'backgroundImage': texture})
                                .attr({'filled-shape': (texture === 'none' ? '0' : '1')});
                    }
                }
            }
        }

        var moveDown = function (shape, texture) {
            if (isValidMove(settings.r, settings.x, (settings.y + 1), shape)) {
                ++settings.y;
                clearBuffer(settings.r, settings.x, settings.y);
            } else {
                settings.r = 0
                settings.x = 2;
                settings.y = -1;
                settings.rLast = (settings.r || 0);
                settings.xLast = (settings.xLast || settings.x);
                settings.yLast = (settings.yLast || settings.y);
                $([settings.elementtoFill, '[', settings.attrFilledGrid, '=', 1, ']'].join('')).attr(settings.attrFilledGrid, 3);
                completeLines();
                getNewShape();
            }
        }
        var moveLeft = function () {
            if (isValidMove(settings.r, (settings.x - 1), settings.y, shape)) {
                --settings.x;
                clearBuffer(settings.r, settings.x, settings.y);
            }
        }
        var moveRight = function () {
            if (isValidMove(settings.r, (settings.x + 1), settings.y, shape)) {
                ++settings.x;
                clearBuffer(settings.r, settings.x, settings.y);
            }
        }
        var rotateShape = function () {

            if ((settings.r + 1) >= (DOMAINSHAPE)) {
                settings.r = -1;
            }
            if (isValidMove((settings.r + 1), settings.x, settings.y, shape)) {
                ++settings.r;
                clearBuffer(settings.r, settings.x, settings.y);
            }
        }


        var getNewShape = function (r, x, y) {
            settings.xLast = settings.x;
            settings.yLast = settings.y;
            settings.r = 1 + Math.random() * DOMAINSHAPE;
            settings.r = parseInt(settings.r > DOMAINSHAPE ? (DOMAINSHAPE - 1) : settings.r, 0);
            settings.rLast = settings.r;
            var shapePosition = Math.floor(Math.random() * $.map(shapes, function () {
                return this;
            }).length);
            var texturePosition = Math.floor(Math.random() * settings.textures.length);
            shape = shapes[(shapePosition)];
            shape.texture = settings.textures[texturePosition];
        }

        var isValidMove = function (r, x, y) {
            var i, j;
            for (i = 0; i < DOMAINSHAPE; i++) {
                for (j = 0; j < DOMAINSHAPE; j++) {
                    try {
                        if (shape.blocks[r][i][j] && ((y + i) > (settings.m - 1)
                                || parseInt($(['#', settings.gridPrefix, (j + x), (i + y)].join('')).attr(settings.attrFilledGrid)) === 3)
                                ) {
                            return false;
                        }
                    } catch (e) {
                        console.log(e.stack);
                        return false
                    }

                    if (shape.blocks[r][i][j] && ((j + x) < 0 || (j + x) > settings.n - 1)) {
                        return false;
                    }
                }
            }
            return true;
        }

        var completeLines = function () {
            var $completeElements = 0;
            var data = null;
            var $_thisRowFill = null;
            var css = {backgroundColor: 'none'};
            for (i = settings.m - 1; i > 0; i--) {
                try {
                    $completeElements = $(['.', settings.gridClass, '[', settings.attrFilledGrid, '=', 3, ']'].join('')).filter(function () {
                        return this.id.match(new RegExp('^grid[0-9]{1}' + i + '$', 'gi'));
                    });

                    if ($completeElements.length === settings.n) {
                        $completeElements.css({'backgroundImage': 'none'}).attr(settings.attrFilledGrid, 0);
                        console.log(i - 1);
                        for (j = (i - 1); j > 0; j--) {
                            console.log(j);
                            var $elementsMove = $(['.', settings.gridClass, '[', settings.attrFilledGrid, '=', 3, ']'].join(''));
//                            $(['.', settings.gridClass, '[', settings.attrFilledGrid, '=', 3, ']'].join('')).each(function(){
//                                console.log($(this)[0]);
                            for (k = 0; k < $elementsMove.length; k++) {
                                $_thisRowFill = $($elementsMove[k]);
                                data = $_thisRowFill.data();
                                if ($(['#', settings.gridPrefix, data.x, data.y + 1].join(''))[0]) {                                    
                                    css.backgroundImage = $_thisRowFill.css('backgroundImage');
                                    console.log(css.backgroundImage);
                                    $_thisRowFill.css({'backgroundImage': 'none'}).attr(settings.attrFilledGrid, 0);
                                    $(['#', settings.gridPrefix, data.x, data.y + 1].join('')).css(css).attr(settings.attrFilledGrid, 3);
                                    console.group(data.x + '-' + data.y);
                                    console.log($_thisRowFill[0]);
                                    console.log($(['#', settings.gridPrefix, data.x, data.y + 1].join(''))[0]);
                                    console.groupEnd(data.x + '-' + data.y);
                                    //   delay(500);
                                }
                            }
//                            });
                        }
                    }
                } catch (e) {
                    console.log(e.stack);
                    //continue
                }
            }
            delete completeElements;
        }
        function delay(ms) {
            ms += new Date().getTime();
            while (new Date() < ms) {
            }
        }
        var startEvents = function () {
            $(window).keydown(function (e) {
//                    console.log(e.charCode || e.keyCode);
                switch (e.charCode || e.keyCode) {
                    case 37:
                        if (tetrisTimer) {
                            moveLeft();
                        }
                        break;
                    case 38:
                        if (tetrisTimer) {
                            rotateShape();
                        }
                        break;
                    case 39:
                        if (tetrisTimer) {
                            moveRight();
                        }
                        break;
                    case 40:
                        if (tetrisTimer) {
                            moveDown();
                        }
                        break;
                    case 80:
                        if (tetrisTimer) {
                            window.clearInterval(tetrisTimer);
                            tetrisTimer = null;
                        } else {
                            tetrisTimer = window.setInterval(moveDown, 600);
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
        }

        return this.each(function () {
            ini(this, options);
            return settings;
        });
    }
})(jQuery);