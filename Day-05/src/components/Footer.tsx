import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, PinIcon as Pinterest, WebcamIcon as Skype } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white px-6 py-16 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Menu Column */}
          <div className="space-y-6">
            <h3 className="text-base font-normal">Menu</h3>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm hover:underline">New arrivals</a>
              <a href="#" className="text-sm hover:underline">Best sellers</a>
              <a href="#" className="text-sm hover:underline">Recently viewed</a>
              <a href="#" className="text-sm hover:underline">Popular this week</a>
              <a href="#" className="text-sm hover:underline">All products</a>
            </nav>
          </div>

          {/* Categories Column */}
          <div className="space-y-6">
            <h3 className="text-base font-normal">Categories</h3>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm hover:underline">Crockery</a>
              <a href="#" className="text-sm hover:underline">Furniture</a>
              <a href="#" className="text-sm hover:underline">Homeware</a>
              <a href="#" className="text-sm hover:underline">Plant pots</a>
              <a href="#" className="text-sm hover:underline">Chairs</a>
              <a href="#" className="text-sm hover:underline">Crockery</a>
            </nav>
          </div>

          {/* Our Company Column */}
          <div className="space-y-6">
            <h3 className="text-base font-normal">Our company</h3>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm hover:underline">About us</a>
              <a href="#" className="text-sm hover:underline">Vacancies</a>
              <a href="#" className="text-sm hover:underline">Contact us</a>
              <a href="#" className="text-sm hover:underline">Privacy</a>
              <a href="#" className="text-sm hover:underline">Returns policy</a>
            </nav>
          </div>

          {/* Join Mailing List */}
          <div className="space-y-6">
            <h3 className="text-base font-normal">Join our mailing list</h3>
            <div className="flex gap-2 w-full">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-[#393653] border-none text-white placeholder:text-gray-400 h-12 w-full"
              />
              <Button 
                className="bg-white text-black hover:bg-gray-100 h-12 px-6"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-[#4E4D93]">
          <p className="text-sm mb-6 md:mb-0">Copyright 2022 Avion LTD</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-300">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-gray-300">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="hover:text-gray-300">
              <Skype className="w-5 h-5" />
              <span className="sr-only">Skype</span>
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="hover:text-gray-300">
              <Pinterest className="w-5 h-5" />
              <span className="sr-only">Pinterest</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
