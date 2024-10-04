import logo from '../assets/logo.svg';
import basket from '../assets/basket-icon.svg';
import img from '../assets/hero-img.png'
import bg from '../assets/hero-curve.svg';
import rightArrow from '../assets/arrow-right-icon.svg';
import scrolldown from '../assets/scroll-icon.svg';
import menu from '../assets/menu.svg';
import herograd from '../assets/hero-gradient.svg';

const Hero = () => {
    return (
        <div className='bg-white h-screen min-h-fit relative flex flex-col w-full overflow-hidden'>
            <div className="w-full h-full absolute top-0 left-0">
                <div className="w-full h-full left-full top-full absolute origin-top-left rotate-180 bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-800" />
                <div className="w-full h-full bg-white/40 backdrop-blur-[250px]" />
                <img className="w-auto h-[140vh] left-[200px] top-[-70vh] absolute opacity-60 blur-3xl" src={herograd} />
            </div>

            <img src={bg} className="w-full left-0 bottom-[-1px] absolute" />
            
            <div className="flex w-full items-center gap-8 py-8 px-8 lg:px-14 relative">
                <div className='flex w-[54vw] gap-2.5 items-center'>
                    <img className="h-16 cursor-pointer" src={logo}/>
                    <div className="text-white text-xl font-normal leading-relaxed cursor-pointer">
                        Pop Rock Crystal
                    </div>
                </div>
                
                <div className='flex gap-8 grow items-center justify-end lg:hidden'>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="w-4 min-w-fit h-4 bg-rose-500 rounded-full content-center" >
                            <div className="w-full text-center text-white text-[8px] px-1 font-bold">
                                00
                            </div>
                        </div>
                        <img className="w-[30px] h-[30px]" src={basket} />
                    </div>
                    <img className="w-[30px] h-[30px] cursor-pointer" src={menu} />
                </div>
                <div className='hidden lg:flex grow items-center justify-between'>
                    <div className="flex items-center gap-12">
                        <div className="text-white font-medium cursor-pointer">Home</div>
                        <div className="text-white font-medium cursor-pointer">Shop</div>
                        <div className="text-white font-medium text-nowrap cursor-pointer">About Us</div>
                        <div className="text-white font-medium cursor-pointer">Help</div>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="w-4 h-4 bg-rose-500 rounded-full content-center" >
                            <div className="w-full text-center text-white text-[8px] font-bold">
                                00
                            </div>
                        </div>
                        <img className="w-[30px] h-[30px]" src={basket} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-evenly gap-12 px-14 relative grow items-center min-h-fit overflow-hidden'>
                <div className='flex flex-col gap-10 pb-8'>
                    <div className="pr-8">
                        <span className="text-white text-[40px] font-normal leading-[65px]">
                            Welcome to<br/>
                        </span>
                        <span className="text-white text-[64px] font-bold leading-[65px]">
                            Pop Rock Crystal Shop!
                        </span>
                    </div>

                    <div className="max-w-96 text-slate-700 font-normal">
                        Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. 
                        and our phone grips come with a limited warranty. Enjoy!
                    </div>

                    <div className="flex items-center gap-10">
                        <div className="w-[180px] h-14 bg-gradient-to-r from-white to-sky-50 rounded-[18px] shadow text-center content-center text-cyan-700 font-bold leading-normal
                        hover:bg-gradient-to-r hover:from-sky-300 hover:to-blue-400 hover:text-white cursor-pointer">
                            SHOP NOW
                        </div>
                        <div className="text-nowrap text-cyan-700 font-normal leading-normal cursor-pointer">
                            about us
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-10 relative self-stretch items-center'>
                    <div className='flex py-[55px] px-4 sm:px-8 md:px-[80px] relative bg-white rounded-[50px] shadow-lg grow overflow-hidden'>
                        <div className="w-[97px] h-10 absolute top-[76px] left-0">
                            <div className="w-[97px] h-10 bg-indigo-400 rounded-tr-lg rounded-br-lg text-white text-center content-center font-medium leading-normal">
                                New lot
                            </div>
                        </div>
                        <div className="h-full flex flex-col gap-5 items-center">
                            <img className="grow h-full overflow-hidden" src={img} />
                            
                            <div className="w-[120px] h-0.5 bg-zinc-100 rounded-[1px]" />

                            <div className="text-center">
                                <span className="text-nowrap text-zinc-500 text-xl font-normal uppercase leading-normal">
                                    Crystal Agate Phone Grip
                                </span>
                                <span className="text-cyan-700 text-xl font-bold uppercase leading-normal">
                                    - 18.99$
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-center gap-6">
                        <img src={rightArrow} className="w-6 h-6 rotate-180 cursor-pointer" />
                        <div className="inline-flex gap-2.5">
                            <div className="w-3.5 h-3.5 bg-indigo-400 rounded-full" />
                            <div className="w-3.5 h-3.5 bg-violet-200 rounded-full" />
                            <div className="w-3.5 h-3.5 bg-violet-200 rounded-full" />
                            <div className="w-3.5 h-3.5 bg-violet-200 rounded-full" />
                            <div className="w-3.5 h-3.5 bg-violet-200 rounded-full" />
                            <div className="w-3.5 h-3.5 bg-violet-200 rounded-full" />
                            <div className="w-3.5 h-3.5 bg-violet-200 rounded-full" />
                        </div>
                        <img src={rightArrow} className="w-6 h-6 cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center relative gap-2 items-center py-20 lg:py-4">
                <img className="w-7 h-7" src={scrolldown} />
                <div className="text-cyan-700 font-medium">sroll down</div>
            </div>

        </div>
    )
}

export default Hero;