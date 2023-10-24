import error from '../../assets/images/login/login.svg'
const ErrorPage = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={error} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default ErrorPage;