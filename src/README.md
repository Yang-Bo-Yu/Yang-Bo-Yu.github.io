# Bo-Yu Yang Academic Portfolio

This is the source code for the personal academic portfolio of Bo-Yu Yang.

The site is built using [VitePress](https://vitepress.dev/) with a custom minimalist academic theme.

## Local Development

If you'd like to run a preview of the site locally:

1. **Install dependencies** (requires Node.js):
   ```sh
   npm install
   ```

2. **Start the local development server:**
   ```sh
   npm run docs:dev
   ```

3. **Access the site:**
   Open your browser to `http://localhost:5173/`

## Content Structure

- **`src/index.md`**: The home page of the portfolio, containing the brief biography, profile picture, and main navigation links.
- **`src/projects/`**: Directory containing markdown files for projects.
- **`src/publications/`**: Directory containing markdown files mapping to academic publications.
- **`src/resume.md`**: The digital resume page.
- **`src/.vitepress/config.mts`**: The core configuration file that controls the metadata, top navigation bar (`nav`), and footer social links (such as GitHub, LinkedIn, and Google Scholar).
- **`src/.vitepress/theme/`**: Contains the custom Vue Layout (`VFLayout.vue`) and CSS (`style.css`) that structures the minimalist, centered academic aesthetic.

## Deployment

The site is configured to automatically deploy to GitHub Pages upon pushing to the main branch via GitHub Actions.

```sh
git add .
git commit -m "Update portfolio content"
git push origin main
```
