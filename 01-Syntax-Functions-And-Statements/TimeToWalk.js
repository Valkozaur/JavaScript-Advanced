function TimeToWalk(steps, metersPerStep, kmPerH){
    let totalMeters = steps * metersPerStep;
    let bonusMinutes = Math.floor(totalMeters / 500);

    let metersPerH = kmPerH / 60;
    
    let time = totalMeters / metersPerH + bonusMinutes;
    console.log(time);
}

TimeToWalk(4000, 0.60, 5);