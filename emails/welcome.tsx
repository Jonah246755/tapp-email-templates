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
import { emailTailwindConfig } from "./tailwind.config";

interface WelcomeEmailProps {
  userName?: string;
}

export const WelcomeEmail = ({ userName = "Niels" }: WelcomeEmailProps) => {
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
      <Tailwind config={emailTailwindConfig}>
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
              <h1 className=" text-center mt-0 mb-4">welcome to Tapp!</h1>
              <Text className="text-md text-center text-tapp-text text-balance">
                We’re getting your starter kit ready to be shipped. Thanks to
                your order, we're making strides towards a world with less
                e-waste. We will notify you when it has been sent.
              </Text>
            </Section>

            <Section className="bg-tapp-brown p-16 flex justify-center ">
              <Text className="text-tapp-mint text-tapp-display text-center mb-6 mt-0 text-balance px-4">
                How to get started
              </Text>

              <div className="mt-[80px] w-100 flex flex-col gap-4">
                <HowToSection
                  number={1}
                  title="Create an admin account  on our dashboard"
                />

                <button className="bg-tapp-mint rounded-tapp w-[198px] h-[48px] text-tapp-deep font-semibold ml-[74px]">
                  Create admin account
                </button>

                <HowToSection
                  number={2}
                  title="Enter your company details and add some first team members"
                />
                <HowToSection
                  number={3}
                  title="Ready, set, tapp! Activate your labels as soon as they arrive"
                />
              </div>
            </Section>

            <Section className="bg-tapp-cyan p-16">
              <div className="max-w-[600px] mx-auto">
                <div className="p-6 mb-8 inline-block flex flex-col ">
                  <Text className="text-tapp-ink text-tapp-display leading-tight text-center m-0  ">
                    labels
                  </Text>
                  <Text className="text-tapp-ink text-tapp-display leading-tight text-center m-0  ">
                    arrived?
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

export default WelcomeEmail;
