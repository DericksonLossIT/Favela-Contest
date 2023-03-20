import logoImageMobile from "../../public/logoFavelaContestMobile.webp";
import Image from "next/image";
import { List } from "@phosphor-icons/react";

export const Navbar = () => {
  return (
    <div className="md flex h-28 items-center justify-evenly space-x-56 bg-transparent md:flex-row">
      <Image src={logoImageMobile} alt="Logo Favela Contest" />
      <div className="text-orange sm:hidden md:flex">
        <ul className="flex items-center justify-evenly gap-6 space-x-2">
          <a href="#">
            <li className="cursor-pointer transition ease-in-out hover:opacity-70 active:text-white active:opacity-100">
              Próximo evento
            </li>
          </a>
          <li className="cursor-pointer transition ease-in-out hover:opacity-70 active:text-white active:opacity-100">
            Galeria
          </li>
          <li className="cursor-pointer transition ease-in-out hover:opacity-70 active:text-white active:opacity-100">
            Sobre nós
          </li>
        </ul>
      </div>
      <Image
        className="sm:hidden md:flex"
        src={logoImageMobile}
        alt="Logo Favela Contest"
      />
      <List className="md:hidden" size={24} color="#F29100" />
    </div>
  );
};
