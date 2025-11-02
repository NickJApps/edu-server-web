import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function mainPage(res) {
    let data = '<!DOCTYPE html>' + 
        '< html lang = "en" >' +
            '<head>'+
                '<meta charset="UTF-8">' +
                    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
                        '<title>Target</title>' + 
                    '</head>' +
                    '<body>' +
                        '<h1>Planned activities</h1>' +
                    '</body>' +
                '</html>';
     res.end(data);
}
