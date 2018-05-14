var criaJogo = sprite => {

	let palavraSecreta;
	let etapa = 1;
	let lacunas = [];
	const ganhou = () => lacunas.join('') == palavraSecreta;
	const perdeu = () => sprite.isFinished();
	const ganhouOuPerdeu = () => ganhou() || perdeu();
	const getLacunas = () => lacunas;
	const getEtapa = () => etapa;
	const criaLacunas = length => lacunas = Array(length).fill('');
	const proximaEtapa = () => etapa++;
	const reinicia = () => {
		palavraSecreta = '';
		etapa = 1;
		lacunas = [];
		sprite.reset();
	}
	const processaChute = chute => {
		if (!chute.trim()) throw Error('Chute inválido');
		const exp = new RegExp(chute, 'gi');
		let resultado, acertou = false;
		while (resultado = exp.exec(palavraSecreta)) {
			acertou = lacunas[resultado.index] = chute;
		}
		if (!acertou) sprite.nextFrame();
	}

	const setPalavraSecreta = palavra => {
		if (!palavra.trim()) throw Error('Palavra secreta inválida');
		palavraSecreta = palavra;
		criaLacunas(palavra.length);
		proximaEtapa();
	};

	const setLacunas = chute => {
		for (let i = 0; i < palavraSecreta.length; i++) {
			if (palavraSecreta.charAt(i) == chute) lacunas[i] = chute;
		}
	}

	//api
	return {
		setPalavraSecreta,
		getLacunas,
		getEtapa,
		processaChute,
		ganhou,
		perdeu,
		ganhouOuPerdeu,
		reinicia
	};

}
