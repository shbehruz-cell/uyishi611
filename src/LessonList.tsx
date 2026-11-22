const lessons = [
    {image: "/images/lesson-1@3x.png", time: "07:12", title: "1.1 Kirish", width: "w-[312px]"},
    {image: "/images/lesson-2@3x.png", time: "08:15", title: "1.2 Mot qilish", width: "w-[312px]"},
    {image: "/images/lesson-3@3x.png", time: "05:45", title: "1.2 Piyoda bilan tanishuv", width: "w-[314px]"},
]

const collapsed = [
    "2. Eng ko‘p foydalaniladigan donalar",
    "3. Mot qilish oson bo‘lgan donalar",
]

function LessonList() {
    return <div className="relative h-[445px] w-[1026px] overflow-hidden rounded-[8px] border border-[#1f272a] bg-dark">
        {/* Ochiq bo'lim */}
        <div className="relative h-[63px]">
            <h2 className="absolute left-[20px] top-[14px] whitespace-nowrap text-[24px] font-bold leading-[normal] text-white">
                1. Asosiy donalar
            </h2>
            <img src="/icons/chevron-up.svg" alt="" className="absolute left-[974px] top-[16px] size-[32px]"/>
        </div>
        <div className="h-[2px] w-full bg-[#282c2e]"></div>

        <div className="flex h-[239px] gap-[24px] bg-white/3 px-[20px] pt-[22px]">
            {lessons.map((lesson) => (
                <div key={lesson.title} className="flex flex-col gap-[16px]">
                    <div className={"relative h-[153px] overflow-hidden rounded-[8px] border border-white/16 bg-dark " + lesson.width}>
                        <img src={lesson.image} alt="" className="absolute -left-px -top-px h-[153px] max-w-none"/>
                        <div className="absolute left-[11px] top-[116px] flex items-center justify-center gap-[4px]">
                            <img src="/icons/play.svg" alt="" className="size-[24px]"/>
                            <span className="text-[14px] leading-none text-white/60">{lesson.time}</span>
                        </div>
                    </div>
                    <p className="text-[20px] font-medium leading-[1.3] text-white">{lesson.title}</p>
                </div>
            ))}
        </div>

        {/* Yopiq bo'limlar */}
        <div className="flex flex-col gap-[16px]">
            {collapsed.map((title) => (
                <div key={title} className="relative h-[51px] border-t-2 border-[#282c2e]">
                    <h2 className="absolute left-[20px] top-[13px] whitespace-nowrap text-[24px] font-bold leading-[normal] text-white">
                        {title}
                    </h2>
                    <img src="/icons/chevron-up.svg" alt="" className="absolute left-[974px] top-[16px] size-[32px] rotate-180"/>
                </div>
            ))}
        </div>
    </div>
}

export default LessonList
