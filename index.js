// Code your solution in this file!

const headquarters = 42;
const pickUpLocation = 50;

function distanceFromHqInBlocks (pickUpLocation){
    return Math.abs (pickUpLocation - headquarters);
}

const blockInFeet = 264;

function distanceFromHqInFeet (pickUpLocation){
    return (Math.abs (pickUpLocation - headquarters) * blockInFeet);
}


function distanceTravelledInFeet (startingBlock,endingBlock){
    return (Math.abs (startingBlock - endingBlock) * blockInFeet);

}

let freeFeet = 400
let pricePerFoot = .02
function calculatesFarePrice (startingBlock, endingBlock) {
    let distance = distanceTravelledInFeet (startingBlock, endingBlock);
    let result;
    if (distance <= 400) {
    result = 0;
    } else if (distance > 400 && distance <= 2000) {
        result = (distance - freeFeet) * pricePerFoot;
    } else if (distance > 2000 && distance < 2500) {
        result = 25;
    } else if (distance >= 2500) {
        result = 'cannot travel that far'
    }
    console.log(distance);
    return result;
}