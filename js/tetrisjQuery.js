
(function ($) {
    $.fn.tetrisjQuery = function (options) {


        var DOMAINSHAPE = 4;
        var LINESTOLEVELUP = 4;
        var INCREASESPEED = 100;
        var FPS = 400;
        var el;
        var $el;
        var $gridNextShapeEl;
        var isStartedGame = false;

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
                        [1, 1, 0, 0], //third form 90°
                        [1, 0, 0, 0],
                        [1, 0, 0, 0],
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
                        [1, 0, 0, 0], //second form 90°
                        [1, 1, 0, 0],
                        [0, 1, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 1, 1, 0], //third form 90°
                        [1, 1, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [1, 0, 0, 0], //third form 90°
                        [1, 1, 0, 0],
                        [0, 1, 0, 0],
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
                        [1, 0, 0, 0], //third form 90°
                        [1, 1, 0, 0],
                        [1, 0, 0, 0],
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
        var score = 0;
        var lines = 0;
        var level = 0;
        var tablePunctuation = {1: 4, 2: 8, 3: 16, 4: 24};

        var defaults = {
            n: 9,
            m: 20,
            nextSizeN: 5,
            nextSizeM: 6,
            textures: ['url(img/rule0.jpg)', 'url(img/rule1.jpg)', 'url(img/rule2.jpg)', 'url(img/rule3.jpg)', 'url(img/rule4.jpg)'],
            currentShape: null,
            r: 0,
            x: 2,
            y: 0,
            rLast: 0,
            xLast: 0,
            gridPrefix: 'grid',
            gridNextShapeEl: '#nextShapePanel',
            gridNextShapePrefix: 'gridNextShape',
            gridClass: '.tetrisGrid',
            gridNextShapeClass: '.nextSharpGrid',
            attrFilledGrid: 'filled-shape',
            elementtoFill: 'div',
            yLast: 0,
            newGameButton: '',
            overlayPausedGame: '',
            menuGameControllers: '',
            gameControllers: '',
            cancelGameButton: '',
            menuGameOver: '',
            closeControllerMenu: '',
            menuGamePaused: '',
            continueGame: '',
            newGamePanelButton: '',
            scoreElement: '',
            lineElement: '',
            levelElement: '',
            kLinesFound: '',
            timeAnimationWindow: 400,
            fps: FPS
        };

        var settings = null;

        var ini = function (element, options) {
            el = element;
            $el = $(element);
            settings = $.extend({}, defaults, options);
            $gridNextShapeEl = $(settings.gridNextShapeEl);
            settings.$lineElement = $(settings.lineElement);
            settings.$scoreElement = $(settings.scoreElement);
            settings.$levelElement = $(settings.levelElement);

            generateGrid();
            generateNextShapeGrid();

            startEvents();

        }

        var generateGrid = function () {
            var k = 0;
            for (var i = 0; i < settings.m; i++) {
                for (var j = 0; j < settings.n; j++) {
                    var $grid = $(['<div id="', settings.gridPrefix, j, i, '" class="', settings.gridClass.replace('.', ''), '">', '</div>'].join(''));
                    $grid.data({x: j, y: i});
                    $el.append($grid);
                    ++k;
                }
                $el.append('<div class="breakFloat"></div>');
            }
        }

        var generateNextShapeGrid = function () {
            var k = 0;
            for (var i = 0; i < settings.nextSizeN; i++) {
                for (var j = 0; j < settings.nextSizeM; j++) {
                    var $grid = $(['<div id="', settings.gridNextShapePrefix, j, i, '" class="', settings.gridNextShapeClass.replace('.', ''), '">', '</div>'].join(''));
                    $grid.data({x: j, y: i});
                    $gridNextShapeEl.append($grid);
                    ++k;
                }
                $gridNextShapeEl.append('<div class="breakFloat"></div>');
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

        var drawNextShape = function () {
            var i, j;
            $(settings.gridNextShapeClass).removeAttr('style');
            for (i = 0; i < DOMAINSHAPE; i++) {
                for (j = 0; j < DOMAINSHAPE; j++) {
                    if (nextShape.blocks[nextShape.r][i][j]) {
                        $(['#', settings.gridNextShapePrefix, (j + 1), (i + 1)].join('')).css({'backgroundImage': nextShape.texture});
                    }
                }
            }
        }

        var moveDown = function (texture) {

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
                if (!getNewShape(nextShape)) {
                    window.clearInterval(tetrisTimer);
                    showMenuGameOver();
                    return false;
                }
                showNextShape();
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
            var rotation = settings.r;
            if ((rotation + 1) >= (DOMAINSHAPE)) {
                rotation = -1;
            }
            if (isValidMove((rotation + 1), settings.x, settings.y, shape)) {
                if ((settings.r + 1) >= (DOMAINSHAPE)) {
                    settings.r = -1;
                }
                ++settings.r;
                clearBuffer(settings.r, settings.x, settings.y);
            }
        }

        var randomShape = function () {
            var shapePosition = Math.floor(Math.random() * $.map(shapes, function () {
                return this;
            }).length);
            var newShape = jQuery.extend(true, {}, shapes);

            return newShape[(shapePosition)];
        }

        var randomTexture = function () {
            var texturePosition = Math.floor(Math.random() * settings.textures.length);
            return settings.textures[texturePosition];
        }

        var getNewShape = function (nextShape) {
            settings.xLast = settings.x;
            settings.yLast = settings.y;

            if (!nextShape) {
                shape = randomShape();
                settings.r = 1 + Math.random() * DOMAINSHAPE;
                settings.r = parseInt(settings.r > DOMAINSHAPE ? (DOMAINSHAPE - 1) : settings.r, 0);
                settings.rLast = settings.r;
                shape.texture = randomTexture();
            } else {
                settings.r = nextShape.r;
                settings.rLast = nextShape.r;
                shape = nextShape;
                shape.texture = nextShape.texture;
            }

            return isValidMove(settings.r, settings.x, settings.y);
        }

        var showNextShape = function () {
            nextShape = randomShape();
            nextShape.texture = randomTexture();
            nextShape.r = 1 + Math.random() * DOMAINSHAPE;
            nextShape.r = parseInt(nextShape.r > DOMAINSHAPE ? (DOMAINSHAPE - 1) : nextShape.r, 0);
            drawNextShape();
        }

        var isValidMove = function (r, x, y) {
            var i, j;
            if (r < 0) {
                r = 0;
            }
            for (i = 0; i < DOMAINSHAPE; i++) {
                for (j = 0; j < DOMAINSHAPE; j++) {
                    try {
                        if (shape.blocks[r][i][j] && ((y + i) > (settings.m - 1)
                                || parseInt($(['#', settings.gridPrefix, (j + x), (i + y)].join('')).attr(settings.attrFilledGrid)) === 3)
                                ) {
                            return false;
                        }
                    } catch (e) {
                        return false;
                    }

                    if (shape.blocks[r][i][j] && ((j + x) < 0 || (j + x) > settings.n - 1)) {
                        return false;
                    }
                }
            }
            return true;
        }

        /**
         * Searching if exist complete lines and 
         * calculate next level
         */
        var completeLines = function () {
            var currentLevel = 0;
            var $completeElements = null;
            var data = null;
            var $_thisRowFill = null;
            var css = {backgroundColor: 'none'};
            var kLinesFound = 0;
            for (var i = settings.m - 1; i > 0; i--) {
                $completeElements = $([settings.gridClass, '[', settings.attrFilledGrid, '=', 3, ']'].join('')).filter(function () {
                    return this.id.match(new RegExp('^grid[0-9]{1}' + i + '$', 'gi'));
                });
                if ($completeElements.length === settings.n) {
                    kLinesFound++;
                    $completeElements.css({'backgroundImage': 'none'}).attr(settings.attrFilledGrid, 0).promise().done(function () {
                        for (var j = (i - 1); j > -1; j--) {
                            var $elementsMove = $([settings.gridClass, '[', settings.attrFilledGrid, '=', 3, ']'].join('')).filter(function () {
                                return this.id.match(new RegExp('^grid[0-9]{1}' + j + '$', 'gi'));
                            }).each(function () {
                                $_thisRowFill = $(this);
                                data = $_thisRowFill.data();
                                if ($(['#', settings.gridPrefix, data.x, data.y + 1].join(''))[0]) {
                                    css.backgroundImage = $_thisRowFill.css('backgroundImage');
                                    $_thisRowFill.css({'backgroundImage': 'none'}).attr(settings.attrFilledGrid, 0);
                                    $(['#', settings.gridPrefix, data.x, data.y + 1].join('')).css(css).attr(settings.attrFilledGrid, 3);
                                }
                            });
                            if ($elementsMove.length > 0) {
                                i++;
                            }
                        }
                    });
                }
            }

            if (!isNaN(tablePunctuation[kLinesFound])) {
                settings.$scoreElement.text(tablePunctuation[kLinesFound] + parseInt(settings.$scoreElement.text()));
                lines = (kLinesFound += parseInt(settings.$lineElement.text()));
                settings.$lineElement.text(lines);
            }
            
            if (lines % LINESTOLEVELUP === 0 && kLinesFound > 0) {
                currentLevel = parseInt(settings.$levelElement.text()) + 1;                
                settings.$levelElement.text(currentLevel);
                level = currentLevel;
                settings.fps -= (INCREASESPEED);
                window.clearInterval(tetrisTimer);
                tetrisTimer = null;
                tetrisTimer = window.setInterval(moveDown, settings.fps);
            }

            delete $completeElements;
            delete data;
            delete $_thisRowFill;
            delete css;
            delete i;
            delete currentLevel;
        }

        var showMenuGameOver = function (event) {
//            isStartedGame = false;
            $(settings.newGameButton).not(settings.newGamePanelButton).removeAttr('change-button', 1).text('Start Game');
            $(settings.menuGameOver).fadeIn(settings.timeAnimationWindow);
        }

        var showPausedMenu = function (event) {
            $(settings.menuGamePaused).stop(true, true).fadeToggle(settings.timeAnimationWindow);
        }

        var toggleGameControllersMenu = function (event) {
            $(settings.menuGameControllers).stop(true, true).fadeToggle(settings.timeAnimationWindow);
        }

        var hidePausedMenu = function (event) {
            $(settings.menuGamePaused).stop(true, true).fadeOut(settings.timeAnimationWindow);
            tetrisTimer = window.setInterval(moveDown, settings.fps);
        }

        var hideMenuGameOver = function (event) {
            $(settings.menuGameOver).fadeOut(settings.timeAnimationWindow);
        }

        var newGame = function (event) {
            if (!isStartedGame) {
                hideMenuGameOver();
                window.clearInterval(tetrisTimer);
                tetrisTimer = null;
                $(settings.gridClass).removeAttr('style').removeAttr(settings.attrFilledGrid);
                settings.$lineElement.text(0);
                settings.$scoreElement.text(0);
                settings.$levelElement.text(0);
                settings.r = 0;
                settings.x = 2;
                settings.y = 0;
                settings.rLast = (settings.r || 0);
                settings.xLast = (settings.xLast || settings.x);
                settings.yLast = (settings.yLast || settings.y);
                settings.fps = FPS;
                getNewShape();
                showNextShape();
                draw(settings.r, settings.x, settings.y, shape.texture);
                tetrisTimer = window.setInterval(moveDown, settings.fps);
            }

            isStartedGame = true;
        }

        var tooglePause = function (callback, event) {

            if (!isStartedGame) {
                callback(event);
                return true;
            }

            if (tetrisTimer) {
                window.clearInterval(tetrisTimer);
                tetrisTimer = null;
                callback(event);
            } else {
                tetrisTimer = window.setInterval(moveDown, settings.fps);
                callback(event);
            }
            return true;
        }

        var changeToPause = function ($this) {
            $this.not(settings.newGamePanelButton).attr('change-button', 1).text('Pause Game');
        }

        var startEvents = function () {
            $(window).keydown(function (event) {
                console.log(event.charCode || event.keyCode);
                switch (event.charCode || event.keyCode) {
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
                    case 78:
                        if (isStartedGame) {
                            isStartedGame = false;
                            newGame();
                        }
                        break;
                    case 79:
                        tooglePause(toggleGameControllersMenu);
                        break;
                    case 80:
                        if (!isStartedGame) {
                            return false;
                        }
                        tooglePause(showPausedMenu, event);
                        break;
                    case 83:
                        if (!isStartedGame) {
                            newGame();
                            changeToPause($(settings.newGameButton));
                        }
                        break;
                }
            });
            $(settings.newGameButton).click(function (event) {
                var $this = $(this);
                if (parseInt($this.attr('change-button'))) {
                    tooglePause(showPausedMenu);
                    return true;
                }
                changeToPause($this);
                newGame();
                delete $this;
                return true;
            });
            $(settings.cancelGameButton).click(hideMenuGameOver);
            $(settings.overlayPausedGame).click(hidePausedMenu);
            $(settings.continueGame).click(hidePausedMenu);
            $(settings.gameControllers).click(function (event) {
                tooglePause(toggleGameControllersMenu);
            });
            $(settings.closeControllerMenu).click(function (event) {
                tooglePause(toggleGameControllersMenu);
            });
        }

        return this.each(function () {
            ini(this, options);
            return settings;
        });
    }
})(jQuery);