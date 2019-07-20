//Copie todos os conteudo de arr1 dentro do arr2 usando spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    "use strict";
    arr2 = [...arr1]; // change this line
})();
console.log(arr2);