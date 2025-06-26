import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  
  .feature-card {
    transition: transform 0.3s;
    height: 100%;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  .carousel-item img {
    object-fit: cover;
    height: 400px;
  }
`;

export const SectionTitle = styled.h2`
  color: #FF6600;
  margin: 2rem 0 1.5rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background: #FF6600;
    margin: 10px auto 0;
  }
`;
 
