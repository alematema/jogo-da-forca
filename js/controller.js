var criaController = function (jogo) {
	
	$entrada = $('.entrada');
	$lacunas = $('.lacunas');

	// consulta jogo.getLacunas() e exibe para o usuário cada lacuna 
	var exibeLacunas = function () {
		for( var i = 0; i < jogo.getLacunas().length; i++ ){
				$lacunas.append($('<div>').addClass('lacuna'));
		}
	};

	// muda o texto do placeHolder do campo de entrada    
	var mudaPlaceHolder = function (texto) {
		$entrada.val('');
		$entrada.attr('placeholder', texto);
	};

	// passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 
	var guardaPalavraSecreta = function () {
		jogo.setPalavraSecreta($entrada.val());
	};

	// faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
	var inicia = function () {
		$entrada.keypress(function (event) {
			if (event.which == 13) {
				switch (jogo.getEtapa()) {
					case 1:
						guardaPalavraSecreta();
						exibeLacunas();
						mudaPlaceHolder('chute');
						break;
					case 2:
						alert('etapa 2 - falta implementar');
						break;
				}
			}
		});
	};

	// retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado. 
	return {
		inicia: inicia
	};

}
