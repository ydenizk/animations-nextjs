"use client";
import { ThemeProvider } from "next-themes";

export function Provider({children}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Provider;
