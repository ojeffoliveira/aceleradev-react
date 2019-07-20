//Modifique a função sum para que ela use o operador rest e funcione com qualquer numero de parametros
const sum = (function() {
    "use strict";
    return function sum(...valores) {
        let soma = 0;
        for (i = 0; i < valores.length; i++) {
            soma = soma + valores[i];
        }
        return soma;
    };
})();
console.log(sum(1, 2, 3)); // 6