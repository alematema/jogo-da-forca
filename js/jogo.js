var criaJogo = function () {

	var palavraSecreta;
	var etapa = 1;
	var lacunas = [];

	var setPalavraSecreta = function (palavra) {
		palavraSecreta = palavra;
		setLacunas(palavra.length);
		proximaEtapa();
	};

	var getLacunas = function () {
		return lacunas;
	};

	var getEtapa = function () {
		return etapa;
	};

	var setLacunas = function (quantidade) {
		for (var i = 0; i < quantidade; i++) lacunas.push('');
	}

	var proximaEtapa = function () {
		etapa++;
	}

	return {
		setPalavraSecreta: setPalavraSecreta,
		getLacunas: getLacunas,
		getEtapa: getEtapa
	};

}
