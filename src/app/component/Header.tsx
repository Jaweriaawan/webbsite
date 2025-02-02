import Link from "next/link";

export default function Header() {
  return (
    <div
      style={{
        color: "#8d6237",
        fontSize: "24px",
        fontFamily: "sans-serif",
        width: "100%",
        display: "flex",
        gap: "35px",
        paddingLeft: "1450px",
        paddingTop: "20px",
        marginTop: "-900px",
        position: "absolute",
      }}
    >
      <Link href="/">
        <p
          style={{
            textDecoration: "none",
            transition: "text-decoration 0.3s ease",
          }}
        >
          Intro
        </p>
      </Link>
      <Link href="/Menu">
        <p
          style={{
            textDecoration: "none",
            transition: "text-decoration 0.3s ease",
          }}
        >
          Menu
        </p>
      </Link>
      <Link href="/About">
        <p
          style={{
            textDecoration: "none",
            transition: "text-decoration 0.3s ease",
          }}
        >
          About
        </p>
      </Link>
      <Link href="/Contact">
        <p
          style={{
            textDecoration: "none",
            transition: "text-decoration 0.3s ease",
          }}
        >
          Contact
        </p>
      </Link>
    </div>
  );
}
