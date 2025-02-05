import { motion } from "motion/react";
import { SocialMediaIcons } from "../../assets/icons";
const socialMediaLinks = [
  {
    id: 1,
    icon: SocialMediaIcons.facebookIcon,
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: SocialMediaIcons.instagramIcon,
    link: "https://www.instagram.com",
  },
  { id: 3, icon: SocialMediaIcons.xIcon, link: "https://www.x.com" },
  {
    id: 4,
    icon: SocialMediaIcons.pinterestIcon,
    link: "https://www.pinterest.com",
  },
];
interface SocialMediaProps {
  socialMediaStyles?: string;
}

const SocialMedia = ({ socialMediaStyles }: SocialMediaProps) => {
  return (
    <div className={`flex items-center gap-3 h-10 ${socialMediaStyles}`}>
      {socialMediaLinks.map((item) => (
        <motion.a href={item.link} key={item.id} whileHover={{ scale: 1.2 }}>
          <item.icon className="h-4 w-4" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMedia;
