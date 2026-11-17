import '../src/index.css';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import Analytics from '../src/components/Analytics.jsx';
import LegacyRedirect from '../src/components/LegacyRedirect.jsx';

const HOME_TITLE = 'Calviora | AI Calorie Counter and Food Scanner App';
const HOME_DESCRIPTION = 'Snap a photo of your meal and get estimated calories and macros in seconds. Track water, activity and goals. Start free with 3 AI scans a day.';

export const metadata = {
  metadataBase: new URL('https://calviora.app'),
  title: {
    default: HOME_TITLE,
    template: '%s | Calviora',
  },
  description: HOME_DESCRIPTION,
  applicationName: 'Calviora',
  verification: {
    google: 'LdWdJeaoHblgYBpyf5ykq9qSvs0A9mB3_ZXvcLhP49I',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#034F36',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="ard" href="/.well-known/ard.json" type="application/json" />
      </head>
      <body className="antialiased text-slate-800">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <LegacyRedirect />
      </body>
    </html>
  );
}
