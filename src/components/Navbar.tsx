import logoImageMobile from '../../public/logoFavelaContestMobile.webp'
import Image from 'next/image'
import { List } from '@phosphor-icons/react'

export const Navbar = () => {
  return (
    <div className="flex h-28 space-x-56 items-center justify-center bg-transparent">
      <Image src={logoImageMobile} alt="Logo Favela Contest" />
      <List size={24} color="#F29100" />
    </div>
  )
}