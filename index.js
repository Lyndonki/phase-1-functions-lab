function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) { return blocks - 42 } else { return 42 - blocks }
}


function distanceFromHqInFeet(feetHq) {
    let distanceBlocks = distanceFromHqInBlocks(feetHq);
    if (distanceBlocks > 42) { return distanceBlocks * 264 } else { return distanceBlocks * 264 }
}

const distanceTravelledInFeet = function (feet, feet2) {
    if (feet, feet2 > 42) { return (feet2 - feet) * 264 } else { return (feet - feet2) * 264 }
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0
    } else if (distance < 1600) {
        return 0.02 * (distance - 400)
    } else if (2500 > distance) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}