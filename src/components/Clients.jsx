'use client';

export default function Clients() {
  const clients = [
    { name: "Careland", image: "/img/trusted_companies/Careland.jpg" },
    { name: "Talenmark", image: "/img/trusted_companies/Talenmark.jpg" },
    { name: "Woodlem Park", image: "/img/trusted_companies/Woodlem Park.jpg" },
    { name: "Faceworld Leadership School", image: "/img/trusted_companies/faceworldleadershipschool.jpg" },
    { name: "Hillsinai Finishing School", image: "/img/trusted_companies/hillsinaifinishingschool.jpg" },
    { name: "Life Infusion Pharmaceuticals Pvt. Ltd.", image: "/img/trusted_companies/lifeinfusionpharmaceuticalsprivatelimited.jpg" },
    { name: "Tour De Stories", image: "/img/trusted_companies/tourdestories.jpg" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className="font-bold text-3xl mb-4"
            style={{ color: 'var(--black)' }}
          >
            Powering Business Success
          </h2>
          <p
            className="font-normal text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--medium-gray)' }}
          >
            We're proud to serve businesses across diverse industries
          </p>
        </div>

        {/* Scrolling Clients */}
        <div className="relative overflow-hidden">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .scroll-container {
              animation: scroll 20s linear infinite;
            }
            .scroll-container:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="flex scroll-container">
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-5 p-6 rounded-lg text-center transition-all duration-300 hover:scale-110 w-80 h-60"
                style={{ backgroundColor: 'var(--off-white)' }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full rounded-lg object-contain shadow-md"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-5 p-6 rounded-lg text-center transition-all duration-300 hover:scale-110 w-80 h-60"
                style={{ backgroundColor: 'var(--off-white)' }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full rounded-lg object-contain shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
