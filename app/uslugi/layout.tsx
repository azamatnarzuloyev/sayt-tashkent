import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function UslugiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="solid" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
