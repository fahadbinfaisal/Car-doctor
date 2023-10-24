import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Team from "../Team/Team"
import Features from "./Features/Features";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;