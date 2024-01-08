# Deploy Storybook to GitHub Pages - Template


This template ships a very simple React and Storybook template with deployment for GitHub Page. You access to this repository Storybook GitHub Page here : https://vmalay.github.io/storybook-github-pages-example/storybook/. 

It's using the "Deploy Storybook to GitHub Pages" GitHub Action: https://github.com/marketplace/actions/deploy-storybook-to-github-pages

## Set up your project for Actions deployed Github Pages
- In the project repo in GitHub, go to Settings > Pages.
- For the source, select GitHub Actions
- No further configuration is needed.

> **Note:** Your Repository must be set to public or Entreprise for GitHub Pages to serve content.

## Access to your GitHub Page
- GitHub Action for the deploy should be successful. You can check it in the project repo > Actions.  
- In the project repo in GitHub, go to Settings > Pages.
- You'll see: Your site is live at https://username.github.io/repository.

## Start in local
- Run `npm run build-storybook`.
- Run `npx http-server build/storybook-static`.
