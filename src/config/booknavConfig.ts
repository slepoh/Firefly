import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	// ========== 常用推荐 ==========
	{
		id: "common",
		name: "常用推荐",
		icon: "material-symbols:star-rounded",
		desc: "大神聚集的论坛与综合资源站",
		weight: 110,
		items: [
			{
				title: "52破解",
				url: "http://www.52pojie.cn",
				desc: "大神聚集论坛，致力于软件安全与病毒分析的前沿",
				weight: 20,
			},
			{
				title: "恩山无线",
				url: "https://www.right.com.cn/forum",
				desc: "无线与路由器爱好者的专属社区，专注于技术交流与兴趣聚合",
				weight: 19,
			},
			{
				title: "亿破姐",
				url: "https://www.ypojie.com",
				desc: "综合性网站，提供软件下载资源、电脑技术教程以及IT科技资讯",
				weight: 18,
			},
			{
				title: "MT论坛",
				url: "https://bbs.binmt.cc",
				desc: "软件交流论坛，分享海量软件、游戏、编程、开发等交流内容",
				weight: 17,
			},
			{
				title: "精品软件",
				url: "https://leyugg.com",
				desc: "各类精品软件综合下载站，覆盖全平台",
				weight: 16,
			},
			{
				title: "Linux.do",
				url: "https://linux.do/",
				desc: "Linux技术社区，Peace and Love",
				weight: 15,
			},
			{
				title: "IDC元老",
				url: "https://idcflare.com/",
				desc: "域名、主机等信息集散地",
				weight: 14,
			},
			{
				title: "奶昔论坛",
				url: "https://forum.naixi.net/",
				desc: "奶昔论坛",
				weight: 13,
			},
		],
	},

	// ========== 开发 ==========
	{
		id: "dev",
		name: "开发",
		icon: "material-symbols:code-rounded",
		desc: "写代码时离不开的站点",
		weight: 105,
		items: [
			{
				title: "GitHub",
				url: "https://github.com",
				desc: "全球最大的代码托管平台",
				icon: "fa7-brands:github",
				weight: 30,
			},
			{
				title: "MDN Web Docs",
				url: "https://developer.mozilla.org",
				desc: "最权威的 Web 技术文档",
				weight: 29,
			},
			{
				title: "Astro",
				url: "https://astro.build",
				desc: "内容驱动型网站的 Web 框架",
				weight: 28,
			},
			{
				title: "Svelte",
				url: "https://svelte.dev",
				desc: "把组件编译成高效原生 JS 的框架",
				weight: 27,
			},
			{
				title: "Tailwind CSS",
				url: "https://tailwindcss.com",
				desc: "一个功能强大且灵活的 CSS 框架",
				weight: 26,
			},
		],
	},

	// ========== 行业站点 ==========
	{
		id: "industry",
		name: "行业站点",
		icon: "material-symbols:cloud-circle-rounded",
		desc: "云服务、托管与基础设施平台",
		weight: 95,
		items: [
			{
				title: "CloudFlare",
				url: "https://dash.cloudflare.com",
				desc: "一张从底层开始构建的智能全球云网络，实现安全、速度与可靠性",
				weight: 40,
			},
			{
				title: "Vercel",
				url: "https://vercel.com",
				desc: "提供网站托管、无服务器函数部署及全球加速服务",
				weight: 39,
			},
			{
				title: "Zeabur",
				url: "https://zeabur.com/zh-CN/",
				desc: "面向开发者的 Serverless 应用部署平台，支持一键部署 Web 项目",
				weight: 38,
			},
			{
				title: "Wasmer",
				url: "https://wasmer.io/",
				desc: "云应用托管平台，支持 GitHub 一键部署、文件上传部署及多种官方模板",
				weight: 37,
			},
			{
				title: "Netlify",
				url: "https://www.netlify.com",
				desc: "静态网站托管平台，一个平台即可完成从开发到部署的全部流程",
				weight: 36,
			},
			{
				title: "EdgeOne Pages",
				url: "https://edgeone.ai/zh",
				desc: "从前端页面到动态 API 的整个流程提供无服务器部署方案",
				weight: 35,
			},
			{
				title: "Hugging Face Space",
				url: "https://huggingface.co/spaces",
				desc: "免费的 Docker 容器托管服务，2核CPU、16GB内存、50GB存储",
				weight: 34,
			},
			{
				title: "Render",
				url: "https://render.com/",
				desc: "免费的 Web Service 托管，支持 Docker 部署，适合个人项目",
				weight: 33,
			},
			{
				title: "Deno",
				url: "https://console.deno.com",
				desc: "专为现代网络环境设计的开源 JavaScript 运行时环境",
				weight: 32,
			},
			{
				title: "Upstash",
				url: "https://upstash.com",
				desc: "无服务器数据库和消息平台，提供 Redis、向量数据库等产品",
				weight: 31,
			},
			{
				title: "Railway",
				url: "https://railway.com/",
				desc: "一键部署、一站式开发云平台",
				weight: 30,
			},
			{
				title: "站点统计",
				url: "https://tongji.yormb.cn/",
				desc: "免费、易用、专业的网站数据统计与营销分析平台",
				weight: 25,
			},
		],
	},

	// ========== AI工具 ==========
	{
		id: "ai",
		name: "AI工具",
		icon: "material-symbols:smart-toy-rounded",
		desc: "各大 AI 大模型与智能工具",
		weight: 92,
		items: [
			{
				title: "DeepSeek",
				url: "https://chat.deepseek.com",
				desc: "专注于研究世界领先的通用人工智能底层模型与技术",
				weight: 45,
			},
			{
				title: "豆包",
				url: "https://www.doubao.com",
				desc: "AI 聊天智能对话问答助手，写作文案翻译编程全能工具",
				weight: 44,
			},
			{
				title: "元宝",
				url: "https://yuanbao.tencent.com",
				desc: "腾讯推出的全能 AI 助手，接入混元和 DeepSeek 模型",
				weight: 43,
			},
			{
				title: "Kimi",
				url: "https://kimi.moonshot.cn",
				desc: "从像素级网页复刻到专家级办公交付，助你高效搞定复杂任务",
				weight: 42,
			},
			{
				title: "扣子",
				url: "https://www.coze.cn/home",
				desc: "精通各项技能的通用实习生，各行各业的领域专家",
				weight: 41,
			},
			{
				title: "纳米",
				url: "https://n.cn",
				desc: "360旗下AI智能助手，支持文字、语音、拍照、视频等多种搜索方式",
				weight: 40,
			},
			{
				title: "即梦",
				url: "https://jimeng.jianying.com/ai-tool/home",
				desc: "抖音旗下产品，支持文生图和文生视频",
				weight: 39,
			},
			{
				title: "可灵",
				url: "https://kling.kuaishou.com",
				desc: "快手旗下产品，支持文生图、文生视频",
				weight: 38,
			},
			{
				title: "ChatGPT",
				url: "https://chat.openai.com",
				desc: "OpenAI 开发的智能对话助手，支持文本、图像、语音多模态交互",
				weight: 48,
			},
			{
				title: "Claude",
				url: "https://claude.ai",
				desc: "Anthropic 公司开发的AI人工智能助手",
				weight: 47,
			},
			{
				title: "Gemini",
				url: "https://gemini.google.com",
				desc: "Google 开发的多模态 AI 模型，可用于对话、创作、编程等任务",
				weight: 46,
			},
			{
				title: "Grok",
				url: "https://grok.com",
				desc: "马斯克旗下 xAI 公司开发的AI聊天机器人，以幽默风格和实时数据访问为核心",
				weight: 49,
			},
			{
				title: "Sora",
				url: "https://sora.chatgpt.com",
				desc: "OpenAI 推出的文生视频 AI 模型，可根据文本指令生成逼真视频",
				weight: 24,
			},
			{
				title: "GitHub Copilot",
				url: "https://github.com/features/copilot",
				desc: "微软与 OpenAI 联合推出的 AI 编程助手，可自动生成代码",
				weight: 23,
			},
			{
				title: "Poe",
				url: "https://poe.com",
				desc: "汇聚 GPT-4.5、Claude 3.7、DeepSeek-R1 等众多AI模型的平台",
				weight: 22,
			},
			{
				title: "Perplexity",
				url: "https://www.perplexity.ai",
				desc: "人工智能搜索引擎，直接给出带来源出处的准确答案",
				weight: 21,
			},
			{
				title: "Google AI Studio",
				url: "https://aistudio.google.com/prompts/new_chat",
				desc: "Google官方推出的AI原生开发平台，体验Gemini模型",
				weight: 12,
			},
			{
				title: "Nano Banana",
				url: "https://aistudio.google.com/gen-media",
				desc: "Gemini 2.5 Flash Image，AI图像生成",
				weight: 11,
			},
			{
				title: "Veo-3",
				url: "https://aistudio.google.com/models/veo-3",
				desc: "谷歌旗舰AI视频生成模型，支持音画同步生成",
				weight: 10,
			},
			{
				title: "硅基流动",
				url: "https://cloud.siliconflow.cn/i/DOpib2dx",
				desc: "国内顶级AI大模型中转平台，高效能、低成本的模型服务",
				weight: 9,
			},
			{
				title: "OpenRouter",
				url: "https://openrouter.ai",
				desc: "AI 模型聚合平台，统一接口调用200多种大模型",
				weight: 8,
			},
			{
				title: "免费AI视频",
				url: "https://aivideomaker.ai/zh",
				desc: "不限量生成 AI 视频的在线工具",
				weight: 7,
			},
		],
	},

	// ========== 自媒体工具 ==========
	{
		id: "media",
		name: "自媒体工具",
		icon: "material-symbols:campaign-rounded",
		desc: "内容创作、发布与运营的必备工具",
		weight: 88,
		items: [
			{
				title: "微信公众号",
				url: "https://mp.weixin.qq.com",
				desc: "为个人、企业和组织提供的信息传播与业务服务平台",
				weight: 65,
			},
			{
				title: "视频号助手",
				url: "https://channels.weixin.qq.com",
				desc: "视频创作者的得力助手，视频号轻松做",
				weight: 64,
			},
			{
				title: "微信小店",
				url: "https://shop.weixin.qq.com",
				desc: "基于微信公众平台的原生电商模式，支持开店、商品上架等",
				weight: 63,
			},
			{
				title: "快手创作",
				url: "https://cp.kuaishou.com",
				desc: "为创作者提供运营管理、高清视频上传、数据分析等服务",
				weight: 62,
			},
			{
				title: "快手小店",
				url: "https://www.kwaixiaodian.com",
				desc: "快手官方电商服务工具，支持个人、企业多种主体入驻",
				weight: 61,
			},
			{
				title: "快手生活服务",
				url: "https://lbs.kwailocallife.com/ll/merchant/login",
				desc: "全链路一体化商家经营平台，助力商家打造数字化营销场景",
				weight: 56,
			},
			{
				title: "快手直播",
				url: "https://liveopen.kuaishou.com",
				desc: "支持手机视频直播、语音直播及电脑直播伴侣等多种方式",
				weight: 54,
			},
			{
				title: "抖音创作",
				url: "https://creator.douyin.com/creator-micro/home",
				desc: "支持创作者和管理机构登录，提供授权管理、内容管理、数据服务",
				weight: 53,
			},
			{
				title: "抖音直播",
				url: "https://union.bytedance.com/open/portal/enter",
				desc: "直播公会、MCN机构、代运营服务商的管理后台",
				weight: 51,
			},
			{
				title: "小红书创作",
				url: "https://creator.xiaohongshu.com",
				desc: "为小红书创作者提供视频上传、数据分析、粉丝管理等服务",
				weight: 59,
			},
			{
				title: "百家号",
				url: "https://baijiahao.baidu.com",
				desc: "百度为创作者打造的集创作、发布、变现于一体的内容创作平台",
				weight: 58,
			},
			{
				title: "头条号",
				url: "https://mp.toutiao.com",
				desc: "今日头条推出的开放内容创作与分发平台",
				weight: 57,
			},
			{
				title: "搜狐号",
				url: "http://mp.sohu.com",
				desc: "搜狐推出的内容入驻、发布与分发平台",
				weight: 72,
			},
			{
				title: "企鹅号",
				url: "https://om.qq.com/article/articleManage?stype=0",
				desc: "腾讯内容创作运营平台，整合微信、QQ、腾讯新闻等十大分发渠道",
				weight: 71,
			},
			{
				title: "大鱼号",
				url: "http://mp.uc.cn/index.html",
				desc: "阿里巴巴推出的内容创作平台，阿里文娱体系一点接入多点分发",
				weight: 69,
			},
			{
				title: "OBS",
				url: "https://www.obsapp.com",
				desc: "支持跨平台直播推流，用于视频录制和实时流媒体直播",
				weight: 68,
			},
			{
				title: "网页转Markdown",
				url: "https://web2md.aioky.cn/",
				desc: "智能提取微信公众号、博客及通用网页正文，去除噪点",
				weight: 67,
			},
			{
				title: "公众号文章下载",
				url: "https://wxmp.yormb.cn",
				desc: "订阅公众号文章，一键保存下载文章内容到本地",
				weight: 66,
			},
			{
				title: "MD2Card",
				url: "https://md2card.com/zh/editor",
				desc: "Markdown 转知识卡片工具，制作优雅的图文海报",
				weight: 77,
			},
			{
				title: "AI去水印",
				url: "https://magiceraser.org/remove-watermark-from-video/",
				desc: "免费在线 AI 视频水印去除工具，4K高清质量",
				weight: 76,
			},
			{
				title: "视频解析去水印",
				url: "https://greenvideo.cc",
				desc: "支持全球众多社交网络及视频平台的视频去水印下载",
				weight: 75,
			},
			{
				title: "视频解析下载",
				url: "https://www.datatool.vip",
				desc: "从各种网站下载音频、视频和其他文件",
				weight: 74,
			},
			{
				title: "视频在线剪辑",
				url: "https://cutia.msgbyte.com/zh/projects",
				desc: "AI原生的开源视频编辑器，CapCut的免费替代品",
				weight: 73,
			},
			{
				title: "文件转换器",
				url: "https://www.aconvert.com/cn/",
				desc: "在线转换PDF、文档、电子书、图像、视频、音频等",
				weight: 82,
			},
			{
				title: "图片压缩",
				url: "https://imagecompressor.com/zh/",
				desc: "无需注册，无每日限制，无水印，完全免费",
				weight: 81,
			},
			{
				title: "PDF工具箱",
				url: "https://pdf.yormb.cn/zh/",
				desc: "99+个专业工具，编辑、转换、合并、分割和保护PDF文件",
				weight: 83,
			},
			{
				title: "图片工具箱",
				url: "https://pic.yormb.cn/zh-CN/",
				desc: "在线编辑、抠图、拼图、美化、格式转换",
				weight: 84,
			},
			{
				title: "在线PS",
				url: "https://ps.gaoding.com",
				desc: "专业精简的在线PS图片处理软件，免下载免安装",
				weight: 87,
			},
			{
				title: "快图设计",
				url: "https://www.kuaitu.cc",
				desc: "批量图片处理软件，提供大量免费设计素材和模板",
				weight: 86,
			},
			{
				title: "WEB视频剪辑",
				url: "https://app.openreel.video",
				desc: "无需下载软件在浏览器中创作视频",
				weight: 78,
			},
			{
				title: "Mdnice",
				url: "https://editor.mdnice.com",
				desc: "Markdown 微信编辑器，支持知乎、掘金、微信订阅号等多平台",
				weight: 79,
			},
			{
				title: "iLoveIMG",
				url: "https://www.iloveimg.com/zh-cn",
				desc: "在线处理图片文件，压缩、调整尺寸、裁剪、格式转换",
				weight: 89,
			},
		],
	},

	// ========== 外贸经商 ==========
	{
		id: "trade",
		name: "外贸经商",
		icon: "material-symbols:travel-explore-rounded",
		desc: "出海营销与跨境电商必备工具",
		weight: 98,
		items: [
			{
				title: "Google",
				url: "https://www.google.com",
				desc: "全球最大的搜索引擎，出海首选平台",
				weight: 120,
			},
			{
				title: "TikTok",
				url: "https://www.tiktok.com",
				desc: "抖音海外版，年轻人的音乐短视频社区",
				weight: 119,
			},
			{
				title: "Youtube",
				url: "https://www.youtube.com",
				desc: "全球最大的视频搜索和分享平台",
				weight: 118,
			},
			{
				title: "Facebook",
				url: "https://www.facebook.com",
				desc: "全球最大的社交平台，提供文字、图片、视频分享等功能",
				weight: 117,
			},
			{
				title: "X（Twitter）",
				url: "https://x.com",
				desc: "美国微博客和社交网络服务平台",
				weight: 116,
			},
			{
				title: "WhatsApp",
				url: "https://web.whatsapp.com",
				desc: "Facebook旗下的全球性移动聊天工具",
				weight: 115,
			},
			{
				title: "Instagram",
				url: "https://www.instagram.com",
				desc: "Facebook旗下的图片及视频分享社区",
				weight: 114,
			},
			{
				title: "Pinterest",
				url: "https://www.pinterest.com",
				desc: "瀑布流图片社区，世界上最大的图片社交分享网站",
				weight: 113,
			},
			{
				title: "Line",
				url: "https://line.me/zh-hans",
				desc: "韩国即时通讯软件，日本和台湾地区最常用的社交聊天App",
				weight: 112,
			},
			{
				title: "Telegram",
				url: "https://web.telegram.org",
				desc: "跨平台即时通讯软件，支持加密与自毁消息",
				weight: 111,
			},
			{
				title: "Snapchat",
				url: "https://www.snapchat.com/",
				desc: "深受欧美年轻人喜爱的拍照社交App",
				weight: 108,
			},
			{
				title: "Discord",
				url: "https://discord.com/login",
				desc: "游戏社交平台，提供个性化定制空间与流媒体服务",
				weight: 107,
			},
			{
				title: "LinkedIn",
				url: "https://www.linkedin.com",
				desc: "面向职场的社交平台，维护商业人脉",
				weight: 106,
			},
			{
				title: "Reddit",
				url: "https://reddit.com/",
				desc: "娱乐社交及新闻网站，类似天涯+贴吧，做GEO必选",
				weight: 109,
			},
			{
				title: "VK",
				url: "https://www.vk.com",
				desc: "俄罗斯社交平台，提供动态消息、音乐、视频、直播等功能",
				weight: 104,
			},
			{
				title: "KakaoTalk",
				url: "https://www.kakaocorp.com",
				desc: "韩国即时通讯软件，集成文字、音视频及多人聊天功能",
				weight: 103,
			},
			{
				title: "Quora",
				url: "https://www.quora.com/",
				desc: "美版知乎，全球最大的知识问答社区",
				weight: 102,
			},
			{
				title: "Tumblr",
				url: "https://www.tumblr.com",
				desc: "注重表达与社交的媒体形态，内容涵盖艺术、摄影、音乐等",
				weight: 101,
			},
			{
				title: "Myspace",
				url: "https://myspace.com",
				desc: "美国社交网络服务网站，提供个人档案、部落格、音乐分享等功能",
				weight: 97,
			},
			{
				title: "妙手ERP",
				url: "https://erp.91miaoshou.com/",
				desc: "免费TikTok、Shopee、TEMU、Ozon、美客多等跨境ERP软件",
				weight: 96,
			},
			{
				title: "多客-AI智能客服系统",
				url: "https://www.duoke.com/",
				desc: "店小秘旗下一款与TikTok官方合作的AI智能客服系统",
				weight: 93,
			},
			{
				title: "Tawk",
				url: "https://www.tawk.to",
				desc: "免费的在线客服即时对话系统，做外贸独立站首选",
				weight: 94,
			},
			{
				title: "Tidio",
				url: "https://www.tidio.com",
				desc: "免费的在线客服即时对话系统，做外贸独立站首选",
				weight: 131,
			},
			{
				title: "Google广告",
				url: "https://ads.google.com/",
				desc: "独立站展示在谷歌搜索、Youtube、发现、Gmail等平台",
				weight: 130,
			},
			{
				title: "Google网址提交",
				url: "https://search.google.com/search-console",
				desc: "提交独立站到Google，谷歌站长工具",
				weight: 129,
			},
			{
				title: "Bing站长",
				url: "https://www.bing.com/webmasters/about?setlang=zh-cn",
				desc: "获取网站性能数据，提高在必应搜索结果的排名",
				weight: 128,
			},
			{
				title: "Capcut",
				url: "https://www.capcut.cn",
				desc: "抖音国际版剪映，剪辑视频遥遥领先",
				weight: 127,
			},
			{
				title: "在线翻译",
				url: "https://www.deepl.com/zh/translator",
				desc: "支持二百多个国家语言翻译，最准确的翻译",
				weight: 126,
			},
			{
				title: "Tiktok下载",
				url: "https://musicaldown.com/en",
				desc: "一键下载短视频，免费去水印",
				weight: 125,
			},
			{
				title: "ComeCut",
				url: "https://juntaosun.github.io/ComeCut/web/",
				desc: "轻量级 AI 视频编辑工具，免费全平台，集成AI本地处理",
				weight: 124,
			},
		],
	},

	// ========== 出海工具 ==========
	{
		id: "overseas",
		name: "出海工具",
		icon: "material-symbols:public-rounded",
		desc: "跨境运营与网络工具集",
		weight: 150,
		items: [
			{
				title: "TmhHost",
				url: "https://www.tmhhost.com/aff/IYUHDSPZ",
				desc: "双ISP家宽住宅，运营Tiktok必备",
				weight: 140,
			},
			{
				title: "高精度IP地址查询",
				url: "https://ping0.cc/",
				desc: "IP风控值查询、原生IP查询、IP类型查询、家庭宽带IP查询",
				weight: 139,
			},
			{
				title: "PingIP",
				url: "https://pingip.cn/",
				desc: "IP质量、风控、纯净度、伪装度检测，跨境TK直播、FB运营适用性评分",
				weight: 138,
			},
			{
				title: "IP 地址数据",
				url: "https://ipinfo.io/",
				desc: "为开发者和企业提供快速、准确的经核实IP数据",
				weight: 137,
			},
			{
				title: "接码",
				url: "https://2fa.cn/zh",
				desc: "2FA双因素身份验证",
				weight: 136,
			},
			{
				title: "Outlook",
				url: "https://www.outlook.com",
				desc: "办公软件套装的组件，提供电子邮件、日程管理等功能",
				weight: 135,
			},
			{
				title: "Gmail",
				url: "https://mail.google.com/mail/u/0/",
				desc: "谷歌旗下免费邮箱，全球使用人数最多的邮箱",
				weight: 134,
			},
			{
				title: "节点订阅",
				url: "https://msub.aioky.cn",
				desc: "订阅接口，集全球众多优速IP地址",
				weight: 133,
			},
			{
				title: "特定国家优选IP",
				url: "https://yxip.aioky.cn",
				desc: "指定某个国家优选IP，大佬维护",
				weight: 132,
			},
			{
				title: "CF优选",
				url: "https://cf-dns.yormb.cn",
				desc: "CloudFlare全球优选IP节点，每天自动更新",
				weight: 141,
			},
			{
				title: "Check ProxyIP",
				url: "https://check.proxyip.yormb.cn",
				desc: "ProxyIP检测工具，支持单个或批量目标解析、可用性验证",
				weight: 142,
			},
			{
				title: "Check Socks5",
				url: "https://check.socks.yormb.cn",
				desc: "代理链接检测，支持SOCKS5/HTTP/HTTPS/TURN/SSTP",
				weight: 143,
			},
			{
				title: "在线订阅转换",
				url: "https://cfsub.yormb.cn",
				desc: "现代化的代理订阅转换工具",
				weight: 144,
			},
			{
				title: "优选订阅生成器",
				url: "http://sub.slepoh.qzz.io/",
				desc: "VMess / VLESS / Trojan 链接优选",
				weight: 145,
			},
			{
				title: "在线翻译",
				url: "https://fanyi.yormb.cn",
				desc: "多语言在线翻译，Deepl翻译服务",
				weight: 146,
			},
			{
				title: "Snippets订阅生成器",
				url: "https://cfbp.yormb.cn",
				desc: "机场订阅在线生成",
				weight: 147,
			},
			{
				title: "Cloudflare 优选 IP",
				url: "https://jd.chatkg.qzz.io/ip",
				desc: "CloudFlare在线优选IP节点",
				weight: 148,
			},
			{
				title: "ProxyIP 实时更新",
				url: "https://proxyip.chatkg.qzz.io",
				desc: "优选ip，实时监测更新",
				weight: 149,
			},
			{
				title: "DoH服务",
				url: "https://cf-doh.yormb.cn",
				desc: "DoH反代服务平台，提供多个服务商",
				weight: 155,
			},
			{
				title: "真实地址生成器",
				url: "https://ip-geoaddress-generator.pages.dev",
				desc: "根据IP地址生成真实的地址信息，做外贸必备",
				weight: 154,
			},
			{
				title: "信用卡号码生成器",
				url: "https://zknav.com",
				desc: "开发测试数据生成器，虚拟卡号",
				weight: 153,
			},
			{
				title: "数字套利",
				url: "https://cfsz.yormb.cn",
				desc: "出海工具",
				weight: 152,
			},
			{
				title: "虚拟信息生成器",
				url: "https://zh-cn.myfakeinfo.com/",
				desc: "虚拟身份信息在线生成",
				weight: 151,
			},
		],
	},

	// ========== 影视娱乐 ==========
	{
		id: "entertainment",
		name: "影视娱乐",
		icon: "material-symbols:play-circle-rounded",
		desc: "免费观影、音乐在线资源",
		weight: 170,
		items: [
			{
				title: "聚好看",
				url: "https://video.xingyang.ren",
				desc: "免费无广告观看全网影视",
				weight: 160,
			},
			{
				title: "聚好看",
				url: "https://v.yormb.cn",
				desc: "无需VIP免费观看全网影视",
				weight: 159,
			},
			{
				title: "在线影院",
				url: "https://tv.yormb.cn",
				desc: "无需VIP，免费无广告观看最新电影电视剧",
				weight: 158,
			},
			{
				title: "聚好看",
				url: "https://video.yormb.cn",
				desc: "全网影视大全，无需VIP免费观看",
				weight: 157,
			},
			{
				title: "全网音乐",
				url: "https://music.tcwg.net",
				desc: "全网音乐在线听，免费下载，支持无损格式",
				weight: 156,
			},
		],
	},

	// ========== 项目 ==========
	{
		id: "opensource",
		name: "项目",
		icon: "material-symbols:code-rounded",
		desc: "好用的开源项目",
		weight: 180,
		items: [
			{
				title: "Firefly",
				url: "https://github.com/slepoh/Firefly-Admin",
				desc: " Astro 个人博客管理系统",
				icon: "/favicon/firefly-32.png",
				weight: 165,
			},
		],
	},

	// ========== 设计 ==========
	{
		id: "design",
		name: "设计",
		icon: "material-symbols:palette-outline-rounded",
		desc: "配色、图标与灵感来源",
		weight: 190,
		items: [
			{
				title: "Iconify",
				url: "https://icon-sets.iconify.design",
				desc: "海量开源图标集合搜索",
				weight: 175,
			},
			{
				title: "iconfont",
				url: "https://www.iconfont.cn",
				desc: "阿里巴巴矢量图标库",
				weight: 174,
			},
		],
	},

	// ========== 工具 ==========
	{
		id: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		desc: "顺手的在线小工具",
		weight: 195,
		items: [
			{
				title: "TinyPNG",
				url: "https://tinypng.com",
				desc: "在线压缩 PNG / JPEG 图片",
				weight: 185,
			},
			{
				title: "Squoosh",
				url: "https://squoosh.app",
				desc: "Google 出品的图片压缩与格式转换",
				weight: 184,
			},
			{
				title: "Carbon",
				url: "https://carbon.now.sh",
				desc: "把代码片段生成漂亮的图片",
				weight: 183,
			},
		],
	},

	// ========== 素材资源 ==========
	{
		id: "assets",
		name: "素材资源",
		icon: "material-symbols:folder-open-rounded",
		desc: "云盘、图床与文件传输工具",
		weight: 198,
		items: [
			{
				title: "文件无限传输",
				url: "https://file-relay.yormb.cn",
				desc: "文件中继站，无限传输",
				weight: 210,
			},
			{
				title: "免费云盘",
				url: "https://pan.yormb.cn",
				desc: "免费不限速不限容量",
				weight: 209,
			},
			{
				title: "共享图床",
				url: "https://img.yormb.cn",
				desc: "免费不限速不限容量",
				weight: 208,
			},
			{
				title: "阿里云盘",
				url: "https://www.aliyundrive.com/drive/",
				desc: "阿里旗下在线网盘，支持超大容量",
				weight: 207,
			},
			{
				title: "百度网盘",
				url: "https://pan.baidu.com",
				desc: "文件共享、超大容量",
				weight: 206,
			},
			{
				title: "123云盘",
				url: "https://1812144714.share.123pan.cn/123pan/CDNrVv-SScZ",
				desc: "超大容量，不限速下载",
				weight: 205,
			},
			{
				title: "夸克网盘",
				url: "https://pan.quark.cn",
				desc: "影视网盘",
				weight: 204,
			},
			{
				title: "蓝奏网盘",
				url: "http://lanzou.com",
				desc: "免费不限速的在线网盘",
				weight: 203,
			},
			{
				title: "小飞机网盘",
				url: "https://www.feijipan.com",
				desc: "不限速免费网盘",
				weight: 201,
			},
			{
				title: "文叔叔",
				url: "https://www.wenshushu.cn",
				desc: "文件传输助手，不限速",
				weight: 199,
			},
			{
				title: "盘搜",
				url: "https://panhub.yormb.cn",
				desc: "全网在线搜索网盘资源",
				weight: 197,
			},
			{
				title: "盘搜",
				url: "https://pso.yormb.cn",
				desc: "在线搜索全网资源",
				weight: 194,
			},
			{
				title: "网盘搜索",
				url: "https://panso.yormb.cn",
				desc: "网盘资源全网搜索",
				weight: 193,
			},
		],
	},

	// ========== 自用AI ==========
	{
		id: "self-ai",
		name: "自用AI",
		icon: "material-symbols:robot-2-rounded",
		desc: "自建的AI模型代理与工具集合",
		weight: 250,
		items: [
			{
				title: "CF模型网关",
				url: "https://llm-relay.yormb.cn",
				desc: "免费使用主流大模型，Cloudflare模型中转服务",
				weight: 230,
			},
			{
				title: "DeepSeek镜像",
				url: "https://ds2api.yormb.cn",
				desc: "已废弃",
				weight: 229,
			},
			{
				title: "Api代理",
				url: "https://apihub.yormb.cn",
				desc: "AI大模型代理站",
				weight: 228,
			},
			{
				title: "Ai聚合",
				url: "https://chat.yormb.cn",
				desc: "AI多模型对话平台",
				weight: 227,
			},
			{
				title: "Grok镜像",
				url: "https://grok.yormb.cn",
				desc: "代理平台",
				weight: 226,
			},
			{
				title: "OpenAI 镜像",
				url: "https://openai.yormb.cn",
				desc: "代理平台",
				weight: 225,
			},
			{
				title: "ChatGPT镜像",
				url: "https://chatgpt.yormb.cn",
				desc: "代理平台",
				weight: 224,
			},
			{
				title: "AI大模型",
				url: "https://aichat.yormb.cn",
				desc: "免费AI大模型中转站",
				weight: 223,
			},
			{
				title: "TTS文字转语音",
				url: "https://edge-tts.yormb.cn",
				desc: "免费文转语音工具",
				weight: 222,
			},
			{
				title: "免费文生图",
				url: "https://aiimg.yormb.cn",
				desc: "免费 AI 文生图工具，支持 SD 风格与提示词模板",
				weight: 221,
			},
			{
				title: "ComfyUI 代理",
				url: "https://comfy.yormb.cn",
				desc: "云端 ComfyUI 工作流代理，免本地显卡",
				weight: 220,
			},
			{
				title: "Whisper 转写",
				url: "https://whisper.yormb.cn",
				desc: "基于 Whisper 的免费音视频字幕转写",
				weight: 219,
			},
			{
				title: "AI 抠图",
				url: "https://bgrem.yormb.cn",
				desc: "在线 AI 抠图换背景，批量处理",
				weight: 218,
			},
			{
				title: "向量检索",
				url: "https://vec.yormb.cn",
				desc: "自建轻量向量库，给导航站做语义搜索用",
				weight: 217,
			},
		],
	},

	// ========== 监控运维 ==========
	{
		id: "ops",
		name: "监控运维",
		icon: "material-symbols:monitor-heart-rounded",
		desc: "服务器、域名、SSL 与访问监控",
		weight: 240,
		items: [
			{
				title: "Uptime Kuma",
				url: "https://uptime.yormb.cn",
				desc: "自托管监控面板，支持宕机通知",
				weight: 215,
			},
			{
				title: "SSL 检测",
				url: "https://ssl.yormb.cn",
				desc: "证书有效期、链完整性一键检测",
				weight: 214,
			},
			{
				title: "Cloudflare DNS",
				url: "https://dash.cloudflare.com/?to=/:account/dns",
				desc: "DNS 解析与橙色云朵开关",
				weight: 213,
			},
			{
				title: "Netdata",
				url: "https://netdata.yormb.cn",
				desc: "实时服务器性能面板",
				weight: 212,
			},
		],
	},
];
