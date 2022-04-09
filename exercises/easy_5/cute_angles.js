function dms(number) {
  number = String(number);
  if (!number.includes('.')) {
    console.log(`${number}°00'00"`)
  } else {
    number = number.split('.');
    let degrees = number[0];
    let minutes = ('0.' + number[1]) * 60;
    let minutesArr = String(minutes).split('.');
    let seconds = String(Math.round(('0.' + minutesArr[1]) * 60));
    if (seconds.length === 1) seconds = '0' + seconds
    minutes = minutesArr[0];
    if (minutes.length === 1) minutes = '0' + minutes
    if (isNaN(minutes)) minutes = '00';
    if (isNaN(seconds)) seconds = '00';
    console.log(`${degrees}°${minutes}'${seconds}"`)
  }
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"