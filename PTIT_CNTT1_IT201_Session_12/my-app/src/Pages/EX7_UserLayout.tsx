import "../index.css"

const EX7_UserLayout = () => {
    return(
        <main className={"mainEx7"}>
            <nav className={"navEx7"}>
                Navigation
            </nav>

            <section className={"sectionEx6"}>
                <div className={"menuEx7"}>
                    Menu
                </div>

                <div className={"containerContentEx7"}>
                    {
                        Array.from({length:16}, (_, i) => (
                        <div key ={i} className={"BoxEx7"}>
                            Cart
                        </div>
                        ))
                    }

                </div>

                <div className={"ArticleEx7"}>
                    Article
                </div>
            </section>
        </main>
    );
}

export default EX7_UserLayout;