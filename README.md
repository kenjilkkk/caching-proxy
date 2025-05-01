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
  <p><strong>Servidor proxy com cache local</strong> desenvolvido em Node.js usando <code>Express</code> e <code>Axios</code>.</p>

  <h2>⚙️ Funcionalidades</h2>
  <ul>
    <li>Redireciona requisições para um servidor de origem (como GitHub Pages).</li>
    <li>Armazena respostas localmente em disco (cache).</li>
    <li>Responde com <code>X-Cache: HIT</code> ou <code>MISS</code>.</li>
    <li>Evita requisições repetidas ao servidor de origem.</li>
  </ul>

  <h2>📦 Instalação</h2>
  <pre><code>git clone https://github.com/seu-usuario/caching-proxy.git
cd caching-proxy
npm install</code></pre>

  <h2>🚀 Como usar</h2>
  <p>Em seu arquivo principal (<code>index.js</code>, por exemplo):</p>
  <pre><code>const startProxyServer = require('./proxy-server');
startProxyServer(3000, 'https://kenjilkkk.github.io');</code></pre>

  <p>Depois, acesse <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> no navegador.</p>

  <h2>📁 Estrutura de cache</h2>
  <p>Os arquivos são salvos em <code>cache/&lt;host sanitizado&gt;/&lt;url_path&gt;</code>. Exemplo:</p>
  <pre><code>cache/
└── kenjilkkk.github.io/
    └── index.html
    └── assets/
        └── main.css
    └── index.html.meta.json</code></pre>

  <h2>🧠 TTL (Time to Live)</h2>
  <p>O tempo de validade do cache é de 60 segundos (padrão), configurado diretamente no código.</p>

  <h2>📜 Licença</h2>
  <p>MIT License</p>

</body>
</html>
