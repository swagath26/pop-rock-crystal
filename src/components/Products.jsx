import Product from './Product';
import dropdown from '../assets/dropdown.svg';

const Products = () => {
    return (
        <div className='px-[50px] py-10 mt-20 flex flex-col gap-8 bg-white w-full box-border'>
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="text-center text-slate-600 text-[46px] font-bold leading-[50px]">
                    All products
                </div>
                <div className="w-[58px] h-1 bg-zinc-100 rounded-3xl" />
            </div>
            
            <div className="flex gap-8 px-6 flex-wrap">

                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="text-slate-400 text-base font-bold leading-[30px]">Filter:</div>
                    <div className="text-slate-600 text-base font-bold leading-[30px] text-nowrap">All Products</div>
                    <img className='h-3 w-3' src={dropdown} />
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="text-slate-400 text-base font-bold leading-[30px]">Sort:</div>
                    <div className="text-slate-600 text-base font-bold leading-[30px] text-nowrap">Best Selling</div>
                    <img className='h-3 w-3' src={dropdown} />
                </div>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-8 justify-evenly py-5">
                <Product /><Product /><Product /><Product />
                <Product /><Product /><Product /><Product />
            </div>
        </div>
    )
}

export default Products;