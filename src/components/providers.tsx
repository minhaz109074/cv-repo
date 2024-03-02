'use client';

import { ThemeProvider } from "next-themes";
import { Analytics } from "./google-analytics";

export function Providers({ children }: any) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Analytics />
            {children}
        </ThemeProvider>
    );
}