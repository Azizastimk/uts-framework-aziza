import { Container, Row, Col, Card, Image, Button } from "react-bootstrap"
import kotak from "../assets/images/galeri/kotak.jpg"
import casepanjang from "../assets/images/galeri/casepanjang.jpg"
import dompet from "../assets/images/galeri/dompet.jpg"
import resmi from "../assets/images/galeri/resmi.jpg"
import Gambo from "../assets/images/galeri/Gambo.jpg"
import kainmotif from "../assets/images/galeri/kainmotif.jpg"

const Gallery = () => {
    return (
        <div>
            <Container className="text-white">
                <br />
                <h1>GALERI PRODUK</h1>
                <br />
                <Row>
                    <Col md={4} className="kainWrapper" id="gallery">
                        <Card className="kainImage">
                            <Image src={kotak} alt="Kotak" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Poch Mini</Card.Title>
                                    <Card.Text className="text-center">
                                        Produk hasil jahitan penduduk lokal
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark"><a href="#Forms">Beli Disini</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="kainWrapper">
                        <Card className="kainImage">
                            <Image src={casepanjang} alt="Case Panjang" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Poch Panjang</Card.Title>
                                    <Card.Text className="text-center">
                                        Cocok untuk wadah pulpen, pensil
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark"><a href="#Forms">Beli Disini</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="kainWrapper">
                        <Card className="kainImage">
                            <Image src={dompet} alt="Dompet" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dompet Kondangan</Card.Title>
                                    <Card.Text className="text-center">
                                        Cocok untuk pesta dan acara resmi
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark"><a href="#Forms">Beli Disini</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="kainWrapper">
                        <Card className="kainImage">
                            <Image src={resmi} alt="Resmi" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dompet</Card.Title>
                                    <Card.Text className="text-center">
                                        Cocok untuk acara formal dan Non Formal
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark"><a href="#Forms">Beli Disini</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="kainWrapper">
                        <Card className="kainImage">
                            <Image src={Gambo} alt="Gambo" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Kain Jumputan Gambo</Card.Title>
                                    <Card.Text className="text-center">
                                        Kain jumputan khas Muba
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark">
                                        <a href="#Forms">Beli Disini</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="kainWrapper">
                        <Card className="kainImage">
                            <Image src={kainmotif} alt="Kain Motif" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Kain Jumputan Palembang</Card.Title>
                                    <Card.Text className="text-center">
                                        Kain jumputan dengan pewarna tekstil
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark">
                                            <a href="#Forms">Beli Disini</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Gallery
