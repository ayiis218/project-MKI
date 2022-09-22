function subSet(params) {
   let data = [];
   let result = [];
   let index = 0;
   for (index; index <= params; index++) {
      data.push(index);
   }
   for (let i = 0; i <= data.length; i++) {
      if (result.length >= 0) {
         let newData = data.map((item) => {
            if (item == data[data.length - 1]) {
               return data.pop();
            } else {
               return item;
            }
         });
         result.unshift(newData);
      }
      if (data.length == 1) {
         result.unshift(data);
      }
   }
   return result;
}

console.log(subSet(2));
