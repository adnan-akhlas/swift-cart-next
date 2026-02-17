export default function Banner() {
  return (
    <section className="relative h-[75vh] flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src="/assets/banner-image.png" // Ensure this path matches your public folder or import
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"
          aria-hidden="true"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Best Collection For You
          </h1>

          <p className="text-gray-200 mb-6 text-lg">
            Discover the latest trends in fashion, electronics, and more. Shop
            with confidence and style at SwiftCart.
          </p>

          <button className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition px-8 py-3 rounded-md font-medium shadow-lg active:scale-95">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
