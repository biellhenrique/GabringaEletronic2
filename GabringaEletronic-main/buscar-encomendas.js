var botaoBuscar = document.querySelector("#buscar-encomenda");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomendas");
    xhr.addEventListener("load", function(){
            var resposta = xhr.responseText;
            var encomendas = JSON.parse(resposta);
                                  (parameter) cada_encomenda: any

            encomendas.forEach(function(cada_encomenda){
                addEncomenda(cada_encomenda);
            });

    });
    xhr.send();
})