import { Link as LinkIcon } from "lucide-react";
import NextLink from "next/link";
import { useSocials } from "@/app/hooks/useSocials";

export default function SocialList() {
  const socials = useSocials();

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <LinkIcon size={18} />
        <h2 className="text-sm">Connect</h2>
      </div>

      <div className="flex flex-col gap-4 px-2">
        {socials.map(({ name, href, icon: Icon }) => (
          <NextLink
            key={name}
            href={href}
            target={name === "Email" ? "_self" : "_blank"}
            rel={name === "Email" ? undefined : "noopener noreferrer"}
            className="flex w-fit items-center gap-3 px-3 py-1 font-semibold group"
          >
            <Icon
              size={18}
              style={{ color: "var(--primary)" }}
              className="group-hover:animate-spin"
            />
            <h3 className="border-b-2 border-transparent group-hover:border-[var(--primary)] transition-all duration-300 ">
              {name}
            </h3>
          </NextLink>
        ))}
      </div>
    </>
  );
}
