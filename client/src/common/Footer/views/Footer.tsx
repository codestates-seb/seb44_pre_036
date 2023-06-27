import { Container, Box, LogoBox, Nav, NavDiv, Site } from '../FooterStyles';

function Footer() {
  return (
    <Container>
      <Box>
        <LogoBox>
          <img src="/header_svg/slogo.svg" alt="slogo" />
        </LogoBox>
        <Nav>
          <NavDiv>
            <h5>Stack Overflow</h5>
            <ul>
              <li>
                <a>Questions</a>
              </li>
              <li>
                <a>Help</a>
              </li>
            </ul>
          </NavDiv>
          <NavDiv>
            <h5>PRODUCTS</h5>
            <ul>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Advertising</a>
              </li>
              <li>
                <a>Collectives</a>
              </li>
              <li>
                <a>Talent</a>
              </li>
            </ul>
          </NavDiv>
          <NavDiv>
            <h5>COMPANY</h5>
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Press</a>
              </li>
              <li>
                <a>Work Here</a>
              </li>
              <li>
                <a>Legal</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms of Service</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Cookie Settings</a>
              </li>
              <li>
                <a>Cookie Policy</a>
              </li>
            </ul>
          </NavDiv>
          <NavDiv>
            <h5>STACK EXCHANGE NETWORK</h5>
            <ul>
              <li>
                <a>Technology</a>
              </li>
              <li>
                <a>Culture & recreation</a>
              </li>
              <li>
                <a>Life & arts</a>
              </li>
              <li>
                <a>Science</a>
              </li>
              <li>
                <a>Professional</a>
              </li>
              <li>
                <a>Business</a>
              </li>
              <li>
                <a>API</a>
              </li>
              <li>
                <a>Data</a>
              </li>
            </ul>
          </NavDiv>
        </Nav>
        <Site>
          <ul>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Fackbook</a>
            </li>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>LinkedIn</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
          </ul>
          <p>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under CC BY-SA. rev 2023.6.23.43509
          </p>
        </Site>
      </Box>
    </Container>
  );
}

export default Footer;
