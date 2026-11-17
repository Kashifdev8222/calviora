import Legal from '../../src/components/Legal.jsx';

export const metadata = {
  title: 'Privacy Policy',
  description: 'What Calviora collects, what stays on the phone, and how an account is deleted.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <Legal path="/privacy" />;
}
