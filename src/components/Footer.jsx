import styled from "styled-components";
import {
    Facebook,
    Instagram,
    Twitter } from "@material-ui/icons";

const Container = styled.div`
  background-color:red;
`
const Left = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  padding:20px;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display:flex;
`
const SocialIcon = styled.div`
   width:40px;
   height:40px;
   border-radius:50%;
   color:white;
`



const Center = styled.div`
   flex:1;
`
const Right = styled.div`
   flex:1;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>BOUY.</Logo>
            <Desc> Welcome to BOUY, your go-to destination for all your shopping needs! We offer a wide range of high-quality products at competitive prices, including fashion, home decor, electronics, beauty, and much more. Our mission is to provide you with a seamless shopping experience that is both enjoyable and hassle-free. Shop with us today and discover the best deals on the market! </Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
                
            </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer