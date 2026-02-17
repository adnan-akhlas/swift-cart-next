import {
  IconHeadset,
  IconRotate,
  IconShieldCheck,
  IconTruckDelivery,
} from "@tabler/icons-react";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: IconTruckDelivery,
      title: "Fast Delivery",
      description:
        "Get your orders delivered to your doorstep quickly and efficiently.",
    },
    {
      id: 2,
      icon: IconHeadset,
      title: "24/7 Support",
      description:
        "Our support team is available around the clock to assist you.",
    },
    {
      id: 3,
      icon: IconShieldCheck,
      title: "Secure Payment",
      description:
        "Experience safe and secure transactions with our encrypted payment systems.",
    },
    {
      id: 4,
      icon: IconRotate,
      title: "Easy Returns",
      description: "Not satisfied? Return your products easily within 30 days.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Why Choose Us
        </h2>
        <p className="text-gray-500 mb-12">
          We provide the best shopping experience with top-notch services.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ id, icon, title, description }) => {
            const Icon = icon;
            return (
              <div
                key={id}
                className="relative text-left pt-12 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition group"
              >
                {/* Icon Container */}
                <div className="absolute -top-4 border-white border-4 w-14 h-14 flex items-center justify-center rounded-lg bg-indigo-50 shadow-md mb-6 group-hover:bg-indigo-400 group-hover:text-white transition-colors duration-300">
                  <Icon />
                </div>

                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
