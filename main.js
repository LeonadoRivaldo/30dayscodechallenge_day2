var addClass = function(classe, element) {
    classe.split(" ").forEach(function(classy) {
        element.classList.add(classy);
    });
}


var hashGame = function() {

    var _matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    var games = 0;
    var xWins = 0;
    var oWins = 0;

    var _turn;
    var xClass = "fas fa-times";
    var oClass = "far fa-circle";


    //0,0 [[{x:0,y:0},{x:1,y:0},{x:2,y:0}],[{x:0,y:0},{x:1,y:1},{x:2,y:2}],[{x:0,y:1},{x:0,y:1},{x:0,y:2}]]
    //1,0 [[{x:0,y:0},{x:1,y:0},{x:2,y:0}],[{x:1,y:0},{x:1,y:1},{x:1,y:2}]]
    //2,0 [[{x:0,y:0},{x:1,y:0},{x:2,y:0}],[{x:2,y:0},{x:1,y:1},{x:0,y:2}],[{x:2,y:0},{x:2,y:1},{x:2,y:2}]

    //continuar desenhar
    //0,1 
    //1,1 
    //2,1

    //0,2
    //1,2
    //2,2

    //
    var _checkVitory = function() {
        var padroes = []
    }

    //jogadas
    var _play = function(elem) {
        var x = elem.matrixPos.x;
        var y = elem.matrixPos.y;
        if (_matrix[y][x] === 0) {

            if (!_turn || _turn != xClass) {
                _turn = xClass;
            } else {
                _turn = oClass;
            }
            var html = "<i class='" + _turn + "'></i>";
            _matrix[y][x] = _turn === xClass ? 'x' : 'o';
            elem.innerHTML = html;
        } else {
            alert("não!");
        }

        // console.table(_matrix);
        //check for end

    }

    //monta a celula do jogo
    var _mountCell = function(x, y) {
        var cell = document.createElement("span");
        cell.addEventListener("click", function() {
            this.matrixPos = { x: x, y: y };
            _play(this);
        });
        addClass('hash-cell border border-dark d-flex justify-content-center align-items-center', cell);
        var classe = "";
        if (x === 1 && y === 0) {
            classe = "border-top-0";
        } else if (x === 0 && y === 1) {
            classe = "border-left-0";
        } else if (x === 2 && y === 1) {
            classe = "border-right-0";
        } else if (x === 1 && y === 2) {
            classe = "border-bottom-0";
        } else {
            classe = "border-0";
        }
        cell.classList.add(classe);
        return cell;
    }

    //monta o tabuleiro
    var _mountTable = function(tableContainer) {
        for (var y = 0; y < 3; y++) {
            var row = document.createElement("div");
            addClass("hash-row d-flex justify-content-center", row);
            for (var x = 0; x < 3; x++) {
                row.appendChild(_mountCell(x, y));
            }
            tableContainer.appendChild(row);
        }
    }


    return {
        start: _mountTable,
        xWins: xWins,
        oWins: oWins,
        totalGames: games
    }
};