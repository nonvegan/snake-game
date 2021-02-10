 function mapValue(value, initialRangeStart, initialRangeEnd, finalRangeStart, finalRangeEnd) {
     if (initialRangeEnd == initialRangeStart)
         return console.error("Can't devide by zero");
     else
         return (value - initialRangeStart) * (finalRangeEnd - finalRangeStart) / (initialRangeEnd - initialRangeStart) + finalRangeStart
 }

 function random(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }


 function getMs(fps) {
     return 1000 / fps
 }

 function pickRandomArrayItem(array) {
     if (array.length === 0) {
         return console.error("Empty Array. Can't pick an item")
     } else {
         return array[random(0, array.length)]
     }
 }