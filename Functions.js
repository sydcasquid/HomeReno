// - paint, any amount to a total of $200. If more than $100, add 10% of the cost of 
//the paint & supplies.

function addPaintAndSupplies(totalCost, callback) {


    let cost = prompt("Enter the cost for the paint and supplies :");


    cost = parseFloat(cost);
    if (cost > 100)
        cost *= 1.1;
    // Get a handle for the paint paragraph
    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);
}

// - floor coverings, any amount to a limit of $2000. If less than $500, take 15% off 
//the cost of the floor coverings.

const flooring = function(totalCost, callback) {
    let cost = prompt("Enter the cost of the flooring:");
    cost = parseFloat(cost); 
    if (cost < 500)
        cost -= cost*.15;
    let floorCoverings = document.querySelector(".floorCoverings");
    floorCoverings.innerHTML = `Flooring $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);
}

// - furniture, any amount to a limit of $2000. If less than $500 is spent, take 10% 
//off the cost of the furniture.

const furniture = (totalCost, callback) => {
    let cost = prompt("Enter the cost of the furniture."); 
    cost = parseFloat(cost); 
    if (cost < 500)
        cost -= cost*.10;
    let furnitures = document.querySelector(".furniture");
    furnitures.innerHTML = `Furniture $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return(totalCost + cost);
}



// Totals:

const updateTotals = (cost) => {
    // Get a handle for the furniture paragraph
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
}


let totalCost = 0;
totalCost = addPaintAndSupplies(totalCost, updateTotals);
totalCost = flooring(totalCost, updateTotals);
totalCost = furniture(totalCost, updateTotals);

