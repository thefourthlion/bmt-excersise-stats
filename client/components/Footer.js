import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Row className="footer-links">
          <Col className="footer-nav">
            <ul className="footer-links">
              <li className="">
                <Link href="/">BMT</Link>
              </li>

              <li className="">
                <Link href="/Stats">stats</Link>
              </li>
              <li className="">
                <Link href="/Daily">daily</Link>
              </li>

              <li className="">
                <Link href="/Weekly">weekly</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
