import Image from "next/image";
import backgroundPic from "@/app/Images/Menubackgrpund.jpg";
import first from "@/app/Images/menu1.webp";
import second from "@/app/Images/menu2.webp";
import third from "@/app/Images/menu3.webp";
import four from "@/app/Images/menu5.jpg";
import five from "@/app/Images/menu6.jpg";
import six from "@/app/Images/menu7.webp";
import Header from "../component/Header";

export default function Menu() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Image src={backgroundPic} alt="" style={{ width: "100%", height: "100vh", position: "relative" }} />
      <Header />
      <div
        style={{
          width: "500px",
          height: "80px",
          backgroundColor: "white",
          position: "absolute",
          marginTop: "-770px",
          marginLeft: "740px",
          fontWeight: "600",
          opacity: 0.65,
          textAlign: "center",
          paddingTop: "10px",
          borderRadius: "15px",
          color: "#4B382A",
        }}
      >
        <p style={{ fontSize: "40px" }}>Our Coffee Menu</p>
      </div>

      <div
        style={{
          width: "50%",
          height: "600px",
          position: "absolute",
          marginTop: "-630px",
          marginLeft: "25%",
          display: "flex",
          gap: "60px",
        }}
      >
        <div
          style={{
            width: "450px",
            height: "600px",
            backgroundColor: "#644937",
            display: "grid",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "15px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "190px",
              display: "flex",
              paddingLeft: "20px",
              paddingTop: "20px",
            }}
          >
            <Image src={first} alt="" style={{ width: "150px", height: "150px" }} />
            <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "20px", paddingTop: "40px" }}>
              <p style={{ color: "#352820" }}>Hot Cappuccino</p>
              <p style={{ color: "black" }}>$150</p>
            </div>
          </div>

          <div
            style={{
              width: "400px",
              height: "190px",
              display: "flex",
              paddingLeft: "20px",
              paddingTop: "20px",
            }}
          >
            <Image src={second} alt="" style={{ width: "150px", height: "150px" }} />
            <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "20px", paddingTop: "40px" }}>
              <p style={{ color: "#352820" }}>Hot Americano</p>
              <p style={{ color: "black" }}>$10</p>
            </div>
          </div>

          <div
            style={{
              width: "400px",
              height: "190px",
              display: "flex",
              paddingLeft: "20px",
              paddingTop: "20px",
            }}
          >
            <Image src={third} alt="" style={{ width: "150px", height: "150px" }} />
            <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "20px", paddingTop: "40px" }}>
              <p style={{ color: "#352820" }}>Hot Latte</p>
              <p style={{ color: "black" }}>$175</p>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "450px",
            height: "600px",
            backgroundColor: "#644937",
            display: "grid",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "15px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "190px",
              display: "flex",
              paddingLeft: "80px",
              paddingTop: "20px",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: "600", paddingRight: "20px", paddingTop: "40px" }}>
              <p style={{ color: "#352820" }}>Iced Cappuccino</p>
              <p style={{ color: "black" }}>$29</p>
            </div>
            <Image src={four} alt="" style={{ width: "150px", height: "150px" }} />
          </div>

          <div
            style={{
              width: "400px",
              height: "190px",
              display: "flex",
              paddingLeft: "80px",
              paddingTop: "20px",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: "600", paddingRight: "20px", paddingTop: "40px" }}>
              <p style={{ color: "#352820" }}>Iced Americano</p>
              <p style={{ color: "black" }}>$180</p>
            </div>
            <Image src={five} alt="" style={{ width: "150px", height: "150px" }} />
          </div>

          <div
            style={{
              width: "400px",
              height: "190px",
              display: "flex",
              paddingLeft: "80px",
              paddingTop: "20px",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: "600", paddingRight: "20px", paddingTop: "40px" }}>
              <p style={{ color: "#352820" }}>Iced Milky Latte</p>
              <p style={{ color: "black" }}>$18</p>
            </div>
            <Image src={six} alt="" style={{ width: "150px", height: "150px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
