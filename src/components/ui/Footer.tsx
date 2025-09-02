"use client"

export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">© 2025 CREATE. All Rights Reserved.</div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 text-sm">
              <FooterNavItem href="/MainPage" text="TOP" />
              <FooterNavItem href="/AboutUsPage" text="ABOUT" />
              <FooterNavItem href="/ProjectsPage" text="PROJECTS" />
              <FooterNavItem href="/TechPage" text="TECH" />
              <FooterNavItem href="/Fund&SponsorPage" text="FUND&SPONSORS" />
              <FooterNavItem href="/ContactPage" text="CONTACT" />
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function FooterNavItem({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <a href={href} className="hover:text-gray-300 transition-colors">
        {text}
      </a>
    </li>
  )
}

