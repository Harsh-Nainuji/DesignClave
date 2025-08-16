import React from 'react';

const SpecialOffers = () => {
  const handleClaim = () => {
    const target = document.getElementById('contact');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const featuredOffer = {
    icon: '🎁',
    eyebrow: 'Limited Time',
    title: '₹15,000+ Projects - 15% OFF + Free Promo Post',
    description: 'Spend ₹15,000 or more and unlock premium value on day one:',
    bullets: [
      '15% OFF your total bill',
      'Free custom promotional post to launch your site',
    ],
    cta: 'Claim This Offer',
  };

  const offers = [
    {
      icon: '✨',
      title: 'Surprise Bonus on First Milestone',
      description: 'Hit the first payment milestone and receive a surprise add-on:',
      bullets: [
        'Bonus animation',
        'Extra layout variation',
        'Premium design touch (mini-brand asset, favicon, etc.)',
      ],
      accent: 'Bonus',
      cta: 'Unlock Bonus',
    },
    {
      icon: '🏁',
      title: 'Priority Booking for Future Projects',
      description: 'Join our VIP list after your first project and get:',
      bullets: [
        'Priority access for future bookings',
        'Possible early-bird discounts on new services',
        'custom promotional post for you',
      ],
      accent: 'VIP',
      cta: 'Join VIP List',
    },
    {
      icon: '👥',
      title: 'Refer & Save - 10% OFF Your Next Project',
      description:
        'Refer someone who hires us and get 10% OFF on your next project. No cap, refer more, save more.',
      bullets: [
        '10% OFF on your next project',
        'Applies after your referral hires us'
      ],
      accent: '10% OFF',
      cta: 'Refer & Save',
    },
  ];

  return (
    <>
      <section id="special-offers" className="relative max-w-6xl px-4 mx-auto mt-12 sm:mt-20 lg:mt-28 sm:px-8 lg:px-12">
      <div className="absolute h-24 pointer-events-none sm:h-32 -inset-x-4 sm:-inset-x-10 -top-6 sm:-top-8 blur-3xl opacity-20 bg-gradient-to-r from-lime-400/40 via-lime-300/30 to-lime-400/40" />

      <div className="relative mb-6 sm:mb-8">
        <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">Special Offers</h2>
        <p className="max-w-2xl text-sm text-gray-300 sm:text-base">
          High value perks to launch with momentum. Some offers can be combined, ask us how.
        </p>
      </div>

      <div className="relative overflow-hidden border rounded-2xl sm:rounded-3xl border-lime-400/25 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(600px_200px_at_20%_-10%,rgba(132,204,22,0.35),transparent)]" />
        <div className="relative flex flex-col gap-3 p-5 sm:gap-5 sm:p-6 md:p-8 lg:p-10 lg:flex-row lg:items-center">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full text-black bg-lime-400/90">{featuredOffer.eyebrow}</span>
            </div>
            <div className="flex items-center gap-3 mt-2 sm:mt-3">
              <div className="flex items-center justify-center w-9 h-9 text-lg rounded-full sm:w-11 sm:h-11 sm:text-xl bg-lime-400/10 text-lime-300">
                {featuredOffer.icon}
              </div>
              <h3 className="text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl">{featuredOffer.title}</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-gray-300 sm:mt-3 sm:text-sm">{featuredOffer.description}</p>
            <ul className="mt-2 space-y-1 text-xs text-gray-200 sm:mt-3 sm:space-y-1.5 sm:text-sm">
              {featuredOffer.bullets.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-lime-400/80" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={handleClaim}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold text-black transition-all duration-300 rounded-full bg-lime-400 hover:bg-lime-300 hover:shadow-lg hover:translate-y-[-1px]"
            >
              {featuredOffer.cta}
              <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3 mt-5 sm:gap-5">
        {offers.map((offer, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="relative h-full overflow-hidden transition-all duration-300 border rounded-xl sm:rounded-2xl group border-white/10 bg-white/5 hover:border-lime-400/40 hover:shadow-[0_0_0_1px_rgba(132,204,22,0.25)]">
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 bg-gradient-to-tr from-lime-400/10 via-transparent to-transparent" />
              <div className="relative p-3 sm:p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex items-center justify-center w-7 h-7 text-sm rounded-full sm:w-9 sm:h-9 sm:text-lg bg-lime-400/10 text-lime-300">
                      {offer.icon}
                    </div>
                    <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">
                      {offer.title}
                    </h3>
                  </div>
                  <span className="px-2 py-1 text-xs font-bold tracking-wide text-black rounded-full bg-lime-400/90 flex items-center justify-center min-w-[60px] text-center">
                    {offer.accent}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-gray-300 sm:mt-3 sm:text-sm">{offer.description}</p>

                {offer.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1 text-xs text-gray-200 sm:mt-3 sm:space-y-1.5 sm:text-sm">
                    {offer.bullets.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-lime-400/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                
              </div>

              <div className="h-1 transition-all duration-300 bg-gradient-to-r from-lime-400/60 via-lime-300/60 to-lime-400/60 opacity-60 group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>

      {/* Terms & Conditions Section */}
      <div className="p-2 mt-4 border rounded-lg sm:mt-6 sm:p-3 border-white/10 bg-white/5">
        <h3 className="text-xs font-medium text-white sm:text-sm">Terms & Conditions</h3>
        <div className="mt-1 text-xs leading-relaxed text-gray-400">
          <p>All special offers are for first-time clients only, subject to availability, and may change or end without notice. Discounts apply only to projects meeting stated conditions and cannot be combined unless specified. Free promo items are limited in scope and provided at our discretion. Post-launch support covers minor fixes only for 7 days after final delivery. We reserve the right to decide offer eligibility and what each offer includes. By working with us, you agree to these terms.</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default SpecialOffers;


