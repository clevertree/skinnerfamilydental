// components/ui/phone-link.tsx
import { PhoneIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/config/site'

export function PhoneLink() {
    return (
        <a
            href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            data-track-event="click"
            data-track-action="phone_link"
        >
            <PhoneIcon className="w-5 h-5" />
            <span>{siteConfig.phone}</span>
        </a>
    )
}
