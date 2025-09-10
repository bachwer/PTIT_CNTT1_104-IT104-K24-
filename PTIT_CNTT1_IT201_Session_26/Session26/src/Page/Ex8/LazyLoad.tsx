import {useEffect, useState} from "react";


export default function (){
    const [item, setItem] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(100)


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const lorem = Array.from({ length: 100 }, (_, i) =>
                `Lorem ipsum dolor sit amet ${i + 1}.`
            );
            setItem(lorem);
            setLoading(false);
        }, 1500); // delay 1.5s giả lập tải dữ liệu
    }, []);




    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop + 50 >=
                document.documentElement.offsetHeight
            ) {
                loadMore();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [visibleCount]);


    const loadMore = () => {
        if (visibleCount >= item.length) return;
        setLoading(true);

        setTimeout(() => {
            setVisibleCount(prev => prev + 20);
            setLoading(false);
        }, 1000);
    };


    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Lazy Loading Example</h1>
            {item.slice(0, visibleCount).map((text, index) => (
                <p key={index} className="mb-2 text-gray-700">
                    {text}
                </p>
            ))}

            {loading && (
                <div className="flex justify-center items-center p-4">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                    <span className="ml-3 text-blue-600">Loading...</span>
                </div>
            )}
        </div>
    );
}