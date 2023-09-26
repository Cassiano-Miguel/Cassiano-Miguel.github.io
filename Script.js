var imagens = new Array();

function PreCarregar(){

    for (i=0; i < PreCarregar.arguments.length; i++){

         imagens[i] = new Image();

        imagens[i].src = PreCarregar.arguments[i];

    }

}

PreCarregar("Arrow.png","Cenario_Logo.png","Objetos_Logo.png","Personagens_Logo.png","Logo,png","Arrow.png",
"001_1.png","002_1.png","003_1.jpeg","004_1.jpeg","001_3.png","002_3.png","003_3.png","001_4.png",
"002_4.png","Notebook.png");