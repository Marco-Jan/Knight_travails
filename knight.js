var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function getKnightMoves() {
    return [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
}
function findKnightPath(start, end, boardSize) {
    if (boardSize === void 0) { boardSize = 8; }
    var queue = [{ position: start, path: [start] }];
    var visited = new Set();
    visited.add(start.toString());
    while (queue.length > 0) {
        var _a = queue.shift(), position = _a.position, path_1 = _a.path;
        if (position[0] === end[0] && position[1] === end[1]) {
            return path_1;
        }
        for (var _i = 0, _b = getKnightMoves(); _i < _b.length; _i++) {
            var move = _b[_i];
            var newX = position[0] + move[0];
            var newY = position[1] + move[1];
            var newPosition = [newX, newY];
            if (newX >= 0 && newX < boardSize &&
                newY >= 0 && newY < boardSize &&
                !visited.has(newPosition.toString())) {
                visited.add(newPosition.toString());
                queue.push({ position: newPosition, path: __spreadArray(__spreadArray([], path_1, true), [newPosition], false) });
            }
        }
    }
    return null;
}
var start = [3, 3];
var end = [0, 0];
var path = findKnightPath(start, end);
// Ergebnis ausgeben
if (path) {
    console.log("Der Springer erreicht das Ziel in ".concat(path.length - 1, " Z\u00FCgen."));
    console.log("Pfad:", path);
}
else {
    console.log("Kein Pfad gefunden.");
}
