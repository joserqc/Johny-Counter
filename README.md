# Johny Counter

Extensao de navegador que mostra contagem de tokens, timer de cache e barras de uso no [claude.ai](https://claude.ai).

Fork personalizado do [Claude Counter](https://github.com/she-llac/claude-counter) (MIT) — feito com carinho para o Johny.

## Funcionalidades

- **Contagem de tokens** — Contagem aproximada de tokens da conversa atual, com mini barra de progresso sobre o limite de 200k
- **Timer de cache** — Countdown mostrando quanto tempo a conversa permanece em cache (mais barato para continuar)
- **Barras de uso** — Uso da sessao (5h) e semanal (7 dias) com barras de progresso e countdown de reset
- **Interface em Portugues** — Todos os textos e tooltips traduzidos para PT-BR

## Instalacao

### Chrome / Edge / Chromium

1. Baixe ou clone este repositorio
2. Acesse `chrome://extensions` e ative o **Modo do desenvolvedor**
3. Clique em **Carregar sem compactacao** e selecione a pasta do projeto

### Firefox

1. Acesse `about:debugging#/runtime/this-firefox`
2. Clique em **Carregar extensao temporaria**
3. Selecione o arquivo `manifest.json`

## Como funciona

- Intercepta respostas da API do Claude para ler dados de conversa e uso
- Usa tokenizador vendorizado (`o200k_base`) para contagem aproximada de tokens
- Usa o endpoint `/usage` do Claude + dados SSE `message_limit` em tempo real
- Observa mudancas no DOM para injetar elementos de UI conforme voce navega

## Privacidade

- Todos os dados ficam locais — sem servidores externos, sem rastreamento
- Le apenas o cookie `lastActiveOrg` para consultar o endpoint `/usage` do Claude
- Faz requisicoes apenas para `claude.ai`

## Creditos

- Fork de [Claude Counter](https://github.com/she-llac/claude-counter) por she-llac (MIT)
- Contagem de tokens via [gpt-tokenizer](https://github.com/niieani/gpt-tokenizer) (MIT)

## Licenca

MIT — veja [LICENSE](./LICENSE)
