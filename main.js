document.getElementById('mostrarbs').addEventListener('click', ()=>{
    const codeElement = document.getElementById('bs');
    codeElement.style.display = codeElement.style.display === 'none' ? 'block' : 'none';
    let mostrarbs = document.getElementById('mostrarbs')
    mostrarbs.textContent = mostrarbs.textContent === 'Código' ? 'Ocultar' : 'Código';
})
document.getElementById('mostraris').addEventListener('click', ()=>{
    const codeElement = document.getElementById('is');
    codeElement.style.display = codeElement.style.display === 'none' ? 'block' : 'none';
    let mostraris = document.getElementById('mostraris')
    mostraris.textContent = mostraris.textContent === 'Código' ? 'Ocultar' : 'Código';
})
document.getElementById('mostrarss').addEventListener('click', ()=>{
    const codeElement = document.getElementById('ss');
    codeElement.style.display = codeElement.style.display === 'none' ? 'block' : 'none';
    let mostrarss = document.getElementById('mostrarss')
    mostrarss.textContent = mostrarss.textContent === 'Código' ? 'Ocultar' : 'Código';
})
document.getElementById('mostrarfb').addEventListener('click', ()=>{
    const codeElement = document.getElementById('fb');
    codeElement.style.display = codeElement.style.display === 'none' ? 'block' : 'none';
    let mostrarfb = document.getElementById('mostrarfb')
    mostrarfb.textContent = mostrarfb.textContent === 'Código' ? 'Ocultar' : 'Código';
})

let arr = []
document.getElementById('testarbs').addEventListener('click', ()=>{
    randomArray()
    document.getElementById('resbs').innerHTML = `<br>Array Gerado: [${arr}]`
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    document.getElementById('resbs').innerHTML += `<br>Array Ordenado: [${arr}]`
})

document.getElementById('testaris').addEventListener('click', ()=>{
    randomArray()
    document.getElementById('resis').innerHTML = `<br>Array Gerado: [${arr}]`
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    document.getElementById('resis').innerHTML += `<br>Array Ordenado: [${arr}]`
})

document.getElementById('testarss').addEventListener('click', ()=>{
    randomArray()
    document.getElementById('resss').innerHTML = `<br>Array Gerado: [${arr}]`
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    document.getElementById('resss').innerHTML += `<br>Array Ordenado: [${arr}]`
})

document.getElementById('testarfb').addEventListener('click', ()=>{
    let n = 10
    const fib = [0, 1]; 
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    fib.slice(0, n);
    document.getElementById('resfb').innerHTML = `Resultado: [${fib}]`

})


function gerarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomArray(){
    for(let i = 0; i < 5; i++){
        arr[i] = gerarNumeroAleatorio(10,1)
    }
}


            // Criar um novo parágrafo  
            let novoParagrafo = document.createElement("p");  
            novoParagrafo.textContent = "Este é um parágrafo criado dinamicamente.";  
            
            // Adicionar o parágrafo ao corpo do documento  
            document.body.appendChild(novoParagrafo);


            //usando laço for
            for (let i = 0; i < 5; i++) {  
                console.log("Iteração número: " + i);  
            }

            //usando laço while
    let contador = 0;  
    while (contador < 5) {  
    console.log("Contador: " + contador);  
    contador++;  
}

//usando if, else , if-else
let nota = 85;  

if (nota >= 90) {  
    console.log("Nota A");  
} else if (nota >= 80) {  
    console.log("Nota B");  
} else if (nota >= 70) {  
    console.log("Nota C");  
} else {  
    console.log("Nota D ou F");  
}

// ----------------------- GERAR MATRIZ IMPAR E PAR -----------------------
let matriz5 = [
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0]
];

function gerarAleatorio(max, min) {
   let valorAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
   return valorAleatorio;
}

function gerarMatriz4() {
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         matriz5[i][j] = gerarAleatorio(1, 50);
      }
   }
   displayMatriz();
}

function displayMatriz() {
   let MatrizContainer = document.getElementById('MatrizContainer');
   MatrizContainer.innerHTML = '';

   let table = document.createElement('table');
   for (let i = 0; i < 7; i++) {
      let row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
         let cell = document.createElement('td');
         cell.textContent = matriz5[i][j];
         row.appendChild(cell);
      }
      table.appendChild(row);
   }
   MatrizContainer.appendChild(table);
   somarPares();
}

function somarPares() {
   let somaPar = 0;
   let somaImpar = 0;
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         if (matriz5[i][j] % 2 === 0) {
            somaPar += matriz5[i][j];
         } else {
            somaImpar += matriz5[i][j];
         }
      }
   }
   let somaParContainer = document.getElementById('somaParContainer');
   somaParContainer.textContent = somaPar;
   let somaImparContainer = document.getElementById('somaImparContainer');
   somaImparContainer.textContent = somaImpar;
}

document.getElementById('gerarMatrizes2Btn').addEventListener('click', gerarMatriz4);

// ----------------------- GERAR MATRIZES 1 E 2 E SOMAR -----------------------
let matriz1 = [
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0]
];

let matriz2 = [
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0]
];

let matriz3 = [
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0]
];

function gerarMatriz1() {
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         matriz1[i][j] = gerarAleatorio(20, 1);
      }
   }
   return matriz1;
}

function gerarMatriz2() {
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         matriz2[i][j] = gerarAleatorio(20, 1);
      }
   }
   return matriz2;
}

function somarMatrizes() {
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
      }
   }
   return matriz3;
}

function exibirMatriz(matriz, elementoId) {
   let html = '<table>';
   for (let row of matriz) {
      html += '<tr>';
      for (let value of row) {
         html += `<td>${value}</td>`;
      }
      html += '</tr>';
   }
   html += '</table>';
   document.getElementById(elementoId).innerHTML = html;
}

document.getElementById('gerarMatrizesBtn').addEventListener('click', () => {
   gerarMatriz1();
   gerarMatriz2();
   somarMatrizes();

   exibirMatriz(matriz1, 'matriz1');
   exibirMatriz(matriz2, 'matriz2');
   exibirMatriz(matriz3, 'matriz3');
});

// ----------------------- GERAR MATRIZ E SOMA DIVISIVEIS POR 3 -----------------------
let matriz4 = [
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0]
];

function gerarMatriz3() {
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         matriz4[i][j] = gerarAleatorio(1, 20);
      }
   }
   console.table(matriz4);
   exibirMatriz1();
}

function exibirMatriz1() {
   let matrizDiv = document.getElementById('matriz4');
   let html = '<table>';
   for (let i = 0; i < matriz4.length; i++) {
      html += '<tr>';
      for (let j = 0; j < matriz4[i].length; j++) {
         html += `<td>${matriz4[i][j]}</td>`;
      }
      html += '</tr>';
   }
   html += '</table>';
   matrizDiv.innerHTML = html;
}

function somarTres() {
   let soma = 0;
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         if (matriz4[i][j] % 3 === 0) {
            soma += matriz4[i][j];
         }
      }
   }
   document.getElementById('somaDivisiveisPor3').innerText = `A soma dos elementos divisíveis por 3 é: ${soma}`;
}

// Event listener para gerar a matriz 3 e somar elementos divisíveis por 3
document.getElementById('gerarMatrizes1Btn').addEventListener('click', function () {
   gerarMatriz3();
   somarTres();
});
