import Header from "./Header.tsx"
import Scroll from "./Scroll.tsx"


export default function Post() {
    return (
        <div className="p-4">
            <Header/>
            <Scroll/>
            <h1 className="text-2xl font-bold mb-4">Post Page</h1>
            <p>
                {Array.from({ length: 500 }, (_, i) =>
                    `Post Page Post Page Post Page Post Page ${i + 1}. `
                ).join(" ")}
            </p>
        </div>
    );
}