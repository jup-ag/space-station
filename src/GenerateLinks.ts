const fs = require('fs');
const path = require('path');

function generateLinks(directory, baseUrl) {
  const files = fs.readdirSync(directory);
  return files
    .filter(
      (file) =>
        (file.endsWith('.md') || file.endsWith('.mdx')) && // Include only Markdown files
        path.basename(file).toLowerCase() !== 'index.md' && // Exclude index.md
        path.basename(file).toLowerCase() !== 'index.mdx' // Exclude index.mdx
    )
    .sort((a, b) => {
      // Extract leading numbers for sorting
      const getNumber = (filename) => {
        const match = filename.match(/^(\d+)-/); // Match numbers at the beginning followed by a dash
        return match ? parseInt(match[1], 10) : 999; // Default to 999 for files without numbers
      };
      return getNumber(a) - getNumber(b);
    })
    .map((file) => ({
      text: path
        .basename(file, path.extname(file))
        .replace(/^\d+-/, '') // Remove leading numbers and dash
        .replace(/-/g, ' ') // Replace remaining dashes with spaces
        .replace(/^\w/, (c) => c.toUpperCase()), // Capitalize the first letter
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
