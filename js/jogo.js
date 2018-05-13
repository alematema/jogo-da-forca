var criaJogo = function (sprite) {

	var palavraSecreta;
	var etapa = 1;
	var lacunas = [];
	
	function isChuteErrado(chute) {
		return palavraSecreta.indexOf(chute) == -1;
	}

	var processaChute = function (chute){
		
		var exp = new RegExp(chute,'gi'), resultado, acertou = false;
		
		while ( resultado = exp.exec(palavraSecreta) ){
			acertou = lacunas[resultado.index] = chute;
		}
		
		if( !acertou ) sprite.nextFrame();

	}

	var setPalavraSecreta = function (palavra) {
		palavraSecreta = palavra;
		criaLacunas(palavra.length);
		proximaEtapa();
	};

	var setLacunas = function (chute){
		for( var i = 0; i < palavraSecreta.length; i++ ){
			if( palavraSecreta.charAt(i) == chute) lacunas[i] = chute;
		}
	}
	
	var getLacunas = function () {
		return lacunas;
	};

	var getEtapa = function () {
		return etapa;
	};

	var criaLacunas = function (length) {
		lacunas = Array(length).fill('');
	}

	var proximaEtapa = function () {
		etapa++;
	}
	//API
	return {
		setPalavraSecreta: setPalavraSecreta,
		getLacunas: getLacunas,
		getEtapa: getEtapa,
		processaChute : processaChute
	};

}
