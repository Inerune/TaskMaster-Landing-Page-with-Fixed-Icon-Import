import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    quote: "TaskMaster revolutionized our team's productivity. We cut down project times by 40%!",
    author: "Jane Doe, CEO @ TechCorp",
    image: "https://source.unsplash.com/random/100x100/?woman,professional"
  },
  {
    quote: "The collaboration features are top-notch. Highly recommend for remote teams.",
    author: "John Smith, CTO @ Innovate",
    image: "https://source.unsplash.com/random/100x100/?man,professional"
  },
  {
    quote: "Analytics dashboard is intuitive and powerful. Data-driven decisions made easy.",
    author: "Alice Johnson, PM @ GrowthHub",
    image: "https://source.unsplash.com/random/100x100/?woman,business"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardHeader>
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-center">{testimonial.author}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center italic">
                  &quot;{testimonial.quote}&quot;
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}