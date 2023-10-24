import React from 'react';
import img1 from '../../../assets/images/services/1.jpg'
import img2 from '../../../assets/images/services/2.jpg'
import img3 from '../../../assets/images/services/3.jpg'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
const Team = () => {
    return (
        <div className='text-center mt-8'>
            <h4 className='text-xl font-bold text-orange-500 mb-4'>Team</h4>
            <h2 className='text-4xl font-bold mb-4'>Meet Our Team</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                words which don't look even slightly believable. </p>

            <div className='grid grid-cols-3 gap-8 mt-8'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-xl font-bold">Car Engine Plug</h2>
                        <p className=' font-bold'>Engine Expert</p>
                        <div className="card-actions mt-4">
                            <BiLogoFacebook className='text-3xl text-white bg-sky-600 rounded-full mr-2'></BiLogoFacebook>
                            <BiLogoTwitter className='text-3xl text-white bg-sky-400 rounded-full mr-2'></BiLogoTwitter>
                            <BiLogoLinkedin className='text-3xl text-white bg-sky-600 rounded-full mr-2'></BiLogoLinkedin>
                            <BiLogoInstagram className='text-3xl text-white bg-purple-600 rounded-full'></BiLogoInstagram>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-xl font-bold">Car Engine Plug</h2>
                        <p className=' font-bold'>Engine Expert</p>
                        <div className="card-actions mt-4">
                            <BiLogoFacebook className='text-3xl text-white bg-sky-600 rounded-full mr-2'></BiLogoFacebook>
                            <BiLogoTwitter className='text-3xl text-white bg-sky-400 rounded-full mr-2'></BiLogoTwitter>
                            <BiLogoLinkedin className='text-3xl text-white bg-sky-600 rounded-full mr-2'></BiLogoLinkedin>
                            <BiLogoInstagram className='text-3xl text-white bg-purple-600 rounded-full'></BiLogoInstagram>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-xl font-bold">Car Engine Plug</h2>
                        <p className=' font-bold'>Engine Expert</p>
                        <div className="card-actions mt-4">
                            <BiLogoFacebook className='text-3xl text-white bg-sky-600 rounded-full mr-2'></BiLogoFacebook>
                            <BiLogoTwitter className='text-3xl text-white bg-sky-400 rounded-full mr-2'></BiLogoTwitter>
                            <BiLogoLinkedin className='text-3xl text-white bg-sky-600 rounded-full mr-2'></BiLogoLinkedin>
                            <BiLogoInstagram className='text-3xl text-white bg-purple-600 rounded-full'></BiLogoInstagram>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;