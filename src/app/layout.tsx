import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ThemeProvider } from '@/providers/ThemeProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatFlow - Create Powerful Chatbots',
  description: 'Engage your audience, automate conversations, and boost your business with our intuitive chatbot platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
