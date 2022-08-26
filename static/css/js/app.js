// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
//First, clear out any existing data
    tbody.html("");
// loop through each object in the data 
// and append a row and cells for each value in the row
data.forEach((dataRow) => {

// append a row to the table body
    let row = tbody.append("tr");

// Loop through each field in the dataRow and 
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        // add each value as a table cell (td)
        cell.text(val);
        }
    );
  }); 
}
// 
