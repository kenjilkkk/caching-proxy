# caching-proxy

**Servidor proxy com cache local** desenvolvido em Node.js. Redireciona requisições HTTP para um servidor de origem, armazena as respostas no disco e serve a partir do cache quando possível.

## ⚙️ Funcionalidades

- Repassa requisições para um servidor de origem remoto.
- Salva as respostas em disco, criando cache local.
- Define cabeçalho `X-Cache: HIT` ou `MISS` na resposta.
- Evita múltiplas requisições desnecessárias ao servidor remoto.

## 🚀 Como usar

Execute o script principal com os seguintes parâmetros:

```bash
node index.js --port 3000 --origin https://exemplo.com --ttl 60
