# Career Express Portfolio

Immersive single-page experience turning a professional timeline into a stylized train journey. Built with semantic HTML, layered CSS illustrations, and lightweight JavaScript interactions.

## Features
- Station hero with boarding call-to-action and optional ambient sound toggle.
- Progress-tracking route map linking each car (section) of the train.
- Cars for locomotive (future goals), education, first role, skill workshop, flagship projects, achievements, dining car testimonials, and caboose contact info.
- Animated gauges, dials, parallax background layers, and smooth scroll navigation.

## Getting Started
1. Serve the files locally (any static server works). For example:
   ```bash
   python -m http.server 8000
   ```
2. Open `http://localhost:8000` in your browser.
3. Toggle the ambient train audio via the control in the departure board.

The layout is responsive for desktop and mobile widths and uses Google Fonts (`Bebas Neue` for display headings and `IBM Plex Sans` for body copy).

## Guia para testar e acompanhar pelo Visual Studio Code
As etapas abaixo estão em português conforme solicitado:

1. **Abrir o projeto**
   - Instale o [Visual Studio Code](https://code.visualstudio.com/) se ainda não tiver.
   - Abra o VS Code e use `File › Open Folder...` (ou `Arquivo › Abrir Pasta...`) para selecionar a pasta do projeto `TrainCv`.

2. **Extensões úteis**
   - Instale a extensão **Live Server** (Ritwick Dey) para pré-visualizar rapidamente o site.
   - Opcional: instale **ESLint** e **Prettier** para manter o código formatado e com feedback imediato.

3. **Rodar um servidor local**
   - Use o terminal integrado (`Ctrl + ``) para executar o comando padrão:
     ```bash
     python -m http.server 8000
     ```
   - Alternativamente, com o Live Server instalado, clique em `Go Live` no canto inferior direito para iniciar um servidor automático.

4. **Acompanhar mudanças em tempo real**
   - Ao salvar alterações nos arquivos `index.html`, `styles.css` ou `main.js`, o Live Server recarrega o navegador automaticamente.
   - Se estiver usando o servidor Python, recarregue a aba do navegador manualmente para ver as atualizações.

5. **Ferramentas integradas do VS Code**
   - **Source Control** (`Ctrl + Shift + G`): veja o histórico de alterações, faça commits e acompanhe o diff antes de versionar.
   - **Live Preview (opcional)**: a extensão oficial da Microsoft permite abrir um painel dentro do VS Code com o site em execução.
   - **Split View** (`Ctrl + \`): compare arquivos lado a lado (útil para ajustar CSS e HTML simultaneamente).

6. **Testar responsividade**
   - Abra as DevTools do navegador (`Ctrl + Shift + I`) e use o modo responsivo para checar o layout mobile.
   - No VS Code, utilize a extensão *Responsive Viewer* ou abra o preview em uma janela estreita para simular diferentes larguras.

7. **Encerrar o servidor**
   - No terminal integrado, pressione `Ctrl + C` para parar o servidor Python ou use o botão `Stop Server` do Live Server.

Seguindo esse fluxo você consegue editar, testar e acompanhar toda a experiência do “Career Express” diretamente pelo Visual Studio Code sem sair do editor.
