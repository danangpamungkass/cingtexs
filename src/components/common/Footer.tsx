const Footer = () => {
  return (
  <section id="info" className="pt-20">
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Google Maps Embed */}
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.9206010286921!2d106.5946961!3d-6.1669511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff126eb179ad%3A0xc5214426e3f648f!2sJl.%20Sejahtera%20Utama%20Blok%20A3%20No.49%2C%20RT.001%2FRW.008%2C%20Periuk%2C%20Kec.%20Periuk%2C%20Kota%20Tangerang%2C%20Banten%2015131!5e0!3m2!1sid!2sid!4v1748446771396!5m2!1sid!2sid"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Contacts */}
        <div className="space-y-2 text-sm lg:col-span-1">
          <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a className="transition-colors duration-300 text-black text-deep-purple-accent-400 hover:text-deep-purple-800">
              +62 857-7078-6164
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 text-black text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Jl. Sejahtera Utama Blok A3 No.49, RT.001/RW.008, Periuk, Kec. Periuk, Kota Tangerang, Banten 15131
            </a>
          </div>
        </div>

        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
          <div className="flex items-center mt-1 space-x-3">
            <a href="https://instagram.com" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-10 border-t text-center">
        <p className="text-sm text-gray-600">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
      </div>
    </div>
  </section>
  );
};

export default Footer;
