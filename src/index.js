module.exports =function toReadable (number) {
  const word = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    ['twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'],
    ['thirty', 'thirty one', 'thirty two', 'thirty three', 'thirty four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine'],
    ['forty', 'forty one', 'forty two', 'forty three', 'forty four', 'forty five', 'forty six', 'forty seven', 'forty eight', 'forty nine'],
    ['fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight', 'fifty nine'],
    ['sixty', 'sixty one', 'sixty two', 'sixty three', 'sixty four', 'sixty five', 'sixty six', 'sixty seven', 'sixty eight', 'sixty nine'],
    ['seventy', 'seventy one', 'seventy two', 'seventy three', 'seventy four', 'seventy five', 'seventy six', 'seventy seven', 'seventy eight', 'seventy nine'],
    ['eighty', 'eighty one', 'eighty two', 'eighty three', 'eighty four', 'eighty five', 'eighty six', 'eighty seven', 'eighty eight', 'eighty nine'],
    ['ninety', 'ninety one', 'ninety two', 'ninety three', 'ninety four', 'ninety five', 'ninety six', 'ninety seven', 'ninety eight', 'ninety nine']
    ];

  const numberLength = number.toString().length;
  const numberArray = number.toString().split('');
  switch (numberLength){
    case 1:
      return word[0][number];
      break;
    case 2:
      return word[+numberArray[0]][+numberArray[1]];
      break;
    case 3:
      if(number % 100 === 0){
        return `${word[0][+numberArray[0]]} hundred`;
      }
      return `${word[0][+numberArray[0]]} hundred ${word[+numberArray[1]][+numberArray[2]]}`;
      break;
    case 4:
      if(number % 1000 === 0){
        return `${word[0][+numberArray[0]]} thousand`;
      }
      if((number % 1000) % 100 === 0){
        return `${word[0][+numberArray[0]]} thousand ${word[0][+numberArray[1]]} hundred`;
      }
      return `${word[0][+numberArray[0]]} thousand ${word[0][+numberArray[1]]} hundred ${word[+numberArray[2]][+numberArray[3]]}`;
      break;
    default:
      return 'too big number'
  }
}
