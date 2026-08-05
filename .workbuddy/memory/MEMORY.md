# 项目长期记忆 — 饮料推荐系统

## 饮品菜单截图 → 含图 Excel（用户既定规则）
用户会持续给不同品牌的饮品菜单截图，要求按**相同流程**生成"含饮品图片"的 Excel。已沉淀为可复用 skill：`menu-drinks-to-excel`（用户级，~/.workbuddy/skills/）。

每次生成的统一规则（务必遵守）：
- 列固定：**分类 | 饮品名称 | 图片 | 原价(元)** —— 只展示原价，不展示折扣价。
- 分类：咖啡 / 奶茶 / 果茶（关键词规则见 skill 的 references/workflow.md）。
- **过滤非饮品**（餐食/咖啡豆/挂耳/说明文案等）**与 套餐**（双杯套餐/组合/任选X杯/多杯/双杆/双杯）。
- 图片：从截图裁杯体缩略图嵌单元格，缩放到 130px 宽；按分类着色、冻结表头、开筛选。
- **居中规则（关键）**：裁图后用"有色彩 或 明显偏暗"的像素取包围盒来居中，**必须排除浅灰投影**——否则投影会把包围盒拉偏，杯子本体偏到一侧、另一侧显空。固定画布 260×220（=Excel 130×110 单元格的 2 倍，比例一致，缩放后正好填满不溢出）。crops 的 x 范围要夹住杯体、避开左侧分类徽章和右侧文字（MSTAND 实测 crop_x0=130, crop_x1=250）。
- 运行环境：系统 Python 3.10（`C:/Users/hspcadmin/AppData/Local/Programs/Python/Python310/python.exe`，自带 PIL/numpy/openpyxl）。本机模型**无法读图**（Read 图片被过滤），识别名称靠 OCR 或请用户补清单。
- 文件名：若同名 `.xlsx` 被腾讯文档预览锁定（`~$xxx.xlsx` 存在），改用带后缀新名。

## 图片质量门槛（重要！2026-08-01 古茗踩坑）
- 菜单截图**实际像素宽 < 200px** 时 OCR 几乎全乱码（rapidocr ch_PP-OCRv4 也救不回来），只能靠肉眼拼图识别，款式覆盖率掉到 30% 左右。
- 触发场景：用户从聊天框复制粘贴图片、用了某些截图工具的"窄边"模式、或是收到了被压缩的预览图。
- **收到新图时先用 `file` / `PIL` 确认真实宽高**（Read 看不到元信息，但 Bash + `python -c "from PIL import Image; print(Image.open('x.png').size)"` 几秒搞定），发现 < 300px 宽就要立刻提示用户重新截图，不要硬撑。

## 当前项目结构与产物
- 推荐系统本体：data.js（星巴克/瑞幸/喜茶/古茗 + M Stand，由 gen_data.py 生成）+ index.html（iPhone 外壳预览）。星巴克源图来自 `STARBUCKS_饮品SKU清单_饮品居中版.xlsx`（图片已居中修正版）。
- 重跑数据：改 `gen_data.py` 里的源 xlsx 路径（锚点正则已加固为 `<from>.*?<col>(\d+)</col>.*?<row>(\d+)</row>`，不依赖 `<colOff>`），跑 `python gen_data.py` 即覆盖对应 images/ 并重建 data.js。

## 部署 / GitHub Pages 推送（关键坑）
- 仓库 `helloCYYYY/drink-recommend`，部署分支 **master**（不是 main；远程无 main 分支，Pages 从 master 构建）。
- 本地分支是 `master`，远程跟踪引用偶尔过期，推送前先 `git fetch origin master` 确认可快进。
- **沙箱出网被拦**：普通 `git push` 会卡死在联网（无输出/超时）。必须 `dangerouslyDisableSandbox: true` 才能连通 github.com。
- **远程 URL 无 token、本机也没缓存凭据**：沙箱外推送会报 `could not read Username`。解决：用内联带 token 的 URL 临时推，**不要**把 token 写回 remote 配置——
  `git push "https://<TOKEN>@github.com/helloCYYYY/drink-recommend.git" master`
- 本会话验证：旧 token（ghp_ 开头，曾在 chat 内联使用）仍有效（用户此前被建议撤销但似未撤）。**安全红线：明文 token 禁止写入任何会推送到公开仓库的文件**；推送一律用内联 `https://<TOKEN>@github.com/...` 临时 URL，用后不要写回 remote 配置。线上验证：`raw.githubusercontent.com/.../master/data.js` 含 83 条星巴克引用；`hellocyyyy.github.io/drink-recommend/images/starbucks/2.jpg` 返回 200。
- 提交纪律：只对 `data.js` / `gen_data.py` / `images/<品牌>/` 做 add；**禁止**误提交 `.workbuddy/` 下的解析中间产物（crops/products/ocr/pycache/各类 png）和项目根的大体积源 xlsx。
