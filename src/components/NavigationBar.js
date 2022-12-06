import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>GRIYA KAIN JUMPUTAN</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        <Nav.Link href="#trending">TRENDING</Nav.Link>
                        <Nav.Link href="#gallery">GALERI</Nav.Link>
                        <Nav.Link href="#Forms">PESAN</Nav.Link>
                        <Nav.Link href="#kontak">KONTAK KAMI</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )

}

export default NavigationBar
