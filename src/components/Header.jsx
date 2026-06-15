import {useState} from 'react';
import {Menu, X} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {name: 'Education', href:'#education'},
    {name: 'Experience', href:'#experience'},
    {name: 'Projects', href:'#projects'},
    {name: 'Skills', href:'#skills'},
    {name: 'About Me', href:'#moreabout'},
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <header className='relative z-50 px-6 '>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>

        {/* Logo */}
        <div className='text-white text-3xl font-bold cursor-pointer'>
            Sour Dev<span className='text-primary'>.</span>
        </div>

        {/* NAVIGATION */}
        <nav className='hidden md:flex gap-x-10 items-center'>
          <ul className='flex gap-8'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className='text-gray-300 hover:text-white transition-colors text-base font-medium'
                > {item.name}
                </button>
              </li>
            ))}
          </ul>
          
          <button
            onClick={() => scrollToSection('#contact')}
            className='bg-primary hover:bg-primary/90 text-white px-6 rounded-lg
            text-base font-semibold transition-all'
          >
               Contact Me

          </button>
        </nav>

        {/* Mobile Menu */}
        <button className = 'md:hidden text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        > {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className='fixed inset-0 bg-black/60
           backdrop-blur-sm md:hidden'
           onClick={() => setIsMenuOpen(false)}>
        </div>
      )} 
      
      <div className={`fixed top-0 right-0 h-full w-80
            bg-[#010101] z-50 transition-transform duration-300
            md:hidden ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } p-8 flex flex-col`}>
          <button className='self-end text-white mb-10'
            onClick={() => setIsMenuOpen(false)}
          > <X size={32}/>
          </button>
          <ul className='flex flex-col gap-8'>
            {menuItems.map((item) =>(
              <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className='text-white text-xl font-semibold hover:text-primary transition-colors'
                  >
                    {item.name}
                  </button>
              </li>
            ))}
            <li>
              <button onClick={() => scrollToSection('#contact')}
                className='w-full bg-primary text-white rounded-xl text-lg font-bold'>
                  Contact Me
              </button>
            </li>
          </ul>
      </div>
    </header>
  );
};

export default Header;
