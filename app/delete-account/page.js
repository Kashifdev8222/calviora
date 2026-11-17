import Legal from '../../src/components/Legal.jsx';

export const metadata = {
  title: 'Delete Account',
  description: 'Delete a Calviora account in the app or request deletion by email.',
};

export default function DeleteAccountPage() {
  return <Legal path="/delete-account" />;
}
