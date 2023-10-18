const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("novoLogin")
const campoNovaSenha = document.getElementById("novaSenha")
const campoRepSenha = document.getElementById("repSenha")

function cadastrar(){
    if(campoNovaSenha.value == campoRepSenha.value){ // se for igual ele entra no if
        const usuario = {
                login : campoNovoLogin.value,
                senha : campoNovaSenha.value,
        }
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
        if (bancoDeDados == null) {
            bancoDeDados = []
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "./index.html"
    }
    else{
        alert("As senhas não coincidem!")
    }
}


function login(){
    
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    let mensagem = "Usuário ou senha incorreta!";
    
    if (bancoDeDados == null){
        mensagem = "Nenhum usuário cadastrado até o momento.";
    }else{
    for(let usuario of bancoDeDados){
        if(usuario.login == login && usuario.senha == senha){
            mensagem = "Logado com sucesso!"
            localStorage.setItem("logado", JSON.stringify(usuario));
            window.location.href = "./home/home.html"
            
            break;
            }
        }
    }
    alert(mensagem)
}
function cadastro(){
  window.location.href = "./cadastro.html"
}
function voltar(){
    window.location.href = "./index.html"
}