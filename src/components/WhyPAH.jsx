export default function WhyPAH() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Financial Excellence Card */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Delivering Financial Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We empower our clients to make informed financial decisions by providing comprehensive accounting services, from bookkeeping and tax preparation to financial consulting and audit services, ensuring accuracy, compliance, and strategic growth planning.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="text-white p-8 rounded-lg bg-[#8B7355]">
            <h3 className="text-2xl font-bold mb-4">MISSION</h3>
            <p className="text-lg leading-relaxed">
              At Mark & Check we save time & money & bring our clients complete peace of mind by providing the
              best accounting, tax preparation & financial management services. Mark & Check capitalizes on
              providing our clients a competitive advantage by being innovative, proactive, and true to our
              core values while delivering precision in every number and the highest quality in everything we do.
            </p>
          </div>

          {/* Vision Card */}
          <div className="text-white p-8 rounded-lg bg-[#8B7355]">
            <h3 className="text-2xl font-bold mb-4">VISION</h3>
            <p className="text-lg leading-relaxed">
              To be the most trusted accounting and financial services provider in the region, empowering
              businesses to achieve financial success through expert guidance, innovative solutions, and
              unwavering commitment to accuracy. We strive to build lasting partnerships while maintaining
              the highest standards of professional excellence and ethical practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}