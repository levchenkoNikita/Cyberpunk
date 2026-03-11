import Button from "@components/ui/button";

function Welcome() {
    return(
        <section className="w-screen h-screen welcome-bg">
            <div className="container h-full flex items-end justify-center md:justify-end">
                <div 
                    className="
                        min-w-screen md:min-w-0 md:max-w-156 w-full md:h-auto
                        welcome-block-image text-center md:text-left
                        py-7.5 px-3 
                        sm:py-7.5 sm:px-9.5
                        md:py-17.5 md:px-17.5
                        flex flex-col gap-y-6.25
                        items-center md:items-start
                    "
                >
                    <h2 className="text-black text-[30px] md:text-[62px]">
                        Доступно на всех платформах
                    </h2>
                    <Button typeButton="black">
                        Узнать больше
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Welcome;