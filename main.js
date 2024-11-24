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