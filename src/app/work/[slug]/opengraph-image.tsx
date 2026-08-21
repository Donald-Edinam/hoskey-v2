import { ImageResponse } from "next/og";
import { getProject } from "@/lib/content";

export const alt = "Hoskey Production - Case Study";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  const title = project?.title || "Case Study";
  const category = project?.categories?.[0] || "Production";

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
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              color: "#12100e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "24px",
            }}
          >
            H
          </div>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#9d9892",
            }}
          >
            {category} · Hoskey Production
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#ffffff",
              maxWidth: "20ch",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#9d9892",
              maxWidth: "40ch",
            }}
          >
            {project?.summary || "Television, brand film and live broadcast production in Ghana."}
          </div>
        </div>

        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#5b87e8",
          }}
        >
          WHERE STORIES COME ALIVE · ACCRA GHANA
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
