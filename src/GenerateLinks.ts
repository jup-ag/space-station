const fs = require('fs');
const path = require('path');

function generateLinks(directory, baseUrl) {
  const files = fs.readdirSync(directory);
  return files
    .filter(
      (file) => 
        (file.endsWith('.md') || file.endsWith('.mdx')) &&
        path.basename(file).toLowerCase() !== 'index.md' &&
        path.basename(file).toLowerCase() !== 'index.mdx'
    )
    .map((file) => ({
      text: path.basename(file, path.extname(file)).replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase()),
      link: `${baseUrl}/${path.basename(file, path.extname(file))}`,
    }));
}

// Directories to generate links for
const directories = {
  dca: { path: path.resolve(__dirname, '../guides/100-spot/300-dca'), baseUrl: '/guides/spot/dca' },
  va: { path: path.resolve(__dirname, '../guides/100-spot/400-va'), baseUrl: '/guides/spot/va' },
};

const linkData = {};
Object.entries(directories).forEach(([key, { path: dirPath, baseUrl }]) => {
  linkData[key] = generateLinks(dirPath, baseUrl);
});

fs.writeFileSync(path.resolve(__dirname, '../src/links/links.json'), JSON.stringify(linkData, null, 2));
