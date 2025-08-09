import '@app/globals.css';
import Link from 'next/link';

export default function ServicePage() {
  return (
    <main>
      <h1>Our Services</h1>
      <ul>
        <li><Link href="/service/dental-hygiene">Dental Hygiene</Link></li>
        <li><Link href="/service/dental-fillings-and-crowns">Dental Fillings and Crowns</Link></li>
        <li><Link href="/service/cosmetic-implants">Cosmetic Implants</Link></li>
        <li><Link href="/service/full-and-partial-dentures">Full and Partial Dentures</Link></li>
        <li><Link href="/service/sedation-dentistry">Sedation Dentistry</Link></li>
        <li><Link href="/service/emergency-dentistry">Emergency Dentistry</Link></li>
        <li><Link href="/service/paperwork">Patient Paperwork</Link></li>
      </ul>
      {/* Add service descriptions and images here as needed */}
    </main>
  );
}
