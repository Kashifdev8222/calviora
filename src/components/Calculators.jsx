import { useEffect, useMemo, useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import {
  activities,
  burnActivities,
  calculatorNotes,
  calculatorPath,
  calculatorTools,
  drinks,
  foods,
  stepPaces,
  toolFromPath,
} from '../data/calculators.js';
import { calculate } from '../lib/nutritionCalc.js';
import { go, onSamePageClick } from '../lib/navigate.js';
import Questions from './Questions.jsx';
import { FillBar, RingSweep, useSweep } from './RingSweep.jsx';

const fieldClass =
  'w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:border-brand-action';

const ringColors = ['#087C50', '#f59e0b', '#0284c7'];

function firstNumber(text) {
  const match = String(text ?? '').replace(/,/g, '').match(/\d+(\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function unitOf(text) {
  const value = String(text).toLowerCase();
  if (value.includes('kcal')) return 'kcal';
  if (/\bkg\b/.test(value)) return 'kg';
  if (value.includes('%')) return '%';
  if (/\bg\b/.test(value)) return 'g';
  return '';
}

function ringsFromResult(result) {
  if (!result || result.error) return [];
  const items = [];
  if (result.value) items.push({ label: result.kicker || 'Result', text: String(result.value) });
  for (const stat of result.stats || []) items.push({ label: stat.label, text: String(stat.value) });

  const parsed = items
    .map((item) => ({ ...item, n: firstNumber(item.text), unit: unitOf(item.text) }))
    .filter((item) => item.n != null && item.unit);

  const grams = parsed.filter((item) => item.unit === 'g');
  const kcalItems = parsed.filter((item) => item.unit === 'kcal');
  const protein = grams.find((item) => /protein/i.test(item.label));
  const carbs = grams.find((item) => /carb/i.test(item.label));
  const fat = grams.find((item) => /fat/i.test(item.label));

  let chosen = [];
  if (protein && carbs && fat && kcalItems[0]) {
    const proteinKcal = protein.n * 4;
    const carbKcal = carbs.n * 4;
    const fatKcal = fat.n * 9;
    const total = proteinKcal + carbKcal + fatKcal || 1;
    chosen = [
      { label: 'Protein', text: protein.text, pct: proteinKcal / total },
      { label: 'Carbs', text: carbs.text, pct: carbKcal / total },
      { label: 'Fat', text: fat.text, pct: fatKcal / total },
    ];
  } else if (kcalItems.length >= 2) {
    const max = Math.max(...kcalItems.map((item) => item.n));
    chosen = kcalItems.slice(0, 3).map((item) => ({ label: item.label, text: item.text, pct: item.n / max }));
  } else {
    const unit = parsed[0]?.unit;
    const same = parsed.filter((item) => item.unit === unit);
    const max = Math.max(...same.map((item) => item.n), 1);
    chosen = same.slice(0, 3).map((item) => ({ label: item.label, text: item.text, pct: item.n / max }));
  }

  return chosen.map((item, index) => {
    const pct = Math.max(8, Math.min(100, Math.round(item.pct * 100)));
    return { ...item, pct, color: ringColors[index % ringColors.length] };
  });
}

const emptyForm = {
  sex: 'female',
  age: '28',
  height: '165',
  weight: '68',
  activity: '1.55',
  goal: 'lose',
  goalWeight: '63',
  pace: '0.5',
  gainPace: '0.5',
  proteinGoal: 'muscle',
  burnMode: 'activity',
  burnActivity: 'walk',
  minutes: '45',
  steps: '10000',
  stepPace: 'normal',
  foodCalories: '500',
  drink: 'lager',
  volume: '330',
  abv: '5',
  carbsPer100: '3',
  drinks: '1',
  drinksWeek: '',
  foodId: 'egg',
  grams: '100',
  pieces: '1',
  portionMode: 'grams',
  trimester: '2',
};

let plateKey = 2;

export default function Calculators() {
  const [tool, setTool] = useState(() => toolFromPath(window.location.pathname) || 'tdee');
  const [form, setForm] = useState(emptyForm);
  const [plate, setPlate] = useState([
    { key: 1, foodId: 'chicken', grams: '150' },
    { key: 2, foodId: 'rice', grams: '200' },
  ]);

  useEffect(() => {
    const sync = () => {
      const next = toolFromPath(window.location.pathname);
      if (next) setTool(next);
    };
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  useEffect(() => {
    setForm((current) => {
      const weight = Number(current.weight);
      const goal = Number(current.goalWeight);
      if (!Number.isFinite(weight)) return current;
      if (tool === 'weight-gain' && !(goal > weight)) return { ...current, goalWeight: String(Math.round(weight + 5)) };
      if (tool === 'weight-loss' && !(goal < weight)) return { ...current, goalWeight: String(Math.max(35, Math.round(weight - 5))) };
      return current;
    });
  }, [tool]);

  const choose = (id) => {
    go(calculatorPath(id));
  };

  const update = (key) => (event) => {
    const value = event.target.value;
    if (key === 'drink') {
      const drink = drinks.find((item) => item.id === value);
      setForm((current) => ({
        ...current,
        drink: value,
        volume: drink?.volume || current.volume,
        abv: drink?.abv || current.abv,
        carbsPer100: drink?.carbs || current.carbsPer100,
      }));
      return;
    }
    setForm((current) => ({ ...current, [key]: value }));
  };

  const result = useMemo(() => calculate(tool, { ...form, plate }), [form, plate, tool]);
  const active = calculatorTools.find((item) => item.id === tool) || calculatorTools[0];
  const note = calculatorNotes[tool] || calculatorNotes.tdee;

  const rings = ringsFromResult(result);
  const play = useSweep(tool);
  const readSteps = [
    ['1', 'Enter what you know', 'A guessed weight makes a guessed plan. Use the numbers you can actually measure.', 'from-emerald-100 to-white'],
    ['2', 'Read the estimate', 'Change one input if the week does not match the figure on the card.', 'from-amber-100 to-white'],
    ['3', 'Use it as a plan', 'It is a planning estimate. It is not a diagnosis, a prescription, or a lab test.', 'from-sky-100 to-white'],
  ];

  return (
    <>
    <section id="calculators" className="relative scroll-mt-24 overflow-hidden pt-12 pb-16 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-grid-pattern"></div>
      <div className="pointer-events-none absolute -left-16 top-6 h-56 w-56 rounded-full bg-brand-leaf/40 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-action">Free calculator</p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-brand-deep tracking-tight">{active.label}</h1>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">{note.about}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">This result</p>
            {rings.length ? (
              <div className={`mt-3 grid gap-2 ${rings.length > 2 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {rings.map((ring) => (
                  <div key={ring.label} className="text-center">
                    <RingSweep
                      pct={ring.pct}
                      color={ring.color}
                      play={play}
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[10px] font-extrabold text-brand-deep">{ring.pct}%</div>
                    </RingSweep>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">{ring.label}</p>
                    <p className="text-[10px] font-semibold text-brand-deep">{ring.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm font-semibold text-slate-500">Enter valid numbers and the rings follow this result.</p>
            )}
          </div>
        </div>

        <div className="grid xl:grid-cols-[280px_minmax(0,1fr)] gap-6 items-start">
          <div className="xl:sticky xl:top-24">
            <label className="xl:hidden block text-sm font-bold text-brand-deep mb-2">
              Calculator
              <select className={`${fieldClass} mt-1.5`} value={tool} onChange={(event) => choose(event.target.value)}>
                {calculatorTools.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <nav className="hidden xl:block rounded-3xl border border-slate-200 bg-white p-2 max-h-[calc(100vh-7rem)] overflow-y-auto" aria-label="Calculators">
              {calculatorTools.map((item) => (
                <a
                  key={item.id}
                  href={calculatorPath(item.id)}
                  onClick={onSamePageClick}
                  className={`block px-3 py-2.5 rounded-2xl text-sm font-bold transition ${
                    tool === item.id ? 'bg-brand-deep text-brand-leaf' : 'text-brand-deep hover:bg-brand-soft'
                  }`}
                  aria-current={tool === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start min-w-0">
            <form className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(event) => event.preventDefault()}>
              <h3 className="sm:col-span-2 text-lg font-extrabold text-brand-deep">{active.label}</h3>
              <Fields tool={tool} form={form} update={update} plate={plate} setPlate={setPlate} />
            </form>
            <Result result={result} />
          </div>
        </div>

        <div id="read" className="scroll-mt-24 mt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">Guide</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-brand-deep">How to read this result</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {readSteps.map(([n, title, text, wash], index) => (
              <article key={n} className={`rounded-3xl border border-slate-200 bg-gradient-to-b p-5 ${wash}`}>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-deep font-extrabold text-brand-leaf">{n}</div>
                {rings[index] ? (
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white">
                    <FillBar pct={rings[index].pct} color={rings[index].color} play={play} />
                  </div>
                ) : null}
                <h3 className="mt-4 text-lg font-extrabold text-brand-deep">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="questions" className="scroll-mt-24 max-w-3xl mt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">FAQ</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-brand-deep">Questions</h2>
          <div className="mt-4 rounded-3xl border border-slate-200 bg-white px-5 sm:px-6">
            <Questions items={note.faqs} />
          </div>
        </div>

        <div id="more" className="scroll-mt-24 mt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">Related</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-brand-deep">More calculators</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {calculatorTools.filter((item) => item.id !== tool).map((item) => (
              <a
                key={item.id}
                href={calculatorPath(item.id)}
                onClick={onSamePageClick}
                className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-extrabold text-brand-deep transition hover:-translate-y-0.5 hover:border-brand-action hover:shadow-md"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

function Fields({ tool, form, update, plate, setPlate }) {
  const body = ['tdee', 'weight-loss', 'weight-gain', 'protein', 'calories-burned', 'macros', 'diabetes'].includes(tool);
  const femaleBody = tool === 'pcos' || tool === 'pregnancy-calories' || tool === 'pregnancy-macros';

  return (
    <>
      {body ? <Sex form={form} update={update} /> : null}
      {body || femaleBody ? (
        <>
          <NumberField label="Age" value={form.age} onChange={update('age')} />
          <NumberField label="Height (cm)" value={form.height} onChange={update('height')} />
          <NumberField label={tool.startsWith('pregnancy') ? 'Pre-pregnancy weight (kg)' : 'Weight (kg)'} value={form.weight} onChange={update('weight')} />
          <Activity form={form} update={update} wide />
        </>
      ) : null}

      {tool === 'weight-loss' || tool === 'weight-gain' ? (
        <NumberField label="Goal weight (kg)" value={form.goalWeight} onChange={update('goalWeight')} />
      ) : null}
      {tool === 'weight-loss' ? (
        <Select label="Weekly pace" value={form.pace} onChange={update('pace')} options={[['0.25', '0.25 kg'], ['0.5', '0.5 kg'], ['0.75', '0.75 kg'], ['1', '1 kg']]} />
      ) : null}
      {tool === 'weight-gain' ? (
        <Select label="Weekly pace" value={form.gainPace} onChange={update('gainPace')} options={[['0.25', 'Lean, 0.25 kg'], ['0.5', 'Standard, 0.5 kg']]} />
      ) : null}
      {tool === 'protein' ? (
        <Select label="Training goal" value={form.proteinGoal} onChange={update('proteinGoal')} wide options={[['maintain', 'Maintain'], ['endurance', 'Endurance'], ['lose', 'Lose fat'], ['muscle', 'Build muscle']]} />
      ) : null}
      {tool === 'macros' || tool === 'diabetes' ? <Goal form={form} update={update} wide /> : null}
      {tool === 'pcos' ? (
        <Select label="Goal" value={form.goal === 'gain' ? 'maintain' : form.goal} onChange={update('goal')} wide options={[['lose', 'Lose weight'], ['maintain', 'Maintain']]} />
      ) : null}
      {tool === 'pregnancy-calories' || tool === 'pregnancy-macros' ? (
        <Select label="Trimester" value={form.trimester} onChange={update('trimester')} wide options={[['1', 'First, weeks 1–12'], ['2', 'Second, weeks 13–26'], ['3', 'Third, week 27 on']]} />
      ) : null}

      {tool === 'calories-burned' ? (
        <>
          <Select label="Count by" value={form.burnMode} onChange={update('burnMode')} wide options={[['activity', 'Activity and minutes'], ['steps', 'Step count']]} />
          {form.burnMode === 'steps' ? (
            <>
              <NumberField label="Steps" value={form.steps} onChange={update('steps')} />
              <Select label="Pace" value={form.stepPace} onChange={update('stepPace')} options={stepPaces.map((item) => [item.id, item.label])} />
            </>
          ) : (
            <>
              <Select label="Activity" value={form.burnActivity} onChange={update('burnActivity')} wide options={burnActivities.map((item) => [item.id, item.label])} />
              <NumberField label="Minutes" value={form.minutes} onChange={update('minutes')} />
            </>
          )}
        </>
      ) : null}

      {tool === 'burn-it-off' ? (
        <>
          <NumberField label="Weight (kg)" value={form.weight} onChange={update('weight')} />
          <NumberField label="Food calories" value={form.foodCalories} onChange={update('foodCalories')} />
        </>
      ) : null}

      {tool === 'alcohol' ? (
        <>
          <NumberField label="Weight (kg)" value={form.weight} onChange={update('weight')} />
          <Select label="Drink" value={form.drink} onChange={update('drink')} options={drinks.map((item) => [item.id, item.label])} />
          <NumberField label="Volume (ml)" value={form.volume} onChange={update('volume')} />
          <NumberField label="ABV %" value={form.abv} onChange={update('abv')} />
          <NumberField label="Carbs per 100 ml (g)" value={form.carbsPer100} onChange={update('carbsPer100')} />
          <NumberField label="Number of drinks" value={form.drinks} onChange={update('drinks')} />
          <NumberField label="Drinks per week (optional)" value={form.drinksWeek} onChange={update('drinksWeek')} wide />
        </>
      ) : null}

      {tool === 'serving' ? (
        <>
          <Select label="Food" value={form.foodId} onChange={update('foodId')} wide options={foods.map((item) => [item.id, item.label])} />
          <Select label="Measure" value={form.portionMode} onChange={update('portionMode')} options={[['grams', 'Grams'], ['pieces', 'Pieces']]} />
          {form.portionMode === 'pieces' ? (
            <NumberField label="Pieces" value={form.pieces} onChange={update('pieces')} />
          ) : (
            <NumberField label="Grams" value={form.grams} onChange={update('grams')} />
          )}
        </>
      ) : null}

      {tool === 'calorie-counter' ? <Plate plate={plate} setPlate={setPlate} /> : null}
    </>
  );
}

function Plate({ plate, setPlate }) {
  const change = (key, field) => (event) => {
    const value = event.target.value;
    setPlate((current) => current.map((item) => (item.key === key ? { ...item, [field]: value } : item)));
  };

  return (
    <div className="sm:col-span-2 space-y-3">
      {plate.map((item, index) => (
        <div key={item.key} className="grid grid-cols-[minmax(0,1fr)_88px_40px] gap-2 items-end">
          <label className="text-sm font-bold text-brand-deep">
            {index === 0 ? 'Food' : <span className="sr-only">Food</span>}
            <select className={`${fieldClass} mt-1.5`} value={item.foodId} onChange={change(item.key, 'foodId')}>
              {foods.map((food) => (
                <option key={food.id} value={food.id}>
                  {food.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-bold text-brand-deep">
            {index === 0 ? 'Grams' : <span className="sr-only">Grams</span>}
            <input className={`${fieldClass} mt-1.5`} inputMode="decimal" value={item.grams} onChange={change(item.key, 'grams')} />
          </label>
          <button
            type="button"
            className="h-11 rounded-xl border border-slate-200 text-slate-500 hover:text-red-600 hover:border-red-200"
            aria-label={`Remove food ${index + 1}`}
            onClick={() => setPlate((current) => current.filter((entry) => entry.key !== item.key))}
          >
            <Trash2 className="w-4 h-4 mx-auto" />
          </button>
        </div>
      ))}
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-brand-deep hover:border-brand-action"
        onClick={() => {
          plateKey += 1;
          setPlate((current) => [...current, { key: plateKey, foodId: 'egg', grams: '50' }]);
        }}
      >
        <Plus className="w-4 h-4" /> Add food
      </button>
    </div>
  );
}

function Sex({ form, update }) {
  return (
    <Select label="Sex" value={form.sex} onChange={update('sex')} options={[['female', 'Female'], ['male', 'Male']]} />
  );
}

function Activity({ form, update, wide }) {
  return <Select label="Activity" value={form.activity} onChange={update('activity')} wide={wide} options={activities.map((item) => [item.value, item.label])} />;
}

function Goal({ form, update, wide }) {
  return (
    <Select
      label="Goal"
      value={form.goal}
      onChange={update('goal')}
      wide={wide}
      options={[['lose', 'Lose weight'], ['maintain', 'Maintain'], ['gain', 'Gain weight']]}
    />
  );
}

function NumberField({ label, value, onChange, wide }) {
  return (
    <label className={`text-sm font-bold text-brand-deep ${wide ? 'sm:col-span-2' : ''}`}>
      {label}
      <input className={`${fieldClass} mt-1.5`} inputMode="decimal" value={value} onChange={onChange} />
    </label>
  );
}

function Select({ label, value, onChange, options, wide }) {
  return (
    <label className={`text-sm font-bold text-brand-deep ${wide ? 'sm:col-span-2' : ''}`}>
      {label}
      <select className={`${fieldClass} mt-1.5`} value={value} onChange={onChange}>
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

function Result({ result }) {
  return (
    <div className="rounded-3xl bg-brand-deep text-white p-6 sm:p-8 min-h-[280px]">
      {result.error ? (
        <p className="text-brand-soft font-medium">{result.error}</p>
      ) : (
        <>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-leaf">{result.kicker}</p>
          <p className="text-4xl sm:text-5xl font-extrabold mt-3 break-words">{result.value}</p>
          {result.detail ? <p className="mt-3 text-brand-soft">{result.detail}</p> : null}
          {result.stats?.length ? (
            <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
              {result.stats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 px-2 py-3">
                  <dt className="text-[11px] uppercase tracking-wide text-brand-soft">{item.label}</dt>
                  <dd className="text-sm sm:text-base font-extrabold mt-1 break-words">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          {result.rows?.length ? (
            <ul className="mt-6 divide-y divide-white/10 text-sm">
              {result.rows.map((item) => (
                <li key={item.label} className="flex items-start justify-between gap-4 py-2">
                  <span className="text-brand-soft">{item.label}</span>
                  <span className="font-bold text-right">{item.value}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {result.note ? <p className="mt-6 text-sm text-brand-soft leading-relaxed">{result.note}</p> : null}
        </>
      )}
    </div>
  );
}
