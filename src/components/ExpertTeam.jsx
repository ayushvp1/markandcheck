"use client";

export default function ExpertTeam() {
    const teamMembers = [
        {
            name: "AHMMED RAZI KM",
            position: "Managing Partner\nChartered Accountant",
            description:
                "A dedicated finance professional committed to delivering accurate, compliant, and strategic financial solutions across taxation, audit, and corporate advisory services.",
        },
        {
            name: "RAFEEQUE HUSSAIN AK",
            position: "Managing Partner\nCorporate Lawyer",
            description:
                "An experienced legal expert specializing in Corporate Law and Intellectual Property Rights, providing strategic guidance and robust legal support to protect and strengthen organizational interests.",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Meet the Expert Team<span className="text-primary-brown">.</span>
                    </h2>
                </div>

                {/* Founding Principles */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Founding Principles
                    </h3>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        To understand our clients' needs by continually focusing on their requirements, building lasting relationships, and
                        delivering precise, timely, and creative solutions with the highest level of professional integrity.
                    </p>
                </div>

                {/* Team Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="text-center rounded-xl shadow-[0_18px_35px_rgba(92,74,58,0.25)] bg-white"
                        >
                            {/* Member Photo */}
                            <div className="mb-6">
                                <div className="w-64 h-80 mx-auto rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                                    {member.name === "RAFEEQUE HUSSAIN AK" ? (
                                        <img
                                            src="/img/rafeeque hussain ak.jpg"
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : member.name === "AHMMED RAZI KM" ? (
                                        <img
                                            src="/img/newpicahmad.jpg"
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-400 text-sm">Team Member Photo</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="px-6 pb-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-2 whitespace-pre-line">
                                    {member.name}
                                </h4>
                                <p className="text-sm font-medium text-gray-500 mb-4 tracking-wider whitespace-pre-line">
                                    {member.position}
                                </p>
                                <blockquote className="border-l-4 border-[#8B7355] pl-4 text-gray-600 text-sm leading-relaxed text-left italic">
                                    "{member.description}"
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-6">
                        Ready to work with our expert team?
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-primary-brown text-white px-8 py-3 rounded-lg font-medium hover:bg-dark-brown transition-colors duration-200"
                    >
                        Get Started Today
                    </a>
                </div>

            </div>
        </section>
    );
}