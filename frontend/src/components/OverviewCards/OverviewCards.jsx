'use client';

export default function OverviewCards() {
  const cards = [
    {
      label: 'Total Balance',
      value: 'LKR 120,500',
      color: 'bg-green-100 text-green-800',
    },
    {
      label: 'Monthly Income',
      value: 'LKR 45,000',
      color: 'bg-blue-100 text-blue-800',
    },
    {
      label: 'Monthly Expenses',
      value: 'LKR 28,750',
      color: 'bg-red-100 text-red-800',
    },
    {
      label: 'Savings Goal',
      value: 'LKR 10,000 / 20,000',
      color: 'bg-yellow-100 text-yellow-800',
    },
  ];

  return (
    <section className="max-w-8xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`rounded-xl shadow-md p-6 ${card.color} flex flex-col justify-between hover:shadow-lg transition`}
        >
          <span className="text-sm font-medium uppercase">{card.label}</span>
          <span className="text-2xl font-bold mt-2">{card.value}</span>
        </div>
      ))}
    </section>
  );
}
