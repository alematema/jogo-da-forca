var criaController = function (jogo) {

	$entrada = $('.entrada');
	$lacunas = $('.lacunas');

	// consulta jogo.getLacunas() e exibe para o usuário cada lacuna 
	var exibeLacunas = function () {
		$lacunas.empty();
		jogo.getLacunas().forEach(function (lacuna) {
			$('<li>')
				.addClass('lacuna')
				.text(lacuna)
				.appendTo($lacunas);
		});
	};


	// muda o texto do placeHolder do campo de entrada    
	var mudaPlaceHolder = function (texto) {
		$entrada.val('');
		$entrada.attr('placeholder', texto);
	};

	// passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 
	var guardaPalavraSecreta = function () {
		jogo.setPalavraSecreta($entrada.val().trim());
	};

	var leChute = function () {
		jogo.processaChute($entrada.val().trim());
	};

	var limpaEntrada = function () {
		$entrada.val('');
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

						if ( ! jogo.ganhouOuPerdeu() ) {
							
							leChute();
							
							exibeLacunas();

							if (jogo.ganhou()) {
								mudaPlaceHolder('GANHOU');
								$entrada.attr('disabled', true);
							} else if (jogo.perdeu()) {
								mudaPlaceHolder('PERDEU');
								$entrada.attr('disabled', true);
							}
							
							limpaEntrada();
						}

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
