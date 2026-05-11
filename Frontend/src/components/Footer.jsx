function Footer() {
    return (
        <>

            <footer className=" text-center  bg-gray-900 text-white p-6 mt-10" >

                <div className="  gap-6"  >
                    <div>
                        <h2 className="text-xl font-bold"  >Foodie !</h2>
                        <p className="text-gray-400 mt-2"  >India's #1 food delivery app. Fast & Fresh meals at your door.</p>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-2"  >
                        Quick Links
                    </h3>
                    <ul className="text-gray-400 space-y-1" >
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Cart</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Conta0ct</h3>
                    <p className="text-gray-400">+91 0000000000</p>
                    <p className="text-gray-400">foodie@email.com</p>
                    <p className="text-gray-400">India</p>
                </div>

                <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-3"  >
                    © 2026 Foodie. All rights reserved.
                </div>

            </footer>



        </>
    )
}



export default Footer;
