import Breadcrumb from "./Breadcrumb.tsx";
import CourseHeader from "./CourseHeader.tsx";
import LessonList from "./LessonList.tsx";
import ReviewList from "./ReviewList.tsx";
import Banner from "./Banner.tsx";

function Course() {
    return <main className="relative mx-auto w-full max-w-[1440px] px-[32px] pb-[60px] text-white">
        <Breadcrumb/>
        <div className="mt-[10px]">
            <CourseHeader/>
        </div>

        <div className="mt-[66px] flex items-start gap-[24px]">
            <div className="flex w-[1026px] shrink-0 flex-col gap-[64px]">
                <LessonList/>
                <ReviewList/>
            </div>
            <Banner/>
        </div>
    </main>
}

export default Course
