import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pages } from 'next/dist/build/templates/app-page';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  pages: [
    {
      name: 'Commitee',
      path: '/Commitee',
      component: () => import('./components/Commitee').default, // Specify the Commitee.tsx file
    },
  ],
};