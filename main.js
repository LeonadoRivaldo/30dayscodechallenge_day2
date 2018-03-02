var addClass = function(classe, element) {
    classe.split(" ").forEach(function(classy) {
        element.classList.add(classy);
    });
}


var hashGame = function() {
    var _turn;
    var xClass = "X";
    var oClass = "O";

    var _play = function() {
        if (!_turn || _turn != xClass) {
            _turn = xClass;
        } else {
            _turn = oClass;
        }
        this.innerHTML = _turn;
    }

    var _mountCell = function(x, y) {

        //montar verificações de fim de jogo
        //addfontawnsome

        var cell = document.createElement("span");

        cell.addEventListener("click", _play);

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
        mountTable: _mountTable
    }
}();

hashGame.mountTable(document.getElementById('hash-table'));