export default function Header() {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="flex justify-between items-center px-8 h-16">
          <div className="text-white text-xl font-bold tracking-wider">FROM THE EARTH</div>
          <nav>
            <ul className="flex space-x-8 text-sm text-white/90">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Top
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Project
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
  
  