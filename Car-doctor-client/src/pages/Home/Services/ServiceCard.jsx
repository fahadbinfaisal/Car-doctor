const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card  bg-base-100 shadow-lg">
            <figure className="px-6 pt-8">
                <img src={img} alt="Shoes" className="rounded-lg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className="text-orange-600 font-bold">Price :${price}</p>
                {/* <div className="card-actions justify-end">
                    <div className="badge badge-outline">Products</div>
                </div> */}
            </div>
        </div>
    );
};

export default ServiceCard;