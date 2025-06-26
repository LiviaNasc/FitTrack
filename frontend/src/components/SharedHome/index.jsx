import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import Layout from '../../components/Layout';
import * as C from './styles';

const SharedHome = ({ userType }) => {
  const features = [
    {
      title: "Treinos Personalizados",
      description: "Programas adaptados ao seu biotipo e objetivos",
      icon: "💪"
    },
    {
      title: "Acompanhamento Profissional",
      description: "Instrutores certificados para te guiar",
      icon: "👨‍🏫"
    },
    {
      title: "Tecnologia Integrada",
      description: "Acompanhe seu progresso em tempo real",
      icon: "📱"
    }
  ];

  return (
    <Layout userType={userType}>
      <C.HomeContainer>
        <Carousel fade className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Academia moderna"
            />
            <Carousel.Caption>
              <h3>Bem-vindo ao FitTrack</h3>
              <p>Sua jornada fitness começa aqui</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Equipamentos modernos"
            />
            <Carousel.Caption>
              <h3>Estrutura Completa</h3>
              <p>Os melhores equipamentos para seu treino</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <section className="text-center mb-5">
          <h1 className="display-4 mb-3">Transforme seu corpo, transforme sua vida</h1>
          <p className="lead">
            Na FitTrack, acreditamos que a fitness vai além do físico - é sobre bem-estar, 
            saúde mental e qualidade de vida. Nosso sistema foi criado para oferecer a melhor 
            experiência de acompanhamento fitness, integrando tecnologia e expertise profissional.
          </p>
        </section>

        <C.SectionTitle>Nossos Diferenciais</C.SectionTitle>
        <Row className="g-4 mb-5">
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <Card className="feature-card shadow-sm text-center p-4">
                <div className="display-3 mb-3">{feature.icon}</div>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>

        <C.SectionTitle>O que dizem sobre nós</C.SectionTitle>
        <Row className="g-4 mb-5">
          <Col md={6}>
            <Card className="h-100 p-3">
              <blockquote className="blockquote mb-0">
                <p>"O acompanhamento personalizado mudou completamente meus resultados. Em 3 meses alcancei o que não consegui em 1 ano sozinha."</p>
                <footer className="blockquote-footer mt-2">
                  <cite title="Source Title">Lívia, aluna há 8 meses</cite>
                </footer>
              </blockquote>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 p-3">
              <blockquote className="blockquote mb-0">
                <p>"Como instrutor, o sistema me dá todas as ferramentas para acompanhar meus alunos de perto e ajustar os treinos em tempo real."</p>
                <footer className="blockquote-footer mt-2">
                  <cite title="Source Title">Fulano, instrutor</cite>
                </footer>
              </blockquote>
            </Card>
          </Col>
        </Row>

        <section className="text-center py-5 bg-light rounded">
          <h2 className="mb-4">Pronto para começar sua jornada?</h2>
          <p className="mb-4">Acesse o menu lateral para explorar todas as funcionalidades disponíveis para seu perfil.</p>
          <div className="fs-1">👈</div>
        </section>
      </C.HomeContainer>
    </Layout>
  );
};

export default SharedHome;