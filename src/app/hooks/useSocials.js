// hooks/useSocials.ts
import {
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export function useSocials() {
  return [
    {
      name: "GitHub",
      href: "https://github.com/greedypanda0",
      icon: FaGithub,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/dream.keir",
      icon: FaInstagram,
    },
    {
      name: "Discord",
      href: "https://discord.com/users/1204376012138356746",
      icon: FaDiscord,
    },
    {
      name: "Email",
      href: "mailto:lucky.dream.ok@gmail.com",
      icon: FaEnvelope,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/pratham-rajpoot-ab57b7283",
      icon: FaLinkedin,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@catstoybox",
      icon: FaYoutube,
    },
  ];
}
