import social from '../../assets/icons/social.png'
const Footer = () => {
    return (
        <div className="py-32 text-white">
            <div className="grid grid-cols-6 gap-5 mb-10">
                <div className="col-span-2">
                    <h2 className="text-3xl font-extrabold mb-4">CareerHub</h2>
                    <p className='mb-4' style={{ color: "rgba(255, 255, 255, 0.70)" }}>
                        There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                    </p>
                    <img src={social} alt="" />
                </div>

                <div className="col-span-1">
                    <h3 className='text-xl font-semibold mb-4'>Company</h3>
                    <div style={{ color: "rgba(255, 255, 255, 0.70)" }} className='flex flex-col gap-4 mb-8'>
                        <p> About Us </p>
                        <p>Work</p>
                        <p>Latest News</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <h3 className='text-xl font-semibold mb-4'>Product</h3>
                    <div style={{ color: "rgba(255, 255, 255, 0.70)" }} className='flex flex-col gap-4 mb-8'>
                        <p> Prototype </p>
                        <p>Plans & Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <h3 className='text-xl font-semibold mb-4 '>Support</h3>
                    <div style={{ color: "rgba(255, 255, 255, 0.70)" }} className='flex flex-col gap-4 mb-8'>
                        <p> Help Desk </p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <h3 className='text-xl font-semibold mb-4 '>Contact</h3>
                    <div style={{ color: "rgba(255, 255, 255, 0.70)" }} className='flex flex-col gap-4 mb-8'>
                        <p> 524 Broadway , NYC </p>
                        <p>+1 777 - 978 - 5570</p>
                    </div>
                </div>

            </div>

            <hr style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.20) 0%, rgba(152, 115, 255, 0.20) 100%)" }} />
            <div style={{ color: "rgba(255, 255, 255, 0.40)" }} className="flex justify-between mt-12">
                <p>&copy;2023 CareerHub. All Rights Reserved</p>
                <p>Powered by <span className="font-bold">CareerLift</span></p>
            </div>
        </div>
    );
};

export default Footer;