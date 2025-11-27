export default function WhyPAH() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="text-white p-8 rounded-lg bg-[#8B7355]">
            <h3 className="text-2xl font-bold mb-4">MISSION</h3>
            <p className="text-lg leading-relaxed">
              To establish Mark & Check as the undisputed leader in Kerala’s corporate sector while expanding our
              global footprint, ensuring that businesses worldwide have access to our premier expertise through a
              growing network of excellence.
            </p>
          </div>

          {/* Vision Card */}
          <div className="text-black p-8 rounded-lg bg-white">
            <h3 className="text-2xl font-bold mb-4">VISION</h3>
            <p className="text-lg leading-relaxed">
              To redefine the landscape of corporate services by delivering audit-centric solutions fortified by
              legal compliance through an unprecedented, systematic framework that sets a new industry standard
              for precision and integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}