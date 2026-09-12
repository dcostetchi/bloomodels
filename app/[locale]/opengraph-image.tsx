import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface OpengraphImageProps {
  readonly params: Promise<{ locale: string }>;
}

export default async function Image({
  params,
}: OpengraphImageProps): Promise<ImageResponse> {
  const { locale } = await params;
  const tagline =
    locale === "ro"
      ? "Facem Creatorii Sa Creasca"
      : "We Make Creators Grow";
  const wordmark = siteConfig.name.split(" ")[0];

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
          backgroundColor: "#FAF7F2",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontStyle: "italic",
            color: "#2C2C2C",
            fontFamily: "serif",
          }}
        >
          {wordmark}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#A08F63",
          }}
        >
          {tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
