import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper"
import React, { useRef, useState } from "react";
import Card from '@/components/Card'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function MySwiper() {
    if (typeof window != 'undefined') {
        var screen = window.screen.width
    }
    if (parseInt(screen) >= 425) {
        return (
            <div>
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 3
                        },
                        300: {
                            slidesPerView: 1
                        }
                    }}
                    initialSlide={1}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper-slide">
                        <Card imagePath="1" title="RESSARCIMENTO DE VALORES:">
                            <p>Trabalhamos com ressarcimento de valores ilegais pagos aos bancos. </p>
                            <p>Se for de sua vontade resolvemos administrativamente em até 30 dias e seu dinheiro entra direto na sua conta.</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Card imagePath="2" title="DANO MORAL CONTRA BANCOS:">
                            <p>Se você considera ter sido lesado pelos bancos de alguma forma, você tem direito a reparação pecuniária aos danos causados sendo que em alguns casos podem superar R$ 50.000,00 (cinquenta mil reais);</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Card imagePath="4" title="REVOGAÇÃO DE LIMINARES DE BUSCA E APREENSÃO:">
                                <p>Revogamos junto ao juízo, liminares de busca e apreensão de veículos e máquinas.</p>
                                <p>A análise do processo detecta falhas administrativas anteriores ao deferimento da busca e apreensão.</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Card imagePath="9" title="CONTESTAÇÃO DE COBRANÇA DE VALORES INDEVIDOS:">
                            <p>Se você considera ter sido lesado pelos bancos de alguma forma, você tem direito a reparação pecuniária aos danos causados sendo que em alguns casos podem superar R$ 50.000,00 (cinquenta mil reais).</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Card imagePath="3" title="REVISÃO DE CONTRATOS ANTIGOS:">
                            <p>Em milhares de casos os bancos renegociam suas dívidas e fazem novo contrato maquiando as cobranças ilegais anteriormente lançadas em sua conta.</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Card imagePath="5" title="PRESTAÇÃO DE CONTAS DE VENDA DE VEÍCULOS LEILOADOS:">
                            <p>Teve seu veículo leiloado sem a devida prestação de contas pelos bancos ou financeiras, saiba que você pode ter dinheiro depositado para receber.</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Card imagePath="6" title="DANO MORAL NA PORTABILIDADE DE CONTA BANCÁRIA:">
                            <p>Na maioria das vezes, quando você faz a portabilidade de sua conta bancária, os bancos costumam reter todo o seu salário, inclusive os futuros, para quitar pendências ou cobranças.</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Card imagePath="7" title="ASSESSORIA EM PORTABILIDADE DE CONTAS BANCÁRIAS:">
                            <p>Para não sofrer danos e indisposições com a portabilidade junto aos bancos e seus gerentes, acompanhamos no processo todo.</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Card imagePath="8" title="RETOMADA DE VEÍCULOS APREENDIDOS:">
                            <p>Se o seu bem foi apreendido em busca e apreensão judicial, analisaremos todo o processo e encontraremos falhas que existem na maioria dos casos, reavendo o seu bem e colocando-o na sua posse.</p>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }
    return (
        <div>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    500: {
                        slidesPerView: 3
                    },
                    300: {
                        slidesPerView: 1
                    }
                }}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="1" title="RESSARCIMENTO DE VALORES:">
                        <p>Trabalhamos com ressarcimento de valores ilegais pagos aos bancos. </p>
                        <p>Se for de sua vontade resolvemos administrativamente em até 30 dias e seu dinheiro entra direto na sua conta.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="2" title="DANO MORAL CONTRA BANCOS:">
                        <p>Se você considera ter sido lesado pelos bancos de alguma forma, você tem direito a reparação pecuniária aos danos causados sendo que em alguns casos podem superar R$ 50.000,00 (cinquenta mil reais);</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="4" title="REVOGAÇÃO DE LIMINARES DE BUSCA E APREENSÃO:">
                            <p>Revogamos junto ao juízo, liminares de busca e apreensão de veículos e máquinas.</p>
                            <p>A análise do processo detecta falhas administrativas anteriores ao deferimento da busca e apreensão.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="9" title="CONTESTAÇÃO DE COBRANÇA DE VALORES INDEVIDOS:">
                        <p>Se você considera ter sido lesado pelos bancos de alguma forma, você tem direito a reparação pecuniária aos danos causados sendo que em alguns casos podem superar R$ 50.000,00 (cinquenta mil reais).</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="3" title="REVISÃO DE CONTRATOS ANTIGOS:">
                        <p>Em milhares de casos os bancos renegociam suas dívidas e fazem novo contrato maquiando as cobranças ilegais anteriormente lançadas em sua conta.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="5" title="PRESTAÇÃO DE CONTAS DE VENDA DE VEÍCULOS LEILOADOS:">
                        <p>Teve seu veículo leiloado sem a devida prestação de contas pelos bancos ou financeiras, saiba que você pode ter dinheiro depositado para receber.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="6" title="DANO MORAL NA PORTABILIDADE DE CONTA BANCÁRIA:">
                        <p>Na maioria das vezes, quando você faz a portabilidade de sua conta bancária, os bancos costumam reter todo o seu salário, inclusive os futuros, para quitar pendências ou cobranças.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="7" title="ASSESSORIA EM PORTABILIDADE DE CONTAS BANCÁRIAS:">
                        <p>Para não sofrer danos e indisposições com a portabilidade junto aos bancos e seus gerentes, acompanhamos no processo todo.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="8" title="RETOMADA DE VEÍCULOS APREENDIDOS:">
                        <p>Se o seu bem foi apreendido em busca e apreensão judicial, analisaremos todo o processo e encontraremos falhas que existem na maioria dos casos, reavendo o seu bem e colocando-o na sua posse.</p>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>
    ) 
}