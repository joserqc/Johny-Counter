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
			{ emoji: '⛳', text: 'O green tá te esperando, Dr.' },
			{ emoji: '👨‍👧‍👦', text: 'As crianças querem brincar com o pai, Johny!' },
			{ emoji: '🎉', text: 'Tem festa hoje e você conversando com IA?' },
		],
		WARN: [
			{ emoji: '⚖️', text: 'Nem no tribunal você faz tantas perguntas, Johny.' },
			{ emoji: '🏌️', text: 'Esse handicap não vai baixar sozinho. Larga o Claude.' },
			{ emoji: '👫', text: 'A turma do clube tá te esperando, Doutor.' },
			{ emoji: '🎾', text: 'Match point, Johny! Hora de largar o prompt.' },
			{ emoji: '🏡', text: 'Sua esposa já perguntou onde você tá. Vai lá.' },
		],
		CRIT: [
			{ emoji: '🚨', text: 'ALERTA JOHNY: Vai pro clube. Agora. É uma ordem judicial.' },
			{ emoji: '👨‍👧‍👦', text: 'Johny, seus filhos vão crescer e você aqui no Claude.' },
			{ emoji: '💀', text: 'Até a OAB ia mandar você parar, Doutor.' },
			{ emoji: '🏌️', text: 'RECURSO NEGADO. Vai pro campo de golf, Dr. Johny.' },
			{ emoji: '⛳', text: 'Hole in one no uso do Claude. Parabéns, agora SAI.' },
		],
		OVER: [
			{ emoji: '☠️', text: 'Johny esgotou tudo. Larga o teclado e vai curtir a família.' },
			{ emoji: '🪦', text: 'Aqui jaz o limite do Johny. Os amigos mandam abraço do clube.' },
			{ emoji: '⛳', text: 'Acabou, Doutor. O próximo tee time é agora.' },
		],
	});
})();
