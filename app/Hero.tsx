import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Streamline Your Workflow with TaskMaster
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          TaskMaster is the ultimate task management tool designed to boost productivity, collaborate seamlessly, and achieve your goals faster. Join thousands of teams transforming their workday.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            Get Started Free
          </Button>
          <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold">
            Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-12">
          <img
            src="https://source.unsplash.com/random/1200x600/?productivity,team"
            alt="TaskMaster Dashboard"
            className="mx-auto rounded-lg shadow-lg max-w-4xl w-full"
          />
        </div>
      </div>
    </section>
  );
}