// @param {[number, number]} start — начальные координаты [x, y]
// @param {[number, number]} finish — конечные координаты [x, y]
// @param {number[][]} map (карта) — двумерный массив размера NxM,
//   где i-й j-й элемент — время, требуемое на преодоление i-го j-го участка карты.
// @return {number} — минимально возможное время преодоления маршрута
// **/
function getMinTravelTime(start, finish, map) {
const visited = new Set();

function recursion(start) {
  visited.add(start);
  const path = map[start[1]][start[0]];
  if (start[0] === finish[0] && start[1] === finish[1]) {
    return path;
  }

  const variants = [];
  if (start[1] < map.length && !visited.has([start[0], start[1] + 1])) {
    variants.push([start[0], start[1] + 1]);
  }
  if (start[1] > 0 && !visited.has([start[0], start[1] - 1])) {
    variants.push([start[0], start[1] - 1]);
  }
  if (start[0] < map[0].length && !visited.has([start[0] + 1, start[1]])) {
    variants.push([start[0] + 1, start[1]]);
  }
  if (start[0] > 0 && !visited.has([start[0] - 1, start[1]])) {
    variants.push([start[0] - 1, start[1]]);
  }

  return Math.min(...variants.map(variant => recursion(variant))) + path;
}

return recursion(start);
}