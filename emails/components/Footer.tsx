import { Section, Text, Link } from "@react-email/components";
import * as React from "react";

interface FooterProps {
  accountManager?: {
    name: string;
    role: string;
    email: string;
    phone: string;
    reminder: boolean;
  };
}

export const Footer = ({
  accountManager = {
    name: "Pepijn Elshout",
    role: "Accountmanager",
    email: "pepijn@tapp.online",
    phone: "+31 6 123 456 78",
    reminder: true,
  },
}: FooterProps) => {
  return (
    <>
      <Section className="bg-white px-8 py-12">
        <div className="text-center">
          {accountManager.reminder ? (
            <Text className="text-[18px] leading-relaxed mb-12 mt-0 font-medium">
              Thanks again for choosing Tapp. If you have any questions or need
              more information, please feel free to reach out.
            </Text>
          ) : (
            <Text className="text-[18px] leading-relaxed mb-12 mt-0 font-medium">
              Have questions? Check out our{" "}
              <Link href="#" className="underline text-black">
                FAQ
              </Link>{" "}
              or reach out for assistance. We're happy to help!
            </Text>
          )}

          <div className="flex flex-col items-center">
            <div
              className="w-[80px] h-[80px] rounded-full bg-gray-300 mb-4"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#D1D5DB",
                marginBottom: "16px",
              }}
            />

            <Text className="text-[18px] font-semibold mb-0 mt-0 text-[#403030]">
              {accountManager.name}
            </Text>
            <Text className="text-[16px] text-gray-600 mb-0 mt-0 italic font-bold text-[#403030]">
              {accountManager.role}
            </Text>
            <Link
              href={`mailto:${accountManager.email}`}
              className="text-[16px] text-gray-800 mb-0 no-underlin text-[#403030]"
              style={{ textDecoration: "none", marginBottom: "4px" }}
            >
              {accountManager.email}
            </Link>
            <Link
              href={`tel:${accountManager.phone.replace(/\s/g, "")}`}
              className="text-[16px] text-gray-800 mt-0 no-underline"
              style={{ textDecoration: "none" }}
            >
              {accountManager.phone}
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-white px-8 py-8">
        <div className="flex justify-between items-start">
          <div className="">
            <Text className="text-[36px] font-normal tracking-wider mb-0 mt-0">
              tapp
            </Text>
          </div>

          <div className="px-8">
            <Link
              href="mailto:hi@tapp.online"
              className="text-[13px] text-[#403030] no-underline block mb-1"
              style={{
                textDecoration: "none",
                display: "block",
              }}
            >
              hi@tapp.online
            </Link>
            <Text className="text-[13px] text-[#403030] mb-0 mt-0">
              EU: (+31)85 06 005 60
            </Text>
            <Text className="text-[13px] text-[#403030] mb-0 mt-0">
              US: (+1) 332 378 5792
            </Text>
          </div>

          <div className="">
            <Text className="text-[13px] text-[#403030] mb-0 mt-0">
              Emmakade 59
            </Text>
            <Text className="text-[13px] text-[#403030] mb-0 mt-0">
              8921 AG Leeuwarden
            </Text>
            <Text className="text-[13px] text-[#403030] mb-0 mt-0">
              The Netherlands
            </Text>
          </div>
        </div>
      </Section>
    </>
  );
};
