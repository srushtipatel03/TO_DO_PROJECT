// import React from 'react'
// import { Menu, X } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const menuItems = [
 
//   {
//       to : '/'
//   },
// ]

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <div className="relative w-full bg-white  shadow-md mb-2">
//       <div className="mx-auto flex max-w-[95%] items-center justify-between py-5">
//       <div className="inline-flex items-center space-x-2">
//           <span>
//             <svg
//               width="30"
//               height="30"
//               viewBox="0 0 50 56"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
//                 fill="black"
//               />
//             </svg>
//           </span>
//           <span className="font-bold">DevUI</span>
         
        
//         </div>
//         <div className="hidden grow items-start lg:flex justify-center~">
//           <ul className="ml-12 inline-flex space-x-8">
//             {menuItems.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   to={item.to}
//                   className="text-sm font-semibold text-gray-800 hover:text-gray-900"
//                 >
//                   {item.name}
                  
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className=" space-x-2 flex">
//           <Link to="/register">          
//           <button
//             type="submit"
//             className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//           >
//             Sign Up
//           </button>
//           </Link>
//           <Link to="/login">          
//           <button
//             type="submit"
//             className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//           >
//             Log In
//           </button>
//           </Link>
//         </div>

//         <div className="lg:hidden">
//           <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
//         </div>

//         {isMenuOpen && (
//           <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
//             <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//               <div className="px-5 pb-6 pt-5">
//                 <div className="flex items-center justify-between">
//                   <div className="inline-flex items-center space-x-2">
//                     <span className="font-bold">MUI</span>
//                   </div>
//                   <div className="-mr-2">
//                     <button
//                       type="button"
//                       onClick={toggleMenu}
//                       className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                     >
//                       <span className="sr-only">Close menu</span>
//                       <X className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <nav className="grid gap-y-4">
//                     {menuItems.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.to}
//                         className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
//                       >
//                         <span className="ml-3 text-base font-medium text-gray-900">
//                           {item.name}
//                         </span>
//                       </Link>
//                     ))}
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }




import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
    {
        name: 'Home',
        to: '/'
    },
    {
        name: 'Register',
        to: '/register'
    },
    {
        name: 'Login',
        to: '/login'
    }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative w-full bg-white shadow-md mb-2">
            <div className="mx-auto flex max-w-[95%] items-center justify-between py-5">
                <div className="inline-flex items-center space-x-2">
                    <span>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 50 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2311C20.4123 32.2515 21.7527 34.5166 20.3135 35.9558C19.8215 36.4478 19.1312 36.4971 17.7506 36.0014C16.9618 35.7066 15.1384 34.5189 13.8061 33.4771C12.4738 32.4352 11.2422 31.5984 11.0906 31.5984C10.939 31.5984 10.8374 32.5339 10.8374 33.6749C10.8374 35.7593 10.6429 35.9558 8.85627 35.9558C7.84729 35.9558 7.69942 35.8572 7.45357 35.3138C7.25634 34.8703 7.30681 33.6064 7.602 31.4013C8.00262 28.7566 8.00262 27.7279 7.602 25.0831C7.30681 22.8781 7.25634 21.6142 7.45357 21.1707C7.69942 20.6273 7.84729 20.5287 8.85627 20.5287C10.6429 20.5287 10.8374 20.7252 10.8374 22.8096C10.8374 23.9506 10.939 24.8861 11.0906 24.8861C11.2422 24.8861 12.4738 24.0493 13.8061 23.0075C15.1384 21.9656 16.9618 20.778 17.7506 20.4831C19.1312 19.9874 19.8215 20.0368 20.3135 20.5287C20.4123 20.6273 20.2161 21.2101 20.2161 21.8989ZM36.7564 31.5007C37.1494 32.291 37.1494 32.3896 36.6584 33.1801C35.6676 34.6657 31.9836 35.1059 29.8893 34.0641C29.2455 33.7693 25.0982 30.4816 24.8516 30.1847C24.5554 29.8379 24.5554 28.3071 24.8516 27.9602C25.3469 27.5133 26.4865 28.0623 27.0298 28.8076C27.3259 29.1545 28.9612 30.3891 30.6168 31.475C33.3017 33.2295 33.3017 33.2295 34.8363 32.6838C35.8726 32.339 36.6584 31.475 36.7564 31.5007ZM34.2937 25.9915C35.083 26.1404 35.5761 26.679 36.0253 27.9618C36.3173 28.7992 36.267 29.4231 35.7763 29.9145C35.137 30.5524 34.0971 30.5267 33.0554 29.8475C32.1141 29.252 30.4702 27.8586 29.3306 26.8724C28.0937 25.781 27.4748 25.2618 27.1279 24.5706C26.4382 23.1487 27.4748 21.5956 29.2288 21.3954C30.4206 21.2512 31.2171 21.5276 32.4572 22.4064C32.9594 22.7533 33.5861 23.0975 33.8519 23.1703C34.0248 23.219 34.186 23.3267 34.2937 23.4596C34.4516 23.6561 34.4516 23.7327 34.2937 25.9915Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                </div>
                <button
                    onClick={toggleMenu}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-gray-300 md:hidden"
                >
                    <span className="sr-only">Toggle Menu</span>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
                <nav
                    className={`fixed top-16 right-0 z-20 w-8/12 transform bg-white p-6 shadow-md transition duration-200 ease-in-out md:relative md:top-0 md:right-0 md:w-auto md:transform-none md:p-0 md:shadow-none ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <ul className="flex flex-col md:flex-row md:items-center md:space-x-10">
                        {menuItems.map((item, idx) => (
                            <li key={idx} className="p-2 md:p-0">
                                <Link to={item.to}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
