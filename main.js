const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;


const botoes = document.querySelectorAll('.parametro-senha__botao');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const Numeros = '0123456789';
const Simbolos = '"!@#$%¨&*()_+=-';
const forcaSenha = document.querySelector('.forca');

botoes [0].onclick = diminuiTamanho;
botoes [1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
    tamanhoSenha--;
    } 

    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if(tamanhoSenha < 30){
    tamanhoSenha++;
    }
    
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha')
const checkbox = document.querySelectorAll('.checkbox')

for(let i = 0; i < checkbox.length; i++){
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + Numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + Simbolos;
    }

    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    ClassificaSenha();
}

function ClassificaSenha(){
    if(tamanhoSenha > 20){
    forcaSenha.classList.add('forte');;
    } else if ( 10 < tamanhoSenha < 20) {
       forcaSenha.classList.add('media');
    } else if (tamanhoSenha < 10){
        forcaSenha.classList.add('fraca');
    }
}



console.log(botoes);