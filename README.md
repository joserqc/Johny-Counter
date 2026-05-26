# Johny Counter

Extensão de navegador que mostra contagem de tokens, timer de cache, barras de uso e **cutucadas personalizadas** no [claude.ai](https://claude.ai).

Fork personalizado do [Claude Counter](https://github.com/she-llac/claude-counter) (MIT) — feito com carinho para o Johny.

## Funcionalidades

- **Contagem de tokens** — Contagem aproximada de tokens da conversa atual, com mini barra de progresso sobre o limite de 200k
- **Timer de cache** — Countdown mostrando quanto tempo a conversa permanece em cache (mais barato para continuar)
- **Barras de uso** — Uso da sessão (5h) e semanal (7 dias) com barras de progresso e countdown de reset
- **Cutucadas personalizadas** — Mensagens divertidas que escalam conforme o uso do Claude
- **Interface em Português** — Todos os textos e tooltips em PT-BR com acentuação correta

## Sistema de Cutucadas

| Uso | Nível | Exemplos |
|-----|-------|----------|
| 15%+ | CHILL (azul) | "Uma cervejinha cairia bem agora" / "Bora trocar o teclado pela raquete?" |
| 50%+ | WARN (amarelo) | "Nem no tribunal você faz tantas perguntas" / "A turma do clube tá te esperando" |
| 80%+ | CRIT (vermelho) | "Vai pro clube. Agora. É uma ordem judicial." / "Seus filhos vão crescer e você aqui" |
| 99%+ | OVER (pulsante) | "Aqui jaz o limite do Johny. Os amigos mandam abraço do clube." |

Mensagens aleatorias (sem repetir consecutiva), com animação de entrada e nível OVER com pulso.

## Instalação

### Chrome / Edge / Chromium

1. Baixe ou clone este repositório
2. Acesse `chrome://extensions` e ative o **Modo do desenvolvedor**
3. Clique em **Carregar sem compactação** e selecione a pasta do projeto

## Como funciona

- Intercepta respostas da API do Claude para ler dados de conversa e uso
- Usa tokenizador vendorizado (`o200k_base`) para contagem aproximada de tokens
- Usa o endpoint `/usage` do Claude + dados SSE `message_limit` em tempo real
- Observa mudanças no DOM para injetar elementos de UI conforme você navega

## Privacidade

- Todos os dados ficam locais — sem servidores externos, sem rastreamento
- Lê apenas o cookie `lastActiveOrg` para consultar o endpoint `/usage` do Claude
- Faz requisições apenas para `claude.ai`

## Créditos

- Fork de [Claude Counter](https://github.com/she-llac/claude-counter) por she-llac (MIT)
- Contagem de tokens via [gpt-tokenizer](https://github.com/niieani/gpt-tokenizer) (MIT)

## Licença

MIT — veja [LICENSE](./LICENSE)
