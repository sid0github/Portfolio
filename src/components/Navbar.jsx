// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className="backdrop-blur-md bg-white/70 shadow-md fixed w-full z-50 transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
//         <h1 className="text-2xl font-bold text-gray-800 tracking-wide">Siddharth</h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-10">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-gray-700 hover:text-indigo-600 text-md font-medium transition duration-300"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-700 focus:outline-none"
//           >
//             <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
//               <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out">
//           <div className="px-4 py-4 space-y-3">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="block text-gray-700 hover:text-indigo-600 text-base font-medium transition duration-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// Temporary placeholder component
import React from 'react';

const Navbar = () => {
  return null; // This renders nothing, effectively hiding the navbar
};

export default Navbar; 