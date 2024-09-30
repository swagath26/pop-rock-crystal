import BestPrice from './BestPrice';
import Hero from './Hero';
import Products from './Products';

const Home = () => {
    return (
        <div className="w-full relative">

            <Hero />

            <Products />

            <BestPrice />

            <div className="w-full h-[36vh] bg-[#09284c]/80 relative" />
        </div>
    )
}

export default Home;