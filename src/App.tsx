import React, { useState } from 'react';
import { Search, User, ShoppingBag, ArrowRight } from 'lucide-react';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount(prev => prev + 1);

  const products = [
    { id: 1, name: "Textured Knit Polo", price: "$85.00", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Everyday Chino Pant", price: "$120.00", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Minimalist Leather Sneaker", price: "$150.00", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Lightweight Harrington Jacket", price: "$195.00", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      {/* Banner / Info about this applet */}
      <div className="bg-neutral-900 text-white text-sm py-2 px-4 text-center">
        <strong>Shopify Theme Preview</strong> - This AI Studio project contains authentic Shopify Liquid files. You can export this project to GitHub via settings to import it to your Shopify store. files are located in the <code>/shopify-theme</code> folder.
      </div>

      {/* Header Section */}
      <header className="border-b border-neutral-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Line: Logo and Icons */}
          <div className="flex justify-between items-center h-20">
            {/* Empty left spacer to center logo perfectly */}
            <div className="flex-1"></div>
            
            {/* Logo */}
            <div className="flex-1 text-center">
              <a href="#" className="text-3xl font-serif tracking-tight text-neutral-900 font-medium">
                BroHive
              </a>
            </div>

            {/* Icons */}
            <div className="flex-1 flex justify-end space-x-6">
              <button aria-label="Search" className="text-neutral-600 hover:text-black transition-colors">
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button aria-label="Account" className="text-neutral-600 hover:text-black transition-colors">
                <User className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button aria-label="Cart" className="text-neutral-600 hover:text-black transition-colors relative">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Bottom Line: Navigation */}
          <nav className="flex justify-center space-x-12 pb-5 hidden md:flex">
            <a href="#" className="text-sm font-medium tracking-widest text-neutral-500 hover:text-black transition-colors uppercase">
              New Arrivals
            </a>
            <a href="#" className="text-sm font-medium tracking-widest text-black border-b-2 border-black pb-1 uppercase">
              Curated
            </a>
            <a href="#" className="text-sm font-medium tracking-widest text-neutral-500 hover:text-black transition-colors uppercase">
              Collections
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section - Split Layout */}
        <section className="flex flex-col lg:flex-row min-h-[600px] h-[calc(100vh-140px)]">
          {/* Left Content */}
          <div className="flex-1 bg-[#f7f8f6] flex items-center justify-center p-12 lg:p-24 relative">
            <div className="max-w-md w-full relative z-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-neutral-400 mb-6 uppercase">
                Recommended For You
              </p>
              <h1 className="text-5xl lg:text-7xl font-light text-neutral-900 leading-tight mb-8">
                The Essential <br />
                <span className="font-serif italic text-neutral-800">Merino</span> Collection
              </h1>
              <p className="text-neutral-500 text-lg mb-10 leading-relaxed max-w-sm">
                Tailored for your specific profile. A timeless silhouette crafted from ethically sourced ultra-fine wool.
              </p>
              <button className="bg-black text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors">
                Shop The Look
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative bg-neutral-200 h-[400px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Fashion model wearing a timeless coat" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif mb-2">New Arrivals</h2>
              <p className="text-neutral-500">Discover our latest collection of premium menswear.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center text-sm font-medium uppercase tracking-widest hover:underline pb-1">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-neutral-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <button 
                    onClick={(e) => { e.stopPropagation(); addToCart(); }}
                    className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm text-center py-4 text-sm font-bold tracking-widest uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Quick Add
                  </button>
                </div>
                <h3 className="text-sm font-medium mb-1 group-hover:underline">{product.name}</h3>
                <p className="text-sm text-neutral-500">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <a href="#" className="inline-flex items-center text-sm font-medium uppercase tracking-widest border-b border-black pb-1">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </section>

        {/* Categories / Banner Section */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-[4/3] bg-neutral-200 overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Casual Wear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-3xl font-serif mb-4">Everyday Casual</h3>
                <button className="bg-white text-black px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-neutral-100 transition-colors">Shop Shirts</button>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] bg-neutral-200 overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Outerwear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-3xl font-serif mb-4">Premium Outerwear</h3>
                <button className="bg-white text-black px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-neutral-100 transition-colors">Shop Jackets</button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Philosophy / Text Section */}
        <section className="py-24 bg-[#f7f8f6] text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-medium tracking-widest uppercase mb-6 text-neutral-400">Our Philosophy</h2>
            <p className="text-3xl lg:text-4xl font-serif leading-snug">
              We design for the modern man who values quality, minimalism, and versatility. Every piece in our collection is crafted to be a staple in your wardrobe for years to come.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="text-3xl font-serif tracking-tight text-neutral-900 font-medium mb-6 inline-block">
                BroHive
              </a>
              <p className="text-neutral-500 max-w-xs mb-6">
                Elevating men's fashion with timeless designs, ethical sourcing, and uncompromising quality.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 cursor-pointer transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </div>
                <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 cursor-pointer transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase mb-4">Shop</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-neutral-500 hover:text-black transition-colors">New Arrivals</a></li>
                <li><a href="#" className="text-neutral-500 hover:text-black transition-colors">Best Sellers</a></li>
                <li><a href="#" className="text-neutral-500 hover:text-black transition-colors">Outerwear</a></li>
                <li><a href="#" className="text-neutral-500 hover:text-black transition-colors">Footwear</a></li>
                <li><a href="#" className="text-neutral-500 hover:text-black transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-neutral-500 hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="text-neutral-500 hover:text-black transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-neutral-500 hover:text-black transition-colors">Careers</a></li>
                <li><a href="#" className="text-neutral-500 hover:text-black transition-colors">FAQ</a></li>
                <li><a href="#" className="text-neutral-500 hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-200 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">&copy; {new Date().getFullYear()} BroHive. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

