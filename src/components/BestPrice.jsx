import bottomCurve from '../assets/bottom-curve.svg';
import img from '../assets/hero-img.png';

const BestPrice = () => {
    return (
        <div className="relative w-full overflow-hidden">

            <div className="w-full h-full left-0 top-0 absolute">
                <div className="w-full h-[1090px] left-[1440px] top-[1169px] absolute origin-top-left rotate-180 bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-800" />
                <div className="w-full h-[1090px] left-0 top-[79px] absolute bg-white/40 backdrop-blur-[250px]" />
            </div>

            <img src={bottomCurve} className="min-w-full relative min-h-[120vh] md:min-h-[150vh] xl:min-h-screen h-full object-cover" />

            <div className="flex w-full justify-center absolute top-0">
                <div className="inline-flex px-9 py-3 bg-white rounded-[18px] shadow border-2 border-sky-300 text-center 
                    hover:bg-gradient-to-r from-sky-300 to-blue-400 hover:text-white
                    cursor-pointer text-sky-300 text-base font-bold leading-normal">
                    View All
                </div> 
            </div>

            <div className="w-[48vw] h-[48vw] absolute top-32 right-[-37px] bg-white/25 flex justify-center items-center rounded-full">
                <div className="w-[36vw] h-[36vw] bg-white rounded-full shadow-[0_4px_50px_0px_rgba(0,0,0,0.1)] flex justify-center items-center">
                    <div className="w-[24vw] h-[24vw] bg-white flex justify-center items-center rounded-full shadow-[0_4px_50px_0px_rgba(0,0,0,0.1)]">
                        <img className="w-[16vw]" src={img} />
                    </div>
                </div>
            </div>
            
            <div className="absolute left-0 top-0 w-[64vw] lg:w-[54vw] w-min-fit mt-36 lg:mt-52 pl-4">
                <div className="flex flex-col items-end">
                    <div className="flex flex-col items-end pb-4">
                        <span className="text-slate-600 text-[32px] lg:text-[40px] font-normal lg:leading-[65px]">
                            BEST PRICE<br/>
                        </span>
                        <span className="text-slate-600 text-right text-[36px] lg:text-[64px] font-bold lg:leading-[65px]">
                            Agate Phone Grip
                        </span>
                    </div>
                    <div className='flex items-center justify-end gap-5 py-2'>
                        <div className="text-center text-teal-500 text-xl lg:text-2xl font-normal line-through leading-[30px]">
                            44.50$
                        </div>
                        <div className="text-center text-red-500 text-[40px] lg:text-[70px] font-bold">
                            19.50$
                        </div>
                    </div>
                    <div className="max-w-[400px] text-right text-slate-600 font-normal leading-normal">
                        These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
                    </div>
                    <div className="mt-10 bg-gradient-to-r px-[2px] py-[2px] from-sky-300 to-blue-400 rounded-[18px] shadow-xl">
                        <div className="text-center py-4 px-14 rounded-[16px] bg-white text-blue-400 
                        hover:bg-gradient-to-r from-sky-300 to-blue-400 hover:text-white
                        text-sm font-bold leading-normal cursor-pointer">BUY NOW</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BestPrice;