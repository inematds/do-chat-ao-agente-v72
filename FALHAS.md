# FALHAS

| data | o que quebrou | menor correção | prompt \| infra |
|---|---|---|---|
| 2026-10-19 | tradução EN/ES: EN deixou comentário PT no bloco de código do terminal, ES traduziu a pasta `projetos`→`proyectos` (inconsistente com a aula 1), ES perdeu 1 linha vazia da tabela da fila, EN usou "networks" para redes sociais | corrigir as 4 entradas no cache `i18n/<lang>.json` e rodar `traduzir.py` de novo (0 textos novos) | prompt |
