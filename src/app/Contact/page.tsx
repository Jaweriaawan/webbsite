import Image from "next/image";
import background from "@/app/Images/Conatct.jpg";
import second from "@/app/Images/contact2.webp";
import Header from "../component/Header";

export default function Contact() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", width: "100%", position: "relative" }}>
        <Image src={background} alt="" style={{ width: "50%", height: "100vh" }} />
        <Image src={second} alt="" style={{ width: "50%", height: "100vh" }} />
      </div>
      <Header />
      <div
        style={{
          width: "550px",
          height: "700px",
          backgroundColor: "black",
          opacity: 0.7,
          borderRadius: "20px",
          marginLeft: "200px",
          marginTop: "-750px",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          style={{
            width: "400px",
            height: "60px",
            paddingLeft: "40px",
            outline: "none",
            marginTop: "50px",
            marginLeft: "70px",
            fontSize: "20px",
            backgroundColor: "black",
            borderBottom: "2px solid white",
            color: "white",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{
            width: "400px",
            height: "60px",
            paddingLeft: "40px",
            outline: "none",
            marginTop: "80px",
            marginLeft: "70px",
            fontSize: "20px",
            backgroundColor: "black",
            borderBottom: "2px solid white",
            color: "white",
          }}
        />
        <textarea
          placeholder="Message"
          style={{
            width: "400px",
            height: "200px",
            paddingLeft: "40px",
            outline: "none",
            paddingTop: "10px",
            marginTop: "120px",
            marginLeft: "70px",
            fontSize: "20px",
            backgroundColor: "black",
            borderBottom: "2px solid white",
            color: "white",
          }}
        ></textarea>
        <br />
        <button
          style={{
            color: "white",
            fontSize: "20px",
            marginLeft: "400px",
            marginTop: "10px",
          }}
        >
          Send it
        </button>
      </div>

      <div
        style={{
          width: "550px",
          height: "700px",
          position: "absolute",
          marginLeft: "1200px",
          borderRadius: "20px",
          backgroundColor: "white",
          marginTop: "-750px",
          opacity: 0.7,
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <p
          style={{
            color: "#2f6d3f",
            fontSize: "48px",
            fontWeight: "600",
          }}
        >
          Contact Us
        </p>
        <p
          style={{
            fontSize: "19px",
            marginTop: "80px",
            paddingLeft: "50px",
            paddingRight: "50px",
            fontWeight: "600",
          }}
        >
          We’d love to hear from you! Whether you have a question, want to book a table, or just chat about your love for antiques and coffee, we’re here for you. Visit us at{" "}
          <span style={{ color: "#2f6d3f", fontWeight: "bold" }}>Antique Cafe</span> to soak in the vintage charm, or reach out via phone at{" "}
          <span style={{ color: "#2f6d3f", fontWeight: "bold" }}>000-0000-0000</span>. You can also drop us an email at{" "}
          <span style={{ color: "#2f6d3f", fontWeight: "bold" }}>gmail@gmail.com</span> we’ll get back to you as soon as we put down our coffee cups! Follow us on [Social Media Handles] for updates, specials, and a daily dose of nostalgia.
        </p>
      </div>
    </div>
  );
}
