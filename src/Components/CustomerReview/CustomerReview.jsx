import React from 'react'
import person1 from "../../assets/person-1.jpg"
import person2 from "../../assets/person-2.jpg"
import person3 from "../../assets/person-3.jpg"
import { FaStar } from 'react-icons/fa'


const CustomerReview = () => {
    return (
        <div className='my-5 max-w-full'>
            <h1 className='text-3xl font-bold text-center'>Customer <span className='text-purple-500'>Review</span></h1>

            <div className='flex flex-col md:flex-row gap-4 lg:gap-8 items-center justify-around my-5 mx-0 md:mx-2 lg:mx-0'>

                <div className="bg-gray-300 mx-0 lg:mx-10 rounded-2xl w-70 lg:w-1/3">
                    <figure className="py-2">
                        <img
                            src={person1}
                            alt="Shoes"
                            className="rounded-full w-32 mx-auto h-32 object-cover" />
                    </figure>
                    <div className="py-3 ps-3">
                        <h2 className="font-semibold text-cyan-600 text-lg text-left">Tom Latham</h2>
                        <p className='text-xs'>"I recently purchased a product from Smart Deals, and I’m extremely satisfied with my experience.
                            The ordering process was simple, delivery was fast, and the product quality exceeded my expectations."</p>
                        <p className='flex items-center gap-2.5 italic font-semibold'>Review : {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className='text-xs text-yellow-600' />
                        ))} </p>
                    </div>
                </div>

                <div className="bg-gray-300 mx-0 lg:mx-10 rounded-2xl w-70 lg:w-1/3 md:h-75 lg:h-72">
                    <figure className="py-2">
                        <img
                            src={person2}
                            alt="Shoes"
                            className="rounded-full w-32 mx-auto h-32 object-cover" />
                    </figure>
                    <div className="py-3 ps-3">
                        <h2 className="font-semibold text-cyan-600 text-lg text-left">Nipa Akter</h2>
                        <p className='text-xs'>"Smart Deals offers great products at reasonable prices.
                            The website is easy to navigate, and customer support was responsive when I had a question.
                            Everything arrived exactly as described."</p>
                        <p className='flex items-center gap-2.5 italic font-semibold'>Review : {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className='text-xs text-yellow-600' />
                        ))}</p>
                    </div>
                </div>


                <div className="bg-gray-300 mx-0 lg:mx-10 rounded-2xl w-70 lg:w-1/3 md:h-75 lg:h-72">
                    <figure className="py-2">
                        <img
                            src={person3}
                            alt="Shoes"
                            className="rounded-full w-32 h-32 mx-auto object-cover" />
                    </figure>
                    <div className="py-2 ps-3">
                        <h2 className="font-semibold text-cyan-600 text-lg text-left">Monir Hossain</h2>
                        <p className='text-xs'>My experience with Smart Deals was fantastic from start to finish.
                            The product was well-packaged, arrived on time, and matched the description perfectly."</p>
                        <p className='flex items-center gap-2.5 italic font-semibold'>Review : {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className='text-xs text-yellow-600'/>
                        ))}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerReview