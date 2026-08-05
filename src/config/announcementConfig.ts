import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "全栈开发工程师 & 全网营销推广专家，拥有15年互联网产品开发与运营经验，专注于Web开发、移动应用、AI人工智能和数字营销解决方案。致力于为客户提供创新的技术实现和业务增长方案。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
