<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>README - caching-proxy</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 40px;
      background-color: #f9f9f9;
      color: #333;
    }
    code {
      background-color: #eee;
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
    }
    pre {
      background-color: #eee;
      padding: 10px;
      border-radius: 4px;
      overflow-x: auto;
    }
    h1, h2, h3 {
      color: #222;
    }
    a {
      color: #0366d6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <h1>caching-proxy</h1>
  <p><strong>Servidor proxy com cache local</strong> desenvolvido em Node.js. Redireciona requisições HTTP para um servidor de origem, armazena as respostas no disco e serve a partir do cache quando possível.</p>

  <h2>⚙️ Funcionalidades</h2>
  <ul>
    <li>Repassa requisições para um servidor de origem remoto.</li>
    <li>Salva as respostas em disco, criando cache local.</li>
    <li>Define cabeçalho <code>X-Cache: HIT</code> ou <code>MISS</code> na resposta.</li>
    <li>Evita múltiplas requisições desnecessárias ao servidor remoto.</li>
  </ul>

  <h2>🚀 Como usar</h2>
  <p>Execute o script principal com os seguintes parâmetros:</p>

  <pre><code>node index.js --port 3000 --origin https://exemplo.com --ttl 60</code></pre>

  <ul>
    <li><code>--port</code>: Porta onde o servidor proxy será iniciado (ex: 3000)</li>
    <li><code>--origin</code>: URL base do servidor de origem para onde as requisições serão redirecionadas</li>
    <li><code>--ttl</code>: Tempo de vida (em segundos) de cada entrada de cache (Time To Live)</li>
  </ul>

  <p>Depois de iniciado, você pode acessar a aplicação via navegador:</p>
  <pre><code>http://localhost:3000</code></pre>

  <h2>📦 Instalação</h2>
  <pre><code>git clone https://github.com/seu-usuario/caching-proxy.git
cd caching-proxy
npm install</code></pre>

  <h2>📁 Estrutura do Cache</h2>
  <p>As respostas são armazenadas em:</p>
  <pre><code>cache/&lt;host&gt;/&lt;caminho&gt;</code></pre>
  <p>Por exemplo:</p>
  <pre><code>cache/
└── exemplo.com/
    └── index.html
    └── index.html.meta.json</code></pre>

  <h2>📜 Licença</h2>
  <p>MIT License</p>

</body>
</html>
