import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/fontawesome.min.css";
import "./Web.css";
import "./function.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CategoryGrid from "./pages/CategoryGrid";
import GeyserList from "./pages/Geyserlist";
import ACList from "./pages/AClist";
import Layout from "./pages/Layout.jsx";
import Reflist from "./pages/Reflist"
import LogoSlider from "./pages/logoslider";

function Home() {
    return (
        <Router basename="/ECHP">
            <Routes>
                {/* Wrap all routes inside Layout */}
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <>
                            {/* Home Page Content */}
                            <a href=""><img src="poster.jpeg" alt="Banner" className="Pos-img" /></a>
                            <section className="Parent">
                                <div className="child1"><a href="#"><img src="ch1.jpeg" alt="s-banner" /></a></div>
                                <div className="child2"><a href="#"><img src="ch2.jpeg" alt="s-banner" /></a></div>
                            </section>
                            <section className="Category">
                                <CategoryGrid />
                            </section>
                            <section className="Geyser">
                                <h2 className="Geyser-title">Geyser</h2>
                                <GeyserList />
                            </section>
                             {/*  Poster embend with links */}

                             <div className="relative w-full  mx-auto p-2">
                                <h2 className="w-[80%] text-center text-xl font-bold rounded-[20px] bg-[#A6D1C8] p-2 ml-10 
                 sm:w-[25%] sm:text-3xl sm:rounded-[44px] sm:ml-[600px]"   style={{
                                    boxShadow: "inset 14px -14px 27px #86a9a2, inset -14px 14px 27px #c6f9ee"
                                         }}>Kitechen Appliances</h2>
                             {/* Background Image */}
                                <img
                                    src="Ban.jpeg"
                                    alt="Kitchen Appliances"
                                    className="Banpic"
                                        />

                            {/* Clickable Hotspots */}
                                 <a
                                 href="/kitchen-hood"
                                 className="absolute top-[20%] left-[50%] transform -translate-x-1/2 w-8 h-8 bg-gray-500 opacity-70 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-700"
                                    >
                                ⬤
                                </a>
                                 <a
                                href="/built-in-oven"
                                     className="absolute top-[50%] left-[20%] transform -translate-x-1/2 w-8 h-8 bg-gray-500 opacity-70 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-700"
                                    >
                                ⬤
                                </a>
                                 <a
                                 href="/kitchen-hob"
                                    className="absolute top-[55%] left-[50%] transform -translate-x-1/2 w-8 h-8 bg-gray-500 opacity-70 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-700"
                                     >
                                ⬤
                                </a>
                                 <a
                                      href="/fridge"
                                        className="absolute top-[65%] left-[80%] transform -translate-x-1/2 w-8 h-8 bg-gray-500 opacity-70 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-700"
                                    >
                                ⬤
                                 </a>
                            </div>
                            <section className="AC">
                                <h2 className="AC-title">Air Conditioner</h2>
                                <ACList />
                            </section>
                            {/* Store Locations Poster */}

                            <div className="relative w-full  mx-auto p-2">
                                <h2 className="w-[80%] text-center text-xl font-bold rounded-[20px] bg-[#A6D1C8] p-2 ml-10 
                 sm:w-[25%] sm:text-3xl sm:rounded-[44px] sm:ml-[600px]"   style={{
                                    boxShadow: "inset 14px -14px 27px #86a9a2, inset -14px 14px 27px #c6f9ee"
                                         }}>Store Locations</h2>
                             {/* Background Image */}
                                <img
                                    src="loc.jpg"
                                    alt="Kitchen Appliances"
                                    className="Banpic"
                                        />

                            {/* Clickable Hotspots */}
                                 <a
                                 href="/kitchen-hood"
                                 className="absolute top-[20%] left-[50%] transform -translate-x-1/2 w-8 h-8 bg-gray-500 opacity-70 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-700"
                                    >
                                ⬤
                                </a>
                                 <a
                                href="/built-in-oven"
                                     className="absolute top-[50%] left-[20%] transform -translate-x-1/2 w-8 h-8 bg-gray-500 opacity-70 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-700"
                                    >
                                ⬤
                                </a>
                                 <a
                                 href="/kitchen-hob"
                                    className="absolute top-[55%] left-[50%] transform -translate-x-1/2 w-8 h-8 bg-gray-500 opacity-70 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-700"
                                     >
                                ⬤
                                </a>
                                 <a
                                      href="/fridge"
                                        className="absolute top-[65%] left-[80%] transform -translate-x-1/2 w-8 h-8 bg-gray-500 opacity-70 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-700"
                                    >
                                ⬤
                                 </a>
                            </div>

                            {/* Refrigerator Scroll Section */}
                            <section className="Refg">
                                <h2 className="Refg-title">Refrigerator</h2>
                                <Reflist />
                            </section>

                            {/* Logoslider Section */}
                            <section className="logos">
                                <LogoSlider/>
                            </section>

                            {/*SAT section */}
                            <section className="SAT">
                                <div className="SAT-child"><i class="fa-solid fa-truck"></i><h1>All over Pakistan Delivery</h1></div>
                                <div className="SAT-child"><i class="fa-solid fa-cart-shopping"></i><h1>Satisfied or Refund</h1></div>
                                <div className="SAT-child"><i class="fa-solid fa-phone"></i><h1>Top-notch Support</h1></div>
                                <div className="SAT-child"><i class="fa-solid fa-lock"></i><h1>Secure Payments</h1></div>
                            </section>

                            {/* Footer  Section*/}
                            <footer className="Footer">
                                <div className="F1">
                                <img src="pakbg.png" alt="Logo"  />
                                <p>Pak Electronics is the one of the Best Home Appliances Store in Pakistan since 1984. We offer a wide variety of Branded Kitchen Appliances at the lowest prices. Also, we provide After-Sale Services and Nationwide Delivery.</p>
                                </div>
                                <div className="F2">
                                 <h3>Useful Links</h3>
                                 <div className="links">
                                    <a href="#">Home</a>
                                    <a href="#">About</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Feedback</a>
                                    <a href="#">Contact</a>
                                    <a href="">Store location</a>
                                 </div>
                                </div>
                                <div className="F3"> 
                                <h3>Policy & Support</h3>
                                 <div className="links2">
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms & Conditions</a>
                                    <a href="#">Return & Refund</a>
                                    <a href="#">Complains</a>
                                    <a href="#">FAQ</a>
                                 </div>
                                </div>
                                <div className="F4">
                                <h2><i class="fa-solid fa-location-dot"></i>Address</h2>
                                <p>Gul Noor Market, Shop 15, Murree Rd, Rawalpindi.<br></br>Ajaib & Sons Plaza, Jinnah Ave, Block G, Blue Area, Islamabad.</p>

                                <h2><i class="fa-solid fa-phone"></i>Phone</h2>
                                <p>+92321 4800001</p>

                                <h2><i class="fa-brands fa-whatsapp"></i>Whatsapp</h2>
                                <p>+92 309 4446285</p>

                                <h2><i class="fa-solid fa-envelope"></i>Gmail</h2>
                                <p>Pakelectronics@gmail.com</p> 
                                </div>
                                <p className="fp">All Right Reserved.Copyright © 2025</p>
                            </footer>
                        </>
                    } />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default Home;
