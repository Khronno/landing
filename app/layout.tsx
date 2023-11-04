import Nav from './components/Nav'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Landing</title>
      </head>
      <Nav />
      <body >{children}</body>
    </html>
  )
}
