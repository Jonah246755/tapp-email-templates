import { Section, Text, Button, Img } from "@react-email/components";
import * as React from "react";

interface LabelCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl?: string;
  backgroundColor?: string;
}

export const LabelCard = ({
  title,
  subtitle,
  buttonText,
  imageUrl,
  backgroundColor = "#3D2E2C",
}: LabelCardProps) => {
  return (
    <div
      className="mb-4 rounded-[24px] overflow-hidden flex w-full"
      style={{ backgroundColor }}
    >
      <div className="flex-1 p-8 flex flex-col justify-between gap-2">
        <div>
          <Text className="text-[#FFFFFF] text-[15px] uppercase mb- mt-0 tracking-wider">
            HOW-TO
          </Text>
          <Text className="text-[#30E791] text-[40px] leading-tight mb-0 mt-0 ">
            {title} {subtitle}
          </Text>
        </div>

        <Button
          href="#"
          className="bg-[#30E791] text-[#002D33] rounded-full font-semibold mt-[80px]"
          style={{
            backgroundColor: "#30E791",
            color: "#002D33",
            padding: "14px 28px",   
            borderRadius: "9999px",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "14px",
            fontWeight: 600,
            width: "fit-content",
          }}
        >
          {buttonText}
        </Button>
      </div>

      {/* Right side - Image */}
      <div className="w-[40%] h-full flex items-center justify-center p-4">
        {/* {imageUrl ? (
          <Img
            src={imageUrl}
            alt={`${title} ${subtitle}`}
            className="w-full h-auto"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        ) : (
          <div
            className="w-full h-[200px] rounded-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          />
        )} */}
      </div>
    </div>
  );
};
