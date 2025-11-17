import { BiAlarm } from 'react-icons/bi';
import { FaUsers, FaCircleCheck } from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to right, var(--off-white), #ffffff)',
      }}
    >
      <div className="max-w-6xl mx-auto px-8">
        
        {/* ===== OLD STYLE HEADING (restored) ===== */}
        <div className="text-center mb-12">
          <h2
            className="font-bold text-4xl mb-4"
            style={{ color: 'var(--black)' }}
          >
            About Us
          </h2>
          <p
            className="font-normal text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--medium-gray)' }}
          >
            Reliable audit and corporate advisory services tailored to your requirements
          </p>
        </div>

        {/* ===== NEW MODERN CONTENT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-beige rounded-full blur-3xl opacity-60"></div>
            <img
              src="/img/about.jpg"
              alt="Professional accounting team"
              className="relative w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Right: Text + Features */}
          <div>
            <h3
              className="font-medium text-2xl mb-4"
              style={{ color: 'var(--black)' }}
            >
              Your Financial Success Partners
            </h3>

            <p
              className="font-normal leading-relaxed mb-6"
              style={{ color: 'var(--medium-gray)' }}
            >
              Our dedicated team of <span className="gradient-green-light px-1 rounded-[20px]" style={{ color: 'var(--black)' }}>accounting professionals</span> ensures every calculation is precise and every strategy transparent. We work closely with businesses of all sizes — from startups to enterprises — offering tailored insights that help them grow confidently.
            </p>

            <p
              className="font-normal leading-relaxed mb-10"
              style={{ color: 'var(--medium-gray)' }}
            >
              With precision, trust, and innovation at our core, we deliver financial clarity that drives smarter business decisions and long-term success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <FaCircleCheck className="text-primary-brown text-3xl mb-3" />
                <h4 className="font-medium text-base" style={{ color: 'var(--black)' }}>
                  Accuracy
                </h4>
                <p className="text-sm" style={{ color: 'var(--medium-gray)' }}>
                  We ensure your numbers always tell the truth.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaUsers className="text-blue-500 text-3xl mb-3" />
                <h4 className="font-medium text-base" style={{ color: 'var(--black)' }}>
                  Expertise
                </h4>
                <p className="text-sm" style={{ color: 'var(--medium-gray)' }}>
                  Experienced professionals across multiple industries.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <BiAlarm className="text-orange-500 text-3xl mb-3" />
                <h4 className="font-medium text-base" style={{ color: 'var(--black)' }}>
                  Timely Support
                </h4>
                <p className="text-sm" style={{ color: 'var(--medium-gray)' }}>
                  Reliable assistance when you need it most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
