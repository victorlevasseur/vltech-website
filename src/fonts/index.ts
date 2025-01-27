import { Fira_Code, Fira_Sans } from "next/font/google";

export const firaSans = Fira_Sans({
    variable: "--font-fira-sans",
    weight: "400",
    subsets: ["latin"],
  });
  
export const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});