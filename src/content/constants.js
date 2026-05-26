(() => {
	'use strict';

	const CC = (globalThis.JohnyCounter = globalThis.JohnyCounter || {});

	CC.DOM = Object.freeze({
		CHAT_MENU_TRIGGER: '[data-testid="chat-menu-trigger"]',
		MODEL_SELECTOR_DROPDOWN: '[data-testid="model-selector-dropdown"]',
		CHAT_PROJECT_WRAPPER: '.chat-project-wrapper',
		BRIDGE_SCRIPT_ID: 'jc-bridge-script'
	});

	CC.CONST = Object.freeze({
		CACHE_WINDOW_MS: 5 * 60 * 1000,
		CONTEXT_LIMIT_TOKENS: 200000
	});

	CC.COLORS = Object.freeze({
		PROGRESS_FILL_DARK: '#2c84db',
		PROGRESS_FILL_LIGHT: '#5aa6ff',
		PROGRESS_OUTLINE_DARK: '#787877',
		PROGRESS_OUTLINE_LIGHT: '#bfbfbf',
		PROGRESS_MARKER_DARK: '#ffffff',
		PROGRESS_MARKER_LIGHT: '#111111',
		RED_WARNING: '#ce2029',
		BOLD_LIGHT: '#141413',
		BOLD_DARK: '#faf9f5'
	});

	CC.NAGS = Object.freeze({
		CHILL: [
			{ emoji: '🍺', text: 'Johny, uma cervejinha cairia bem agora, hein?' },
			{ emoji: '🎾', text: 'Bora trocar o teclado pela raquete?' },
			{ emoji: '⛳', text: 'O green ta te esperando, Dr.' },
			{ emoji: '🐟', text: 'Os peixes estao mordendo e voce aqui...' },
			{ emoji: '🎉', text: 'Tem festa hoje e voce conversando com IA?' },
		],
		WARN: [
			{ emoji: '⚖️', text: 'Nem no tribunal voce faz tantas perguntas, Johny.' },
			{ emoji: '🏌️', text: 'Esse handicap nao vai baixar sozinho. Larga o Claude.' },
			{ emoji: '🍻', text: 'A gelada ta esquentando enquanto voce digita.' },
			{ emoji: '🎣', text: 'O peixe grande ta fugindo. Vai pescar, Doutor!' },
			{ emoji: '🎾', text: 'Match point, Johny! Hora de largar o prompt.' },
		],
		CRIT: [
			{ emoji: '🚨', text: 'ALERTA JOHNY: Vai pro bar. Agora. E uma ordem judicial.' },
			{ emoji: '🔥', text: 'Johny, o Claude precisa descansar e voce tambem.' },
			{ emoji: '💀', text: 'Ate a OAB ia mandar voce parar, Doutor.' },
			{ emoji: '🏖️', text: 'RECURSO NEGADO. Va pra praia, pesque, beba, viva.' },
			{ emoji: '⛳', text: 'Hole in one no uso do Claude. Parabens, agora SAI.' },
		],
		OVER: [
			{ emoji: '☠️', text: 'Johny esgotou tudo. Hora de abrir a cerveja e aceitar.' },
			{ emoji: '🪦', text: 'Aqui jaz o limite do Johny. Descanse em paz (e va pescar).' },
			{ emoji: '🍺', text: 'Acabou, Doutor. A defesa agora e no boteco.' },
		],
	});
})();
