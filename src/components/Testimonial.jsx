import React from "react";

export default function Testimonials() {
  const testimonialsData = [
    {
      name: "Ajay Mishra",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1649433658557-54cf58577c68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
      text: "Had a wonderful experience at Parichowk Suites. The service quality and cleanliness truly stood out. Perfect blend of comfort and luxury, ideal for family and business stays alike.",
    },
    {
      name: "Shiva Rawat",
      role: "Instagram Influencer",
      image: "https://images.unsplash.com/photo-1641466578751-46bfd407146a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
      text: "Staying at Parichowk Suites was amazing! The rooms were clean, modern, and comfortable. Staff was super polite and helpful. Highly recommended for anyone visiting Greater Noida!",
    },
    {
      name: "James Washington",
      role: "Digital Content Creator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      text: "Loved my stay at Parichowk Suites! The location is perfect, food was delicious, and the ambiance felt premium. Great value for money — would definitely visit again.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 lg:px-24 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h5 className="text-gray-500 font-medium tracking-widest mb-2">OUR CLIENTS</h5>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">Experiences</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Hear what our happy clients have to say about their experiences with our services. We focus on providing comfort, convenience, and quality in every stay.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-md shadow-black/5 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-4 px-5 py-4 bg-red-500/10">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h2 className="text-lg font-medium text-gray-800">{testimonial.name}</h2>
                <p className="text-gray-800/80">{testimonial.role}</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="p-5 pb-7">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                      fill="#FF532E"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
