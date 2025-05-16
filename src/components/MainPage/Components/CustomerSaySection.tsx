const items = [
  {
    id: 1,
    src: "images/testimonial-img-1.webp",
    name: "Brayton",
    comment:
      "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend! 😊",
  },
];

const CustomerSaySection = () => {
  return (
    <section className="relative w-full flex pb-8 px-8 bg-white">
      <div className="flex flex-col text-left">
        <h2 className="text-3xl mb-8">Customer Say!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-1">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col border-1">
              <div className="mb-6 overflow-hidden w-1/3">
                <img
                  className="h-full w-auto object-cover"
                  src={item.src}
                  alt={item.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSaySection;
