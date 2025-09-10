import Header from "./Header.tsx"
import Scroll from "./Scroll.tsx"

export default function Contact() {

    return (
        <div className="p-4">
            <Header/>
            <Scroll/>
            <h1 className="text-2xl font-bold mb-4">Contact Page</h1>
            <p>
                {Array.from({ length: 700 }, (_, i) =>
                    `Contact Page Contact Page Contact Page${i + 1}. `
                ).join(" ")}
            </p>
        </div>
    );
}