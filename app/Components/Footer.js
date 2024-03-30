const Footer = () => {
    return (
      <footer className="text-black bg-opacity-1 bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="">© 2024 Prestige Properties. All rights reserved.</p>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className=" hover:text-light">Terms of Use</a>
              </li>
              <li>
                <a href="#" className=" hover:text-light">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className=" hover:text-light">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  