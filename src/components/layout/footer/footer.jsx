
const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] text-white py-4 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-3">
           
            <img 
              src="/logo.png" 
              alt="oi:d logo" 
              className="h-6 w-auto" 
            />
          </div>
          <div className="text-sm text-gray-400">
            Utviklet i regi av Kodeforest Bergen © 2025
          </div>
        </div>

 
        <div className="flex space-x-6">
          <a 
            href="/privacy" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;