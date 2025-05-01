// proxy-server.js
    // 1. Criar servidor Express
    // 2. Middleware para tratar todas as rotas
    // 3. Checar se já tem cache
    // 4. Se sim → ler do disco
    // 5. Se não → axios.get e salvar
    // 6. Sempre: enviar a resposta ao cliente com X-Cache: HIT/MISS
   
const axios = require('axios');
const express = require('express');
const path = require('path');
const fs = require('fs');



const app = express();

function startProxyServer(port, origin){

    app.use(async (req, res) => {
        const urlPath = req.originalUrl;
        const target = origin + urlPath;

        // Remove "http://" ou "https://" e substitui ":" e "/" por "_"
        const originSanitized = origin.replace(/^https?:\/\//, '').replace(/[:\/]/g, '_');

        // Garante que urlPath termine em algo tipo /index.html, se for "/"
        const finalPath = urlPath.endsWith('/') ? urlPath + 'index.html' : urlPath;

        // Caminho completo para o cache
        const filePath = path.join(__dirname, 'cache', originSanitized, finalPath);
        const metaPath = filePath + '.meta.json';


        try
        {
            if(!isValidCache(metaPath, 60))
            {
                console.log(`CACHE MISS: ${target}`);
                const response = await fetchDataFromServer(target);

                saveCacheToDisk(filePath, response.data, metaPath);

                res.set('X-Cache', 'MISS');
                res.set('Content-Type', response.headers['content-type']); 
                res.send(response.data);
            }else
            {
                console.log('[CACHE HIT]', filePath);
                const data = fs.readFileSync(filePath);
                res.set('X-Cache', 'HIT');
                res.send(data);
            }

        }catch(e)
        {
            console.log(e);
            res.status(502).send('Erro ao buscar conteúdo');
        }

    })

    app.listen(port, ()=> {
        console.log('listening')

    })

}

async function fetchDataFromServer(url)
{
    //Fetch from server
    try
    {
        const response = axios.get(url, { responseType : 'arraybuffer' });
        return response;

    }catch(e)
    {
        throw new Error(e);

    }

}

function saveCacheToDisk(filePath, data, metaPath)
{
    fs.mkdirSync(path.dirname(filePath), {recursive: true});
    fs.writeFileSync(filePath, data);
    const meta = {timestamp: Date.now() };
    fs.writeFileSync(metaPath, JSON.stringify(meta));


}

function isValidCache(metaPath, ttl)
{
    //se nao existir o caminho metaPath retorna falso
    // caso exista, checar o ttl
    // e retorna um valor booleano

    if(!fs.existsSync(metaPath))
    {
        return false;
    }else
    {
        const data = JSON.parse(fs.readFileSync(metaPath, 'utf8')); // {timestamp: x}
        const now = Date.now();

        return now - data.timestamp < ttl * 1000;
    }



}

module.exports = startProxyServer;