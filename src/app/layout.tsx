import type { Metadata } from "next"
import { APP_CONFIG } from "@/config/app-config"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: `%s - ${APP_CONFIG.appName}`,
    default: APP_CONFIG.appName,
  },
  description: APP_CONFIG.meta.description,
  keywords: APP_CONFIG.meta.keywords.join(", "),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
