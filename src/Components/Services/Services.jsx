const Services = () => {
    const services = [
        {
            title: "Product Listing",
            description: "Easily add products with images, descriptions, starting bid prices, and auction deadlines to reach potential buyers."
        },
        {
            title: "Real-Time Bidding",
            description: "Place competitive bids on your favorite products and stay updated with the latest highest bid throughout the auction."
        },
        {
            title: "Bid Notifications",
            description: "Receive instant updates when someone outbids you or when an auction is about to end, so you never miss an opportunity."
        },
        {
            title: "Secure User Authentication",
            description: "Sign in securely using email/password or social login to manage your products and bidding activities safely."
        },
        {
            title: "Personal Dashboard",
            description: "Track your listed products, active bids, auction status, and bidding history from one convenient dashboard."
        },
        {
            title: "Fast & Responsive Experience",
            description: "Enjoy a smooth and responsive platform that works seamlessly across desktop, tablet, and mobile devices."
        }
    ]

    return (
        <div className="my-3">
            <h1 className="text-3xl text-center font-bold">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10 my-4 mx-0 md:mx-12 lg:mx-18">
                {
                    services.map((service, index) =>
                        <div key={index} className="card bg-linear-to-l from-cyan-800 to-amber-900 text-gray-100 w-80 mx-auto md:mx-0 shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title">{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}
export default Services;