// Prompt the user for the number of rows and columns
const rows = prompt("Enter the number of rows:");
const columns = prompt("Enter the number of columns:");

// Create an empty matrix with the given dimensions
const matrix = [];
for (let i = 0; i < rows; i++) {
  matrix.push([]);
  for (let j = 0; j < columns; j++) {
    matrix[i].push(0);
  }
}




console.log(matrix);
