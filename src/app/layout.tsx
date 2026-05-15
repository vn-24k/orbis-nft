import './globals.css'

export const metadata = {
  title: 'Orbis NFT',
  description: 'Landing Page Premium',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
