// components/layout/header.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from './navigation'
import { PhoneLink } from '../ui/phone-link'
import { AppointmentButton } from '../ui/appointment-button'

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="hidden md:flex justify-end items-center py-2 space-x-6">
          <AppointmentButton />
          <PhoneLink />
        </div>
        
        {/* Main Header */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <Link href="/" className="block">
            <Image
              src="/uploads/9pmdbcz9/colorlogo-e1549412436478.png"
              alt="Stephanie L. Skinner Family Dental Logo"
              width={200}
              height={119}
              priority
            />
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  )
}