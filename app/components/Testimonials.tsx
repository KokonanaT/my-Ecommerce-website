const testimonials = [
  { name: "NanaK", text: "This is the best e-commerce site I have ever used" },
  { name: "Williams Clark", text: "Amazing products and great customer service" },
  { name: "Joshua Drake", text: "I found everything I needed in one place" },
];

const Testimonials = () => (
  <div className="py-12 bg-white">
    <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
    <div className="max-w-4xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="text-center mb-8">
          <p className="text-xl italic">&ldquo;{testimonial.text}&rdquo;</p>
          <p className="mt-4 font-semibold">{testimonial.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
