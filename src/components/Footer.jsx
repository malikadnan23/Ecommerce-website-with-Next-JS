const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-wide">
          Shopora
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto leading-relaxed">
          Discover quality products designed to match your style and everyday
          needs.
        </p>

        <div className="w-20 h-[1px] bg-gray-700 mx-auto my-8"></div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Shopora. Crafted with simplicity and quality.
        </p>
      </div>
    </footer>
  );
};

export default Footer;