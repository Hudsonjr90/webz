import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import ImageOne from '../images/kitchen-1.jpg';

const Section = styled.section`
  background: #000d1a;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Features = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            >
              <h1>Dia do Trabalho</h1>
              <p>
              Desde o fim do século XIX, nos Estados Unidos da América, no Brasil e em vários outros países ocidentais, o dia 1º de maio é tido como o Dia do Trabalho ou o Dia do Trabalhador. Tal data foi escolhida em razão de uma onda de manifestações e conflitos violentos que se desencadeou a partir de uma greve geral. Essa greve paralisou os parques industriais da cidade de Chicago (EUA), no dia 1º de maio de 1886. Para compreendermos os motivos que levaram os trabalhadores a tal greve e o porquê da escolha desse dia como marco de memória, é necessário conhecer um pouco do contexto do período.
Revolução Industrial e classe operária, sabemos que, durante o século XVIII, ocorreu, em solo inglês, um dos acontecimentos mais importantes da história da humanidade: a Revolução Industrial. Da Inglaterra, o processo de industrialização alastrou-se, inicialmente, pela Europa e, depois, para outros continentes, como o americano. Uma das consequências mais patentes da Revolução Industrial foi a formação de grandes centros urbanos, fato que gerou, consequentemente, uma grande concentração de pessoas em seu entorno, sobretudo de operários, cujo trabalho nutria as indústrias.
A formação da classe operária demandou uma série de necessidades que nem sempre era efetivamente cumprida pela burguesia industrial. As horas trabalhadas eram, muitas vezes, excessivas e a relação entre empregado e empregador nem sempre era amistosa. Nesse contexto, surgiram os sindicatos e os movimentos de trabalhadores, orientados por ideologias de esquerda, como o anarquismo (anarcossindicalismo) e o comunismo.
              </p>
              <p>
              Na imagem, temos os anarquistas de Chicago condenados à execução como responsáveis pela explosão da bomba em 04 de maio de 1886
              </p>
              <strong><button><a href="https://brasilescola.uol.com.br/datas-comemorativas/dia-do-trabalho.htm" target="_blank">
                 Saiba Mais</a></button></strong>
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={ImageOne}
              data-aos='fade-left'
              data-aos-duration='1200'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
