import { notFound } from 'next/navigation';
import TopicPage from '../../../src/components/TopicPage.jsx';
import { goalPages, topicFromPath } from '../../../src/data/topics.js';

async function readParams(params) {
  return typeof params?.then === 'function' ? await params : params;
}

export function generateStaticParams() {
  return goalPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await readParams(params);
  const topic = topicFromPath(`/goals/${slug}`);
  if (!topic) return {};
  return {
    title: topic.title,
    description: topic.summary,
    alternates: { canonical: `/goals/${topic.slug}` },
  };
}

export default async function GoalPage({ params }) {
  const { slug } = await readParams(params);
  const topic = topicFromPath(`/goals/${slug}`);
  if (!topic) notFound();
  return <TopicPage topic={topic} />;
}
