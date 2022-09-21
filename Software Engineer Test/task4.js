const array = ['flower', 'flow', 'flight'];

function prefix(data) {
   if (!data[0] || data.length == 1) return data[0] || '';
   const i = 0;

   while (data[0][i] && data.every((w) => w[i] === data[0][i])) i++;

   return data[0].substr(0, i).toLowerCase();
}

console.log(prefix(array));
