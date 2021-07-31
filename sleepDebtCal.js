const getSleepHours = day => {
  day = day.toLowerCase();
  if (day === 'monday'){
    return 8;
  }else if(day === 'tuesday'){
    return 8;
  }else if(day === 'wednesday'){
    return 9;
  }else if (day === 'thursday'){
    return 7;
  }else if(day === 'friday'){
    return 8;
  }else if (day === 'saturday'){
    return 4;
  }else if (day === 'sunday'){
    return 10;
  }else {
    return 'Enter a day';
  }
}
//console.log(getSleepHours(''));

const getActualSleepHours = () => {
    let sum = 0;
    let sleepArr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    for (let i in sleepArr) {
        sum += getSleepHours(sleepArr[i]);
    }
    return sum;
}

//console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log(`You had ${actualSleepHours}/${idealSleepHours} hours of sleep.Perfect amount of sleep`);
  }else if(actualSleepHours > idealSleepHours){
    console.log(`You had ${actualSleepHours}/${idealSleepHours} hours of sleep. More sleep than needed`);
  }else if(actualSleepHours < idealSleepHours){
    console.log(`You had ${actualSleepHours}/${idealSleepHours} hours of sleep. Get some rest`);
  }
}

calculateSleepDebt();

