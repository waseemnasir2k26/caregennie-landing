import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FAFBFC 0%, #E2E8F0 50%, #F1F5F9 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #0D7377, #14919B, #F59E0B)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            padding: "0 80px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#0D7377",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              CG
            </div>
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#0F172A",
              }}
            >
              CareGennie
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#0F172A",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: 800,
            }}
          >
            Intelligent Software for UK Homecare Agencies
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontSize: 22,
              color: "#475569",
              textAlign: "center",
              maxWidth: 600,
              lineHeight: 1.5,
            }}
          >
            Automate scheduling, compliance, and care management
          </div>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 24px",
              borderRadius: 100,
              background: "#0D7377",
              color: "white",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Join the Waiting List
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 18,
            color: "#94A3B8",
          }}
        >
          caregennie.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
