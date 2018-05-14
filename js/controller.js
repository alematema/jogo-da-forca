var criaController = function (jogo) {

	$entrada = $('.entrada');
	$lacunas = $('.lacunas');

	// consulta jogo.getLacunas() e exibe para o usuário cada lacuna 
	const exibeLacunas = function () {
		$lacunas.empty();
		jogo.getLacunas().forEach(function (lacuna) {
			$('<li>')
				.addClass('lacuna')
				.text(lacuna)
				.appendTo($lacunas);
		});
	};

	// muda o texto do placeHolder do campo de entrada    
	const mudaPlaceHolder = function (texto) {
		$entrada.val('');
		$entrada.attr('placeholder', texto);
	};

	// passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 
	const guardaPalavraSecreta = function () {
		jogo.setPalavraSecreta($entrada.val().trim());
	};

	const leChute = function () {
		jogo.processaChute($entrada.val().trim().substr(0, 1));
	};

	const limpaEntrada = function () {
		$entrada.val('');
	};

	const handleEtapa1 = function () {
		try {
			guardaPalavraSecreta();
			exibeLacunas();
			mudaPlaceHolder('chute');
		} catch (err) {
			alert(err.message);
		}
	};

	const handleEtapa2 = function () {
		try {
			if (!jogo.ganhouOuPerdeu()) {
				leChute();
				exibeLacunas();
				if (jogo.ganhou()) {
					handleGanhouJogo();
				} else if (jogo.perdeu()) {
					handlePerdeuJogo();
				}
				limpaEntrada();
			}
		} catch (err) {
			alert(err.message);
		}
	};

	const handleGanhouJogo = function () {
		mudaPlaceHolder('GANHOU');
		$entrada.attr('disabled', true);
		reinicia();
	};

	const handlePerdeuJogo = function () {
		mudaPlaceHolder('PERDEU');
		$entrada.attr('disabled', true);
		reinicia();
	};
	
	const reinicia = function () {
		setTimeout(function(){
			jogo.reinicia();
			$lacunas.empty();
			$entrada.val('');
			mudaPlaceHolder('Palavra secreta');
			$entrada.attr('disabled', false);
		},1500);
	}

	// faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
	const inicia = function () {
		$entrada.keypress(function (event) {
			if (event.which == 13) {
				switch (jogo.getEtapa()) {
					case 1:
						handleEtapa1();
						break;
					case 2:
						handleEtapa2()
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
