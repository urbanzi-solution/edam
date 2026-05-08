export default function UnderDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Page Under Development
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
          We’re currently working on this page to bring you a better experience.
          Please check back soon.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="/"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Back to Home
          </a>

          <a
            href="https://wa.me/9188330605"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}