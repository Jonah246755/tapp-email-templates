import { Section, Text } from "@react-email/components";
import * as React from "react";

interface HowToSectionProps {
  number: number;
  title: string;
}

export const HowToSection = ({ number, title }: HowToSectionProps) => {
  return (
    <div className=" flex items-center gap-2">
      <Text className="text-tapp-muted text-tapp-display mt-0 min-w-[75px]">
        {number}.
      </Text>
      <Text className="text-tapp-white text-tapp-h2 mt-0 mb-0 opacity-90">
        {title}
      </Text>
    </div>
  );
};
