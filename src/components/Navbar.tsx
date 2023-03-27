import logoImageMobile from "../../public/logoFavelaContestMobile.webp";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { SocialMediaBoxes } from "./SocialMediaBoxes";

export const Navbar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleOpenNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className="flex h-28 items-center justify-evenly space-x-56 bg-transparent md:flex-row">
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
      <SocialMediaBoxes />

      {isNavigationOpen ? (
        <div
          className={`absolute inset-y-0 right-0 top-0 z-10 flex h-full w-8/12 flex-col bg-orange shadow-[0_35px_60px_300px_rgba(0,0,0,0.9)]`}
        >
          <div className="flex flex-col items-end">
            <X
              size={24}
              onClick={handleOpenNavigation}
              className="flex cursor-pointer flex-col items-end transition ease-in-out hover:text-white hover:opacity-70 active:opacity-100"
            />
          </div>
          <ul className="flex flex-col text-left">
            <a href="#">
              <li className="cursor-pointer border-y-0 border-y-neutral-900 p-4 pb-4 pt-0 text-xl transition ease-in-out hover:border-y-white hover:opacity-70 active:border-y-white active:text-white active:opacity-100">
                Próximo evento
              </li>
            </a>
            <a href="#">
              <li className="cursor-pointer border-t-2 border-y-neutral-900 p-4 py-4 text-xl transition ease-in-out hover:border-y-white hover:opacity-70 active:border-y-white active:text-white active:opacity-100">
                Galeria
              </li>
            </a>
            <a href="#">
              <li className="cursor-pointer border-t-2 border-y-neutral-900 p-4 py-4 text-xl transition ease-in-out hover:border-y-white hover:opacity-70 active:border-y-white active:text-white active:opacity-100">
                Sobre nós
              </li>
            </a>
          </ul>
        </div>
      ) : (
        <button className="md:hidden" onClick={handleOpenNavigation}>
          <List size={24} color="#F29100" />
        </button>
      )}
    </div>
  );
};
