import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Design ",
  description: "A design made by Lautaro Chini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="theChange" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1153719599746007040/1161796064521756732/theChange.png?ex=653999e6&is=652724e6&hm=a2c56f48f76c74abf179f410a77ab5bc4587831eed9aac546705e271f5330320&"
        />
        <meta property="og:description" content="Make the change" />
        <meta property="og:url" content="https://the-change.vercel.app" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
