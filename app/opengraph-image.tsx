import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Íris — psicologia para gênero, sexualidade e identidade";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background:
            "radial-gradient(120% 90% at 80% -10%, #E8C07A 0%, rgba(232,192,122,0) 55%), #F3E8D5",
        }}
      >
        {/* sliver espectral */}
        <div
          style={{
            display: "flex",
            width: 220,
            height: 6,
            borderRadius: 3,
            marginBottom: 40,
            background:
              "linear-gradient(90deg, #E8C07A, #E0A088, #E6A8B0, #9FB6BE)",
          }}
        />
        <div
          style={{
            fontSize: 132,
            fontWeight: 400,
            color: "#0A5A5E",
            lineHeight: 1,
            fontFamily: "Georgia, serif",
          }}
        >
          Íris
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 40,
            color: "#37322A",
            maxWidth: 900,
            lineHeight: 1.3,
            fontFamily: "Georgia, serif",
          }}
        >
          Um lugar para ser visto por inteiro.
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#BE5F3C",
          }}
        >
          Psicologia · gênero, sexualidade e identidade
        </div>
      </div>
    ),
    { ...size },
  );
}
