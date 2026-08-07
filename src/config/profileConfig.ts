import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/avatar.webp",

	// 名字
	name: "运营程序猿",

	// 个人签名
	bio: "会开发、懂运营、玩技术",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{

		  name: "wechat",

		  icon: "fa7-brands:wechat",

		  url: "/",

		  showName: false

		},
		{

		  name: "GitHub",

		  icon: "fa7-brands:github",

		  url: "https://github.com/slepoh",

		  showName: false

		},
		{

		  name: "Email",

		  icon: "fa7-solid:envelope",

		  url: "mailto:slepoh@aioky.cn",

		  showName: false

		},
		{

		  name: "RSS",

		  icon: "fa7-solid:rss",

		  url: "/rss/",

		  showName: false

		},
	]: "/rss/",

		  showName: false

		},
	],
};
