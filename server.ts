import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import AdmZip from 'adm-zip';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API endpoint to download the theme as a zip file
  app.get('/api/download-theme', (req, res) => {
    try {
      const zip = new AdmZip();
      const themeFolders = ['assets', 'blocks', 'config', 'layout', 'locales', 'sections', 'snippets', 'templates'];
      
      for (const folder of themeFolders) {
        try {
          const folderPath = path.join(process.cwd(), folder);
          zip.addLocalFolder(folderPath, folder);
        } catch (err) {
          console.warn(`Could not add folder ${folder}:`, err);
        }
      }
      
      const zipBuffer = zip.toBuffer();
      
      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename="BroHive-Theme.zip"');
      res.send(zipBuffer);
    } catch (e) {
      console.error('Failed to create zip file', e);
      res.status(500).json({ error: 'Failed to create zip file' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
