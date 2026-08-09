import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [];

	// 主页
	links.push(LinkPresets.Home);

	links.push({
		name: "文章",
		url: "#",
		icon: "material-symbols:article",
		// 子菜单
		children: [
			LinkPresets.Archive,
			LinkPresets.Categories,
			LinkPresets.Tags,
			{
				name: "视频",
				url: "/video/",
				icon: "material-symbols:videocam",
				external: false
			}
		],
	});

	links.push({
		name: "社交",
		url: "#",
		icon: "material-symbols:group",
		// 子菜单
		children: [
			LinkPresets.Friends,
			LinkPresets.Guestbook
		],
	});

	links.push({
		name: "我的",
		url: "#",
		icon: "material-symbols:person",
		// 子菜单
		children: [
			LinkPresets.Dynamic,
			LinkPresets.Gallery,
			LinkPresets.Anime,
			LinkPresets.Bangumi,
			LinkPresets.Booknav
		],
	});

	links.push({
		name: "关于",
		url: "#",
		icon: "material-symbols:info",
		// 子菜单
		children: [
			LinkPresets.Sponsor,
			LinkPresets.About
		],
	});

	links.push({
		name: "链接",
		url: "#",
		icon: "material-symbols:link",
		// 子菜单
		children: [
			{
				name: "GitHub",
				url: "https://github.com/slepoh",
				icon: "fa7-brands:github",
				external: true
			},
			{
				name: "导航网址",
				url: "https://nav.yormb.cn",
				icon: "material-symbols:link",
				external: true
			}
		],
	});

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "主页",
		url: "/",
		icon: "material-symbols:home",
	},
	Dynamic: {
		name: "动态",
		url: "/dynamic/",
		icon: "material-symbols:forum-rounded",
		pageKey: "dynamic",
	},
	Archive: {
		name: "归档",
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	Categories: {
		name: "分类",
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
	Tags: {
		name: "标签",
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	Friends: {
		name: "友链",
		url: "/friends/",
		icon: "material-symbols:link-2-rounded",
		pageKey: "friends",
	},
	Sponsor: {
		name: "打赏",
		url: "/sponsor/",
		icon: "material-symbols:favorite",
		pageKey: "sponsor",
	},
	Guestbook: {
		name: "留言",
		url: "/guestbook/",
		icon: "material-symbols:chat",
		pageKey: "guestbook",
	},
	About: {
		name: "关于",
		url: "/about/",
		icon: "material-symbols:person",
	},
	Bangumi: {
		name: "番组计划",
		url: "/bangumi/",
		icon: "material-symbols:movie",
		pageKey: "bangumi",
	},
	Gallery: {
		name: "相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
		pageKey: "gallery",
	},
	Anime: {
		name: "追番",
		url: "/anime/",
		icon: "material-symbols:live-tv",
		pageKey: "anime",
	},
	Booknav: {
		name: "导航",
		url: "/booknav/",
		icon: "material-symbols:bookmarks",
		pageKey: "booknav",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
