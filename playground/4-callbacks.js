// setTimeout(() => {
//   console.log("Two Second are up");
// }, 2000);

// const names = ["Sadid", "Jen", "Jess"];
// const shorNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   //   const data = {
//   //     latitude: 0,
//   //     longitude: 0,
//   //   };
//   //   callback(data);

//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Dhaka", (data) => {
//   console.log(data);
// });

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;
    callback(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
