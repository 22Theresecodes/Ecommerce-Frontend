import styled from "styled-components";
import {
    Facebook,Instagram,Twitter, Room, Phone, MailOutline } from "@material-ui/icons";

const Container = styled.div`
  display:flex;
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
   background-color:#${(props)=>props.color};
   display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`



const Center = styled.div`
   flex:1;
   padding:20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
   margin:0;
   padding:0;
   list-style:none;
   display:flex;
   flex-wrap:wrap;
`

const ListItem = styled.li`
  width:50%;
  margin-bottom: 10px;
`
const Right = styled.div`
   flex:1;
   padding:20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>BOUY.</Logo>
            <Desc> Welcome to BOUY, your go-to destination for all your shopping needs! We offer a wide range of high-quality products at competitive prices, including fashion, home decor, electronics, beauty, and much more. Our mission is to provide you with a seamless shopping experience that is both enjoyable and hassle-free. Shop with us today and discover the best deals on the market! </Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                
            </SocialContainer>
        </Left>
        <Center>
           <Title>Useful Links</Title>
           <List>
           <ListItem>Home</ListItem> 
           <ListItem>Cart</ListItem> 
           <ListItem>Man Fashion</ListItem> 
           <ListItem>Woman Fashion</ListItem> 
           <ListItem>Accessories</ListItem> 
           <ListItem>My Account</ListItem> 
           <ListItem>Order Tracking</ListItem> 
           <ListItem>Wishlist</ListItem> 
           <ListItem>Terms</ListItem> 
           </List>
        
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}} /> No.15 Mabel Erewa Street, off Etete Road GRA Benin City
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight:"10px"}} /> +2348020810785
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight:"10px"}} /> contact@bouy.dev
            </ContactItem>
            <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer