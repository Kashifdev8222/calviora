import Legal from '../../src/components/Legal.jsx';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Subscription terms, AI scan allowances, and how the Calviora app may be used.',
};

export default function TermsPage() {
  return <Legal path="/terms" />;
}
