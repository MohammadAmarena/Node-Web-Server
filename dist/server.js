import { createServer } from 'http';
import { mainContent } from './content.js';
const port = 3111;
const server = createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text-plain' });
    res.write(mainContent);
    res.end();
});
server.listen(port);
console.log(`Listinig on http://localhost:${port}`);
//# sourceMappingURL=server.js.map