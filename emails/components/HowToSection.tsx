import { Section, Text } from "@react-email/components";
import * as React from "react";

interface HowToSectionProps {
  number: number;
  title: string;
}

export const HowToSection = ({ number, title }: HowToSectionProps) => {
  return (
    <div className=" flex items-center gap-2">
      <Text className="text-white text-base mt-0 text-[58px] text-[#766A6A] min-w-[75px]">
        {number}.
      </Text>
      <Text className="text-[#FFFFFF] text-sm mt-0 mb-0 opacity-90 text-[22px]">
        {title}
      </Text>
    </div>
  );
};
