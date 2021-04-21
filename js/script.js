if(window.SimpleSlide) {

	new SimpleSlide({
		slide: "quote", // nome do atributo data-slide="principal"
	  time: 5000 // tempo de transição dos slides
	});

	new SimpleSlide({
		slide: "portfolio",
	  time: 5000,
	  nav: true
	});

}

if(window.SimpleAnime) {
	new SimpleAnime();
}


if(window.SimpleForm) {
	new SimpleForm({
	  form: ".formphp", // seletor do formulário
	  button: "#enviar", // seletor do botão
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
	});
}

// Mostrar e Ocultar

var btn = document.querySelector('#modelos');

var categoria = document.querySelector('.categoria');

btn.addEventListener('click', function(){

if(categoria.style.display === 'block'){
	categoria.style.display = 'none';
} else{
	categoria.style.display = 'block';
}
});

var btn2 = document.querySelector('#modelos2');

var categoria2 = document.querySelector('.categoria2');

btn2.addEventListener('click', function(){
	
if(categoria2.style.display === 'block'){
	categoria2.style.display = 'none';
} else{
	categoria2.style.display = 'block';
}
});

var btn3 = document.querySelector('#modelos3');

var categoria3 = document.querySelector('.categoria3');

btn3.addEventListener('click', function(){
	
if(categoria3.style.display === 'block'){
	categoria3.style.display = 'none';
} else{
	categoria3.style.display = 'block';
}
});