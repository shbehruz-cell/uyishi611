function Breadcrumb() {
    return <div className="flex h-[44px] items-center pl-[30px]">
        <div className="flex items-center gap-[8px] text-[14px] font-medium leading-[1.3] tracking-[-0.8px]">
            <img src="/icons/home.svg" alt="" className="size-[20px]"/>
            <span className="text-[#6d7274]">Asosiy</span>
            <img src="/icons/breadcrumb-separator.svg" alt="" className="size-[8px]"/>
            <span className="text-[#6d7274]">O‘rganish</span>
            <img src="/icons/breadcrumb-separator.svg" alt="" className="size-[8px]"/>
            <span className="text-white">Shaxmat donalari bilan tanishuv</span>
        </div>
    </div>
}

export default Breadcrumb
