function RoadRadar(speed, area){
    let speedLimit = 0;
    let hasSpeeded = false;
    let status = '';
    let speedingSize = 0;

    switch(area){
        case 'motorway':
            speedLimit = 130;
            if(speed > speedLimit){
                speedingSize = speed - speedLimit;
                hasSpeeded = true;          
            }
            break;

        case 'interstate':
            speedLimit = 90;
            if(speed > speedLimit){
                speedingSize = speed - speedLimit;
                hasSpeeded = true;         
            }
            break;

        case 'city':
            speedLimit = 50;
            if(speed > speedLimit){
                speedingSize = speed - speedLimit;
                hasSpeeded = true;         
            }
            break;

            case 'residential':
                speedLimit = 20;
            if(speed > speedLimit){
                speedingSize = speed - speedLimit;
                hasSpeeded = true;         
            }
            break;
    }

    if(!hasSpeeded){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
    else{
        if(speedingSize < 20){
            status = 'speeding';
        }
        else if(speedingSize < 40){
            status = 'excessive speeding';
        }
        else{
            status = 'reckless driving';
        }

        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

RoadRadar(40, 'city');
