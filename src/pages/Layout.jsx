import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "./Layout.css";

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const sampleProducts = [
        "Smart LED TV", "Inverter AC", "Blender", "Microwave Oven", "4K LED TV",
        "Laptop", "Mobile Phone", "Juicer", "Refrigerator", "Air Purifier"
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 480) return;

            const topBanner = document.querySelector(".Top");
            const navbar = document.querySelector(".navbar");
            const subNavbar = document.querySelector(".Sub-Navbar");

            if (window.scrollY > 50) {
                topBanner.style.top = "-50px";
                navbar.style.top = "0";
                subNavbar.style.top = "105px";
            } else {
                topBanner.style.top = "0";
                navbar.style.top = "50px";
                subNavbar.style.top = "155px";
            }
        };

        if (window.innerWidth > 480) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSelectSuggestion = (item) => {
        setSearchTerm(item);
        setSuggestions([]);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.trim() === "") {
            setSuggestions([]);
        } else {
            const filtered = sampleProducts.filter((product) =>
                product.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered);
        }
    };

    return (
        <>
            <div className="Top">
                <p>Shipping All over Pakistan</p>
            </div>

            <nav className="navbar">
                <div className="logo">
                    <img src="pak.jpeg" alt="Electronics" className="logo-img" />
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="search-bar">
                    <div className="category-dropdown">
                        <button onClick={() => setIsOpen(!isOpen)} className="category-btn">
                            All Categories ▼
                        </button>
                        {isOpen && (
                            <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                                <li><Link to="#">Electronics</Link></li>
                                <li><Link to="#">Mobile Phones</Link></li>
                                <li><Link to="#">Laptops</Link></li>
                                <li><Link to="#">Cameras</Link></li>
                                <li><Link to="#">Accessories</Link></li>
                                <li><Link to="#">Air Condition</Link></li>
                                <li><Link to="#">Air Purifier</Link></li>
                            </ul>
                        )}
                    </div>

                    <input
                        type="text"
                        placeholder="Search For Products"
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="search-icon-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>

                    {suggestions.length > 0 && (
                        <ul className="suggestions-box">
                            {suggestions.map((item, index) => (
                                <li key={index} onClick={() => handleSelectSuggestion(item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}

                    {isSearchOpen && (
                        <input
                            type="text"
                            className="rsearch-input"
                            placeholder="Search here..."
                        />
                    )}
                </div>
                <section className='icons'>
                    <Link to="/" className="nav-icon"><i className="fa-solid fa-user"></i></Link>
                    <Link to="/" className="nav-icon"><i className="fa-solid fa-cart-shopping"></i></Link>
                </section>
            </nav>

            <section className='Mobile-SubNavbar'>
                <Link to="/shop" className="mobile-nav-link"><i className="fa-solid fa-store"></i><span>Shop</span></Link>
                <Link to="/contact" className="mobile-nav-link"><i className="fa-solid fa-phone"></i><span>Contact</span></Link>
                <Link to="/about" className="mobile-nav-link"><i className="fa-solid fa-circle-info"></i><span>About</span></Link>
                <Link to="/store-location" className="mobile-nav-link"><i className="fa-solid fa-location-dot"></i><span>Stores</span></Link>
                <Link to="/feedback" className="mobile-nav-link"><i className="fa-solid fa-comments"></i><span>Feedback</span></Link>
            </section>

            <section className='Sub-Navbar'>
                <div className="dropdown">
                    <span className='cat'>SHOP BY CATEGORIES ▼</span>
                    <div className="dropdown-content">
                        {/* ... category items unchanged ... */}
                        <Link to="#" className="nav-link">Room Heater</Link>
                    </div>
                </div>
                <Link to="/about" className="pnav-link">ABOUT</Link>
                <Link to="/contact" className="pnav-link">CONTACT</Link>
                <Link to="/contact" className="pnav-link">STORE LOCATIONS</Link>
                <Link to="/contact" className="pnav-link">FEEDBACK</Link>
            </section>

            <Outlet />
        </>
    );
}

export default Layout;
