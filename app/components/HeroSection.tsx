import Image from 'next/image';

const HeroSection = () => (
  <div className="relative bg-blue-600 text-white p-8 sm:p-12 text-center overflow-hidden min-h-screen">
    <div className="absolute inset-0">
      <Image
        src="/images/Hero_background.webp"
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }} 
        className="absolute inset-0 opacity-50"
      />
    </div>
    <div className="relative z-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 blinking-color-text">
        DEKO'S PLACE
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6">
        Shop the best products at unbeatable prices!
      </p>
      <a
        href="/search"
        className="bg-white text-blue-600 py-2 px-4 sm:py-3 sm:px-6 rounded"
      >
        Shop Now
      </a>
    </div>
  </div>
);

export default HeroSection;
