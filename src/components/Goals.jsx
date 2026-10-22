import { Dumbbell, PieChart, Salad, TrendingDown } from 'lucide-react';

const goals = [
  {
    title: 'Lose Weight',
    copy: 'Stay in a healthy calorie deficit with zero guesswork using precise AI meal tracking.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&q=80',
    alt: 'Lose Weight',
    iconWrap: 'bg-rose-100 text-rose-600',
    Icon: TrendingDown,
  },
  {
    title: 'Build Lean Muscle',
    copy: 'Track your daily protein intake accurately to support recovery and muscle growth.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80',
    alt: 'Build Muscle',
    iconWrap: 'bg-amber-100 text-amber-600',
    Icon: Dumbbell,
  },
  {
    title: 'Eat Balanced Meals',
    copy: 'Log both western foods and South Asian/Desi recipes effortlessly.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
    alt: 'Balanced Meals',
    iconWrap: 'bg-emerald-100 text-emerald-600',
    Icon: Salad,
  },
  {
    title: 'Track Macro Ratios',
    copy: 'Keep your Carbs, Protein, and Fats ratio perfectly aligned with your health targets.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80',
    alt: 'Track Macros',
    iconWrap: 'bg-blue-100 text-blue-600',
    Icon: PieChart,
  },
];

export default function Goals() {
  return (
    <section id="goals" className="py-16 bg-brand-action text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Reach your goals, your way</h2>
          <p className="mt-4 text-brand-soft text-base sm:text-lg">
            Whether you want to drop body fat, gain lean muscle, or stay mindful of your daily nutrition, Calviora adapts to your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal) => {
            const Icon = goal.Icon;
            return (
            <div
              key={goal.title}
              className="bg-white text-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${goal.iconWrap} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-deep mb-2">{goal.title}</h3>
                <p className="text-slate-600 text-sm">{goal.copy}</p>
              </div>
              <img src={goal.image} alt={goal.alt} className="w-full h-36 object-cover rounded-2xl mt-6" />
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
