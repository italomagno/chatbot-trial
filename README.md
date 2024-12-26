# Italo Magno Social Media Assistant


<img src="./public//apple-touch-icon.png" alt="Italo Magno Image">

> This project serves as a showcase of my ability to take existing projects and adapt them by implementing unique features and applying my personal style. For this particular project, I introduced a Google Translate feature, enabling users to seamlessly switch between languages for improved accessibility. Additionally, I integrated a custom training model specifically designed to assist in generating high-quality content for social media platforms. This implementation highlights my expertise in combining functionality with user-centric design, offering practical solutions for real-world applications.

### Next steps

This project lays the foundation for future ideas, including:

- [x] Creating a proprietary AI chatbot – Developing an AI-powered chatbot tailored to specific user needs.
- [x] Building WhatsApp integrations – Expanding functionality by seamlessly integrating with WhatsApp for enhanced communication.
- [x] Designing user-friendly chat interfaces – Focusing on intuitive and engaging conversational experiences for users.


<p align="center">
  An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Vercel KV.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#key-accomplishments"><strong>Key Accomplishments</strong></a>
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI
- Support for OpenAI (default), Anthropic, Cohere, Hugging Face, or custom AI chat models and/or LangChain
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- Chat History, rate limiting, and session storage with [Vercel KV](https://vercel.com/storage/kv)
- [NextAuth.js](https://github.com/nextauthjs/next-auth) for authentication

## Model Providers

This template ships with OpenAI `gpt-3.5-turbo` as the default.

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

<!-- > Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`
 -->
```bash
pnpm install
pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

## Key Accomplishments
- Trained a model for social media prompts – Developed and integrated a custom model to generate effective content prompts for social media platforms.
- Implemented my own database using CockroachDB – Designed and connected a robust CockroachDB database to enhance the project's scalability and performance.
- Established a Prisma ORM connection – Streamlined data management by creating an efficient Prisma ORM setup.
- Customized branding and UI – Designed and applied a unique logo and styles using Tailwind CSS and ShadCN UI, ensuring a cohesive and visually appealing interface.

