import { Section, Text } from "@react-email/components";
import * as React from "react";

export const Header = () => {
  return (
    <Section className="bg-[#F5F5F0] px-8 py-8 text-center">
      <Text className="text-2xl font-normal tracking-wider mb-0 mt-0">
        tapp
      </Text>
    </Section>
  );
};
