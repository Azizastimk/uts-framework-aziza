import { React, useState } from 'react'
import "../style/FormsPage.css"
import Footer from '../components/Footer.js'
import { Form, Button } from 'react-bootstrap';

export default function Forms() {


    const [jumlah, setjumlah] = useState("");
    const [product, setproduct] = useState("");
    const [inputs, setInputs] = useState("");
    // const [total, settotal] = useState("");
    const [bayar, setBayar] = useState("");
    const [sisa, setSisa] = useState("");
    const [x, setquantity] = useState("");


    const changeProduct = (newProduct) => {
        setproduct(newProduct);
    };

    const Quantity = (newQuantity) => {
        setquantity(newQuantity)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    let harganya;
    if (product == "Baju") {
        harganya = 500000
    }
    else if (product == "Gambo"){
        harganya = 200000
    }
    else if (product == "Kain Gambo "){
        harganya = 250000
    }
    else if (product == "Kain Motif"){
        harganya = 150000
    }
    else if (product == "Kain New"){
        harganya = 300000
    }
    else if (product == "Kain Ungu"){
        harganya = 150000
    } else {
    harganya = 0
    }

    let harga1 = harganya * x
    let diskon;
    if (harga1 >= 500000){
        diskon = harga1 * 5/100
    } else if (harga1 >= 250000){
        diskon = harga1 * 3/100
    } else{
        diskon = 0
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setBayar(inputs.bayar);
        let sisa = parseInt(inputs.bayar) - (harga1 - diskon);
        setSisa(sisa);
    };

    return (
        <div className="body" >
            {/* <Navbar /> */}
            <div className="hero" >
                <div className="mask" >
                    {/* <img className="" src={} alt="IntroImg" /> */}
                </div>
                <div className="about" id='Forms'>
                    <h1>Pesan Sekarang</h1>
                    <Form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>Pilih Kain</td>
                            <td className="td">:</td>
                            <td>
                                
                                <Form.Group controlId="formBasicEmail">
                                <Form.Select onChange={(event) => changeProduct(event.target.value)} value={product}>
                                    <option>Select Prouct</option>
                                    <option value="Baju">Baju Gambo</option>
                                    <option value="Gambo">Gambo</option>
                                    <option value="Kain Gambo">Kain Gambo</option>
                                    <option value="Kain Motif">Kain Motif</option>
                                    <option value="Kain New">Kain Motif New</option>
                                    <option value="Kain Ungu">Kain Ungu</option>
                                </Form.Select>
                                </Form.Group>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Harga</td><td className="td">:</td><td>{harganya}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td className="td">:</td>
                            <td>
                                
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="number"
                                    name="jumlah"
                                    onChange={(event) => Quantity(event.target.value)} value={x}
                                />
                                </Form.Group>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Total</td><td className="td">:</td><td>{harga1}</td>
                        </tr>
                        <tr>
                            <td>Pay</td>
                            <td className="td">:</td>
                            <td>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="number"
                                    name="bayar"
                                    onChange={handleChange}
                                />
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button type="submit" >
                                    Submit
                                </Button>
                            </td>
                        </tr>
                    </table>
                    </Form>
                    <br />
                    <table style={{ marginBottom: '5%' }}>
                        <tr>
                            <td>Produk</td><td className="td">:</td><td>{product}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td><td className="td">:</td><td>{x}</td>
                        </tr>
                        <tr>
                            <td>Diskon</td><td className="td">:</td><td>{diskon}</td>
                        </tr>
                        <tr>
                            <td>Bayar</td><td className="td">:</td><td>{bayar}</td>
                        </tr>
                        <tr>
                            <td>Kembali</td><td className="td">:</td><td>{sisa}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}
