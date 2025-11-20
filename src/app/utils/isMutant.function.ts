export function isMutant(adn: string[]): boolean {
  const N = adn.length;
  if (!N) return false;

  const matrix = adn.map(row => row.split(''));

  const directions = [
    [0, 1],   // Horizontal
    [1, 0],   // Vertical
    [1, 1],   // Diagonal
    [1, -1],  // Diagonal inversa
  ];

  let sequencesFound = 0;

  const isValidChar = (c: string) => ['A','T','C','G'].includes(c);

  // Validar caracteres
  for (let row of adn) {
    for (let c of row) {
      if (!isValidChar(c)) return false;
    }
  }

  const inBounds = (x: number, y: number) =>
    x >= 0 && x < N && y >= 0 && y < N;

  const checkDirection = (x: number, y: number, dx: number, dy: number) => {
    const char = matrix[x][y];
    for (let i = 1; i < 4; i++) {
      const nx = x + dx * i;
      const ny = y + dy * i;
      if (!inBounds(nx, ny) || matrix[nx][ny] !== char) return false;
    }
    return true;
  };

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      for (let [dx, dy] of directions) {
        if (checkDirection(x, y, dx, dy)) {
          sequencesFound++;
          if (sequencesFound > 1) return true;
        }
      }
    }
  }
  return false;
}