import Product from './Product';

const Products = () => {
    return (
        <div className='px-[50px] py-10 mt-20 flex flex-col gap-8 bg-white w-full box-border'>
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="text-center text-slate-600 text-[46px] font-bold leading-[50px]">
                    All products
                </div>
                <div className="w-[58px] h-1 bg-zinc-100 rounded-3xl" />
            </div>
            
            <div className="flex">
                <div className="w-[157px] h-[30px] flex">
                    <div className="text-slate-400 text-base font-bold leading-[30px]">Sort:</div>
                    <div className="text-slate-600 text-base font-bold leading-[30px]">Best Selling</div>
                </div>

                <div className="w-[169px] h-[30px] flex">
                    <div className="text-slate-400 text-base font-bold leading-[30px]">
                        Filter:
                    </div>
                    <div className="text-slate-600 text-base font-bold leading-[30px]">
                        All Products
                    </div>
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