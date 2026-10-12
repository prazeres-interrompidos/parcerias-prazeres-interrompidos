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

**Sincronização automática:** na administração, abre «Sincronização com a página pública» e configura uma chave fine-grained do GitHub, limitada ao repositório `parcerias-prazeres-interrompidos`, com a permissão Contents: Read and write. A chave é cifrada no servidor; não a adicionar ao código, ao repositório ou a conversas.

Depois de configurar, «Guardar alterações» guarda os dados e atualiza `docs/data.json` no GitHub. O GitHub Pages publica a atualização em alguns minutos. «Consultar estado» indica se há revisões por publicar; «Publicar agora» permite repetir a publicação sem voltar a editar os dados. Se a chave expirar ou houver uma falha do GitHub, os dados permanecem guardados na administração e a página pública conserva a última versão publicada.

A chave fine-grained deve ser criada pelo titular da conta e introduzida apenas no campo protegido da administração. A configuração inicial também publica os dados já guardados. Enquanto a configuração não for concluída, a sincronização automática ainda não está ativa.

Os totais são manuais porque certas entradas representam várias instituições. As contagens por país referem-se às entradas listadas e podem contar a mesma pessoa em várias categorias.

Os países são identificados pelo texto do registo quando não existe uma escolha manual. Uma lista `countries` define as bandeiras manualmente; `[]` significa país não indicado. Omitir esse campo ativa a identificação pelo texto.

## Código do servidor

As pastas `app/`, `db/`, `drizzle/`, `build/`, `lib/` e `scripts/` contêm o código da área de administração. Requer um ambiente Sites com autenticação ChatGPT e Cloudflare D1; não é executado pelo GitHub Pages.

Nesta cópia do código, o endereço autorizado deve ser configurado na variável de servidor `ADMIN_EMAIL`. Não adicionar palavras-passe, tokens ou credenciais ao repositório. A primeira gravação válida vincula a edição ao identificador autenticado da conta. A versão já publicada no Sites mantém a sua configuração atual.

As bandeiras são ficheiros SVG locais obtidos de FlagCDN. Os registos foram importados da lista original do projeto e o export inicial foi obtido da versão de administração em 12 de outubro de 2026.
