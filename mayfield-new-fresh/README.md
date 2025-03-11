# Mayfield Estates Las Vegas

A modern real estate website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Property listings with filtering
- Property details pages
- Contact forms
- Home value calculator (CMA)
- Modern UI with Tailwind CSS

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Headless UI
- Hero Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mayfield-new-fresh.git
cd mayfield-new-fresh
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mayfield-new-fresh/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── properties/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── cma/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       └── PropertyCard.tsx
├── public/
├── package.json
└── README.md
```

## Development

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Deployment

The site is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your changes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 