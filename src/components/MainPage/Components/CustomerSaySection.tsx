import { CheckMark } from "../../../assets/icons";

const items = [
  {
    id: 1,
    src: "images/testimonial-img-1.webp",
    name: "Brayton",
    comment:
      "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend! 😊",
  },
  {
    id: 2,
    src: "images/a91051ab6c3645349b800b9d3d9d5dfe.mp4",
    name: "Aleena",
    comment:
      "These are so pretty and very comfy. Perfect color as well. I love wearing these with a neutral top. Wicked cute...😍",
  },
  {
    id: 3,
    src: "images/testimonial-img-2.webp",
    name: "Amina",
    comment:
      "A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase...🤗",
  },
];

const CustomerSaySection = () => {
  return (
    <section className="flex pb-8 px-8 bg-white">
      <div className="w-full flex flex-col text-left">
        <h2 className="text-3xl mb-8">Customer Say!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-1">
          {items.map((item) => (
            <div key={item.id} className="flex flex-row border-1">
              <div className="mb-6 overflow-hidden w-1/3">
                {item.src.endsWith(".mp4") ? (
                  <video
                    src={item.src}
                    controls
                    className="h-auto w-full object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.name}
                    className="h-auto object-none object-right"
                    style={{ maxWidth: "none" }}
                  />
                )}
              </div>
              <div className="flex flex-col w-2/3 p-10">
                <img
                  src="images/icon-review-5stars.svg"
                  className="w-[78px] mb-2"
                />
                <h3>Brayton</h3>
                <p className="flex items-center justify-start mb-6">
                  <CheckMark className="mr-2" />
                  <span
                    className="italic"
                    style={{ color: "rgba(16,16,16,0.75)" }}
                  >
                    Verified Buyer
                  </span>
                </p>
                <p
                  className="text-md leading-[1.8]"
                  style={{ color: "rgba(16,16,16,0.75)" }}
                >
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSaySection;
