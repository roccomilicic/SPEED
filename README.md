# SPEED

SPEED is a web application designed to manage articles through a moderation process and provide analysis on approved content. Built with a Nest.js back end and a Next.js front end, the app is fully hosted on Vercel. The primary features include displaying articles, submitting new ones for moderation, and analysing approved articles.

## Features

  - **Show All Articles Page**: Displays a list of articles with a search bar for quick filtering.
  
  - **Submit Articles Page**: Users can submit articles for moderation before they are approved and published.

  - **Moderation Page**: A dedicated page for moderators to review newly submitted articles, allowing them to either approve or reject submissions before they are published.
  
  - **Analyse Articles Page**: Provides tools to analyse content from approved articles.

## Tech Stack

  Back End: [Nest.js](https://nestjs.com/) - A Node.js framework for building server-side applications.
  
  Front End: [Next.js](https://nextjs.org/) - A React-based framework for building interfaces.
  
  Hosting: [Vercel](https://vercel.com/) - The project is hosted and deployed on Vercel.

## Getting Started
### Prerequisites

  Node.js: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
  
  NPM: Ensure npm (Node Package Manager) is also installed, which usually comes with Node.js.

### Installation

Clone the repository:

    git clone https://github.com/roccomilicic/SPEED.git
    cd SPEED

Install the dependencies for both the back end and front end:

    npm install

Set up your environment variables. The .env file is already configured for Vercel, but for local development, adjust the environment as needed.

Run the development server:

    npm run dev

Your app should now be running on [http://localhost:3000](http://localhost:3000).

## Deployment

This app is automatically deployed on Vercel [here](https://speed-vercel-app.vercel.app/). Changes to the main branch to trigger the deployment.

## Team

This project was developed by a team of four developers for a University assignment:

- [Rocco Milicic](https://github.com/roccomilicic)
- [Markus Lee](https://github.com/Toshiakia)
- [Varnika Bansal](https://github.com/varnikabansal)
- [Liam Merton](https://github.com/Piistol)
