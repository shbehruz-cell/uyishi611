import IconAndText from "./IconAndText.tsx";

function CourseHeader() {
    const rating = 4
    const ratingArray = Array.from({length: 5})

    return <div className="relative -ml-px h-[194px] w-[1376px] overflow-hidden rounded-[8px] border border-white/8 bg-black">
        <img
            className="absolute left-0 top-0 z-0 size-full object-cover blur-xl"
            src="/images/hero@3x.png"
            alt=""
        />

        <div className="absolute flex size-full justify-between p-[32px]">
            {/* Chap qism */}
            <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col gap-[8px]">
                    <h1 className="text-[32px] font-bold leading-[1.3] text-white">Shaxmat donalari bilan tanishuv</h1>
                    <div className="flex items-center gap-[8px]">
                        <div className="flex items-center gap-[12px]">
                            <img className="size-[28px]" src="/icons/price.svg" alt=""/>
                            <p className="text-[20px] font-bold text-white">55 000.00 uzs</p>
                        </div>
                        <p className="text-[14px] text-white/64 line-through decoration-[#dc2d2d]/80">160 000.00 uzs</p>
                    </div>
                </div>

                <div className="flex gap-[16px]">
                    <IconAndText
                        icon={<img className="size-[24px]" src="/icons/level-beginner.svg" alt=""/>}
                        text="Boshlang’ich"
                    />
                    <IconAndText
                        icon={
                            <div className="relative size-[24px]">
                                <img className="absolute left-[2.25px] top-[4.25px] max-w-none" src="/icons/sections.svg" alt=""/>
                            </div>
                        }
                        text="4 ta bo‘lim"
                    />
                    <IconAndText
                        icon={<img className="size-[24px]" src="/icons/play.svg" alt=""/>}
                        text="24 ta dars"
                    />
                </div>
            </div>

            {/* O'ng qism */}
            <div className="flex h-full flex-col items-end justify-between pt-[7px]">
                <div className="mr-[14px] flex items-center gap-[8px]">
                    <div className="flex gap-[4px]">
                        {ratingArray.map((_, index) => (
                            <img
                                key={index}
                                className="size-[28px]"
                                src={`/icons/star-${index < rating ? "filled" : "empty"}.svg`}
                                alt=""
                            />
                        ))}
                    </div>
                    <div className="h-[16px] w-px bg-[#1a2226]"></div>
                    <div className="flex items-baseline">
                        <p className="text-[20px] font-medium leading-[1.2] text-white">4.0</p>
                        <p className="text-[14px] leading-[1.2] text-[#6d7274]">(234 ta izoh)</p>
                    </div>
                </div>

                <div className="flex gap-[16px]">
                    <div className="flex h-[50px] w-[250px] items-center justify-center rounded-[8px] bg-blue text-[16px] font-medium text-white">
                        Kursni sotib olish
                    </div>
                    <div className="flex size-[50px] items-center justify-center rounded-[8px] border border-white/30 bg-white/10">
                        <img src="/icons/heart.svg" alt=""/>
                    </div>
                    <div className="flex size-[50px] items-center justify-center rounded-[8px] border border-white/30 bg-white/10">
                        <img src="/icons/share.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CourseHeader
