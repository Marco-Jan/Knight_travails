type Position = [number, number];


function getKnightMoves(): Position[] {
  return [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];
}


function findKnightPath(start: Position, end: Position, boardSize: number = 8): Position[] | null {
  const queue: Array<{ position: Position; path: Position[] }> = [{ position: start, path: [start] }];
  const visited = new Set<string>();
  visited.add(start.toString());

  while (queue.length > 0) {
    const { position, path } = queue.shift()!;

 
    if (position[0] === end[0] && position[1] === end[1]) {
      return path;
    }

 
    for (const move of getKnightMoves()) {
      const newX = position[0] + move[0];
      const newY = position[1] + move[1];
      const newPosition: Position = [newX, newY];

    
      if (
        newX >= 0 && newX < boardSize &&
        newY >= 0 && newY < boardSize &&
        !visited.has(newPosition.toString())
      ) {
        visited.add(newPosition.toString());
        queue.push({ position: newPosition, path: [...path, newPosition] });
      }
    }
  }

  return null; 
}


const start: Position = [3, 3]; 
const end: Position = [0, 0];  

const path = findKnightPath(start, end);

// Ergebnis ausgeben
if (path) {
  console.log(`Der Springer erreicht das Ziel in ${path.length - 1} Zügen.`);
  console.log("Pfad:", path);
} else {
  console.log("Kein Pfad gefunden.");
}
