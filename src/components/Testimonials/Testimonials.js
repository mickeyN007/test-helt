import "./Testimonials.css";

const quotes = [
  {
    id: 1,
    quote: `70% of providers labeling telehealth as “convenient” and 90%
            identifying convenience as the leading benefit of telehealth for
            patients.`,
    source: "forbes.com",
  },
  {
    id: 2,
    quote: `70% of providers labeling telehealth as “convenient” and 90%
            identifying convenience as the leading benefit of telehealth for
            patients.`,
    source: "Telemedicince.com",
  },
];

export default function Testimonials() {
  //iterate the testimonialData
  const Testimonial = quotes.map((testimonial) => (
    <section key={testimonial.id} className="testimonial">
      <div className="content">
        <span className="top-quote-mark"></span>
        <p className="quote">{testimonial.quote}</p>
        <span className="bottom-quote-mark"></span>
      </div>
      <h4 className="name">{testimonial.source}</h4>
    </section>
  ));
  return (
    <section className="testimonials">
      <div className="test-inner">{Testimonial} </div>
    </section>
  );
}
