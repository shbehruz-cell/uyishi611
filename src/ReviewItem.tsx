export type Review = {
    avatar: string
    name: string
    date: string
    rating: number
    text: string
    active?: boolean
}

function ReviewItem({review, last}: { review: Review, last?: boolean }) {
    const ratingArray = Array.from({length: 5})

    return <div className={"pl-[20px] pr-[18px] pt-[24px] pb-[12px] " + (last ? "" : "border-b border-white/10")}>
        <div className="flex items-start justify-between">
            <div className="flex items-center gap-[8px]">
                <div className="size-[48px] shrink-0 overflow-hidden rounded-full border border-[#333333]/16 bg-white">
                    <img src={review.avatar} alt="" className="size-full object-cover"/>
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[20px] font-medium leading-[1.25] text-white">{review.name}</p>
                    <div className="flex items-center gap-[12px]">
                        <p className="text-[18px] leading-[1.3] text-[#9da1a3]">{review.date}</p>
                        <div className="flex gap-[4px]">
                            {ratingArray.map((_, index) => (
                                <img
                                    key={index}
                                    className="size-[20px]"
                                    src={`/icons/star-review-${index < review.rating ? "filled" : "empty"}.svg`}
                                    alt=""
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {review.active
                ? <img src="/icons/ellipsis-vertical-active.svg" alt="" className="-m-[4px] size-[32px]"/>
                : <img src="/icons/ellipsis-vertical.svg" alt="" className="size-[24px]"/>}
        </div>

        <p className="mt-[16px] w-[986px] whitespace-pre-line text-[16px] leading-[normal] text-white">{review.text}</p>
    </div>
}

export default ReviewItem
