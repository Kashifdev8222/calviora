const pages = {
  '/terms': {
    kicker: 'Terms of Use',
    title: 'Subscriptions',
    sections: [
      {
        paragraphs: [
          'Calviora offers optional auto-renewing subscriptions on the Android app, sold by Google Play. We do not take your card number, expiry date, or security code. Google Play charges the payment method on your Google account and pays us. The price on the subscription screen is the price Google Play will charge, including tax where Play shows tax in that price.',
        ],
        points: [
          'There is no free trial. Payment starts when you confirm the subscription on Google Play.',
          'A subscription renews automatically unless you cancel at least 24 hours before the period ends.',
          'Manage or cancel in the Google Play app under Payments & subscriptions. Deleting Calviora, or deleting your Calviora account, does not cancel the Google Play subscription.',
          'If you reinstall the app or change phones, use Restore on the subscription screen. We confirm the purchase with Google Play and then mark the plan active on your account.',
          'Refunds are decided by Google Play. We cannot charge or refund your card ourselves.',
        ],
      },
    ],
  },
  '/privacy': {
    kicker: 'Privacy',
    title: 'Payments',
    intro: 'These are the payment sections of the Calviora privacy policy.',
    sections: [
      {
        heading: '5. Google Play Billing',
        paragraphs: [
          'Google Play Billing lets Google Play complete a subscription. This permission does not give us your card number or bank details. We do not read your card or bank account.',
        ],
      },
      {
        heading: '6. Payments',
        paragraphs: [
          'Optional plans are sold by Google Play, not by us. Google Play processes the payment and holds your card or other payment method under Google’s own terms. We never receive your card number, expiry date, or security code.',
          'After you buy or tap Restore, we send the purchase token to our server, which checks it with Google Play. We then save the product ID and expiry time on your account so the app knows the plan is active. Deleting your Calviora account does not cancel the Google Play subscription. Cancel that in Google Play if you do not want it to renew.',
        ],
      },
    ],
  },
};

export default function Legal({ path }) {
  const page = pages[path];
  if (!page) return null;

  return (
    <article className="bg-brand-cloud py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-action">{page.kicker}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">{page.title}</h1>
        {page.intro ? <p className="mt-4 text-base leading-relaxed text-slate-600">{page.intro}</p> : null}
        <div className="mt-8 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading || page.title}>
              {section.heading ? <h2 className="text-2xl font-extrabold text-brand-deep">{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
              {section.points ? (
                <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-slate-700">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
