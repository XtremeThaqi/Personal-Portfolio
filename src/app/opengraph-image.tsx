import { ImageResponse } from "next/og";

export const alt = "Erblin Thaqi — Full-Stack Developer from Kosovo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 80px", background: "#090909", color: "#ffffff", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 72, height: 72, borderRadius: 18, background: "#dc2626", fontSize: 30, fontWeight: 700 }}>ET</div>
        <div style={{ display: "flex", color: "#a1a1aa", fontSize: 24 }}>Developer portfolio</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", fontSize: 88, letterSpacing: -4, fontWeight: 700 }}>Erblin Thaqi</div>
        <div style={{ display: "flex", fontSize: 38, color: "#f87171" }}>Full-Stack Developer</div>
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa", marginTop: 8 }}>Web applications. Thoughtful interfaces. Kosovo.</div>
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #27272a", paddingTop: 22, color: "#a1a1aa", fontSize: 22 }}>erblinthaqi.netlify.app</div>
    </div>,
    size,
  );
}
