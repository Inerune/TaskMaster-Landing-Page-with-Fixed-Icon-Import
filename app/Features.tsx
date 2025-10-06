import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: "Intuitive Task Creation",
    description: "Easily create, assign, and track tasks with drag-and-drop interface.",
    icon: CheckCircle
  },
  {
    title: "Real-time Collaboration",
    description: "Work together in real-time with your team, no matter where you are.",
    icon: CheckCircle
  },
  {
    title: "Advanced Analytics",
    description: "Get insights into your productivity with customizable reports and dashboards.",
    icon: CheckCircle
  },
  {
    title: "Secure & Scalable",
    description: "Enterprise-grade security and scalability to grow with your business.",
    icon: CheckCircle
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose TaskMaster?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}