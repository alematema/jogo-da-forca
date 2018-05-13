var criaJogo = function (sprite) {

	var palavraSecreta;
	var etapa = 1;
	var lacunas = [];
	
	function chuteErrado(chute) {
		return palavraSecreta.indexOf(chute) == -1;
	}

	var processaChute = function (chute){
		
		if( chuteErrado(chute) ){
			sprite.nextFrame();
		}else{
			setLacunas(chute);
		}
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
