import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

      
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">
            <span className="text-[#d6b98c]">EDAM</span> 
          </h2>
          <p className="text-sm text-white/60 mt-4 leading-relaxed">
            Architectural visualization studio crafting immersive,
            photorealistic experiences before they’re built.
          </p>
        </div>

       
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/70 mb-4">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/70 mb-4">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li>Interior Visualization</li>
            <li>Exterior Visualization</li>
            <li>3D Animation</li>
            <li>VR / AR Experiences</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/70 mb-4">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="w-4 h-4" />
               edamdesignstudio.eds@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="w-4 h-4" />
              +91  9188330605, +91 8921277670
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="w-4 h-4" />
             Vattiyoorkkav Puliyarakkonam Rd, Puliyarakonam, Vilappil, Kerala 695573
            </li>
          </ul>
        </div>
      </div>

     
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Urbanzi Solutions. All rights reserved.
      </div>
    </footer>
  );
}
