# Do chat ao agente — curso (INEMA Learning v7.2)

Visão geral da formação [Do chat ao agente](https://eventos.inema.pro/do-chat-ao-agente/) em 6 aulas curtas: terminal (OSWork), o seu Jarvis (INTELECTO), filas (inemaccbot) e redes no automático (r7e, promoavatar, xviral), com plano de execução e vídeo explicativo no fim.

**Abrir o curso:** https://inematds.github.io/do-chat-ao-agente-v72/

**Outros idiomas:** [English](https://inematds.github.io/do-chat-ao-agente-v72/en/) · [Español](https://inematds.github.io/do-chat-ao-agente-v72/es/) — seletor PT · EN · ES no topo de cada página.

Primeiro curso no formato **INEMA Learning v7.2**: layout de plataforma (barra lateral com capítulos e progresso, área central larga) com a didática v7 (objetivo em uma linha, diagrama clicável primeiro, texto curto, simulação onde ensina, modelos com botão copiar, prática com "pronto quando" e teste com resposta comentada).

## Como funciona

| Arquivo | O que é |
|---|---|
| `conteudo/pt/curso.json` | nome, vídeos, página inicial e textos da interface |
| `conteudo/pt/aulas/*.json` | uma aula por arquivo (seções: diagrama, passos, código, prática, simulação, vídeo, quiz, resumo, links) |
| `gerar.py` | monta `index.html` e `aulas/<slug>/index.html` |
| `validar.py` | portão de qualidade (`--links` confere os links externos) |
| `assets/` | CSS, JS, imagens e legendas |

```bash
python3 gerar.py && python3 validar.py --links
```

EN e ES: `conteudo/en/` e `conteudo/es/` saem de `traduzir.py` (skill formato-curso-v72, Codex da assinatura) com cache em `i18n/<lang>.json`; `python3 gerar.py --lang en|es` monta `en/` e `es/`. Imagens com texto têm versão `-en`/`-es` (`capa`, `hero/jarvis`).

HTML estático, sem build e sem backend. O progresso fica só no navegador de quem estuda.

Os vídeos são da série *Do chat ao agente* ([jornada-agentes](https://github.com/inematds/jornada-agentes), release `video-v2.0.0`). Os exercícios completos estão no mesmo repositório.

Conteúdo aberto e gratuito · [INEMA.CLUB](https://inema.club)

## Mais no INEMA.CLUB

- [Ficha completa deste curso](https://www.inema.club/cursos/323-do-chat-ao-agente-terminal-assistente-proprio-filas-e-redes-no-automatico/)
- [Guia: como aprender inteligência artificial](https://www.inema.club/aprender-inteligencia-artificial/)
- [Todos os cursos](https://www.inema.club/cursos/)
