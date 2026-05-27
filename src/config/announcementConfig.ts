import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "欢迎你终于来到了我的博客！这里是我的小天地，记录着我的或者你的点点滴滴。希望你能在这里找到一些有趣的东西，或者只是简单地看看我的生活。无论如何，感谢你的到来！",

	// 是否允许用户关闭公告
	closable: false,

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
