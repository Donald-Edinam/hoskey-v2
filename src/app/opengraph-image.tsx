import { ImageResponse } from "next/og";

export const alt = "Hoskey Production - Where Stories Come Alive";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0d0c0b",
          color: "#f4f3f1",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              color: "#12100e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "26px",
            }}
          >
            H
          </div>
          <span
            style={{
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#9d9892",
            }}
          >
            BROADCAST &amp; MEDIA PRODUCTION · GHANA
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              color: "#ffffff",
              maxWidth: "18ch",
            }}
          >
            Hoskey Production.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#5b87e8",
              maxWidth: "40ch",
              fontWeight: 600,
            }}
          >
            Where Stories Come Alive.
          </div>
        </div>

        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9d9892",
          }}
        >
          TELEVISION · LIVE STREAMING · POST-PRODUCTION · DEMES SHR STUDIOS
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
