const array = [1, 4, 2, 3, 5, 3, 2, 4];

function remove(data) {
   try {
      if (data !== undefined) {
         const duplicate = data.filter((element, index) => {
            return data.indexOf(element) === index;
         });
         return duplicate.sort((a, b) => a - b);
      } else {
         return 'Data Notfound';
      }
   } catch (error) {
      return error;
   }
}

console.log(remove(array));
