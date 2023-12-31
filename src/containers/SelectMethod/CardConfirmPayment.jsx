import React, { useState, useEffect } from "react";
import {
  Form,
  InputGroup,
  Button,
  Tab,
  Tabs,
  Container,
  Card,
} from "react-bootstrap";
import classes from "@/styles/CardConfirmPayment.module.css";
import Copy from "@/assets/payment/copy.svg";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

function CardConfirmPayment({ setProgress }) {
  const [noRekening, setNoRekening] = useState("54104257877");
  const [countdown, setCountdown] = useState(0);
  const [dataPembayaran, setDataPembayran] = useState({});
  const [isShowConfirmCard, setIsShowConfirmCard] = useState(false);
  const [filePreview, setFilePreview] = useState();

  // Fungsi untuk menambahkan 0 di depan angka jika angka < 10
  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  //  Fungsi untuk mengubah detik menjadi format jam:menit:detik
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // return `${padZero(remainingSeconds)}`;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
  };

  useEffect(() => {
    // Menetapkan waktu sekarang
    const now = new Date();
    // Menetapkan waktu batas pembayaran menjadi 24 jam dari waktu sekarang
    const deadline = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    // Menghitung selisih waktu antara waktu sekarang dan waktu batas pembayaran dalam detik
    const difference = Math.floor((deadline - now) / 1000);

    // Memperbarui state countdown dengan selisih waktu
    setCountdown(difference);

    // Mengatur interval untuk mengurangi countdown setiap detik
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Membersihkan interval saat komponen dibongkar
    return () => clearInterval(interval);
  }, []);

  const copyNoRekening = () => {
    navigator.clipboard
      .writeText(noRekening)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  const copyTotalBayar = () => {
    navigator.clipboard
      .writeText(dataPembayaran.totalBayar)
      .then(() => {
        alert("Total Bayar berhasil disalin!");
      })
      .catch((error) => {
        console.error("Gagal menyalin Total Bayar:", error);
      });
  };

  useEffect(() => {
    setDataPembayran(JSON.parse(localStorage.getItem("pembayaran")));
  }, []);

  const renderCountdown = () => countdown > 0 && formatTime(countdown);

  const handleDrop = (e) => {
    e.preventDefault();

    const selectedFiles = e.dataTransfer.files;
    setFilePreview(selectedFiles[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemovePreview = (e) => {
    e.preventDefault();
    setFilePreview(null);
    e.stopPropagation();
  };

  const handleChangeFile = (e) => {
    const selectedFiles = e.target.files;
    setFilePreview(selectedFiles[0]);
    e.target.value = "";
  };

  const config = {
    headers: {
      access_token: localStorage.getItem("token"),
      "Content-Type": "multipart/form-data",
    },
  };

  const router = useRouter();
  const { carId } = router.query;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://api-car-rental.binaracademy.org/customer/order/${carId}/slip`,
        {
          slip: filePreview,
        },
        config
      );

      console.log("RESPONSE DATA", response);
      setProgress(3);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <Container>
      <section
        id="confirm-payment"
        className={`container ${classes.cardConfirmPayment}`}
      >
        <div className="row justify-content-center">
          <div className="col-lg-7 g-4">
            <div className="card countTime">
              <div className="Wrapper time d-flex justify-content-between ">
                <div className="timeStamp">
                  <h6
                    className="fw-bold mb-3 ms-4 mt-4"
                    data-testid="heading-Title1"
                  >
                    Selesaikan Pembayaran sebelum
                  </h6>
                  <p className="ms-4">
                    {" "}
                    {
                      new Date(dataPembayaran.targetPembayaran)
                        .toString()
                        .split("GMT")[0]
                    }
                  </p>
                </div>
                <div className="counterTime my-auto me-3">
                  <div className="countDownTimer mt-2 fw-bold" id="countDown-1">
                    {renderCountdown()}
                  </div>
                </div>
                {/* <p className="text-danger">Waktu Habis</p> */}
                <div className="counterTime my-auto me-3">
                  <div
                    className="countDownTimer mt-2 fw-bold"
                    id="countDown-1"
                  />
                </div>
              </div>
            </div>
            <div className="card AccountTransferBank mt-4">
              <h6 className="fw-bold mb-3 ms-4 mt-4">
                Lakukan Transfer Ke {dataPembayaran.bank}
              </h6>
              <div className="accountBank d-flex">
                <div className="accountDetail ms-4">
                  <p style={{ marginTop: "-12px" }}>a.n Binar Car Rental</p>
                </div>
              </div>
              <div className="accountNumber my-2">
                <div className="number ms-4 me-4">
                  <Form.Group className="mb-3" controlId="formAccountNumber">
                    <Form.Label
                      className={`text-secondary ${classes.labelSize}`}
                    >
                      Nomor Rekening
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="54104257877"
                        disabled
                        className={classes.formCustomBackground}
                        value={noRekening}
                        onChange={(e) => setNoRekening(e.target.value)}
                      />{" "}
                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        className="disable"
                        onClick={copyNoRekening}
                      >
                        <Image src={Copy} alt="copy-to-clipboard" />
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="totalCost ms-4 me-4">
                  <Form.Group className="mb-3" controlId="formAccountNumber">
                    <Form.Label
                      className={`text-secondary ${classes.labelSize}`}
                    >
                      Total Bayar
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        value={dataPembayaran.totalBayar}
                        disabled
                      />
                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        className="disable"
                        onClick={copyTotalBayar}
                      >
                        <Image src={Copy} alt="copy-to-clipboard" />
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
            </div>
            <div className="card optionPayment mt-4">
              <h6 className="fw-bold mb-3 ms-4 mt-4">Instruksi Pembayaran</h6>
              <Tabs
                defaultActiveKey="atmBca"
                id="fill-tab-example"
                className="mb-3 mx-4"
                justify
              >
                <Tab eventKey="atmBca" title="ATM BCA" className="mx-4 mb-4">
                  <li>Masukkan kartu ATM, lalu PIN</li>
                  <li>
                    Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA
                    Virtual Account”
                  </li>
                  <li>
                    Masukkan nomor BCA Virtual Account: 70020+Order ID
                    <br />
                    <span className="ms-4">Contoh:</span>
                    <br />
                    <span className="ms-4">
                      No. Peserta: 12345678, maka ditulis 7002012345678
                    </span>
                  </li>
                  <li>
                    Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                    menyelesaikan transaksi
                  </li>
                  <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                </Tab>
                <Tab eventKey="m-bca" title="M-BCA" className="mx-4 mb-4">
                  <li>Pilih m-transfer</li>
                  <li>Masukkan Nomor Order ID</li>
                  <li>Masukkan Jumlah Nominal Harga</li>
                  <li>
                    Periksa informasi yang tertera di layar. Pastikan Merchant
                    sudah sesuai
                  </li>
                  <li>
                    Masukkan PIN m-BCA dan pilih <strong>OK</strong>
                  </li>
                  <li>
                    Jika muncul notifikasi{" "}
                    <strong>
                      Transaksi Gagal. Nominal melebihi limit harian
                    </strong>
                    , mohon ulangi transaksi menggunakan klik BCA (iBanking)
                    atau ATM
                  </li>
                </Tab>
                <Tab eventKey="bcaKlik" title="BCA Klik" className="mx-4 mb-4">
                  <li>Masukkan nomor rekening tujuan</li>
                  <li>Masukkan Order ID</li>
                  <li>Masukkan Jumlah nominal harga</li>
                  <li>Tulis berita transfer jika diperlukan</li>
                  <li>Pilih jenis transfer</li>
                  <li>Lakukan konfirmasi dengan token BCA APPL 2 dan APPL 1</li>
                  <li>Transaksi selesai dan simpanlah bukti transfer</li>
                </Tab>
                <Tab
                  eventKey="internetBanking"
                  title="Internet Banking"
                  className="mx-4 mb-4"
                >
                  <li>Pilih Transfer Dana</li>
                  <li>Masukkan Nomor Order ID</li>
                  <li>Masukkan Jumlah Nominal Harga</li>
                  <li>
                    Periksa informasi yang tertera di layar. Pastikan Merchant
                    sudah sesuai
                  </li>
                  <li>Masukkan respon KeyBCA dan klik kirim</li>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-lg-5 g-4">
            {isShowConfirmCard === false ? (
              <div className="card">
                <p className="mb-3 mx-4 mt-4">
                  Klik Konformasi Pembayaran untuk mempercepat proses pengecekan
                </p>
                <div className="buttonConfirm mx-4 mb-4">
                  <Button
                    size="md-5"
                    variant="success"
                    className={`w-100 ${classes.btnBayar}`}
                    onClick={() => setIsShowConfirmCard(true)}
                  >
                    Konfirmasi Pembayaran
                  </Button>
                </div>
              </div>
            ) : (
              <Card>
                <Card.Body>
                  <h5 className="mb-3">Konfirmasi Pembayaran</h5>
                  <p>
                    Terima kasih telah melakukan konfirmasi pembayaran.
                    Pembayaranmu akan segera kami cek tunggu kurang lebih 10
                    menit untuk mendapatkan konfirmasi.
                  </p>
                  <h5>Upload Bukti Pembayaran</h5>
                  <p>
                    Untuk membantu kami lebih cepat melakukan pengecekan. Kamu
                    bisa upload bukti bayarmu
                  </p>
                  <div
                    draggable
                    className="wrapper_file-uploader"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <label
                      htmlFor="upload"
                      className="label_file-uploader  d-flex justify-content-center align-items-center"
                    >
                      {filePreview ? (
                        <div style={{ width: "100%" }}>
                          <div className="p-3">
                            <Button
                              className="d-block"
                              type="button"
                              variant="danger"
                              onClick={handleRemovePreview}
                              style={{ width: "100%" }}
                            >
                              Remove{" "}
                            </Button>
                          </div>
                          <div className="d-flex justify-content-center">
                            <Image
                              className="d-block"
                              src={URL.createObjectURL(filePreview)}
                              alt="img-preview"
                              width={250}
                              height={250}
                            />
                          </div>
                        </div>
                      ) : (
                        <span>Upload or Drag File</span>
                      )}
                      <input
                        type="file"
                        name="upload"
                        id="upload"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleChangeFile}
                      />
                    </label>
                  </div>
                  <Button
                    type="submit"
                    variant="success"
                    className="mt-3"
                    style={{ width: "100%", borderRadius: "1px" }}
                    onClick={handleSubmit}
                  >
                    Konfirmasi
                  </Button>
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}

export default CardConfirmPayment;
