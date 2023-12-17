import { Gravitas_One, Work_Sans } from "next/font/google";

export const gravitasOne = Gravitas_One({
  weight: "400",
  subsets: ["latin"],
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
