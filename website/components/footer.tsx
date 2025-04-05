const Footer = () => {
  return (
    <footer className="w-full border-t border-stone-300 bg-stone-100 mt-12">
      <div className="max-w-4xl mx-auto px-4 py-6 flex text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="text-xl w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-purple-500" />
          <span>
            <a
              href="https://x.com/rcuffdev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline text-black"
            >
              @rcuffdev
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
