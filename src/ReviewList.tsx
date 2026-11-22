import ReviewItem, {type Review} from "./ReviewItem.tsx";
import ReviewActions from "./ReviewActions.tsx";

const text =
    "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi. \n" +
    "26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."

const reviews: Review[] = [
    {avatar: "/images/avatar-1@3x.png", name: "Jasurbek Narzullayev", date: "7 Sentyabr 2022 y. 19:52", rating: 4, text},
    {avatar: "/images/avatar-2@3x.png", name: "Muhammadamin Domlahonov", date: "7 Sentyabr 2022 y. 19:52", rating: 3, text},
    {avatar: "/images/avatar-3@3x.png", name: "Shoxruh Baxtiyarov", date: "7 Sentyabr 2022 y. 19:52", rating: 5, text},
    {avatar: "/images/avatar-1@3x.png", name: "Jasurbek Narzullayev", date: "7 Sentyabr 2022 y. 19:52", rating: 4, text, active: true},
]

function ReviewList() {
    return <div className="flex w-[1026px] flex-col items-center gap-[24px]">
        <div className="flex flex-col gap-[13px]">
            <h2 className="w-[1026px] text-[28.119px] font-bold leading-[normal] text-white">Kurs haqida izohlar</h2>

            <div className="relative h-[699px] w-[1026px] overflow-hidden rounded-[12px] border border-[#1f272a] bg-dark">
                {reviews.map((review, index) => (
                    <ReviewItem key={index} review={review} last={index === reviews.length - 1}/>
                ))}

                {/* Shikoyat oynasi (dizaynda ochiq turibdi) */}
                <div className="absolute left-[820px] top-[567px]">
                    <ReviewActions/>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center rounded-[8px] bg-white/10 px-[34px] pb-[9px] pt-[10px]">
            <span className="text-[16px] font-medium leading-[1.3] text-white">Barcha izohlar</span>
        </div>

    </div>
}

export default ReviewList
