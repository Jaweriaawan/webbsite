import Image from "next/image";
import backgroundpictue from "@/app/Images/About.jpg";
import Header from "../component/Header";

export default function About() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Image src={backgroundpictue} alt="" className="w-full h-[100vh] relative" />
      <Header />
      <div
        style={{
          width: "30%",
          height: "650px",
          backgroundColor: "white",
          position: "absolute",
          marginTop: "-750px",
          marginLeft: "660px",
          borderRadius: "20px",
          opacity: 0.7,
          textAlign: "center",
          paddingTop: "70px",
        }}
      >
        <p
          style={{
            color: "#2f6d3f",
            fontSize: "48px",
            fontWeight: "600",
          }}
        >
          About Our Cafe
        </p>
        <p
          style={{
            fontSize: "19px",
            marginTop: "80px",
            paddingLeft: "60px",
            paddingRight: "60px",
            fontWeight: "600",
          }}
        >
          Step into our Antique Café, where every sip tells a story! ☕ Immerse yourself in the rich aroma of freshly brewed coffee, crafted with the finest beans for an unforgettable taste. The warm, vintage ambiance, paired with the perfect blend of flavors, creates a cozy retreat from the modern rush. Every cup is a journey through time, with a hint of nostalgia and a whole lot of charm. Come, savor the past—one sip at a time!
        </p>
      </div>
    </div>
  );
}
