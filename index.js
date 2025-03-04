
function countFlavors(flavors) {
    const flavorList = flavors.split(",").map(f => f.trim().toLowerCase());
    const flavorCount = {};

    for (const flavor of flavorList) {
        flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    }

    return flavorCount;
}

function promptUserForFlavors() {
    const userInput = prompt("Enter your froyo flavors (comma-separated):", "vanilla,vanilla,strawberry,coffee");
    if (userInput) {
        const flavorCount = countFlavors(userInput);
        console.table(flavorCount);
        alert("Check the console for your flavor breakdown!");
    }
}

// Run when the page loads
promptUserForFlavors();
