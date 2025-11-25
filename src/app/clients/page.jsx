'use client';

import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    { name: "Client 1", image: "/img/newedit/1.jpg" },
    { name: "Client 2", image: "/img/newedit/2.jpg" },
    { name: "Client 3", image: "/img/newedit/3.jpg" },
    { name: "Client 4", image: "/img/newedit/4.jpg" },
    { name: "Client 5", image: "/img/newedit/5.jpg" },
    { name: "Client 6", image: "/img/newedit/6.jpg" },
    { name: "Client 7", image: "/img/newedit/7.jpg" },
    { name: "Client 8", image: "/img/newedit/8.jpg" },
    { name: "Client 9", image: "/img/newedit/9.jpg" },
    { name: "Client 10", image: "/img/newedit/10.jpg" },
    { name: "Client 11", image: "/img/newedit/11.jpg" },
    { name: "Client 12", image: "/img/newedit/12.jpg" },
    { name: "Client 14", image: "/img/newedit/14.jpg" },
    { name: "Client 15", image: "/img/newedit/15.jpg" },
    { name: "Client 16", image: "/img/newedit/16.jpg" },
    { name: "Client 17", image: "/img/newedit/17.jpg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="gradient-green-light text-black py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Client Network</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're proud to serve businesses across diverse industries
          </p>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-auto object-contain max-h-48"
              />
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#8B7355] text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
