
const Footer = () => {
  return (
    <footer className="w-full py-4 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      
        <div className="flex flex-col md:flex-row gap-2 items-center mb-4 md:mb-0">
          <div className="mr-3">
           
            <img 
              src="/logo.png" 
              alt="oiid logo" 
              className="h-[64px] w-auto" 
            />
          </div>
          <div className="text-sm ">
            Utviklet i regi av Kodeforest Bergen © 2025
          </div>
        </div>

 
        <div className="flex space-x-6">
          <a 
            href="/privacy" 
            className="text-sm hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            className="text-sm hover:text-white transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;