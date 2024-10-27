
# LoogBlip

**LoogBlip** is an AI-driven podcast platform where users can create podcasts with AI-generated content. Whether it's creating podcast scripts or using AI-generated voices, LoogBlip provides a seamless experience for podcast creators who want to leverage AI to enhance their content.

## Features

- **AI-Generated Podcast Text**: Create podcast scripts with AI using user-provided prompts.
- **AI Voiceover**: Generate voiceovers for podcasts with AI, making it easier for users to create audio content.
- **User-Friendly Interface**: Intuitive interface for creating and exploring podcasts, designed for seamless user experience.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) - A React-based framework for building fast, scalable web applications.
- **Backend**: [Convex](https://docs.convex.dev/) - A backend platform that handles database queries, actions, and real-time features.

## Installation

To get started with **LoogBlip**, follow these steps:

### Prerequisites

- Node.js v18 or later
- NPM or Yarn
- Convex CLI (`npm install -g convex`)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/malawadd/loogblip.git
   cd loogblip
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or, if using Yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   CONVEX_URL=your_convex_url
   NEXT_PUBLIC_CONVEX_URL=your_convex_public_url
   ```
   
   Make sure to replace `your_openai_api_key` and the Convex URLs with the actual values.

4. **Initialize Convex**
   ```bash
   npx convex dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   or, if using Yarn:
   ```bash
   yarn dev
   ```

   The app will be running at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Create Podcasts**: Use the "Create Podcast" option to provide a prompt for AI-generated text, select voice types, and generate voiceovers.
2. **Explore Podcasts**: Browse existing podcasts by categories, trending, or specific topics.

