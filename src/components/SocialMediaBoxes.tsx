import { InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";

export const SocialMediaBoxes = () => {
  return (
    <div className="justify-evenly gap-2 sm:hidden md:flex">
      <a href="https://instagram.com/favelacontest_" target="_blank">
        <div className="rounded-md border-[2px] border-orange p-1 transition ease-in-out hover:opacity-70 active:border-white active:opacity-100">
          <InstagramLogo size={24} color="#F29100" weight="bold" />
        </div>
      </a>
      <a href="https://youtube.com/@favelacontest" target="_blank">
        <div className="rounded-md border-[2px] border-orange p-1 transition ease-in-out hover:opacity-70 active:border-white active:opacity-100">
          <YoutubeLogo size={24} color="#F29100" weight="fill" />
        </div>
      </a>
    </div>
  );
};
