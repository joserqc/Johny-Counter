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
			{ emoji: '👨‍👧‍👦', text: 'As criancas querem brincar com o pai, Johny!' },
			{ emoji: '🎉', text: 'Tem festa hoje e voce conversando com IA?' },
		],
		WARN: [
			{ emoji: '⚖️', text: 'Nem no tribunal voce faz tantas perguntas, Johny.' },
			{ emoji: '🏌️', text: 'Esse handicap nao vai baixar sozinho. Larga o Claude.' },
			{ emoji: '👫', text: 'A turma do clube ta te esperando, Doutor.' },
			{ emoji: '🎾', text: 'Match point, Johny! Hora de largar o prompt.' },
			{ emoji: '🏡', text: 'Sua esposa ja perguntou onde voce ta. Vai la.' },
		],
		CRIT: [
			{ emoji: '🚨', text: 'ALERTA JOHNY: Vai pro clube. Agora. E uma ordem judicial.' },
			{ emoji: '👨‍👧‍👦', text: 'Johny, seus filhos vao crescer e voce aqui no Claude.' },
			{ emoji: '💀', text: 'Ate a OAB ia mandar voce parar, Doutor.' },
			{ emoji: '🏌️', text: 'RECURSO NEGADO. Vai pro campo de golf, Dr. Johny.' },
			{ emoji: '⛳', text: 'Hole in one no uso do Claude. Parabens, agora SAI.' },
		],
		OVER: [
			{ emoji: '☠️', text: 'Johny esgotou tudo. Larga o teclado e vai curtir a familia.' },
			{ emoji: '🪦', text: 'Aqui jaz o limite do Johny. Os amigos mandam abraco do clube.' },
			{ emoji: '⛳', text: 'Acabou, Doutor. O proximo tee time e agora.' },
		],
	});
})();
