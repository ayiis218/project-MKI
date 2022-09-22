function checkPrime(params) {
   if (typeof params === 'number') {
      const left = () => {
         let array = [...`${params}`].map(Number);

         for (let index = 0; index <= array.length; index++) {
            array.shift();
            let data = Number(array.join(''));
            let divider = 0;
            for (let i = 1; i <= data; i++) {
               if (data % i == 0) {
                  divider++;
               }
            }
            divider == 2 ? (array = true) : (array = false);
         }
         return array;
      };

      const right = () => {
         let array = [...`${params}`].map(Number);

         for (let index = 0; index <= array.length; index++) {
            array.pop();
            let data = Number(array.join(''));
            let divider = 0;
            for (let i = 1; i <= data; i++) {
               if (data % i == 0) {
                  divider++;
               }
            }
            divider == 2 ? (array = true) : (array = false);
         }
         return array;
      };

      if (left() === right()) {
         return 'Both';
      } else if (left()) {
         return 'Left';
      } else if (right()) {
         return 'Right';
      } else {
         return 'False';
      }
   } else {
      return 'Data must be Integer';
   }
}

console.log(checkPrime(135731));
console.log(checkPrime(1273));
console.log(checkPrime(4689));
