
import Header from "./Header.tsx"
import Scroll from "./Scroll.tsx"


export default function About() {
    return (
        <div className="p-4">
            <Header/>
            <Scroll/>
            <h1 className="text-2xl font-bold mb-4">About Page</h1>
            <p>
                {Array.from({ length: 100 }, (_, i) =>
                    `About Page About Page About Page${i + 1}. `
                ).join(" ")}
            </p>
        </div>
    );
}