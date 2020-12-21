// Carter Alvarez


// from data.js
var tableData = data;

// Declare
let tbody = d3.select("tbody");

// Build a table using a function
function buildTable(data){
    // clear the existing data
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row `tr` to the Table Body `tbody`
        let row = tbody.append("tr");
        // `Object.values` & `forEach` to Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

// Create the button action with the datetime properties
function handleClick(){
    // Prevent page from refreshing when it shouldnt
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Make sure the date input gives you the correct filter using an if statement;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);

    }

    // Build the table
    buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);
