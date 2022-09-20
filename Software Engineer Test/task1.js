const data = [
   {
      session_name: 'first test',
      classes: [
         {
            class_name: undefined,
            students: [
               {
                  student_name: 'John',
               },
            ],
         },
      ],
   },
   {
      session_name: null,
      classes: [
         {
            class_name: 'second class',
            students: [
               {
                  student_name: 'Doe',
               },
            ],
         },
      ],
   },
];

function remove(key, value) {
   const dataRemove = value === undefined || value === null;
   if (!dataRemove) {
      return value;
   }
   return undefined;
}

const result = JSON.stringify(data, remove);

console.log(result);
