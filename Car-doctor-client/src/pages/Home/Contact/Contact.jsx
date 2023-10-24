import { FcOvertime } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";

const Contact = () => {
    return (
        <div className="mx-auto  bg-black text-white rounded-lg mt-16">
            <div className="flex  justify-around py-20">
                <div className="flex items-center gap-4">
                    <FcOvertime className="text-4xl text-orange-500"></FcOvertime>
                    <div>
                        <p className="text-sm mb-1">We are open monday friday</p>
                        <h2 className="text-xl font-bold">7:00 am 9:00 pm</h2>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <FiPhoneCall className="text-4xl text-orange-500"></FiPhoneCall>
                    <div>
                        <p className="text-sm mb-1">Have a questions?</p>
                        <h2 className="text-xl font-bold">+8801926300738</h2>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <ImLocation className="text-4xl text-orange-500"></ImLocation>
                    <div>
                        <p className="text-sm mb-1">Need a repair? Our address</p>
                        <h2 className="text-xl font-bold">Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;