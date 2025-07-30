const accountId = 144553; //const variable cannot be changed
let accountEmail = "sksinghs318@gmail.com"; //let variable can be change
var accountPassword = "Sksingh123";
accountCity = "Varanasi";
let cityCode;
//its your choice to use semicollon or not in javascript
/* prefer not to use var variable due to block scope issue*/

// accountId = 2 not allowed because it has const keyword that means its value cannot be changed

accountEmail = "sksing@gmail.com";
accountPassword = "12345";
accountCity = "ghaziabad";

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, cityCode]); //console.table is used to print multiple variables in table form
