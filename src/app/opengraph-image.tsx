import { ImageResponse } from "next/og";

export const alt =
  "AMAR WATER PROOFING P.L.C — Waterproofing Experts in Ethiopia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#132957",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 16,
            backgroundColor: "#f59e0b",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#8ed4ff",
              letterSpacing: 4,
              marginBottom: 18,
            }}
          >
            WATERPROOFING CONTRACTORS — ADDIS ABABA, ETHIOPIA
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
            }}
          >
            AMAR
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              color: "#59b8ff",
              lineHeight: 1.05,
            }}
          >
            WATER PROOFING
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 38,
              fontWeight: 600,
              color: "#fbbf24",
              marginTop: 24,
            }}
          >
            Protecting Your Property, Drop by Drop
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 40,
              fontSize: 32,
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            <div style={{ display: "flex" }}>15+ Years</div>
            <div style={{ display: "flex", color: "#8ed4ff" }}>•</div>
            <div style={{ display: "flex" }}>4,000+ Projects</div>
            <div style={{ display: "flex", color: "#8ed4ff" }}>•</div>
            <div style={{ display: "flex" }}>10 Yr Warranty</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#ffffff",
              opacity: 0.7,
            }}
          >
            amar-water-proofing.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
