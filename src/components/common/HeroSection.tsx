import React from 'react';

const HeroSection: React.FC = () => {
    return (
    <section id="home" className="pt-20">
        <div className="container px-6 py-16 mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center">
                {/* Text */}
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                    <div className="lg:max-w-lg">
                        <h1 className="text-xl text-gray-800 lg:text-4xl font-normal">
                            Jasa Sablon Custom
                        </h1>
                        <h2 className="mt-2 text-3xl lg:text-7xl font-bold text-gray-800">
                            By Cingtexs
                        </h2>

                        <a
                            href="https://wa.me/6285770786164?text=Halo%20saya%20ingin%20order%20produk%20Anda"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#3e62ac] rounded-lg lg:w-auto hover:bg-[#345a99] focus:outline-none focus:bg-[#345a99] text-center inline-block"
                        >
                            Shop Now
                        </a>

                    </div>
                </div>

                {/* Image */}
                <div className="w-1/2 min-w-[200px] px-2 flex justify-center">
                    <img
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
                        src="/asset/logo.png"
                        alt="Catalogue illustration"
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroSection;
