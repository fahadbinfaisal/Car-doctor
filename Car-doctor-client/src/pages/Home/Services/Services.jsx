import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    console.log(services, 'boom')
    return (
        <div className="mb-4">
            <div className="text-center">
                <h3 className="text-2xl text-orange-500 font-bold mt-2">Services</h3>
                <h2 className="text text-4xl font-bold ">Our Service Area</h2>
                <p className="mt-2">
                    the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex items-center justify-center my-10">
                <button className="btn btn-outline text-orange-500">More Services</button>
            </div>
        </div>
    );
};

export default Services;