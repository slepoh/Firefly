---
title: "用 Remotion + Workbuddy，做出一个能自动生成故事视频的Skills"
published: 2026-08-06T20:42:00
description: "用户通过WorkBuddy创建自动化视频生成技能，流程包括：1. 创建skill文件夹并定义分镜生成、图片渲染（ComfyUI+SDXL）、视频合成（Remotion带渐变动画）的步骤；2. 输入故事后自动生成10个分镜及对应的生图提示词；3. 调用本地ComfyUI生成分镜图片并合成视频。后续可接入VoxCPM实现自动配音，通过持续迭代优化技能，最终实现从故事生成到视频输出的全流程自动化，无需人工干预即可批量生产视频内容。"
image: "https://image.aioky.cn/images/9d3c625f6b7b0f5c7d07cc3e0c058368a0dbad4a.png"
tags: [Workbuddy]
category: Agent
comment: true
---
# 用 Remotion + Workbuddy，做出一个能自动生成故事视频的Skills

首先，打开 WorkBuddy，选择一个工作空间。
然后对 AI 说：

> 在本项目中创建一个 skill 文件夹，并在其中创建一个 skill。
> 这个 skill 的目标是：根据分镜信息，调用 ComfyUI 生成每个分镜的图片，再调用 Remotion 将分镜图片组合成视频。
> skill 的流程如下：
> 1. 读取我输入的故事，并生成分镜。
> 2. 根据分镜，为每个场景生成生图提示词。
> 3. 调用本地 ComfyUI，使用 SDXL 模型，根据上一步生成的提示词生成所有场景图片。
> 4. 通过 Remotion 将所有图片渲染成视频。注意，图片之间的切换需要有渐入渐出动画。

![image.png](https://image.aioky.cn/images/d9078d03aa444bd7dd0b960fb841def2e406154a.png#blurhash=L5RfkBof-%3B%7EqM%7B%25M-%3BIU-%3B-%3BNFNG&width=919&height=904)
很快，WorkBuddy 就把这个技能创建好了。
![image.png](https://image.aioky.cn/images/02bf29ca2191cb8bf00cb4b5ce921429ed163af7.png#blurhash=L5RfnI%3FbIU%25g%7EqM%7BM%7BjZkBtRoftQ&width=922&height=913)
接下来，找一个故事测试一下：

> 帮我生成一个适合这种形式的故事，比如“古代如何传递紧急军情”。

很快就生成好了，一共设计了十个场景

| 1 | 斥候发现远方尘烟 | 黄昏烽火台，斥候凝视地平线 |
| --- | -------- | ------------- |
| 2 | 看到敌军骑兵集结 | 斥候面部特写，山下敌军密布 |
| 3 | 飞奔下山传信 | 沿山道奔跑，动态动作镜头 |
| 4 | 点燃第一堆烽火 | 夜色中火光冲天，浓烟滚滚 |
| 5 | 远方烽火台发现信号 | 远景，第二座塔的守卫指向火光 |
| 6 | 第二座烽火台点燃 | 火光照亮群山轮廓 |
| 7 | 烽火链绵延百里 | 航拍视角，群山间火光连成链 |
| 8 | 军情传至边关重镇 | 城墙火把通明，将军部署防御 |
| 9 | 连夜披甲备战 | 军营灯火通明，士兵磨刀备马 |
| 10 | 黎明列阵完毕 | 破晓，城墙将士静待敌军 |

故事生成后，直接调用刚刚创建的 skill 来制作视频。
由于Workbuddy故事输出的是一个json，叫prompts.json，因此我就直接告诉它，根据这个json，使用刚刚生成的技能来帮我生成视频

> 根据prompts.json，使用刚刚生成的 story-to-video这个技能，帮我生成视频

很快，视频就生成完成了。
![image.png](https://image.aioky.cn/images/ca5439cc2430a4ca240ddbb6564190a1ec438cb9.png#blurhash=L5S6Pl00xu_3_3V%40M%7BaexuxubHbG&width=918&height=908)
接下来还可以继续补上配音。配音既可以自己口播，也可以交给 AI。

只要继续告诉 AI：更新这个 skill，接入 VoxCPM，并提供一段参考音频；之后这个 skill 生成的视频，就可以自动带上配音。

技能建好以后，是需要根据效果和自己的需求，持续的迭代了。

等你迭代好，你拥有的就不再是一个“让 AI 随机生成视频”的提示词，而是一条可重复调用、可人工把关、可恢复长任务、也能替换本地模型和 Remotion 模板的生产线。再把自动生成故事的流程也接入，下一次要做视频时，只需要一句话： 帮我生成一个故事视频。 然后Workbuddy就自动帮你生成故事， 生成分镜， 生成图片， 最终输出视频给你了。

后续，就可以根据这个技能持续不断的产出视频，吃上自媒体的饭，走上人生巅峰了。

不得不说，随着 AI 的发展，它越来越强了。

理论结合实践才是最好的学习方式， 大家可以按照我的步骤去实践一下。

如果本地没有安装ComfyUI， 也可以在Workbuddy里面找到对应的skill来用，搜一下文生图，很多的
![image.png](https://image.aioky.cn/images/0c1cafe4f323810eb4b62ebd7f5df856e1e8daa9.png#blurhash=L5Rysgx%5DIU%3Fb%7EqM%7BRPxat6axWCx%5D&width=1122&height=912)
