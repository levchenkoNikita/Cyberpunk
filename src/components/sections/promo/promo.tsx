import Form from "@/components/ui/form";

const Promo = () => {
    return (
        <section className="bg-black text-white">
            <div className="container grid">
                <img src="/promo/icon.svg" alt="Акция" width={62} height={62} loading="lazy" />
                <div className="">
                    <img src="/promo/xbox.png" alt="X-box" width={132} height={130  } loading="lazy" />
                    <img src="/promo/ps.png" alt="PlayStation" width={132} height={130} loading="lazy" />
                </div>
                <h2 className="">
                    Играй и выигрывай!
                </h2>
                <div className="text-description">
                    <p>
                        Играй в <span className="text-special">Cyberpunk 2077</span> и получи возможность
                        выиграть консоль <span className="text-special">Xbox Series X</span> или <span className="text-special">Sony PlayStation 5!</span>
                        Заполни форму ниже и приложи скриншот о покупке игры.
                        Итоги розыгрыша будут подведены 1 февраля. Удачи! {';)'}
                    </p>
                </div>
                <Form typeForm="text"/>
                <Form typeForm="email"/>
            </div>
        </section>
    );
};

export default Promo;