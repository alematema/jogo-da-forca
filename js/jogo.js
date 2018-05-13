var criaJogo = function (sprite) {

	var palavraSecreta;
	var etapa = 1;
	var lacunas = [];
	
	var ganhou = function (){
		return lacunas.join('') == palavraSecreta;
	}
	
	var perdeu = function (){
		return sprite.isFinished();
	}
	
	var ganhouOuPerdeu = function (){
		return ganhou() || perdeu();
	}
	
	var reinicia = function (){
			palavraSecreta = '';
			etapa = 1;
			lacunas = [];
			sprite.reset();
	}
	
	var processaChute = function (chute){
		
		if( !chute.trim() ) throw Error('Chute inválido');
		
		var exp = new RegExp(chute,'gi'), resultado, acertou = false;
		
		while ( resultado = exp.exec(palavraSecreta) ){
			acertou = lacunas[resultado.index] = chute;
		}
		
		if( !acertou ) sprite.nextFrame();

	}

	var setPalavraSecreta = function (palavra) {
		if( !palavra.trim() ) throw Error('Palavra secreta inválida');
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
	//api
	return {
		setPalavraSecreta: setPalavraSecreta,
		getLacunas: getLacunas,
		getEtapa: getEtapa,
		processaChute : processaChute,
		ganhou : ganhou,
		perdeu : perdeu,
		ganhouOuPerdeu : ganhouOuPerdeu,
		reinicia : reinicia
	};

}
