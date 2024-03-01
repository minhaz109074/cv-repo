'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './button';

const SunIcon = () => (
    <>
        <motion.svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 2, opacity: 0, rotate: 90 }}
            animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                transition: { duration: 0.2, type: "spring", stiffness: 100 },
            }}
            exit={{
                scale: 0.5,
                opacity: 0,
                rotate: 90,
                transition: { duration: 0.2 },
            }}
        >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </motion.svg>
    </>
);

const MoonIcon = () => (
    <>
        <motion.svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 2, opacity: 0, rotate: 90 }}
            animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                transition: { duration: 0.2, type: "spring", stiffness: 100 },
            }}
            exit={{
                scale: 0.5,
                opacity: 0,
                rotate: 90,
                transition: { duration: 0.2 },
            }}
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </motion.svg>
    </>
);

const DarkMode = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return null
    }

    return (
        <Button
            aria-label="toggle theme"
            className="size-9 m-1 animate-pulse"
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}>
            <span className="sr-only">Toggle mode</span>
            <AnimatePresence initial={false}>
                {theme !== "dark" ? <SunIcon /> : <MoonIcon />}
            </AnimatePresence>
        </Button>
    )
}

export default DarkMode
