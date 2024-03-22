export function timeConversion(s) {
  // Write your code here
  const [_hour, _minute, _second, _time_period] = [
    ...s.substr(0, s.length - 2).split(':'),
    s.substr(-2),
  ];

  if (_time_period === 'PM') {
    return `${numberToString(Number(_hour) + 12)}:${_minute}:${_second}`;
  } else {
    return `${_hour}:${_minute}:${_second}`;
  }

  function numberToString(num) {
    return num > 9 ? `${num}` : `0${num}`;
  }
}

const example = '07:05:45PM';

console.log(timeConversion(example));
