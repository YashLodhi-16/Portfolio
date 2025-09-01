import { Card, CardContent, CardHeader } from "../ui/card";
import { CONTACT_ROUTE, EMAIL, LOGO_TRANSPARENT } from "~/lib/vars/contants";
import { Copy, PhoneCall } from "lucide-react";
import { FaGithub, FaLinkedin, FaPatreon, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { toast } from "sonner";

const Profile = () => {
  const socialMediaIcons = [
    { icon: FaGithub, key: "github", link: "https://github.com/YashLodhi-16" },
    {
      icon: FaLinkedin,
      key: "linkedin",
      link: "https://www.linkedin.com/in/yash-lodhi",
    },
    { icon: FaTwitter, key: "twitter", link: "https://x.com/yashlodhi2006" },
    {
      icon: FaPatreon,
      key: "patreon",
      link: "https://www.patreon.com/c/YashLodhi",
    },
  ];
  return (
    <div className="capitalize max-w-96">
      <Card className="bg-white dark:bg-dark-theme-bg">
        <CardHeader>
          <div className="bg-theme-background dark:bg-dark-theme-black flex justify-center items-end rounded-md">
            <img
              src={LOGO_TRANSPARENT}
              alt="profile picture"
              className="w-64 h-auto brightness-90 saturate-[90%]"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">yash lodhi &#128075;</h1>
            <p className="text-light-black dark:text-dark-theme-light-white font-medium">
              A Passionate{" "}
              <span className="text-black font-semibold dark:text-dark-theme-white">
                Full Stack Developer
              </span>{" "}
              &#128187; & Product Designer having{" "}
              <span className="text-black font-semibold dark:text-dark-theme-white">
                1.5 years
              </span>{" "}
              of Experiences.
            </p>
          </div>

          <div className="flex justify-start items-center gap-4 mb-8">
            <Link
              to={CONTACT_ROUTE}
              className="bg-theme-primary hover:bg-[#2563EB] px-4 py-3 rounded-md text-white flex justify-center items-center gap-2 cursor-pointer"
            >
              <PhoneCall />
              <span className="capitalize">book a call</span>
            </Link>
            <button
              type="button"
              className="cursor-pointer border border-solid border-border rounded-md px-4 py-3 flex justify-center items-center gap-2  hover:bg-dark-theme-white text-black dark:text-dark-theme-light-white dark:hover:bg-dark-theme-black dark:hover:text-dark-theme-white"
              onClick={() => {
                Promise.resolve(navigator.clipboard.writeText(EMAIL))
                  .then(() => {
                    toast.success("Copied to Clipboard");
                  })
                  .catch(console.log);
              }}
            >
              <Copy className="text-inherit" />
              <span className="capitalize">copy email</span>
            </button>
          </div>

          <div className="flex justify-start items-center gap-2">
            {socialMediaIcons.map((SocialMediaIcon) => {
              return (
                <Link
                  to={SocialMediaIcon.link}
                  key={SocialMediaIcon.key}
                  className="dark:bg-dark-theme-black bg-white rounded-md"
                >
                  <SocialMediaIcon.icon className="border border-solid border-border w-11 h-11 p-3 rounded-[inherit] text-[#384559] dark:text-[#64748B] hover:text-theme-primary dark:hover:text-theme-primary" />
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
