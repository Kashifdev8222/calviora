import { Dumbbell, Leaf, Scale, TrendingDown, TrendingUp, Zap } from 'lucide-react';
import { goalPath } from '../data/topics.js';
import { onSamePageClick } from '../lib/navigate.js';

const goals = [
  {
    slug: 'lose-weight',
    title: 'Lose Weight',
    copy: 'Stay in a steady calorie deficit with meal scans that take the guesswork out of portions.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&q=80',
    alt: 'Person training to lose weight',
    iconWrap: 'bg-rose-100 text-rose-600',
    Icon: TrendingDown,
  },
  {
    slug: 'gain-muscle',
    title: 'Gain Muscle',
    copy: 'Hit your protein target each day so training and recovery have the fuel they need.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80',
    alt: 'Person strength training',
    iconWrap: 'bg-amber-100 text-amber-600',
    Icon: Dumbbell,
  },
  {
    slug: 'maintain-weight',
    title: 'Maintain Weight',
    copy: 'Keep intake close to what you burn, with a clear view of meals, activity, and water.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80',
    alt: 'Balanced meal for weight maintenance',
    iconWrap: 'bg-sky-100 text-sky-600',
    Icon: Scale,
  },
  {
    slug: 'improve-nutrition',
    title: 'Improve Nutrition',
    copy: 'See calories and macros on everyday plates, including homemade and South Asian dishes.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
    alt: 'Colorful nutritious meal',
    iconWrap: 'bg-emerald-100 text-emerald-600',
    Icon: Leaf,
  },
  {
    slug: 'boost-energy',
    title: 'Boost Energy',
    copy: 'Balance meals, movement, and hydration so afternoon slumps are easier to avoid.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=500&q=80',
    alt: 'Person running outdoors',
    iconWrap: 'bg-yellow-100 text-yellow-600',
    Icon: Zap,
  },
  {
    slug: 'gain-weight',
    title: 'Gain Weight',
    copy: 'Add calories on purpose and track them, so gaining happens with meals you can measure.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
    alt: 'Hearty nutritious plate',
    iconWrap: 'bg-orange-100 text-orange-600',
    Icon: TrendingUp,
  },
];

export default function Goals() {
  return (
    <section id="goals" className="scroll-mt-24 py-16 bg-brand-action text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Reach your goals, your way</h2>
          <p className="mt-4 text-brand-soft text-base sm:text-lg">
            Lose weight, gain muscle, maintain, or simply eat with more energy. Calviora adapts the plan to the goal you pick.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {goals.map((goal) => {
            const Icon = goal.Icon;
            return (
              <a
                key={goal.slug}
                href={goalPath(goal.slug)}
                onClick={onSamePageClick}
                className="bg-white text-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${goal.iconWrap} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-deep mb-2">{goal.title}</h3>
                  <p className="text-slate-600 text-sm">{goal.copy}</p>
                </div>
                <img src={goal.image} alt={goal.alt} loading="lazy" className="w-full h-36 object-cover rounded-2xl mt-6" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
