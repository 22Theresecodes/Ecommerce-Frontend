import Announcement  from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Container = styled.div``;

const Wrapper = styled.div`
  padding:20px;
`;

const Title = styled.h1`
  font-weight:300;
  text-align: center;
`;

const Top = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-betwen;
`;

const TopButton = styled.button`
  padding:10px;
`;

const Bottom = styled.div``;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
            </TopTexts>
            <TopButton>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom></Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart