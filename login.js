//函式宣告被提吊
hey();
function hey() {
  console.log("hey");
}

// 函式表達式不會被提吊
const hello = function () {
  console.log("hello");
};
hello();

// 為參數提供預設值
const exPerson = {
  name: {
    first: "Shane",
    last: "McConkey",
  },
  favActivity: "skiing",
};
function logActivity(person = exPerson) {
  return `${person.name.first} loves ${person.favActivity}`;
}
console.log(logActivity());

// 箭頭函式
// const lordify = function (firstname) {
//   return `${firstname} loves skiing`;
// };
const lordify = (firstname) => `${firstname} loves skiing`;
const lordify2 = (firstname, land) => `${firstname} loves ${land}`;
console.log(lordify("Happy"));
console.log(lordify2("Happy", "Taiwan"));
// 回傳物件，用小括號包覆物件語法
const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName,
});
console.log(person("Happy", "123"));
