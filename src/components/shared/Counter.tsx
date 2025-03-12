'use client'
import CountUp from "react-countup";
type TCounter = {
    className?: string; // Allows Tailwind classes
    end: number;
    suffix?: string;
};
const Counter: React.FC<TCounter> = ({ className, end, suffix }) => {
    return (
        <h1 className={`${className}`}>
            <CountUp enableScrollSpy end={end} duration={2.75}
                suffix={suffix} />
        </h1>

    )
}

export default Counter
