const items = [
  {
    id: 1,
    title: "Discover Sweats",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae, cumque, perferendis praesentium nisi soluta eius dolorum odio quidem exercitationem blanditiis quibusdam quo modi vitae error est, iure inventore voluptate.",
    src: "./images/multirow-img-1.webp",
  },
  {
    id: 2,
    title: "Discover Denim",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae, cumque, perferendis praesentium nisi soluta eius dolorum odio quidem exercitationem blanditiis quibusdam quo modi vitae error est, iure inventore voluptate.",
    src: "./images/multirow-img-2.webp",
  },
];

const SweatsAndDenimSection = () => {
  return (
    <div className="mb-10">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 px-10"
        >
          <div className={`${index % 2 !== 0 ? "lg:order-last" : ""}`}>
            <img src={item.src} alt={item.title} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-4">{item.title}</h2>
            <p className="w-full lg:w-2/3 mb-8">{item.description}</p>
            <button
              className="w-48 h-16 self-center text-white text-lg mb-12 rounded-none"
              style={{ backgroundColor: "rgb(16,16,16)" }}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SweatsAndDenimSection;
