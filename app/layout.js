import "./globals.css";
import Navbar from "./components/navbar";
import Provider from "./components/provider";



export const metadata = {
  title: "Animation Show",
  description: "Various JS animations",
};

export default function RootLayout({ children }) {




  return (
    <html lang="en" className="!scroll-smooth " suppressHydrationWarning >
      <body className="">
        <Provider>
          <Navbar />
          {children}
  
        </Provider> 
      </body>
    </html>
  );
}
