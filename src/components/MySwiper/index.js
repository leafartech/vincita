import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper"
import Card from '@/components/Card'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function MySwiper() {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="swipper"
            >
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="1" title="RESSARCIMENTO RÁPIDO DE VALORES:">
                        <p>Trabalhamos com ressarcimento de valores ilegais pagos aos bancos, especialmente o BRB. </p>
                        <p>Se for de sua vontade resolvemos administrativamente em até 30 dias e seu dinheiro entra direto na sua conta. Não deixe passar essa oportunidade de reaver o seu dinheiro, nos consulte imediatamente.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="1" title="DANO MORAL CONTRA BANCOS:">
                        <p>Se você considera ter sido lesado pelos bancos de alguma forma, você tem direito a reparação pecuniária aos danos causados sendo que em alguns casos podem superar R$ 50.000,00 (cinquenta mil reais);</p>
                        <p>Os casos são resolvidos na maioria das vezes imediatamente após o protocolo da ação judicial. </p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="4" title="REVOGAÇÃO DE LIMINARES DE BUSCA E APREENSÃO:">
                            <p>Revogamos junto ao juízo, liminares de busca e apreensão de veículos e máquinas.</p>
                            <p>A análise do processo detecta falhas administrativas anteriores ao deferimento da busca e apreensão.</p>
                             <p>Discuta sua dívida na posse do seu bem.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="2" title="CONTESTAÇÃO DE COBRANÇA DE VALORES INDEVIDOS:">
                        <p>Se você considera ter sido lesado pelos bancos de alguma forma, você tem direito a reparação pecuniária aos danos causados sendo que em alguns casos podem superar R$ 50.000,00 (cinquenta mil reais).</p>
                        <p>Os casos são resolvidos na maioria das vezes imediatamente após o protocolo da ação judicial.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="3" title="REVISÃO DE CONTRATOS ANTIGOS:">
                        <p>Em milhares de casos os bancos renegociam suas dívidas e fazem novo contrato maquiando as cobranças ilegais anteriormente lançadas em sua conta.</p>
                        <p>Nossos peritos contábeis, com mais de 20 anos de experiência, detectam qualquer ilegalidade na evolução de suas dívidas.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="5" title="PRESTAÇÃO DE CONTAS DE VENDA DE VEÍCULOS LEILOADOS:">
                        <p>Teve seu veículo leiloado sem a devida prestação de contas pelos bancos ou financeiras, saiba que você pode ter dinheiro depositado para receber</p>
                        <p>A venda do bem deve seguir procedimentos legais que a maioria dos bancos e financeiras não observam, exemplo a observância da tabela FIPE para avaliação do bem.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="6" title="DANO MORAL NA PORTABILIDADE DE CONTA BANCÁRIA:">
                        <p>Na maioria das vezes, quando você faz a portabilidade de sua conta bancária, os bancos costumam reter todo o seu salário, inclusive os futuros, para quitar pendências ou cobranças.</p>
                        <p>Essa prática não é permitida por lei e gera dano moral indenizável em seu favor.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="7" title="ASSESSORIA EM PORTABILIDADE DE CONTAS BANCÁRIAS:">
                        <p>Para não sofrer danos e indisposições com a portabilidade junto aos bancos e seus gerentes, acompanhamos no processo todo.</p>
                        <p>Conduziremos a portabilidade nos estritos termos das regras do Bacen.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Card imagePath="8" title="RETOMADA DE VEÍCULOS APREENDIDOS:">
                        <p>Se o seu bem foi apreendido em busca e apreensão judicial, analisaremos todo o processo e encontraremos falhas que existem na maioria dos casos, reavendo o seu bem, colocando seu carro, moto, etc... na sua posse.</p>
                        <p>Temos muitas teses para motoristas de aplicativo.</p>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}