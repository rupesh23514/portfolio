var arr=[1,2,3,4,5]
var mul=arr.map(num=> num * 2).filter(num => num > 5).reduce((acc, num) => acc + num, 0);
console.log(mul); // Output: 30

var details =async () => {
    let response = await fetch('https://dummyjson.com/users');
    let users = await response.json();
    console.log(users);
}
details()