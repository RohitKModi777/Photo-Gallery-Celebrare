import { Loader2 } from 'lucide-react';

const Loader = ({ message = "Fetching stunning photos..." }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
    <p className="text-lg font-medium text-gray-700 dark:text-gray-200">{message}</p>
  </div>
);

export default Loader;
