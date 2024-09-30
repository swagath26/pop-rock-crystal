import img from '../assets/hero-img.png';

const Product = () => {
    return (
        <div className="w-full max-w-80 bg-white rounded-[30px] shadow-[0_0px_4px_1px_rgba(0,0,0,0.1)]
        hover:shadow-[0_4px_50px_0px_rgba(0,0,0,0.1)] flex flex-col pt-8 pb-10 gap-5 items-center cursor-pointer">
            <img className="w-full px-14" src={img} />
            <div className="text-center flex flex-col">
                <span className="w-full text-neutral-600 text-xl font-normal uppercase leading-normal">
                    Crystal Agate Phone Grip
                </span>
                <span className="w-full text-cyan-700 text-xl font-bold uppercase leading-normal">
                    18.99$
                </span>
            </div>
            <div className="bg-gradient-to-r px-[2px] py-[2px] from-sky-300 to-blue-400 rounded-[18px] shadow-xl">
                <div className="text-center py-4 px-14 rounded-[16px] bg-white text-blue-400 
                hover:bg-gradient-to-r from-sky-300 to-blue-400 hover:text-white
                text-sm font-bold leading-normal">BUY NOW</div>
            </div>
        </div>
    )
};

export default Product;