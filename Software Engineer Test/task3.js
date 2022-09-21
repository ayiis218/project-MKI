const array = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function find(data) {
   const missArr = [];
   const length = Math.max(...data);
   const start = data.indexOf(0) > -1 ? 0 : 1;
   for (i = start; i < length; i++) {
      if (data.indexOf(i) < 0) {
         missArr.push(i);
      }
   }
   return parseInt(missArr);
}

console.log(find(array));
