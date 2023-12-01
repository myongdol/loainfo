import styled from "styled-components";
import { FaGithub } from 'react-icons/fa';


function Footer() {
    return (
        <StyledFooter>
            <Copyright>
                <p>이 사이트는 Lost Ark의 공식 API를 사용합니다.</p>
                <p>
                    모든 관련 콘텐츠의 저작권은 
                    <a href="https://lostark.game.onstove.com/Main" target="_blank" rel="noopener noreferrer"> Lost Ark</a>에 있습니다.
                </p>
            </Copyright>
            <FooterContent>
                <a href="https://github.com/myongdol" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Github
                </a>
                <FooterEmail href="mailto:myongdol132@gmail.com">myongdol132@gmail.com</FooterEmail>
            </FooterContent>
        </StyledFooter>
    )
};

export default Footer;



const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Copyright = styled.div`
    margin: 0 auto;

    p {
        margin: 5px 0;
    }

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const FooterContent = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-right: 15px;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      color: #ccc;
    }
  }
`;

const FooterEmail = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #ccc;
  }
`;