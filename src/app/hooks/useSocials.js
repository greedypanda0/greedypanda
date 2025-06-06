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
      href: "https://github.com/yourusername",
      icon: FaGithub,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yourusername",
      icon: FaInstagram,
    },
    {
      name: "Discord",
      href: "https://discord.com/users/yourid",
      icon: FaDiscord,
    },
    {
      name: "Email",
      href: "mailto:your.email@example.com",
      icon: FaEnvelope,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: FaLinkedin,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/c/yourchannel",
      icon: FaYoutube,
    },
  ];
}
