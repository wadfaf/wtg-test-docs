const path = require("node:path");

module.exports = {
	title: "组件库文档",
	description: "这是一个使用 VuePress 和 vue-docgen-cli 生成的组件库文档",
	port: 8081,
	base: "/wtg-test-docs/",
	themeConfig: {
		nav: [
			{ text: "主页", link: "/" },
			{ text: "组件", link: "/components/" },
			{ text: "更新日志", link: "/changelog/" },
		],
		sidebarDepth: 1,
		sidebar: [
			{
				title: "组件",
				collapsable: false,
				children: [
					"/components/ZydIconButton",
					"/components/ZydLargeScreenScale",
					"/components/ZydLongTextTooltip",
					"/components/ZydOperateBtn",
					"/components/ZydPage",
					"/components/ZydSplitPane",
					"/components/ZydTag",
					"/components/ZydTree",
					"/components/ZydTypeExchange",
				],
			},
		],
	},
};
