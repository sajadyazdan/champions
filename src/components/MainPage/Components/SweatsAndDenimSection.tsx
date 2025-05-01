const SweatsAndDenimSection = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-10">
      <div>
        <img src="./images/multirow-img-1.webp" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="mb-4">Discover Sweats</h2>
        <p className="w-2/3 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          molestiae, cumque, perferendis praesentium nisi soluta eius dolorum
          odio quidem exercitationem blanditiis quibusdam quo modi vitae error
          est, iure inventore voluptate.
        </p>
        <button
          className="w-48 h-16 self-center text-white text-lg mb-12 rounded-none"
          style={{ backgroundColor: "rgb(16,16,16)" }}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default SweatsAndDenimSection;
