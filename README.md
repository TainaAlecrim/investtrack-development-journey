# InvestTrack — Development Journey

Site estático de acompanhamento público do desenvolvimento do InvestTrack.

## Visualizar localmente
Abra `index.html` no navegador. O site não exige build, framework ou instalação de dependências.

## Atualizar o conteúdo
Edite `data.js`:
- `progress`: progresso geral de 0 a 100.
- `currentVersion`: versão atual.
- `progressCaption`: legenda do progresso.
- `roadmap`: status das etapas (`planned`, `active` ou `done`).
- `releases`: histórico de versões.
- `technologies`: stack tecnológica.
- `deliverables`: entregas previstas.

Depois, publique novamente os arquivos no serviço de hospedagem.

## Publicar no GitHub Pages
1. Crie um repositório público no GitHub, por exemplo `investtrack-development-journey`.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. No GitHub, acesse Settings → Pages.
4. Em Build and deployment, escolha Deploy from a branch.
5. Selecione `main` e `/ (root)` e salve.
6. Aguarde a publicação. O GitHub exibirá o endereço público do site em Settings → Pages.

## Publicar no Netlify
Você também pode criar um novo site no Netlify e fazer deploy manual da pasta descompactada, ou conectar o repositório GitHub.

## Observações
- O conteúdo inicial registra o projeto como em planejamento; não afirma que funcionalidades já foram implementadas.
- Datas e releases futuras são metas previstas, sujeitas a alteração.
- A prévia do dashboard usa valores fictícios e está identificada como ilustrativa.
- O site é estático e não possui painel administrativo/CMS. Para atualizar releases sem editar arquivos, será necessário adicionar futuramente um CMS ou fluxo de atualização conectado ao Git.
