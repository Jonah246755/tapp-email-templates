import { pixelBasedPreset } from "@react-email/components";

export const emailTailwindConfig = {
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      colors: {
        tapp: {
          brown: "#3D2E2C",
          mint: "#30E791",
          cyan: "#A9F5FF",
          ink: "#3E3131",
          text: "#403030",
          sand: "#F5F5F0",
          muted: "#766A6A",
          white: "#FFFFFF",
          deep: "#002D33",
        },
      },

      fontSize: {
        "tapp-display": ["58px", { lineHeight: "1" }],
        "tapp-h1": ["40px", { lineHeight: "1.25" }],
        "tapp-h2": ["22px", { lineHeight: "1.4" }],
        "tapp-body": ["18px", { lineHeight: "1.6" }],
        "tapp-body-sm": ["16px", { lineHeight: "1.5" }],
        "tapp-meta": ["13px", { lineHeight: "1.4" }],
        "tapp-overline": ["15px", { lineHeight: "1.4" }],
      },

      borderRadius: {
        tapp: "24px",
      },
    },
  },
} as const;
