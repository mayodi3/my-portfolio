"use client";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialIcons = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/mayodi3", label: "GitHub" },
    {
      icon: SiUpwork,
      href: "https://www.upwork.com/freelancers/~014b26ba9f3ce5a997?mp_source=share",
      label: "Upwork",
    },
    {
      icon: FaLinkedinIn,
      href: "https://ke.linkedin.com/in/isaac-mayodi-16a412304",
      label: "LinkedIn",
    },
    {
      icon: FaFacebookF,
      href: "https://web.facebook.com/?_rdc=1&_rdr#",
      label: "Facebook",
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{social.label}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default SocialIcons;
