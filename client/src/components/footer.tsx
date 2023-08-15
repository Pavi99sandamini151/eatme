import { Card, Container, Content, Footer } from 'react-bulma-components';
import { Link } from 'react-router-dom';

const FooTer = () => {
  return (
    <>
      <Footer>
        <Container>
          <Content style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Card.Content className="footer-card">
              <ul className="list">
                <li>
                  <p className="subtitle">Discover Dilivaroo</p>
                </li>
                <li>
                  <Link to="/login" className="link">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Tkewy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    More
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Engineering blog
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Design blog
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Resturant signup
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Become a rider
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Deliveroo Talent Dilevery
                  </Link>
                </li>
              </ul>
            </Card.Content>
            <Card.Content className="footer-card">
              <ul className="list">
                <li>
                  <p className="subtitle">Legal</p>
                </li>
                <li>
                  <Link to="/" className="link">
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Modern Slavery Statement
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Tax Strtergy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Section 172 Statement
                  </Link>
                </li>
              </ul>
            </Card.Content>
            <Card.Content className="footer-card">
              <ul className="list">
                <li>
                  <p className="subtitle">Help</p>
                </li>
                <li>
                  <Link to="/" className="link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Cuisins
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Brands
                  </Link>
                </li>
              </ul>
            </Card.Content>
            <Card.Content className="footer-card">
              <ul className="list">
                <li>
                  <p className="subtitle">Take Delivaroo with you</p>
                </li>
              </ul>
            </Card.Content>
          </Content>
        </Container>
      </Footer>
    </>
  );
};

export default FooTer;
