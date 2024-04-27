import { FaFacebook, FaYoutube } from 'react-icons/fa';
// import Logo from '../../../src/assets/house.png'


import { FaGoogle } from "react-icons/fa6";
const Footer = () => {
    return (
        

        <div>
            <div>

                <footer className="footer p-10 bg-primary text-primary-content">
                    <nav>
                        <h6 className="footer-title">My Account</h6>
                        <a className="link link-hover">Cart</a>
                        <a className="link link-hover">Checkout</a>
                        <a className="link link-hover">My account</a>
                        <a className="link link-hover">Shop</a>
                        <a className="link link-hover">Wishlist</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Information</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input text-white input-bordered join-item" />
                                <button className="btn btn-secondary  join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
            <footer className="footer footer-center p-10 bg-primary text-primary-content border-t-2 w-full space-y-4 ">
                <aside className='space-y-5 '>
                    <h1 className='text-xl lg:text-6xl font-playfair '>About Us</h1>
                    <p className="font-bold">
                        Craftify Creations Industries Ltd. <br /><span className='mt-5'>Providing reliable tech since 1992</span>
                    </p>
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav className=" border-t-2 w-full ">
                    <div className="grid grid-flow-col gap-4 mt-12 px-4">
                        <a className='lg:text-5xl'>
                            <FaGoogle></FaGoogle>
                        </a>
                        <a className='lg:text-5xl'>
                            <FaYoutube></FaYoutube>
                        </a>
                        <a className='lg:text-5xl'>
                            <FaFacebook></FaFacebook>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;

