class SpreadSheet {
  sheetArray = [];
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;

    for (var i = 0; i < columns; i++) {
      this.sheetArray[i] = [];
    }
  }

  update(row, column, data) {
    //debugger;
    this.sheetArray[row][column] = data;
  }

  print() {
    for (let i = 0; i <= this.rows - 1; i++) {
      for (let j = 0; j <= this.columns - 1; j++) {
        console.log(this.sheetArray[i][j]);
      }
      console.log("\n");
    }
  }
}

let spreadSheet = new SpreadSheet(4, 3);
spreadSheet.update(0, 0, "bob");
spreadSheet.update(0, 1, "10");
spreadSheet.update(0, 2, "foo");
spreadSheet.update(1, 0, "alice");
spreadSheet.update(1, 1, "5");
