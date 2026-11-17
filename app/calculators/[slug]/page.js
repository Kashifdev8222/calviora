import { notFound } from 'next/navigation';
import Calculators from '../../../src/components/Calculators.jsx';
import AskAi from '../../../src/components/AskAi.jsx';
import Download from '../../../src/components/Download.jsx';
import { calculatorNotes, calculatorTools, toolFromPath } from '../../../src/data/calculators.js';

async function readParams(params) {
  return typeof params?.then === 'function' ? await params : params;
}

export function generateStaticParams() {
  return calculatorTools.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await readParams(params);
  const id = toolFromPath(`/calculators/${slug}`);
  const tool = calculatorTools.find((item) => item.id === id);
  if (!tool) return {};
  return {
    title: tool.label,
    description: calculatorNotes[id]?.about || tool.label,
    alternates: { canonical: `/calculators/${tool.slug}` },
  };
}

export default async function CalculatorPage({ params }) {
  const { slug } = await readParams(params);
  const toolId = toolFromPath(`/calculators/${slug}`);
  if (!toolId) notFound();
  return (
    <>
      <Calculators toolId={toolId} />
      <AskAi />
      <Download />
    </>
  );
}
