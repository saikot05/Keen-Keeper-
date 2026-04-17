import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div>
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-xl mt-2">Page not found</h2>

        <p className="mt-4 text-gray-500">
          The page you are looking for doesn’t exist.
        </p>

        <div className="mt-6 space-x-3">
          <button
            onClick={() => (window.location.href = '/')}
            className="px-4 py-2 bg-[#244D3F] text-white rounded"
          >
            Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="btn px-4 py-2 rounded"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;