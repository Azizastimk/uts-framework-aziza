import { Container, Row, Col, Card, Image, Button } from "react-bootstrap"
import baju from "../assets/images/trending/baju.jpg"
import gambo from "../assets/images/trending/gambo.jpg"
import kaingambo from "../assets/images/trending/kaingambo.jpg"
import kainmotif from "../assets/images/trending/kainmotif.jpg"
import kainnew from "../assets/images/trending/kainnew.jpg"
import kainungu from "../assets/images/trending/kainungu.jpg"

const Trending = () => {
    return (
        <div>
            <Container className="text-white">
                <br />
                <h1>TRENDING KAIN</h1>
                <br />
                <Row>
                    <Col md={4} className="kainWrapper" id="trending">
                        <Card className="kainImage">
                            <Image src={baju} alt="BAJU" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Baju Gambo</Card.Title>
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
                            <Image src={gambo} alt="Gambo" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Jumputan Gambo
                                    </Card.Title>
                                    <Card.Text className="text-center">
                                        Kain batik jumputan pewarna alami gambir
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
                            <Image src={kaingambo} alt="Kain Gambo" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Kain Jumputan Gambo
                                    </Card.Title>
                                    <Card.Text className="text-center">
                                        Kain Khas Musi Banyuasin, Sumsel
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
                            <Image src={kainmotif} alt="Kain Motif" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Kain Motif Titik 7</Card.Title>
                                    <Card.Text className="text-center">
                                        Kain jumputan motif khas Palembang
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
                            <Image src={kainnew} alt="Kain New" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Kain Jumputan Motif Baru</Card.Title>
                                    <Card.Text className="text-center">
                                        Kain jumputan dengan motif baru
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
                            <Image src={kainungu} alt="Kain Ungu" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Kain Jumputan Palembang</Card.Title>
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
export default Trending
