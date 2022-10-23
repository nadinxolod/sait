function user_hello(){
let UserName = prompt("введите имя", "Имя");
alert(`Привет,${UserName}`);
let result = confirm("Вам есть 18?")
if (result) {
    alert ("хорошо");
} 
else {
    alert("жаль")
}
}
user_hello();
