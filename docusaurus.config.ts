import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "NatureTunnel 文档中心",
  favicon: "https://i.uz0.xyz/nrtun/logo.png",

  future: {
    v4: true,
  },

  url: "https://docs.nrtun.com",
  baseUrl: "/",

  organizationName: "YunvonNetwork",
  projectName: "NrtunDocs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/YunvonNetwork/NrtunDocs/tree/main/",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "NatureTunnel 文档中心",
      logo: {
        alt: "Nrtun-LogoData",
        src: "https://i.uz0.xyz/nrtun/logo.png",
      },
      items: [
        {
          href: "https://console.nrtun.com",
          label: "控制台",
          position: "right",
        },
        {
          href: "https://github.com/YunvonNetwork/NrtunDocs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "在企业微信联系我们",
          items: [
            {
              html: '<img src="https://docs-assets.bucket.uciu.cn/wechat-work-group.jpg" alt="企业微信" style="width: 120px; border-radius: 4px;" />',
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "邮箱",
              href: "mailto:nrtun-feedback@yunvon.com",
            },
            {
              label: "QQ用户交流群",
              href: "https://qm.qq.com/q/yvjuIQj1LM",
            },
            {
              label: "Discord",
              href: "https://discord.gg/uhGrgJpx",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "控制台",
              href: "https://console.nrtun.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/YunvonNetwork/NrtunDocs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yunvon Interconnections, Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
