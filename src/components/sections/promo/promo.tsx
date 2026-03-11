const Promo = () => {
    return (
        <section className="bg-black">
            <div className="container grid">
                <img src="/promo/icon.svg" alt="Акция" width={62} height={62} loading="lazy" />
                <div className="">
                    <img src="/promo/xbox.png" alt="X-box" width={132} height={130  } loading="lazy" />
                    <img src="/promo/ps.png" alt="PlayStation" width={132} height={130} loading="lazy" />
                </div>
                <h2 className="">
                    Играй и выигрывай!
                </h2>
                <div className="">
                    <p>
                        Играй в Cyberpunk 2077 и получи возможность
                        выиграть консоль Xbox Series X или Sony PlayStation 5!
                        Заполни форму ниже и приложи скриншот о покупке игры.
                        Итоги розыгрыша будут подведены 1 февраля. Удачи! {';)'}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Promo;