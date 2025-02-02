import Image from "next/image";
import backgroundImage from "@/app/Images/Introbackground.jpg";
import { RiCupFill } from "react-icons/ri";
import Header from "./component/Header";

export default function Intro() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Image src={backgroundImage} alt="" className="w-full h-[100vh] relative" />
      <Header />
      <div
        style={{
          width: "400px",
          height: "200px",
          backgroundColor: "black",
          position: "absolute",
          marginTop: "-680px",
          marginLeft: "730px",
          opacity: 0.65,
          textAlign: "center",
          paddingTop: "40px",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "40px", color: "white" }}>Antique Cafe</p>
        <p style={{ fontSize: "20px", color: "#C4A484", marginTop: "20px" }}>
          Your daily energy booster
        </p>
      </div>
      <div
        style={{
          width: "400px",
          height: "230px",
          marginLeft: "730px",
          backgroundColor: "black",
          marginTop: "-470px",
          position: "absolute",
          opacity: 0.65,
          paddingLeft: "15px",
          paddingTop: "30px",
        }}
      >
        <p style={{ fontSize: "18px", color: "white" }}>
          Welcome to Antique Cafe – where every sip tells a story and every corner whispers nostalgia. Step in, unwind, and let the aroma of freshly brewed coffee take you on a journey through time.
        </p>
      </div>
      <div
        style={{
          width: "250px",
          height: "60px",
          backgroundColor: "black",
          opacity: 0.75,
          marginTop: "-230px",
          marginLeft: "800px",
          color: "#C4A484",
          display: "flex",
          paddingLeft: "40px",
          textAlign: "center",
          paddingTop: "13px",
          gap: "15px",
        }}
      >
        <RiCupFill style={{ width: "35px", height: "35px" }} />
        <p style={{ fontSize: "20px" }}>Let's explore</p>
      </div>
    </div>
  );
}
