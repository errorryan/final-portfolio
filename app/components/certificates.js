
import portfolioData from "../data";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-white dark:bg-gray-950 text-black dark:text-white py-28 px-6 scroll-mt-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            My Achievements
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Certificates
            <span className="text-gray-400 dark:text-gray-500">.</span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl">
            Trainings, certifications, and learning experiences
            that represent my continuous growth in technology.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {portfolioData.certificates.map((certificate, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-black dark:hover:border-white hover:-translate-y-2 transition-all duration-300"
            >

              {/* Certificate Image */}
              <div className="h-56 bg-gray-100 dark:bg-gray-800 overflow-hidden flex items-center justify-center p-4">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-6">

               

                <h3 className="text-lg font-bold mb-3 leading-snug text-black dark:text-white">
                  {certificate.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 dark:text-gray-500 text-sm mb-6">
                  {certificate.date}
                </p>

                {/* View Button */}
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition duration-300"
                >
                  View Certificate
                  <span>↗</span>
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Line */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800"></div>

      </div>
    </section>
  );
}
