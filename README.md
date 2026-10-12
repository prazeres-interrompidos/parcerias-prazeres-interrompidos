# Parcerias — Prazeres Interrompidos

Diretório de pessoas e instituições parceiras, com pesquisa por nome, categoria e país, bandeiras e interface adaptada ao computador e telemóvel.

## Publicar no GitHub Pages

No repositório, abrir **Settings → Pages** e escolher:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/docs**

Clicar em **Save**. Aguardar a publicação indicada pelo GitHub. O endereço previsto é `https://prazeres-interrompidos.github.io/parcerias-prazeres-interrompidos/`.

Para integrar no Google Sites: Inserir → Incorporar → Por URL e usar o endereço publicado pelo GitHub Pages.

## Administração e dados

A administração protegida está em https://parcerias-prazeres-interrompidos.jauntymink64.chatgpt.site/?admin=1 . O botão Administração da versão pública abre essa página.

**Base de dados única:** a página pública consulta diretamente `/api/directory` no servidor Sites. «Guardar alterações» atualiza a base de dados; a página pública obtém esses dados ao abrir, ao regressar à página e automaticamente a cada 30 segundos enquanto estiver visível. Não é necessário autorizar escritas no GitHub nem republicar o site a cada edição.

`docs/data.json` é uma cópia de reserva. Se a consulta ao servidor falhar, a página mostra essa cópia e apresenta um aviso. Essa reserva não é atualizada automaticamente; pode ser substituída por uma exportação recente obtida em «Descarregar cópia».

A consulta é pública. As operações de escrita verificam no servidor a conta autenticada do administrador, o seu identificador e a origem do pedido. A API pública não devolve identificadores de conta nem credenciais. O CORS de leitura permite a origem do GitHub Pages.

Os totais são manuais porque certas entradas representam várias instituições. As contagens por país referem-se às entradas listadas e podem contar a mesma pessoa em várias categorias.

Os países são identificados pelo texto do registo quando não existe uma escolha manual. Uma lista `countries` define as bandeiras manualmente; `[]` significa país não indicado. Omitir esse campo ativa a identificação pelo texto.

## Código do servidor

As pastas `app/`, `db/`, `drizzle/`, `build/`, `lib/` e `scripts/` contêm o código da área de administração e da API pública de leitura. Requer um ambiente Sites com autenticação ChatGPT e Cloudflare D1; não é executado pelo GitHub Pages.

Nesta cópia do código, o endereço autorizado deve ser configurado na variável de servidor `ADMIN_EMAIL`. Não adicionar palavras-passe, tokens ou credenciais ao repositório. A primeira gravação válida vincula a edição ao identificador autenticado da conta. A versão já publicada no Sites mantém a sua configuração atual.

As bandeiras são ficheiros SVG locais obtidos de FlagCDN. Os registos foram importados da lista original do projeto e o export inicial foi obtido da versão de administração em 12 de outubro de 2026.
