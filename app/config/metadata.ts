export const siteConfig = {
  title: 'Andrea - Portfolio Developer',
  description: 'Portfolio professionale di Andrea, sviluppatore full-stack specializzato in React, Next.js, Flutter e sviluppo mobile.',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'flutter', 'mobile', 'web development'],
  author: 'Andrea',
  creator: 'Andrea',
  publisher: 'Andrea',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://your-domain.com',
    title: 'Andrea - Portfolio Developer',
    description: 'Portfolio professionale di Andrea, sviluppatore full-stack specializzato in React, Next.js, Flutter e sviluppo mobile.',
    siteName: 'Andrea Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Andrea Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrea - Portfolio Developer',
    description: 'Portfolio professionale di Andrea, sviluppatore full-stack specializzato in React, Next.js, Flutter e sviluppo mobile.',
    images: ['/images/twitter-image.jpg'],
    creator: '@yourtwitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}; 