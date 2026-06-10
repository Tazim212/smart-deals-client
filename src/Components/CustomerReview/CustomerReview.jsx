import React from 'react'
import person1 from "../../assets/person-1.jpg"
import person2 from "../../assets/person-2.jpg"
import person3 from "../../assets/person-3.jpg"
import { FaStar } from 'react-icons/fa'


const CustomerReview = () => {
    return (
        <div className='mb-32'>
            <h1 className='text-3xl font-bold text-center'>Customer <span className='text-purple-500'>Review</span></h1>

            <div className='flex flex-col md:flex-row gap-10 items-center justify-around my-5'>
                <div className="bg-gray-300 w-65">
                    <figure className="px-16 py-2">
                        <img
                            src={person1}
                            alt="Shoes"
                            className="rounded-full w-32 h-32 object-cover" />
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

                <div className="bg-gray-300 w-65">
                    <figure className="px-16 py-2">
                        <img
                            src={person2}
                            alt="Shoes"
                            className="rounded-full w-32 h-32 object-cover" />
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


                <div className="bg-gray-300 w-65">
                    <figure className="px-16 py-2">
                        <img
                            src={person3}
                            alt="Shoes"
                            className="rounded-full w-32 h-32 object-cover" />
                    </figure>
                    <div className="py-3 ps-3">
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