// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

// set variable for tbody
var tbody = d3.select("tbody")

tableData.forEach((alienSighting) => {
    var row = tbody.append("tr");
    Object.entries(alienSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });