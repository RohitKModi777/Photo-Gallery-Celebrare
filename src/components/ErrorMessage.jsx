const ErrorMessage = ({ message }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg text-center max-w-md">
      <p className="text-red-600 dark:text-red-400 font-semibold mb-2">Oops! Something went wrong.</p>
      <p className="text-red-500 dark:text-red-500">{message}</p>
    </div>
  </div>
);

export default ErrorMessage;
