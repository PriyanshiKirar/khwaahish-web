const Header = () => (
  <header >
    <div className="flex items-center overflow-hidden bg-black justify-between px-6 py-2 text-white">
      <h1 className="text-1xl mr-[4vw] whitespace-nowrap">
        Visit Brand Website
      </h1>
      <p className="animate-scroll whitespace-nowrap">
        We ship worldwide | Free Shipping Across India. For further details, Please call: +91 9884039111 | 
        We design, manufacture & retail jewellery using NATURAL DIAMONDS only | All our Jewels are BIS Hallmarked 
        & Diamonds are ethically sourced & certified by world-renowned Gemological Institutes.
      </p>
    </div>
    <div className="max-w-7xl mx-auto flex justify-between items-center text-zinc-800">
      <a href="#" className="text-lg font-bold">KHWAAHISH</a>
      <nav className="flex space-x-6">
        <a href="#" className="hover:text-gray-300">HIGH JEWELLERY</a>
        <a href="#" className="hover:text-gray-300">QUEEN OF HEARTS</a>
        <a href="#" className="hover:text-gray-300">OUR STORY</a>
        <a href="#" className="hover:text-gray-300">MEDIA</a>
      </nav>
      <div className="flex space-x-4">
        <button className="hover:text-gray-300">🔍</button>
        <button className="hover:text-gray-300">📍</button>
      </div>
    </div>
  </header>
);
export default Header;






