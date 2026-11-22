import type {ReactNode} from "react";

function IconAndText({icon, text}: { icon: ReactNode, text: string }) {
    return <div className="flex items-center gap-[4px]">
        {icon}
        <p className="text-[14px] leading-none text-white/60">{text}</p>
    </div>
}

export default IconAndText
