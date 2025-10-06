import { Button } from '@/components/ui/button';
import { Mail, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Join TaskMaster today and transform the way your team works.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold mb-8">
          Start Your Free Trial
        </Button>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="text-gray-400 text-sm">
          &copy; 2025 TaskMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
}