const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){
   const match = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return match;
}

function fuzzyMatch(drivers, string){
    const softMatch = drivers.filter(driversName => driversName.startsWith(string))
    return softMatch;
}

function matchName(drivers, string){
    const lastMatch = drivers.filter(driver => driver.name === string)
    return lastMatch;
}