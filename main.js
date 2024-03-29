/*var minhaPromise = function(){
    return new Promise(function(resolve,reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/enilton');
        xhr.send(null);

        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4) {
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });


//usando axios
axios.get('https://api.github.com/users/enilton')
.then(function(response) {
    console.log(response.data.avatar_url);
})
.catch(function(error) {
    console.warn(error);
});*/


/*
    1º exercício
    Crie uma função que recebe a idade de um usuário e retorna uma 
    Promise que depois de 2segundos retornará se usuário é maior 
    ou não que 18 anos. Se o usuário ter mais que 18 anos deidade 
    o resultado deve cair no .then, caso contrário, no .catch
*/
/*function checaIdade (idade) {
    return new Promise(function(resolve,reject) {
       setTimeout(function() {
           if (idade >= 18) {
               resolve();
           } else {
               reject();
           }
       },2000)
    });
}

checaIdade(20)
    .then(function (){
        console.log("Maior que 18");
    })
    .catch (function () {
        console.log("Menor que 18");
    });
*/

/*
    2º exercício
    Crie uma tela com um <input> que deve receber o nome de um usuário 
    no Github. Após digitar onome do usuário e clicar no botão buscar 
    a aplicação deve buscar pela API do Github (conformeURL abaixo) os
     dados de repositórios do usuário e mostrá-los em tela:URL de 
     exemplo: https://api.github.com/users/diego3g/repos
*/



/*function pesquisar() {
    var user = document.getElementById('user').value;
    if (!user) return;
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            listarRepositorios(response.data);
        })
        .catch(function (error) {
            console.warn(error);
        });
}

function listarRepositorios(data) {
    for (item of data) {
        var textElement = document.createTextNode(item.name);
        var liElement = document.createElement('li');
        liElement.appendChild(textElement);
        listElements.appendChild(liElement);
    }
}*/


/*3º exercício
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela 
no lugarda lista apenas enquanto a requisição estiver acontecendo:<li>Carregando...</li>
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404*/

function mostrarCarregamento() {
    listElements.innerHTML = "";
    var textElement = document.createTextNode("Caregando...");
    var liElement = document.createElement('li');
    liElement.appendChild(textElement);
    listElements.appendChild(liElement);
}

function mostrarErro(codigo) {
    listElements.innerHTML = "";
    var textElement = "";

    if (codigo === 404) {
        textElement = document.createTextNode("Usuário não encontrado!");
    } else {
        textElement = document.createTextNode('Um erro ocorreu...');
    }
    var liElement = document.createElement('li');
    liElement.appendChild(textElement);
    listElements.appendChild(liElement);
}


function pesquisar() {
    mostrarCarregamento();
    var user = document.getElementById('user').value;
    if (!user) return;
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            listarRepositorios(response.data);
        })
        .catch(function (response) {
            console.warn(response);
            mostrarErro(response.response.status);
        });
}

function listarRepositorios(data) {
    listElements.innerHTML = "";
    for (item of data) {
        var textElement = document.createTextNode(item.name);
        var liElement = document.createElement('li');
        liElement.appendChild(textElement);
        listElements.appendChild(liElement);
    }
}