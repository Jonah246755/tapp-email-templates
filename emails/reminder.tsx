import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Font,
} from "@react-email/components";
import * as React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HowToSection } from "./components/HowToSection";
import { LabelCard } from "./components/LabelCard";

interface RemindEmailProps {
  userName?: string;
}

export const RemindEmail = ({ userName = "Niels" }: RemindEmailProps) => {
  return (
    <Html>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
          
          * {
            font-family: 'Plus Jakarta Sans', Arial, sans-serif !important;
          }
          
          body {
            font-family: 'Plus Jakarta Sans', Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          
          .tapp-heading {
            font-family: 'Plus Jakarta Sans', Arial, sans-serif;
            letter-spacing: 0.05em;
          }
          
          .tapp-text {
            font-family: 'Plus Jakarta Sans', Arial, sans-serif;
          }
          
          .tapp-button {
            font-family: 'Plus Jakarta Sans', Arial, sans-serif;
            background-color: #9FE8E8;
            color: #3D2E2C;
            padding: 12px 24px;
            border-radius: 9999px;
            text-decoration: none;
            display: inline-block;
            font-weight: 500;
          }
          
          .tapp-bg {
            background-color: #F5F5F0;
          }
          
          .tapp-cyan-bg {
            background-color: #9FE8E8;
          }
          
          .tapp-dark-bg {
            background-color: #3D2E2C;
          }
            h1 {
              font-family: 'Plus Jakarta Sans', Arial, sans-serif;
              font-weight: 500;
              font-size: 30px; 
              color: #403030'
            }
              p{
              font-family: 'Plus Jakarta Sans', Arial, sans-serif;
              font-size: 18px;
              font-weight: 500;
              color #403030;
              }
        `}
      </style>
      <Head>
        <Font
          fontFamily="Plus Jakarta Sans"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
            format: "woff2",
          }}
        />
      </Head>
      <Preview>Welcome to Tapp! Let's get you started.</Preview>
      <Tailwind>
        <Body
          className="bg-white"
          style={{ fontFamily: "'Plus Jakarta Sans', fontWeight: 500" }}
        >
          <Container className="max-w-[600px] mx-auto">
            <Header />

            <Section className="bg-white px-8 py-8">
              <h1 className="text-center mb-2 mt-0 ">
                Hi <span className="font-bold">{userName}</span>,
              </h1>
              <h1 className=" text-center mt-0 mb-4">
                your plan for [company] is now active!
              </h1>
              <Text className="text-md text-center text-gray-600 text-balance">
                We appreciate your trust in us! Together, we're making strides
                towards a world with less e-waste. You will now receive labels
                on a [frequency] basis. To view and edit all of your plans, go
                to your dashboard.
              </Text>
            </Section>

            <Section className="bg-[#9FE8E8] p-16">
              <div className="max-w-[600px] mx-auto">
                <div className="p-6 mb-8 inline-block flex flex-col ">
                  <Text className="text-[#3E3131] text-[58px] leading-tight text-center m-0  ">
                    A quick
                  </Text>
                  <Text className="text-[#3E3131] text-[58px] leading-tight text-center m-0  ">
                    reminder
                  </Text>
                </div>

                <div className="flex flex-col gap-4 mt-8 w-full">
                  <LabelCard
                    title="activate"
                    subtitle="labels"
                    buttonText="Read instructions"
                  />

                  <LabelCard
                    title="read"
                    subtitle="labels"
                    buttonText="Read instructions"
                  />
                </div>
              </div>
            </Section>

            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default RemindEmail;
