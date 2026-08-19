// ============================================================
//  饮料推荐系统 · 数据文件（只改这里就能改内容）
// ============================================================
//  怎么改：
//  1. 加一杯饮品：在某品牌的 skus 数组里加一行
//       { name:'饮品名', price:价格, tags:['标签1','标签2'], img:'images/品牌/行号.jpg' }
//  2. 加一个品牌：在对应大类 brands 里加一段
//       key名: { name:'显示名', logo:'🟢', skus:[ ... ] }
//  3. 换真实图片：把图片放进 images/ 下对应品牌的文件夹，把 img 改成路径即可
//     （本项目图片来自 STARBUCKS / MSTAND 的 Excel 清单，已按行号命名）
//  4. 给某杯加定制参数（温度/甜度/加料…）：在该杯加 opts 字段，例如
//       opts: { temp:{label:'温度',items:['热','冰','去冰']},
//               sugar:{label:'甜度',items:['全糖','五分糖','无糖']},
//               topping:{label:'加料',items:['珍珠','椰果'],multi:true} }
//     不写 opts 的饮品点选后直接出结果，不弹参数面板。
//  5. 改完保存刷新页面即可生效（部署后 git push 自动更新）。
//  注意：引号用半角 " 或 '；数组最后一项不要逗号；price 用数字。
// ============================================================

const DATA = {
  "coffee": {
    "label": "咖啡",
    "emoji": "☕",
    "brands": {
      "starbucks": {
        "name": "星巴克",
        "logo": "🟢",
        "skus": [
          {
            "name": "加浓全冰精萃美式",
            "price": 34,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/db91d139572cc0c52c62397cd74e646c59317.jpg"
          },
          {
            "name": "轻甜奶油全冰美式",
            "price": 31,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/2c690e7624371f3be955376a9cd306d460358.jpg"
          },
          {
            "name": "搅打稀奶油全冰美式",
            "price": 31,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/38da07b4bb94d018826cca68112379e758703.jpg"
          },
          {
            "name": "玫瑰20轻甜奶油全冰美式",
            "price": 39,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/ae3fc67edd6d2efe077cf049890ec6dd63897.jpg"
          },
          {
            "name": "海盐焦糖风味美式",
            "price": 30,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/e5176d91a7c88dd9e6372ec04461d64476214.jpg"
          },
          {
            "name": "拿铁",
            "price": 30,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/7a260c46c224b01733272a5050d9f249139108.jpg"
          },
          {
            "name": "加浓美式",
            "price": 31,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/74402b0ac17776035b8466a2975c6fb2136532.jpg"
          },
          {
            "name": "星巴克馥芮白®",
            "price": 35,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/b307e11b53910931f1db0a0dcf2be747136603.jpg"
          },
          {
            "name": "焦糖玛奇朵",
            "price": 34,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/4c4570439bee58913d2392414e227313132224.jpg"
          },
          {
            "name": "香草风味拿铁",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/03db224a19979cedf7b0edd32eb7fd2c74413.jpg"
          },
          {
            "name": "布蕾红茶鸳鸯",
            "price": 42,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/36651e83663d9609d2d2c45c0204526960605.jpg"
          },
          {
            "name": "抹茶鸳鸯",
            "price": 36,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/4d1afaff22cfb2200d035f30c630b4e6135623.jpg"
          },
          {
            "name": "莓莓风味拿铁",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/c2cf1378110c0a1e1379af6bd069dcbd76499.jpg"
          },
          {
            "name": "糯香斑斓风味拿铁",
            "price": 33,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/6db864b84876ff4a4e7a3d28f1d4af3a119792.jpg"
          },
          {
            "name": "糯香斑斓风味美式",
            "price": 30,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/b6f77e3d97b0c9325b728ef87ef0e120131275.jpg"
          },
          {
            "name": "比利时黑巧拿铁",
            "price": 36,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/085df7a5f20ef6306e20eccbb16df627155361.jpg"
          },
          {
            "name": "椰子丝绒燕麦拿铁",
            "price": 36,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/1f2a4aaee0848cbfb03e3c81cb30ebdb154040.jpg"
          },
          {
            "name": "燕麦拿铁",
            "price": 30,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/e1995e01eeb9c92ff0c493c101c188ea185685.png"
          },
          {
            "name": "燕麦焦糖玛奇朵",
            "price": 34,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/bccde6a9411d3563ade479346ce5ad4516891.jpg"
          },
          {
            "name": "巴旦木拿铁",
            "price": 30,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/699e2f9d06ea8eec7add1d1feb7e700033041.jpg"
          },
          {
            "name": "榛果风味巴旦木拿铁",
            "price": 33,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/b4ca7b348f096783a48db28ed98a958d35598.jpg"
          },
          {
            "name": "大溪地香草风情巴旦木拿铁",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/fe05287e333dabcfc3b909939ec6a18535247.jpg"
          },
          {
            "name": "浓郁咖啡拿铁",
            "price": 34,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/b7ff20819f7b2b1aa962b51c6c837610130253.jpg"
          },
          {
            "name": "榛果风味拿铁",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/1cb3560bb942b2b160d7fa9f596f35fb73345.jpg"
          },
          {
            "name": "摩卡",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/e10204e28a08ca8ca2884c69bba6d841108922.jpg"
          },
          {
            "name": "\\浓/小杯拿铁",
            "price": 29,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/9ca7c4163c12f2b6c08d5980b4976387151554.jpg"
          },
          {
            "name": "椰香\\浓/小杯拿铁",
            "price": 29,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/4f27b973929b488404edb839f7d3523a154460.jpg"
          },
          {
            "name": "冷萃冰咖啡",
            "price": 34,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/aee05dae6af6d070a3f770da8eb9d6d7170308.jpg"
          },
          {
            "name": "大溪地风情绵云冷萃",
            "price": 37,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/6ca1086a5916d22d662dde5fc80f201c118375.jpg"
          },
          {
            "name": "金烘馥芮白",
            "price": 35,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/4c168497599ee7843068e4f332506aea142340.jpg"
          },
          {
            "name": "金烘焦糖玛奇朵",
            "price": 34,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/31c753401f759e393040919943cb8682151442.jpg"
          },
          {
            "name": "金烘香草风味巴旦木拿铁",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/3b2fa42443c1b2ead188651ed5d081f1142985.jpg"
          },
          {
            "name": "金烘美式咖啡",
            "price": 27,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/d60c104368a9fbd47e65236966246d59129471.jpg"
          },
          {
            "name": "金烘拿铁",
            "price": 30,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/95ecf6fc4e3f65e397e893e43185e2a0130642.jpg"
          },
          {
            "name": "海盐焦糖风味冰震浓缩",
            "price": 39,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/5bbc6c71cd5283413afe65fdb34f3250162706.jpg"
          },
          {
            "name": "大溪地香草风情冰震浓缩",
            "price": 39,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/59251915c602f5aa23d048552dd6621b171664.jpg"
          },
          {
            "name": "金桂拿铁",
            "price": 36,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/bc127be0e5a4648556cb4ee1c3e2d9d1165206.jpg"
          },
          {
            "name": "金桂金烘美式",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/a96d27352a2feb56accd0212729dd714178969.jpg"
          },
          {
            "name": "金桂柿子燕麦拿铁",
            "price": 38,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/593a20823dcba24f6c537f8625f11e82157810.jpg"
          },
          {
            "name": "金桂秋梨铁观音茶拿铁",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/e1e9086a495c7e6c146fb5811a1cacd8149530.jpg"
          },
          {
            "name": "高蛋白拿铁PRO",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/406dc2607aef2bc0a3bb9202e5cc2c2f136833.jpg"
          },
          {
            "name": "香草风味高蛋白拿铁PRO",
            "price": 36,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/61d7927e4bcb10ac5c36afb919cb2d72141889.jpg"
          },
          {
            "name": "海盐焦糖风味高蛋白拿铁PRO",
            "price": 36,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/18fc3285d4c8b3e0d79b14ce627305a9144359.jpg"
          },
          {
            "name": "高蛋白抹茶拿铁PRO",
            "price": 31,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/46133d47848d7894b15573ab71396860132799.jpg"
          },
          {
            "name": "玫瑰20拿铁",
            "price": 36,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/6782007a3fa98c7d6806d03ea28cdba7141773.jpg"
          },
          {
            "name": "玫瑰20美式",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/3054441891514e192fbe965a735af10e142933.jpg"
          },
          {
            "name": "玫瑰20抹茶拿铁",
            "price": 34,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/3fa7b636dfe238a7f037533de86ab1e0145200.jpg"
          },
          {
            "name": "香草风味拿铁 (不另外加糖)",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/4cf94c770a7db3b9023ba1eeafc7fed867539.jpg"
          },
          {
            "name": "糯香斑斓风味拿铁(不另外加糖)",
            "price": 33,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/a1d047b06eb41689040cc62a368f6722121288.jpg"
          },
          {
            "name": "莓莓风味拿铁(不另外加糖)",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/362c95f4b9bdd9cc83e440a07ccc0f2277752.jpg"
          },
          {
            "name": "玫瑰20拿铁（不另外加糖）",
            "price": 36,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/6782007a3fa98c7d6806d03ea28cdba7141773.jpg"
          },
          {
            "name": "海盐焦糖风味馥芮白(不另加糖)",
            "price": 41,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/26c419988396fb5aecb2709caafeeb1e85967.jpg"
          },
          {
            "name": "红莓黑加仑冰摇美式",
            "price": 31,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/465cc3f2e219b79f2bff461b238d88e5115739.jpg"
          },
          {
            "name": "桃桃冰摇美式",
            "price": 31,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/5d6e34843aeb9778b118744c29a04c43118958.jpg"
          },
          {
            "name": "佛手柑柠柚冰摇美式",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/b60416fc7dc78c71c3a4e9aee71c9621144903.jpg"
          },
          {
            "name": "百香果桃桃冰摇美式",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/c1b01bd349954a71555e64f4dba2157766514.jpg"
          },
          {
            "name": "青绿入画绵云抹茶拿铁",
            "price": 35,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/75d5f288a6a2755f612c99c9e098c3e7128820.jpg"
          },
          {
            "name": "红茶拿铁",
            "price": 28,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/cc7ce9e777c2507ff2f639c05676ba01121267.jpg"
          },
          {
            "name": "比利时黑巧红茶拿铁",
            "price": 34,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/570ea416d8b24583035935683bde64a6123532.jpg"
          },
          {
            "name": "焙茶拿铁",
            "price": 28,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/e8c1e1108dfac9af62f2e3fc680e8289138649.jpg"
          },
          {
            "name": "加浓焙茶拿铁",
            "price": 31,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/8ed4a1fc37f86634f267adb1d1f1de60137068.jpg"
          },
          {
            "name": "抹茶拿铁",
            "price": 28,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/fd9f73be9ba73c424654831e02325d7f121304.jpg"
          },
          {
            "name": "加浓抹茶拿铁",
            "price": 31,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/602e32ea0ba7e3ff6249563d23f7fb1d123075.jpg"
          },
          {
            "name": "燕麦抹茶拿铁--好椰配方",
            "price": 32,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/1b0e8dbb4bd372f87db8cc8d7a5f9071135848.jpg"
          },
          {
            "name": "低因萃取海盐焦糖风味美式",
            "price": 30,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/01592b6c38b08b294453712e45284d7e82963.jpg"
          },
          {
            "name": "低因萃取香草风味高蛋白拿铁PRO",
            "price": 36,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/275f8e3590031eefcb0d026dbaf616ec141889.jpg"
          },
          {
            "name": "低因萃取海盐焦糖风味高蛋白拿铁PRO",
            "price": 36,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/a6cc39390b741b6976999adb59b9285f144359.jpg"
          },
          {
            "name": "低因萃取高蛋白拿铁PRO",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/9f11f3fc610b9174011c9ba218d112f5136833.jpg"
          },
          {
            "name": "低因萃取玫瑰20拿铁",
            "price": 36,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/6782007a3fa98c7d6806d03ea28cdba7141773.jpg"
          },
          {
            "name": "低因萃取玫瑰20美式",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/3054441891514e192fbe965a735af10e142933.jpg"
          },
          {
            "name": "低因萃取糯香斑斓风味拿铁",
            "price": 33,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/01b607a05ccdaae933cf3d2eae962b87116281.jpg"
          },
          {
            "name": "低因萃取莓莓风味拿铁(不另外加糖)",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/db34db2065c9e9530bbeec4389093bba107561.jpg"
          },
          {
            "name": "低因萃取糯香斑斓风味拿铁(不另外加糖)",
            "price": 33,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/ab5bed96e931bfbca96d3a0cea1b7ac0115615.jpg"
          }
        ]
      },
      "mstand": {
        "name": "M Stand",
        "logo": "M",
        "skus": [
          {
            "name": "超大杯冷萃（西瓜甜萃风味）",
            "price": 45,
            "tags": [],
            "img": "images/mstand/2.jpg"
          },
          {
            "name": "超大杯冰美式（盛夏香柠风味拼配）",
            "price": 32,
            "tags": [],
            "img": "images/mstand/3.jpg"
          },
          {
            "name": "超大杯加浓冰美式（盛夏香柠风味拼配）",
            "price": 37,
            "tags": [],
            "img": "images/mstand/4.jpg"
          },
          {
            "name": "超大杯冰拿铁（盛夏香柠风味拼配）",
            "price": 41,
            "tags": [],
            "img": "images/mstand/5.jpg"
          },
          {
            "name": "超大杯山葡萄气泡美式",
            "price": 40,
            "tags": [],
            "img": "images/mstand/6.jpg"
          },
          {
            "name": "超大杯杨梅荔枝气泡美式",
            "price": 40,
            "tags": [],
            "img": "images/mstand/8.jpg"
          },
          {
            "name": "超大杯青芒青苹果气泡美式",
            "price": 40,
            "tags": [],
            "img": "images/mstand/10.jpg"
          },
          {
            "name": "超大杯青芒甘蔗气泡美式",
            "price": 40,
            "tags": [],
            "img": "images/mstand/11.jpg"
          },
          {
            "name": "超大杯冰美式",
            "price": 30,
            "tags": [],
            "img": "images/mstand/16.jpg"
          },
          {
            "name": "超大杯加浓冰美式",
            "price": 35,
            "tags": [],
            "img": "images/mstand/17.jpg"
          },
          {
            "name": "超大杯冰拿铁",
            "price": 39,
            "tags": [],
            "img": "images/mstand/18.jpg"
          },
          {
            "name": "超大杯话梅气泡美式",
            "price": 40,
            "tags": [],
            "img": "images/mstand/19.jpg"
          },
          {
            "name": "超大杯冰摇黄杏美式",
            "price": 40,
            "tags": [],
            "img": "images/mstand/20.jpg"
          },
          {
            "name": "盛夏香柠风味拼配 美式",
            "price": 30,
            "tags": [],
            "img": "images/mstand/24.jpg"
          },
          {
            "name": "盛夏香柠风味拼配 拿铁",
            "price": 36,
            "tags": [],
            "img": "images/mstand/25.jpg"
          },
          {
            "name": "盛夏香柠风味拼配 澳白",
            "price": 36,
            "tags": [],
            "img": "images/mstand/26.jpg"
          },
          {
            "name": "盛夏香柠风味拼配 卡布奇诺",
            "price": 36,
            "tags": [],
            "img": "images/mstand/27.jpg"
          },
          {
            "name": "冷萃咖啡（西瓜甜萃风味）",
            "price": 40,
            "tags": [],
            "img": "images/mstand/28.jpg"
          },
          {
            "name": "咸芝士黑咖",
            "price": 38,
            "tags": [],
            "img": "images/mstand/29.jpg"
          },
          {
            "name": "美式咖啡",
            "price": 28,
            "tags": [],
            "img": "images/mstand/30.jpg"
          },
          {
            "name": "拿铁",
            "price": 34,
            "tags": [],
            "img": "images/mstand/31.jpg"
          },
          {
            "name": "澳白",
            "price": 34,
            "tags": [],
            "img": "images/mstand/32.jpg"
          },
          {
            "name": "卡布奇诺",
            "price": 34,
            "tags": [],
            "img": "images/mstand/33.jpg"
          },
          {
            "name": "紫芋拿铁",
            "price": 38,
            "tags": [],
            "img": "images/mstand/34.jpg"
          },
          {
            "name": "黑芝麻巴斯克拿铁",
            "price": 38,
            "tags": [],
            "img": "images/mstand/35.jpg"
          },
          {
            "name": "山核桃拿铁",
            "price": 38,
            "tags": [],
            "img": "images/mstand/36.jpg"
          },
          {
            "name": "黄油巴斯克拿铁",
            "price": 38,
            "tags": [],
            "img": "images/mstand/37.jpg"
          },
          {
            "name": "咸芝士拿铁",
            "price": 38,
            "tags": [],
            "img": "images/mstand/38.jpg"
          },
          {
            "name": "香烤坚果拿铁",
            "price": 38,
            "tags": [],
            "img": "images/mstand/39.jpg"
          },
          {
            "name": "冰摇青杨桃美式",
            "price": 38,
            "tags": [],
            "img": "images/mstand/40.jpg"
          },
          {
            "name": "山葡萄气泡美式",
            "price": 38,
            "tags": [],
            "img": "images/mstand/41.jpg"
          },
          {
            "name": "杨梅荔枝气泡美式",
            "price": 38,
            "tags": [],
            "img": "images/mstand/42.jpg"
          },
          {
            "name": "青芒青苹果气泡美式",
            "price": 38,
            "tags": [],
            "img": "images/mstand/43.jpg"
          },
          {
            "name": "椰青云朵美式",
            "price": 38,
            "tags": [],
            "img": "images/mstand/44.jpg"
          },
          {
            "name": "青芒甘蔗气泡美式",
            "price": 38,
            "tags": [],
            "img": "images/mstand/45.jpg"
          },
          {
            "name": "话梅气泡美式",
            "price": 38,
            "tags": [],
            "img": "images/mstand/46.jpg"
          }
        ]
      },
      "luckin": {
        "name": "瑞幸",
        "logo": "🔵",
        "skus": [
          {
            "name": "埃塞瑰夏冷萃",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/253c2b7b6fa74f6c53bef3cd596eab39911049.png"
          },
          {
            "name": "精萃澳瑞白",
            "price": 23,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/86544aa9f0ca9955a0b442ad5adf03b3615912.png"
          },
          {
            "name": "耶加雪菲·拿铁",
            "price": 27,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/5cced25c0b7df3c92690358c22e6ac78559352.png"
          },
          {
            "name": "耶加雪菲·澳瑞白",
            "price": 27,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/a07a914841b8ef40cf8e08de3d577b93555013.png"
          },
          {
            "name": "丝绒拿铁",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/6e7c763d7cdb1419637952f2894f5733609705.png"
          },
          {
            "name": "香草丝绒拿铁",
            "price": 26,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/eb4bde52235bf79d3420c97b52e65b7d620985.png"
          },
          {
            "name": "全冰抹茶丝绒拿铁",
            "price": 26,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/5b385efffcaceb57bcee232a0b37781f115241.jpg"
          },
          {
            "name": "抹茶 拿铁",
            "price": 23,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/a8991824ca5408f883e5d549ae872704549221.png"
          },
          {
            "name": "抹茶丝绒 拿铁",
            "price": 26,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/f7e268d6d6a4ec4e78137dc80628ddb3562971.png"
          },
          {
            "name": "冰吸生椰拿铁（首创）",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/dc2fa9b35867702fdc31d9314ac15e12804920.png"
          },
          {
            "name": "大菠萝生椰冷萃",
            "price": 24,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/0cee9b6cecf0a6d7af9b980f4e66014a34047.jpg"
          },
          {
            "name": "大西瓜生椰冷萃",
            "price": 21.1,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/f3d2004089e20c0e120b47e1f12ac924489848.png"
          },
          {
            "name": "生椰丝绒拿铁",
            "price": 26,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/02c095fd8e5d35f26946602bed5d618a657236.png",
            "opts": {
              "temp": {
                "label": "温度",
                "items": [
                  "热",
                  "冰",
                  "去冰"
                ]
              },
              "sugar": {
                "label": "甜度",
                "items": [
                  "全糖",
                  "五分糖",
                  "无糖"
                ]
              },
              "topping": {
                "label": "加料",
                "items": [
                  "珍珠",
                  "椰果"
                ],
                "multi": true
              }
            }
          },
          {
            "name": "生椰拿铁",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/756ce4e0923dfa11d42376fa1c9bf676704794.png"
          },
          {
            "name": "全冰奶酪美式",
            "price": 24,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/a5bde364d0343e2f6359bc60ae52fec7188468.jpg"
          },
          {
            "name": "全冰小黄油美式",
            "price": 24,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/a13075912c2da9bb7c2d6e29aaa9d76435324.jpg"
          },
          {
            "name": "全冰黑巧美式",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/bb2e532cfd9c85a570a28dd67f1f13c0191862.jpg"
          },
          {
            "name": "加浓 美式",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/18d022e0378509e30aa687251c5d8b1c807909.png"
          },
          {
            "name": "埃塞金烘美式",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/0b3f9a2865e49a898b0a115e637060b4614800.png"
          },
          {
            "name": "小青桔C美式",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/77a8085992ba9213d5c3de86d5f00664886142.png"
          },
          {
            "name": "小黄油美式",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/2444956a5b6c452eac6f3c3a722d0fbc186746.jpg"
          },
          {
            "name": "柚C 美式",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/1a5314721156c3bab4855f264734a24e715176.png"
          },
          {
            "name": "柠C气泡美式",
            "price": 25,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/1aba0230c6b46044e281660c18314abc1011349.png"
          },
          {
            "name": "标准 美式",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/18d022e0378509e30aa687251c5d8b1c807909.png"
          },
          {
            "name": "椰青冰萃美式",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/3d31b637c3ced8a0223686f552385f7b826581.png"
          },
          {
            "name": "橙C美式(首创)",
            "price": 24,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/440f5c50c5f70bf382d6edfd6adb8963207301.jpg"
          },
          {
            "name": "深烘美式",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/18d022e0378509e30aa687251c5d8b1c807909.png"
          },
          {
            "name": "百香果C美式",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/15eb97aa8057b9e155d5553d83144de5872836.png"
          },
          {
            "name": "缤纷C美式",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/4c3f206d476602ac843509c7475a0f56967819.png"
          },
          {
            "name": "耶加雪菲·美式",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/51020d05f2acb319f088466da67ae9e4563782.png"
          },
          {
            "name": "苹果C美式",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/e2a37cf1463724273f5c16e39f61d2b5771875.png"
          },
          {
            "name": "茉莉花香美式",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/946eba38b287ed1074eed93679d44fb5798348.png"
          },
          {
            "name": "葡萄冰萃 美式",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/2357618d36952c9d80ac94b1fdb40e01872471.png"
          },
          {
            "name": "鲜切柠C美式",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/bd7c82f3e5497cd27a4e77e954d55450674467.png"
          },
          {
            "name": "全冰经典拿铁",
            "price": 21,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/4a12662a9969d3333f09d99175025a9b552714.png"
          },
          {
            "name": "卡布奇诺",
            "price": 23,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/380b7b9bd4187bba9926de8f1060b8b3609048.png"
          },
          {
            "name": "埃塞金烘拿铁",
            "price": 21,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/f4625e40207265f9aa445df2cd878db9661409.png"
          },
          {
            "name": "小黄油拿铁（首创）",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/f304f17ec9361c7b9511141a9c1ed2ad718278.png"
          },
          {
            "name": "拿铁",
            "price": 21,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/50bdec86d04ccff109e05d96747d1689635292.png"
          },
          {
            "name": "桂花米酿拿铁",
            "price": 22,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/4c078d6dd866cbd6cd2510c431c99353186349.jpg"
          },
          {
            "name": "桂花米酿拿铁（超大杯）",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/83f5309f2da5c225ba368d251aa80dcb593151.png"
          },
          {
            "name": "椰芙佳朵拿铁",
            "price": 24,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/02e64828dafaa42f4f3d24b1f7264baf233032.jpg"
          },
          {
            "name": "海盐焦糖拿铁",
            "price": 25,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/203eb37c8900917242b779970046851a742521.png"
          },
          {
            "name": "深烘拿铁",
            "price": 21,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/31e60025105d228fc7722340cbb20d7c723411.png"
          },
          {
            "name": "焦糖玛奇朵",
            "price": 23,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/20ba559a191f872daa19f0f0b44e89ab608366.png"
          },
          {
            "name": "燕麦拿铁",
            "price": 21,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/1e0575e2a1f70407fc9bd514ea5dcda9663110.png"
          },
          {
            "name": "绿沙沙拿铁",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/fc2078fc1eae805e79781f10bacaf907409572.png"
          },
          {
            "name": "茉莉花香拿铁",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/6d03377f39e05d40deada79deb4da09c790594.png"
          },
          {
            "name": "轻椰茉莉拿铁",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/d231d36eabb136a4fac50ffd2892de64791620.png"
          },
          {
            "name": "香草拿铁",
            "price": 23,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/e01ea8e5656018cfae2e2d4521d5d20a629842.png"
          }
        ]
      },
      "guming": {
        "name": "古茗",
        "logo": "🟡",
        "skus": [
          {
            "name": "咸奶油美式",
            "price": 12.9,
            "tags": [],
            "img": "images/guming/2.jpg"
          },
          {
            "name": "超大杯冰美式",
            "price": 10.9,
            "tags": [],
            "img": "images/guming/10.jpg"
          },
          {
            "name": "咸奶油美式",
            "price": 12.9,
            "tags": [],
            "img": "images/guming/11.jpg"
          },
          {
            "name": "生椰拿铁",
            "price": 13.9,
            "tags": [],
            "img": "images/guming/12.jpg"
          },
          {
            "name": "苦尽柑来拿铁（原创）",
            "price": 17.9,
            "tags": [],
            "img": "images/guming/13.jpg"
          },
          {
            "name": "鲜奶拿铁",
            "price": 11.9,
            "tags": [],
            "img": "images/guming/16.jpg"
          },
          {
            "name": "冰咖小黄柠",
            "price": 12.9,
            "tags": [],
            "img": "images/guming/17.jpg"
          },
          {
            "name": "泰橘美式",
            "price": 13.9,
            "tags": [],
            "img": "images/guming/18.jpg"
          },
          {
            "name": "全冰有米美式",
            "price": 13.9,
            "tags": [],
            "img": "images/guming/19.jpg"
          },
          {
            "name": "美式咖啡",
            "price": 8.9,
            "tags": [],
            "img": "images/guming/20.jpg"
          }
        ]
      },
      "yulian": {
        "name": "裕莲茶楼",
        "logo": "🏮",
        "skus": [
          {
            "name": "老奶油草莓Dirty",
            "price": 25,
            "tags": [],
            "img": "images/yulian/8.jpg"
          },
          {
            "name": "YUZU鲜萃·埃塞水洗咖啡",
            "price": 26,
            "tags": [],
            "img": "images/yulian/25.jpg"
          }
        ]
      },
      "kenyue": {
        "name": "肯悦咖啡",
        "logo": "KY",
        "skus": [
          {
            "name": "瓦搭子.精酿啤酒花风味气泡美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003562__ALL__L__20260618175849241.jpg"
          },
          {
            "name": "全冰黄油巴斯克风味美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003727__ALL__L__20260731162529871.jpg"
          },
          {
            "name": "树番茄百香果特调气泡美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003695__ALL__L__20260723155916918.jpg"
          },
          {
            "name": "浓萃美式",
            "price": 16,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002009__ALL__L__20260403131217934.jpg"
          },
          {
            "name": "红苹果金凤梨特调气泡美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003698__ALL__L__20260723155917237.jpg"
          },
          {
            "name": "黄油巴斯克风味拿铁",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003728__ALL__L__20260731162529912.jpg"
          },
          {
            "name": "拿铁(瑰夏)",
            "price": 21,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01001993__ALL__L__20260402145401473.jpg"
          },
          {
            "name": "拿铁(瑰夏)(小)",
            "price": 11,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003431__ALL__L__20260507172715582.jpg"
          },
          {
            "name": "红颜草莓气泡美式(瑰夏)",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002448__ALL__L__20251222133142998.jpg"
          },
          {
            "name": "美式(瑰夏)",
            "price": 19,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01001991__ALL__L__20260618151006829.jpg"
          },
          {
            "name": "美式(瑰夏)(小)",
            "price": 9,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003430__ALL__L__20260507172715399.jpg"
          },
          {
            "name": "浓萃美式(大)",
            "price": 19,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003537__ALL__L__20260611091546470.jpg"
          },
          {
            "name": "虎斑小橘奶盖美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003637__ALL__L__20260709134852156.jpg"
          },
          {
            "name": "浓浓抹茶拿铁",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002505__ALL__L__20260611152612071.jpg"
          },
          {
            "name": "KY红苹果热美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/100108654__ALL__L__20251229173150624.jpg"
          },
          {
            "name": "苹果气泡美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003121__ALL__L__20251230174108997.jpg"
          },
          {
            "name": "苹果黄油风味拿铁",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003102__ALL__L__20260611151946098.jpg"
          },
          {
            "name": "凤梨酥风味拿铁",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003208__ALL__L__20260611151946347.jpg"
          },
          {
            "name": "桃花乌龙风味拿铁",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003313__ALL__L__20260706140043300.jpg"
          },
          {
            "name": "浓萃拿铁",
            "price": 18,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002011__ALL__L__20260403131217993.jpg"
          },
          {
            "name": "满杯生椰拿铁",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01001870__ALL__L__20260402145401342.jpg"
          },
          {
            "name": "焦糖蛋糕风味拿铁",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003304__ALL__L__20260611151946878.jpg"
          },
          {
            "name": "虎斑小橘奶盖拿铁",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003636__ALL__L__20260709134852031.jpg"
          },
          {
            "name": "蜜桃生椰拿铁",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002416__ALL__L__20260402145401979.jpg"
          },
          {
            "name": "爆汁三柠气泡美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01001869__ALL__L__20251229174021269.jpg"
          },
          {
            "name": "爆汁葡萄气泡美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003561__ALL__L__20260703152454315.jpg"
          },
          {
            "name": "血橙西柚味气泡美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002748__ALL__L__20251229174027107.jpg"
          },
          {
            "name": "超大杯爆汁三柠气泡美式",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003544__ALL__L__20260611091546559.jpg"
          },
          {
            "name": "超大杯血橙西柚风味气泡美式",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003545__ALL__L__20260611091546606.jpg"
          },
          {
            "name": "KY浓萃美式超大冰",
            "price": 22,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/100125700__ALL__L__20260611091546171.jpg"
          },
          {
            "name": "超大杯树番茄百香果特调气泡美式",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003706__ALL__L__20260723170408102.jpg"
          },
          {
            "name": "超大杯粉泡泡电解质气泡美式",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003700__ALL__L__20260724103604595.jpg"
          },
          {
            "name": "超大杯红苹果金凤梨特调气泡美式",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003708__ALL__L__20260723170408265.jpg"
          },
          {
            "name": "超大杯苹果气泡美式",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003543__ALL__L__20260611091546514.jpg"
          },
          {
            "name": "苹果黄油巴斯克风味拿铁",
            "price": 26,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003730__ALL__L__20260731162529993.jpg"
          },
          {
            "name": "黄油巴斯克风味美式",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003729__ALL__L__20260731162529952.jpg"
          }
        ],
        "logoImg": "images/logos/kenyue.jpg"
      }
    }
  },
  "milktea": {
    "label": "奶茶",
    "emoji": "🥤",
    "brands": {
      "mstand": {
        "name": "M Stand",
        "logo": "M",
        "skus": [
          {
            "name": "抹茶半熟芝士拿铁",
            "price": 38,
            "tags": [],
            "img": "images/mstand/52.jpg"
          },
          {
            "name": "抹茶拿铁",
            "price": 36,
            "tags": [],
            "img": "images/mstand/53.jpg"
          },
          {
            "name": "紫芋椰青白月光",
            "price": 36,
            "tags": [],
            "img": "images/mstand/54.jpg"
          },
          {
            "name": "黑芝麻巴斯克牛乳",
            "price": 36,
            "tags": [],
            "img": "images/mstand/55.jpg"
          },
          {
            "name": "黄油鲜牛乳茶",
            "price": 36,
            "tags": [],
            "img": "images/mstand/56.jpg"
          }
        ]
      },
      "luckin": {
        "name": "瑞幸",
        "logo": "🔵",
        "skus": [
          {
            "name": "大西瓜茉莉冰奶",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/8f77975d27559d4fa53d9b51a234ff4a167120.jpg"
          },
          {
            "name": "大西瓜茉莉冰奶（超大杯）",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/389f05db7347815654347870121adbcf547957.png"
          },
          {
            "name": "小苹果茉莉冰奶",
            "price": 22,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/9113c1638d3edbe4a134dad1cfd64e60711502.png"
          },
          {
            "name": "小苹果茉莉冰奶（超大杯）",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/3481474d10dbb20c19b7698673a44765689195.png"
          },
          {
            "name": "小青桔茉莉冰奶",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/976e2aacf735a6f5c0f447fc133f96da846814.png"
          },
          {
            "name": "小青桔茉莉冰奶（超大杯）",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/fb695570d29609eedcdbf2778dbe7ad4826127.png"
          },
          {
            "name": "紫葡萄茉莉冰奶",
            "price": 22,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/9f88049dcb7ebf405c820170b6ed47de535930.png"
          },
          {
            "name": "紫葡萄茉莉冰奶（超大杯）",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/9e754f0f8d622b6fd19fcde9b51545aa514840.png"
          },
          {
            "name": "鲜柠茉莉冰奶",
            "price": 22,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/a98f57d24dee690c765ed5b10e1453c0165234.jpg"
          },
          {
            "name": "抹茶  好喝椰",
            "price": 26,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/2848480e5918eb2975c9378f8307e548512508.png"
          },
          {
            "name": "瑞之 抹茶",
            "price": 20,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/c9646733145857ab8bd717b0dec4d29c702933.png"
          },
          {
            "name": "瑞之抹茶（特大杯 ）",
            "price": 23,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/67d5304cd154af726ff6fd0aabaf9b35626546.png"
          },
          {
            "name": "生椰杨枝甘露",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/61a1a944341ed7434323d9cdc001284d640866.png"
          },
          {
            "name": "生椰杨枝甘露（超大杯）",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/f3ece2086b257cc5a652789b73575e12694286.png"
          },
          {
            "name": "桂花米酿乌龙",
            "price": 21,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/740f5b4580d2f1048f0c387243b5fb3e632698.png"
          },
          {
            "name": "桂花米酿乌龙（特大杯）",
            "price": 24,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/d8994bc5bc654649e1e30d8686fc90cc183820.jpg"
          },
          {
            "name": "鲜萃轻轻茉莉",
            "price": 20,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/da6eed08db70af4bb3b2507854330745777671.png"
          },
          {
            "name": "鲜萃轻轻茉莉（特大杯）",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/5c10964b9c7c3de3913f6edefdab5e61372468.png"
          }
        ]
      },
      "guming": {
        "name": "古茗",
        "logo": "🟡",
        "skus": [
          {
            "name": "泰橘糯米酸奶",
            "price": 16,
            "tags": [],
            "img": "images/guming/3.jpg"
          },
          {
            "name": "马上有米拿铁",
            "price": 16.9,
            "tags": [],
            "img": "images/guming/5.jpg"
          },
          {
            "name": "芭乐冰奶",
            "price": 14,
            "tags": [],
            "img": "images/guming/7.jpg"
          },
          {
            "name": "马上有米拿铁",
            "price": 16.9,
            "tags": [],
            "img": "images/guming/14.jpg"
          },
          {
            "name": "香草籽雪芙拿铁",
            "price": 16.9,
            "tags": [],
            "img": "images/guming/15.jpg"
          },
          {
            "name": "早安鲜牛奶",
            "price": 7.9,
            "tags": [],
            "img": "images/guming/21.jpg"
          },
          {
            "name": "鲜叶糯米酸奶",
            "price": 15,
            "tags": [],
            "img": "images/guming/22.jpg"
          },
          {
            "name": "泰橘糯米酸奶",
            "price": 16,
            "tags": [],
            "img": "images/guming/23.jpg"
          },
          {
            "name": "桃桃糯米酸奶",
            "price": 17,
            "tags": [],
            "img": "images/guming/24.jpg"
          },
          {
            "name": "云岭茉莉",
            "price": 13,
            "tags": [],
            "img": "images/guming/25.jpg"
          },
          {
            "name": "四季青山",
            "price": 14,
            "tags": [],
            "img": "images/guming/26.jpg"
          },
          {
            "name": "云深幽兰",
            "price": 15,
            "tags": [],
            "img": "images/guming/27.jpg"
          },
          {
            "name": "芭乐冰奶",
            "price": 14,
            "tags": [],
            "img": "images/guming/36.jpg"
          },
          {
            "name": "黑糖珍珠牛乳",
            "price": 14,
            "tags": [],
            "img": "images/guming/38.jpg"
          },
          {
            "name": "咸乳酪泰奶",
            "price": 15,
            "tags": [],
            "img": "images/guming/39.jpg"
          },
          {
            "name": "抹茶四季春",
            "price": 15,
            "tags": [],
            "img": "images/guming/40.jpg"
          },
          {
            "name": "咸乳酪泰有米",
            "price": 17,
            "tags": [],
            "img": "images/guming/41.jpg"
          },
          {
            "name": "古茗奶茶",
            "price": 10,
            "tags": [],
            "img": "images/guming/42.jpg"
          },
          {
            "name": "茉莉奶绿",
            "price": 10,
            "tags": [],
            "img": "images/guming/43.jpg"
          },
          {
            "name": "大叔奶茶",
            "price": 12,
            "tags": [],
            "img": "images/guming/44.jpg"
          },
          {
            "name": "布蕾脆脆奶芙",
            "price": 17,
            "tags": [],
            "img": "images/guming/45.jpg"
          },
          {
            "name": "布丁西米露",
            "price": 10,
            "tags": [],
            "img": "images/guming/46.jpg"
          }
        ]
      },
      "otlc": {
        "name": "OT另茶",
        "logo": "🍃",
        "skus": [
          {
            "name": "大马椰丸奶茶",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/10/16/15df167b75ef62fd4a.jpg"
          },
          {
            "name": "锅煮黑丸奶茶",
            "price": 21,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/11/14/2dc6e6223e00c7768f.jpg"
          },
          {
            "name": "雪域咸可可(首创)",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/07/22/41a076b04d8ccb4b05.jpg"
          },
          {
            "name": "雪域咸奶茶(首创)",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/02/06/bac6aced8c192a80ce.jpg"
          },
          {
            "name": "雪盐生椰茉莉",
            "price": 20,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/10/16/5070814060ad625f84.jpg"
          },
          {
            "name": "黑熔岩雪域",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/03/04/d22e864d739a474571.jpg"
          },
          {
            "name": "黑金冰可可",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/04/30/c024509063feea0a36.jpg"
          },
          {
            "name": "黑金咸摩卡",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/04/30/d88e4c4cdeb926f793.jpg"
          },
          {
            "name": "醇抹咸法酪(首创)",
            "price": 27,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/10/16/c56690c7134a3fce9c.jpg"
          },
          {
            "name": "圣胡安火凤梨",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/07/14/56bf25010653165b51.jpg"
          },
          {
            "name": "虎斑碎冰冻奶茶",
            "price": 24,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/07/28/ee5b409f990853014f.jpg"
          },
          {
            "name": "泰式冰茶",
            "price": 21,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/10/16/facc301282e0dd3798.jpg"
          },
          {
            "name": "泰式咸法酪(首创)",
            "price": 24,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/02/06/df14cbbfe845349ece.jpg"
          },
          {
            "name": "黑丸泰式咸法酪(首创)",
            "price": 27,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/10/16/3a84cea87525fc061f.jpg"
          },
          {
            "name": "黑熔岩泰奶",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/02/06/7542a50ea5c3acf0d7.jpg"
          },
          {
            "name": "奶霜茶",
            "price": 18,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/11/14/674cc3d5ce07141ffa.jpg"
          },
          {
            "name": "鲜乳茶",
            "price": 18,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/11/14/6e4f239cadee217d20.jpg"
          }
        ]
      },
      "molly": {
        "name": "茉莉奶白",
        "logo": "🌿",
        "skus": [
          {
            "name": "针王香芋椰",
            "price": 20,
            "tags": [],
            "img": "images/molly/4.jpg"
          },
          {
            "name": "冰淇淋针王香芋椰",
            "price": 23,
            "tags": [],
            "img": "images/molly/5.jpg"
          },
          {
            "name": "开心果茉莉椰",
            "price": 20,
            "tags": [],
            "img": "images/molly/8.jpg"
          },
          {
            "name": "白兰",
            "price": 17,
            "tags": [],
            "img": "images/molly/9.jpg"
          },
          {
            "name": "抹茶白兰",
            "price": 23,
            "tags": [],
            "img": "images/molly/10.jpg"
          },
          {
            "name": "抹茶茉莉咸酪乳",
            "price": 21,
            "tags": [],
            "img": "images/molly/11.jpg"
          },
          {
            "name": "茉莉薄巧",
            "price": 20,
            "tags": [],
            "img": "images/molly/12.jpg"
          },
          {
            "name": "针王葡萄咸酪乳",
            "price": 21,
            "tags": [],
            "img": "images/molly/17.jpg"
          },
          {
            "name": "针王苹果咸酪乳",
            "price": 21,
            "tags": [],
            "img": "images/molly/18.jpg"
          },
          {
            "name": "抹茶白兰",
            "price": 23,
            "tags": [],
            "img": "images/molly/19.jpg"
          },
          {
            "name": "抹茶针王",
            "price": 23,
            "tags": [],
            "img": "images/molly/20.jpg"
          },
          {
            "name": "抹茶茉莉咸酪乳",
            "price": 21,
            "tags": [],
            "img": "images/molly/21.jpg"
          },
          {
            "name": "抹茶栀子咸酪乳",
            "price": 22,
            "tags": [],
            "img": "images/molly/22.jpg"
          },
          {
            "name": "抹茶白兰咸酪乳",
            "price": 23,
            "tags": [],
            "img": "images/molly/23.jpg"
          },
          {
            "name": "开心果茉莉椰",
            "price": 20,
            "tags": [],
            "img": "images/molly/24.jpg"
          },
          {
            "name": "开心小兰花",
            "price": 21,
            "tags": [],
            "img": "images/molly/25.jpg"
          },
          {
            "name": "茉莉奶白",
            "price": 16,
            "tags": [],
            "img": "images/molly/26.jpg"
          },
          {
            "name": "茉莉针王",
            "price": 17,
            "tags": [],
            "img": "images/molly/27.jpg"
          },
          {
            "name": "白兰",
            "price": 17,
            "tags": [],
            "img": "images/molly/28.jpg"
          },
          {
            "name": "栀子奶白",
            "price": 16,
            "tags": [],
            "img": "images/molly/29.jpg"
          }
        ]
      },
      "yulian": {
        "name": "裕莲茶楼",
        "logo": "🏮",
        "skus": [
          {
            "name": "糖心凤梨酪茶拿铁",
            "price": 26,
            "tags": [],
            "img": "images/yulian/2.jpg"
          },
          {
            "name": "大凉山柴煎焙茶茶",
            "price": 24,
            "tags": [],
            "img": "images/yulian/3.jpg"
          },
          {
            "name": "马六甲椰糖珍珠牛乳",
            "price": 23,
            "tags": [],
            "img": "images/yulian/9.jpg"
          },
          {
            "name": "特浓茶钻琥珀奶",
            "price": 24,
            "tags": [],
            "img": "images/yulian/11.jpg"
          },
          {
            "name": "鹤顶红茶(茶香拿铁)",
            "price": 20,
            "tags": [],
            "img": "images/yulian/13.jpg"
          },
          {
            "name": "南澳岛·冲浪鸳鸯",
            "price": 25,
            "tags": [],
            "img": "images/yulian/17.jpg"
          },
          {
            "name": "鹤顶红茶(茶香拿铁)",
            "price": 20,
            "tags": [],
            "img": "images/yulian/18.jpg"
          },
          {
            "name": "九窨茉莉(茶香拿铁)",
            "price": 25,
            "tags": [],
            "img": "images/yulian/19.jpg"
          },
          {
            "name": "四季油切乌龙(茶香拿铁)",
            "price": 25,
            "tags": [],
            "img": "images/yulian/20.jpg"
          },
          {
            "name": "大凉山柴煎焙茶茶",
            "price": 24,
            "tags": [],
            "img": "images/yulian/21.jpg"
          },
          {
            "name": "宋种单丛(茶香拿铁)",
            "price": 20,
            "tags": [],
            "img": "images/yulian/22.jpg"
          },
          {
            "name": "一瓮红袍(茶香拿铁)",
            "price": 25,
            "tags": [],
            "img": "images/yulian/23.jpg"
          }
        ]
      },
      "koi": {
        "name": "KOI",
        "logo": "🧋",
        "skus": [
          {
            "name": "香草籽冰淇淋抹茶奶茶",
            "price": 26,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/07/22/5686e90917a6e52321.jpg"
          },
          {
            "name": "烤糖粉粿冬瓜金乌龙奶茶",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/06/10/5619aeba5d9543e2b9.jpg"
          },
          {
            "name": "黄金珍奶",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2023/07/14/1d22939950795024fc.jpg"
          },
          {
            "name": "饼干奶茶",
            "price": 28,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/10/29/699e6ca82afc929ca7.jpg"
          },
          {
            "name": "浆果乳酪奶绿",
            "price": 28,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/10/29/c91f03fccf880d3c58.jpg"
          },
          {
            "name": "布蕾咸芝士奶绿",
            "price": 26,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/04/08/e4321d42d90a07ea5b.jpg"
          },
          {
            "name": "比利时酥酪金乌龙奶茶",
            "price": 26,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/10/29/cc397b864efb124f2d.jpg"
          },
          {
            "name": "炒米荞麦乌龙咸奶茶",
            "price": 24,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/03/04/30a06ca38809216950.jpg"
          },
          {
            "name": "波霸奶茶",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2023/07/14/82540b6726a1a8a94a.jpg"
          },
          {
            "name": "比利时酥酪奶茶",
            "price": 26,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/10/29/c4d8018912329d03f3.jpg"
          },
          {
            "name": "酥酪浆果夹心奶绿",
            "price": 30,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/10/29/103e079ab34e665715.jpg"
          },
          {
            "name": "酥酪多莓果夹心奶绿",
            "price": 30,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/04/08/c789a80d83287b8864.jpg"
          },
          {
            "name": "酥酪芒果夹心奶绿",
            "price": 30,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/10/29/9b0f88c6a4fbbf8fa9.jpg"
          },
          {
            "name": "多莓果乳酪奶绿",
            "price": 28,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/04/08/57f40033ba7c5dc665.jpg"
          },
          {
            "name": "水蜜桃乳酪奶绿",
            "price": 28,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/10/29/e81284d9cbec5b697f.jpg"
          },
          {
            "name": "芒果乳酪奶绿",
            "price": 28,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/10/29/48db465cec1c6847d2.jpg"
          },
          {
            "name": "葡萄乳酪奶绿",
            "price": 28,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/10/29/edc8ec1f622dd1c562.jpg"
          },
          {
            "name": "金乌龙咸拿铁",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/04/12/a22d7fb972d6017624.png"
          },
          {
            "name": "茶拿铁",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2024/08/08/409825ca6641485ae7.jpg"
          },
          {
            "name": "芋圆红茶拿铁",
            "price": 26,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2024/08/08/ddbe3ea752640b20f6.jpg"
          },
          {
            "name": "溪谷红叶拿铁",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2024/08/08/918dbd56b2ea397525.jpg"
          },
          {
            "name": "金乌龙咸奶茶",
            "price": 20,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/04/12/6e8aa504e5afe8f0e6.png"
          },
          {
            "name": "咸芝士奶绿",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/07/16/9754ac579adf46e7ce.jpg"
          },
          {
            "name": "阿萨姆奶茶",
            "price": 20,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2023/07/14/b6aae6bc3ca6651dd6.jpg"
          }
        ]
      },
      "heytea": {
        "name": "喜茶",
        "logo": "🟣",
        "skus": [
          {
            "name": "金韵苹果人参果",
            "price": 23,
            "tags": [],
            "img": "images/heytea/4.jpg"
          },
          {
            "name": "烤黑糖波波牛乳茶",
            "price": 19,
            "tags": [],
            "img": "images/heytea/13.jpg"
          },
          {
            "name": "嫣红牛乳茶",
            "price": 15,
            "tags": [],
            "img": "images/heytea/19.jpg"
          },
          {
            "name": "芝芝绿妍茶后(首创)",
            "price": 13,
            "tags": [],
            "img": "images/heytea/21.jpg"
          },
          {
            "name": "小奶茉",
            "price": 13,
            "tags": [],
            "img": "images/heytea/22.jpg"
          },
          {
            "name": "轻芝多肉葡萄(首创)",
            "price": 19,
            "tags": [],
            "img": "images/heytea/28.jpg"
          },
          {
            "name": "烤黑糖波波牛乳茶",
            "price": 19,
            "tags": [],
            "img": "images/heytea/34.jpg"
          },
          {
            "name": "烤黑糖波波牛乳(首创)",
            "price": 19,
            "tags": [],
            "img": "images/heytea/35.jpg"
          },
          {
            "name": "咸酪厚抹",
            "price": 19,
            "tags": [],
            "img": "images/heytea/36.jpg"
          }
        ]
      },
      "yidiandian": {
        "name": "一点点",
        "logo": "🔴",
        "skus": [
          {
            "name": "特浓抹茶奶茶玛奇朵",
            "price": 18,
            "tags": [],
            "img": "images/yidiandian/3.jpg"
          },
          {
            "name": "抹茶奶茶",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/4.jpg"
          },
          {
            "name": "藏青盐咸奶绿",
            "price": 13,
            "tags": [],
            "img": "images/yidiandian/8.jpg"
          },
          {
            "name": "冰淇淋红茶",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/9.jpg"
          },
          {
            "name": "QQ美莓奶茶",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/10.jpg"
          },
          {
            "name": "奶绿装芒",
            "price": 16,
            "tags": [],
            "img": "images/yidiandian/11.jpg"
          },
          {
            "name": "波霸奶茶",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/12.jpg"
          },
          {
            "name": "四季奶青",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/13.jpg"
          },
          {
            "name": "A2牛乳红茶",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/15.jpg"
          },
          {
            "name": "芭乐奶绿",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/18.jpg"
          },
          {
            "name": "QQ美莓奶茶",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/19.jpg"
          },
          {
            "name": "奶绿装芒",
            "price": 16,
            "tags": [],
            "img": "images/yidiandian/20.jpg"
          },
          {
            "name": "甜橙奶绿",
            "price": 16,
            "tags": [],
            "img": "images/yidiandian/21.jpg"
          },
          {
            "name": "薄荷奶绿",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/22.jpg"
          },
          {
            "name": "苹果奶绿",
            "price": 14,
            "tags": [],
            "img": "images/yidiandian/23.jpg"
          },
          {
            "name": "蔓越莓奶绿",
            "price": 13,
            "tags": [],
            "img": "images/yidiandian/24.jpg"
          },
          {
            "name": "草莓森林",
            "price": 18,
            "tags": [],
            "img": "images/yidiandian/25.jpg"
          },
          {
            "name": "藏青盐咸奶绿",
            "price": 13,
            "tags": [],
            "img": "images/yidiandian/26.jpg"
          },
          {
            "name": "冰淇淋红茶",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/27.jpg"
          },
          {
            "name": "重焙奶乌(龙·重一点)",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/28.jpg"
          },
          {
            "name": "四季奶青",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/29.jpg"
          },
          {
            "name": "六窨茉莉奶绿",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/30.jpg"
          },
          {
            "name": "红茶玛奇朵",
            "price": 14,
            "tags": [],
            "img": "images/yidiandian/31.jpg"
          },
          {
            "name": "阿华田",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/32.jpg"
          },
          {
            "name": "奶茶",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/33.jpg"
          },
          {
            "name": "黑糖粉粿奶乌",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/34.jpg"
          },
          {
            "name": "波霸奶茶",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/35.jpg"
          },
          {
            "name": "波霸奶绿",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/37.jpg"
          },
          {
            "name": "小珍珠奶茶",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/38.jpg"
          },
          {
            "name": "布丁奶茶",
            "price": 16,
            "tags": [],
            "img": "images/yidiandian/39.jpg"
          },
          {
            "name": "椰果奶茶",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/40.jpg"
          },
          {
            "name": "A2牛乳红茶",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/45.jpg"
          },
          {
            "name": "草莓A2牛乳绿茶",
            "price": 18,
            "tags": [],
            "img": "images/yidiandian/46.jpg"
          },
          {
            "name": "A2牛乳四季春茶",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/47.jpg"
          }
        ]
      },
      "o2": {
        "name": "O2",
        "logo": "🫧",
        "skus": [
          {
            "name": "牛油果芒芒甘露",
            "price": 26,
            "tags": [],
            "img": "images/o2/30.jpg"
          },
          {
            "name": "芭乐鲜奶昔",
            "price": 22,
            "tags": [],
            "img": "images/o2/42.jpg"
          },
          {
            "name": "芒果鲜奶",
            "price": 20,
            "tags": [],
            "img": "images/o2/43.jpg"
          },
          {
            "name": "牛油果鲜奶",
            "price": 28,
            "tags": [],
            "img": "images/o2/44.jpg"
          },
          {
            "name": "红龙果酸奶",
            "price": 18,
            "tags": [],
            "img": "images/o2/45.jpg"
          },
          {
            "name": "杨枝甘露",
            "price": 19,
            "tags": [],
            "img": "images/o2/46.jpg"
          }
        ]
      },
      "kenyue": {
        "name": "肯悦咖啡",
        "logo": "KY",
        "skus": [
          {
            "name": "黑糖珍珠奶茶",
            "price": 17,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003502__ALL__L__20260605091326465.jpg"
          },
          {
            "name": "凤梨酥风味浓浓抹茶拿铁(不含咖啡)",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003307__ALL__L__20260611151947063.jpg"
          },
          {
            "name": "浓浓抹茶生椰拿铁(不含咖啡)",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002447__ALL__L__20260402145402023.jpg"
          },
          {
            "name": "粉桃浓浓抹茶拿铁(不含咖啡)",
            "price": 23,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002414__ALL__L__20260402145401930.jpg"
          }
        ],
        "logoImg": "images/logos/kenyue.jpg"
      }
    }
  },
  "fruittea": {
    "label": "果茶",
    "emoji": "🍹",
    "brands": {
      "starbucks": {
        "name": "星巴克",
        "logo": "🟢",
        "skus": [
          {
            "name": "杭青映夏冰摇茶",
            "price": 32,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/a3b646cc055e41610eece92d46730981147906.jpg"
          },
          {
            "name": "星星淘梨冰摇茶",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/3e845a0b8dc581fe9a59c9a41f002e15150369.jpg"
          },
          {
            "name": "冰摇桃桃乌龙茶",
            "price": 31,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/65b23ac5e22f3ef06455e1cc3265dc81130411.jpg"
          },
          {
            "name": "冰摇红莓黑加仑茶",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/e6fb173edc2ec600f93db43647f76aca149853.jpg"
          },
          {
            "name": "冰摇柠檬茶",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/5f2e038ea224126c7e2429539c944832171886.png"
          },
          {
            "name": "雾晓冰摇茶",
            "price": 37,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/e974666e1ed6178bfca6c9427f7a9f07115855.jpg"
          }
        ]
      },
      "mstand": {
        "name": "M Stand",
        "logo": "M",
        "skus": [
          {
            "name": "超大杯山葡萄芝士云朵",
            "price": 38,
            "tags": [],
            "img": "images/mstand/7.jpg"
          },
          {
            "name": "超大杯杨梅荔枝气泡饮",
            "price": 38,
            "tags": [],
            "img": "images/mstand/9.jpg"
          },
          {
            "name": "超大杯冰摇青芒油柑茶",
            "price": 38,
            "tags": [],
            "img": "images/mstand/12.jpg"
          },
          {
            "name": "超大杯青芒话梅气泡",
            "price": 38,
            "tags": [],
            "img": "images/mstand/13.jpg"
          },
          {
            "name": "超大杯青芒甘蔗气泡特饮",
            "price": 38,
            "tags": [],
            "img": "images/mstand/14.jpg"
          },
          {
            "name": "超大杯咸话梅柠檬气泡",
            "price": 38,
            "tags": [],
            "img": "images/mstand/15.jpg"
          },
          {
            "name": "超大杯黄杏冰茶",
            "price": 38,
            "tags": [],
            "img": "images/mstand/21.jpg"
          },
          {
            "name": "超大杯青麦草",
            "price": 38,
            "tags": [],
            "img": "images/mstand/22.jpg"
          },
          {
            "name": "超大杯山竹柠檬白月光",
            "price": 38,
            "tags": [],
            "img": "images/mstand/23.jpg"
          },
          {
            "name": "冰摇青杨桃油柑茶",
            "price": 36,
            "tags": [],
            "img": "images/mstand/47.jpg"
          },
          {
            "name": "山葡萄芝士云朵",
            "price": 36,
            "tags": [],
            "img": "images/mstand/48.jpg"
          },
          {
            "name": "杨梅荔枝气泡饮",
            "price": 36,
            "tags": [],
            "img": "images/mstand/49.jpg"
          },
          {
            "name": "冰摇青芒油柑茶",
            "price": 36,
            "tags": [],
            "img": "images/mstand/50.jpg"
          },
          {
            "name": "青芒话梅气泡",
            "price": 36,
            "tags": [],
            "img": "images/mstand/51.jpg"
          },
          {
            "name": "青芒甘蔗气泡特饮",
            "price": 36,
            "tags": [],
            "img": "images/mstand/57.jpg"
          },
          {
            "name": "话梅椰青云朵",
            "price": 36,
            "tags": [],
            "img": "images/mstand/58.jpg"
          },
          {
            "name": "咸话梅柠檬气泡",
            "price": 36,
            "tags": [],
            "img": "images/mstand/59.jpg"
          },
          {
            "name": "山竹柠檬白月光",
            "price": 36,
            "tags": [],
            "img": "images/mstand/60.jpg"
          },
          {
            "name": "黄杏冰茶",
            "price": 36,
            "tags": [],
            "img": "images/mstand/61.jpg"
          },
          {
            "name": "青麦草",
            "price": 36,
            "tags": [],
            "img": "images/mstand/62.jpg"
          }
        ]
      },
      "luckin": {
        "name": "瑞幸",
        "logo": "🔵",
        "skus": [
          {
            "name": "大菠萝海盐气泡水",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/186337bc022e2b6c7fdf45f3768153bb353914.jpg"
          },
          {
            "name": "手打鲜切柠檬茶（超大杯）",
            "price": 20.7,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/692976d1d4974f314e43b78307ea10ba928328.png"
          },
          {
            "name": "柚C冰茶",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/c699053b1b6cc4f5df86255981317dc7711876.png"
          },
          {
            "name": "橙C冰茶",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/bc678c0df114afe52e8d0d460f0ed60f997186.png"
          },
          {
            "name": "橙C冰茶-冰",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/bc678c0df114afe52e8d0d460f0ed60f997186.png"
          },
          {
            "name": "百香果C冰茶",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/d2e8c0972546705285cecdf6bf051325814678.png"
          },
          {
            "name": "百香果凤梨气泡水",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/bf24da6bd0143c8ba7175773c968d035351064.jpg"
          },
          {
            "name": "苹果C冰茶",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/92f008b6f945d05fe5c66ffa50f4a7fd769906.png"
          },
          {
            "name": "葡萄冰茶",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/e77ea6ce0f9429d8c6b0cf3dce209b07825690.png"
          },
          {
            "name": "葡萄鲜切柠檬茶 （超大杯）",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/880904ca5aedce3b903a147be8226f9e855186.png"
          },
          {
            "name": "小青桔C冰茶",
            "price": 19,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/18751478b0595a74e1e7043e3d70670f870181.png"
          },
          {
            "name": "羽衣轻体果蔬茶",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/xianfu/e8f899b4bb2421bfaca0f61767eaec83757019.png"
          },
          {
            "name": "羽衣轻体果蔬茶（超大杯）",
            "price": 22.9,
            "tags": [],
            "img": "https://p1.meituan.net/xianfu/90a5aa68fd830f41341b1926961688b1829957.png"
          }
        ]
      },
      "guming": {
        "name": "古茗",
        "logo": "🟡",
        "skus": [
          {
            "name": "泰橘冰茶",
            "price": 12,
            "tags": [],
            "img": "images/guming/4.jpg"
          },
          {
            "name": "桃桃冰冰李",
            "price": 13,
            "tags": [],
            "img": "images/guming/6.jpg"
          },
          {
            "name": "杨枝甘露轻盈版",
            "price": 16,
            "tags": [],
            "img": "images/guming/8.jpg"
          },
          {
            "name": "超A芝士葡萄",
            "price": 20,
            "tags": [],
            "img": "images/guming/9.jpg"
          },
          {
            "name": "桃桃冰冰李",
            "price": 13,
            "tags": [],
            "img": "images/guming/28.jpg"
          },
          {
            "name": "杨枝甘露轻盈版",
            "price": 16,
            "tags": [],
            "img": "images/guming/29.jpg"
          },
          {
            "name": "甜心芭乐葡",
            "price": 17,
            "tags": [],
            "img": "images/guming/30.jpg"
          },
          {
            "name": "超A多肉葡萄",
            "price": 19,
            "tags": [],
            "img": "images/guming/31.jpg"
          },
          {
            "name": "超A芝士葡萄",
            "price": 20,
            "tags": [],
            "img": "images/guming/32.jpg"
          },
          {
            "name": "青橘柠檬水",
            "price": 4.9,
            "tags": [],
            "img": "images/guming/33.jpg"
          },
          {
            "name": "百香双重奏",
            "price": 12,
            "tags": [],
            "img": "images/guming/34.jpg"
          },
          {
            "name": "泰橘冰茶",
            "price": 12,
            "tags": [],
            "img": "images/guming/35.jpg"
          },
          {
            "name": "青橘芭乐冰冰茶",
            "price": 12,
            "tags": [],
            "img": "images/guming/37.jpg"
          },
          {
            "name": "曲香茉莉",
            "price": 7,
            "tags": [],
            "img": "images/guming/47.jpg"
          },
          {
            "name": "四季沁春",
            "price": 7,
            "tags": [],
            "img": "images/guming/48.jpg"
          }
        ]
      },
      "otlc": {
        "name": "OT另茶",
        "logo": "🍃",
        "skus": [
          {
            "name": "冰奶油莳萝青苹果",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/07/14/f2af31b8213582989f.jpg"
          },
          {
            "name": "氧气油柑青苹果",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/07/14/101e6d1f3285536b09.jpg"
          },
          {
            "name": "火凤梨冰茉莉",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/07/14/e49804d4b1cd3b618a.jpg"
          },
          {
            "name": "菠萝冰萃肯尼亚",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/07/28/77eb30b34b40679990.jpg"
          },
          {
            "name": "虎斑手捣冻柠茶",
            "price": 21,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/07/28/fab562f5c15bc9814f.jpg"
          },
          {
            "name": "黑凤梨椰子冰",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/07/14/0982979f9fd65d2aaf.jpg"
          },
          {
            "name": "清茶",
            "price": 13,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/11/14/b6084a313ccb4067ff.jpg"
          },
          {
            "name": "经典酒鬼鲜柠茶",
            "price": 21,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/11/14/cd57ebd585d8547b29.jpg"
          },
          {
            "name": "茉莉山柚鲜柠茶",
            "price": 21,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/11/14/380763a7c358fd0454.jpg"
          },
          {
            "name": "血橙茉莉鲜柠茶",
            "price": 21,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2025/10/16/0c4437fa78dc4c3780.jpg"
          },
          {
            "name": "花椰芒",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/04/20/a0fc56a30108938ef0.jpg"
          },
          {
            "name": "鲜芒清抹生椰",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s204639/2026/04/20/32f3fd332fbf81c5a5.jpg"
          }
        ]
      },
      "molly": {
        "name": "茉莉奶白",
        "logo": "🌿",
        "skus": [
          {
            "name": "白兰与树番茄",
            "price": 20,
            "tags": [],
            "img": "images/molly/2.jpg"
          },
          {
            "name": "针王香柠",
            "price": 19,
            "tags": [],
            "img": "images/molly/3.jpg"
          },
          {
            "name": "针王葡萄",
            "price": 19,
            "tags": [],
            "img": "images/molly/6.jpg"
          },
          {
            "name": "针王苹果",
            "price": 19,
            "tags": [],
            "img": "images/molly/7.jpg"
          },
          {
            "name": "针王苹果",
            "price": 19,
            "tags": [],
            "img": "images/molly/13.jpg"
          },
          {
            "name": "针王葡萄",
            "price": 19,
            "tags": [],
            "img": "images/molly/14.jpg"
          },
          {
            "name": "针王葡萄（热）",
            "price": 19,
            "tags": [],
            "img": "images/molly/15.jpg"
          },
          {
            "name": "针王苹果（热）",
            "price": 19,
            "tags": [],
            "img": "images/molly/16.jpg"
          },
          {
            "name": "栀子冰茶",
            "price": 12,
            "tags": [],
            "img": "images/molly/30.jpg"
          },
          {
            "name": "针王冰茶",
            "price": 13,
            "tags": [],
            "img": "images/molly/31.jpg"
          },
          {
            "name": "青芒黄皮冰茶",
            "price": 19,
            "tags": [],
            "img": "images/molly/32.jpg"
          },
          {
            "name": "青芒香柚橄榄",
            "price": 19,
            "tags": [],
            "img": "images/molly/33.jpg"
          },
          {
            "name": "奇兰葡萄冰茶",
            "price": 15,
            "tags": [],
            "img": "images/molly/34.jpg"
          },
          {
            "name": "奇兰奶霜葡萄",
            "price": 20,
            "tags": [],
            "img": "images/molly/35.jpg"
          },
          {
            "name": "粉红苹果茉莉椰",
            "price": 18,
            "tags": [],
            "img": "images/molly/36.jpg"
          },
          {
            "name": "冰淇淋苹果茉莉椰",
            "price": 21,
            "tags": [],
            "img": "images/molly/37.jpg"
          },
          {
            "name": "茉莉椰冰茶",
            "price": 17,
            "tags": [],
            "img": "images/molly/38.jpg"
          }
        ]
      },
      "yulian": {
        "name": "裕莲茶楼",
        "logo": "🏮",
        "skus": [
          {
            "name": "金钻·冰橙茶",
            "price": 20,
            "tags": [],
            "img": "images/yulian/4.jpg"
          },
          {
            "name": "南投果香四季乌龙",
            "price": 42,
            "tags": [],
            "img": "images/yulian/5.jpg"
          },
          {
            "name": "乌崇山老树蜜兰",
            "price": 42,
            "tags": [],
            "img": "images/yulian/6.jpg"
          },
          {
            "name": "蓝莓冰萃乌龙",
            "price": 25,
            "tags": [],
            "img": "images/yulian/7.jpg"
          },
          {
            "name": "闽老煮红杏冰茶",
            "price": 23,
            "tags": [],
            "img": "images/yulian/10.jpg"
          },
          {
            "name": "版纳溏心桃胶·临沧滇红",
            "price": 28,
            "tags": [],
            "img": "images/yulian/12.jpg"
          },
          {
            "name": "鹤顶红茶(柠檬冰萃)",
            "price": 20,
            "tags": [],
            "img": "images/yulian/14.jpg"
          },
          {
            "name": "版纳溏心桃胶·岩韵大红袍",
            "price": 28,
            "tags": [],
            "img": "images/yulian/15.jpg"
          },
          {
            "name": "版纳溏心桃胶·临沧滇红",
            "price": 28,
            "tags": [],
            "img": "images/yulian/16.jpg"
          },
          {
            "name": "YUZU柚子冰茶",
            "price": 26,
            "tags": [],
            "img": "images/yulian/24.jpg"
          },
          {
            "name": "青柑秋梨琥珀冰",
            "price": 27,
            "tags": [],
            "img": "images/yulian/26.jpg"
          },
          {
            "name": "四季油切乌龙(柠檬冰萃)",
            "price": 20,
            "tags": [],
            "img": "images/yulian/27.jpg"
          },
          {
            "name": "普宁梅子单枞",
            "price": 20,
            "tags": [],
            "img": "images/yulian/28.jpg"
          },
          {
            "name": "宋种单丛(柠檬冰萃)",
            "price": 20,
            "tags": [],
            "img": "images/yulian/29.jpg"
          },
          {
            "name": "九窨茉莉(柠檬冰萃)",
            "price": 25,
            "tags": [],
            "img": "images/yulian/30.jpg"
          },
          {
            "name": "鹤顶红茶(柠檬冰萃)",
            "price": 20,
            "tags": [],
            "img": "images/yulian/31.jpg"
          },
          {
            "name": "一瓮红袍(柠檬冰萃)",
            "price": 25,
            "tags": [],
            "img": "images/yulian/32.jpg"
          }
        ]
      },
      "koi": {
        "name": "KOI",
        "logo": "🧋",
        "skus": [
          {
            "name": "杨桃酸木瓜果茶",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/08/03/f9ff199e5d6adbfead.jpg"
          },
          {
            "name": "香草籽冰淇淋冬瓜金乌龙",
            "price": 23,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/07/22/344905ecc206035150.jpg"
          },
          {
            "name": "烤糖粉粿冬瓜柠檬茶",
            "price": 22,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/05/01/54d85431dd6faec915.jpg"
          },
          {
            "name": "烤糖粉粿冬瓜金乌龙",
            "price": 18,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/05/01/b52e1f89a52fa35839.jpg"
          },
          {
            "name": "青柠香茶",
            "price": 22,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2024/08/25/9f2418b6c67c322116.jpg"
          },
          {
            "name": "水蜜桃果茶",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2023/07/14/5721c8735ddddbad1b.jpg"
          },
          {
            "name": "芒果果茶",
            "price": 22,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2023/07/14/61a9fd23931b954dd2.jpg"
          },
          {
            "name": "葡萄果茶",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2023/07/14/2e659d2351e37c78e2.jpg"
          }
        ]
      },
      "heytea": {
        "name": "喜茶",
        "logo": "🟣",
        "skus": [
          {
            "name": "奇香黄皮桃",
            "price": 22,
            "tags": [],
            "img": "images/heytea/2.jpg"
          },
          {
            "name": "多肉黄皮葡",
            "price": 22,
            "tags": [],
            "img": "images/heytea/3.jpg"
          },
          {
            "name": "清爽芭乐提(白芭乐)",
            "price": 19,
            "tags": [],
            "img": "images/heytea/5.jpg"
          },
          {
            "name": "多肉葡萄(首创)",
            "price": 18,
            "tags": [],
            "img": "images/heytea/6.jpg"
          },
          {
            "name": "多肉桃李(首创)",
            "price": 17,
            "tags": [],
            "img": "images/heytea/7.jpg"
          },
          {
            "name": "多肉桃李(首创)",
            "price": 17,
            "tags": [],
            "img": "images/heytea/8.jpg"
          },
          {
            "name": "杨桃三重甘",
            "price": 22,
            "tags": [],
            "img": "images/heytea/9.jpg"
          },
          {
            "name": "奇兰苹果杏(首创)",
            "price": 19,
            "tags": [],
            "img": "images/heytea/10.jpg"
          },
          {
            "name": "清爽芭乐提(白芭乐)",
            "price": 19,
            "tags": [],
            "img": "images/heytea/11.jpg"
          },
          {
            "name": "去火*纤体瓶(首创)",
            "price": 19,
            "tags": [],
            "img": "images/heytea/12.jpg"
          },
          {
            "name": "杨桃三重甘",
            "price": 22,
            "tags": [],
            "img": "images/heytea/14.jpg"
          },
          {
            "name": "奇兰苹果杏(首创)",
            "price": 19,
            "tags": [],
            "img": "images/heytea/15.jpg"
          },
          {
            "name": "奇兰芭乐莲雾(首创)",
            "price": 23,
            "tags": [],
            "img": "images/heytea/16.jpg"
          },
          {
            "name": "纯绿妍茶后",
            "price": 8,
            "tags": [],
            "img": "images/heytea/17.jpg"
          },
          {
            "name": "奇兰粉芭乐(首创)",
            "price": 21,
            "tags": [],
            "img": "images/heytea/18.jpg"
          },
          {
            "name": "轻酵黄皮康普茶",
            "price": 22,
            "tags": [],
            "img": "images/heytea/20.jpg"
          },
          {
            "name": "清爽芭乐提(白芭乐)",
            "price": 19,
            "tags": [],
            "img": "images/heytea/23.jpg"
          },
          {
            "name": "多肉葡萄(首创)",
            "price": 18,
            "tags": [],
            "img": "images/heytea/24.jpg"
          },
          {
            "name": "多肉桃李(首创)",
            "price": 17,
            "tags": [],
            "img": "images/heytea/25.jpg"
          },
          {
            "name": "椰椰芒芒",
            "price": 15,
            "tags": [],
            "img": "images/heytea/26.jpg"
          },
          {
            "name": "芒芒甘露(首创)",
            "price": 18,
            "tags": [],
            "img": "images/heytea/27.jpg"
          },
          {
            "name": "绿妍轻柠茶(超大杯)",
            "price": 13,
            "tags": [],
            "img": "images/heytea/29.jpg"
          },
          {
            "name": "鸭喜香轻柠茶(超大杯)",
            "price": 13,
            "tags": [],
            "img": "images/heytea/30.jpg"
          },
          {
            "name": "去火*纤体瓶(首创)",
            "price": 19,
            "tags": [],
            "img": "images/heytea/31.jpg"
          },
          {
            "name": "羽衣纤体瓶(首创)",
            "price": 19,
            "tags": [],
            "img": "images/heytea/32.jpg"
          },
          {
            "name": "多肉芒芒",
            "price": 17,
            "tags": [],
            "img": "images/heytea/33.jpg"
          }
        ]
      },
      "yidiandian": {
        "name": "一点点",
        "logo": "🔴",
        "skus": [
          {
            "name": "百香芒芒绿",
            "price": 13,
            "tags": [],
            "img": "images/yidiandian/2.jpg"
          },
          {
            "name": "抹茶",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/5.jpg"
          },
          {
            "name": "芒果番茄绿",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/6.jpg"
          },
          {
            "name": "芒番了",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/7.jpg"
          },
          {
            "name": "苹果茉莉绿",
            "price": 11,
            "tags": [],
            "img": "images/yidiandian/14.jpg"
          },
          {
            "name": "只此猕猴桃",
            "price": 10.9,
            "tags": [],
            "img": "images/yidiandian/16.jpg"
          },
          {
            "name": "只此芒果青",
            "price": 10.9,
            "tags": [],
            "img": "images/yidiandian/17.jpg"
          },
          {
            "name": "招牌四季春+珍波椰",
            "price": 8,
            "tags": [],
            "img": "images/yidiandian/36.jpg"
          },
          {
            "name": "四季春茶",
            "price": 8,
            "tags": [],
            "img": "images/yidiandian/41.jpg"
          },
          {
            "name": "六窨茉莉绿茶",
            "price": 8,
            "tags": [],
            "img": "images/yidiandian/42.jpg"
          },
          {
            "name": "养乐多绿",
            "price": 15,
            "tags": [],
            "img": "images/yidiandian/43.jpg"
          },
          {
            "name": "锦鲤红茶",
            "price": 8,
            "tags": [],
            "img": "images/yidiandian/44.jpg"
          },
          {
            "name": "苹果茉莉绿",
            "price": 11,
            "tags": [],
            "img": "images/yidiandian/48.jpg"
          },
          {
            "name": "葡萄柚绿",
            "price": 14,
            "tags": [],
            "img": "images/yidiandian/49.jpg"
          },
          {
            "name": "六窨香柠绿",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/50.jpg"
          },
          {
            "name": "加油！薄荷柠",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/51.jpg"
          },
          {
            "name": "加油！柠橙绿",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/52.jpg"
          },
          {
            "name": "金桔柠檬",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/53.jpg"
          },
          {
            "name": "香柠养乐多",
            "price": 17,
            "tags": [],
            "img": "images/yidiandian/54.jpg"
          },
          {
            "name": "柠檬汁",
            "price": 12,
            "tags": [],
            "img": "images/yidiandian/55.jpg"
          },
          {
            "name": "葡萄柚汁",
            "price": 14,
            "tags": [],
            "img": "images/yidiandian/56.jpg"
          }
        ]
      },
      "o2": {
        "name": "O2",
        "logo": "🫧",
        "skus": [
          {
            "name": "鲜橙雪梨",
            "price": 20,
            "tags": [],
            "img": "images/o2/2.jpg"
          },
          {
            "name": "芭乐苹果雪梨",
            "price": 20,
            "tags": [],
            "img": "images/o2/3.jpg"
          },
          {
            "name": "莲雾雪梨",
            "price": 23,
            "tags": [],
            "img": "images/o2/4.jpg"
          },
          {
            "name": "爆汁葡萄凤梨维C",
            "price": 22,
            "tags": [],
            "img": "images/o2/5.jpg"
          },
          {
            "name": "爆汁葡萄绿",
            "price": 18,
            "tags": [],
            "img": "images/o2/6.jpg"
          },
          {
            "name": "爆汁芭乐葡（果蓉冰）",
            "price": 22,
            "tags": [],
            "img": "images/o2/7.jpg"
          },
          {
            "name": "芭乐苹果雪梨",
            "price": 20,
            "tags": [],
            "img": "images/o2/8.jpg"
          },
          {
            "name": "鲜橙雪梨",
            "price": 20,
            "tags": [],
            "img": "images/o2/9.jpg"
          },
          {
            "name": "鲜橙汁",
            "price": 21,
            "tags": [],
            "img": "images/o2/10.jpg"
          },
          {
            "name": "雪梨汁｜甘甜清润",
            "price": 17,
            "tags": [],
            "img": "images/o2/11.jpg"
          },
          {
            "name": "西瓜雪梨",
            "price": 17,
            "tags": [],
            "img": "images/o2/12.jpg"
          },
          {
            "name": "西瓜汁",
            "price": 17,
            "tags": [],
            "img": "images/o2/13.jpg"
          },
          {
            "name": "凤梨雪梨",
            "price": 20,
            "tags": [],
            "img": "images/o2/14.jpg"
          },
          {
            "name": "百香凤梨橙",
            "price": 23,
            "tags": [],
            "img": "images/o2/15.jpg"
          },
          {
            "name": "红龙果雪梨",
            "price": 19,
            "tags": [],
            "img": "images/o2/16.jpg"
          },
          {
            "name": "苹果胡萝卜雪梨",
            "price": 17,
            "tags": [],
            "img": "images/o2/17.jpg"
          },
          {
            "name": "芒果苹果雪梨",
            "price": 21,
            "tags": [],
            "img": "images/o2/18.jpg"
          },
          {
            "name": "牛油果鲜橙雪梨",
            "price": 27,
            "tags": [],
            "img": "images/o2/19.jpg"
          },
          {
            "name": "芒果鲜橙雪梨",
            "price": 22,
            "tags": [],
            "img": "images/o2/20.jpg"
          },
          {
            "name": "百香果雪梨",
            "price": 19,
            "tags": [],
            "img": "images/o2/21.jpg"
          },
          {
            "name": "百香果鲜橙",
            "price": 23,
            "tags": [],
            "img": "images/o2/22.jpg"
          },
          {
            "name": "柠檬雪梨",
            "price": 20,
            "tags": [],
            "img": "images/o2/23.jpg"
          },
          {
            "name": "雪梨青瓜",
            "price": 17,
            "tags": [],
            "img": "images/o2/24.jpg"
          },
          {
            "name": "鲜橙胡萝卜",
            "price": 20,
            "tags": [],
            "img": "images/o2/25.jpg"
          },
          {
            "name": "苹果雪梨",
            "price": 17,
            "tags": [],
            "img": "images/o2/26.jpg"
          },
          {
            "name": "鲜橙苹果",
            "price": 20,
            "tags": [],
            "img": "images/o2/27.jpg"
          },
          {
            "name": "牛油果雪梨",
            "price": 27,
            "tags": [],
            "img": "images/o2/28.jpg"
          },
          {
            "name": "多肉芒芒",
            "price": 21,
            "tags": [],
            "img": "images/o2/29.jpg"
          },
          {
            "name": "牛油果羽衣甘蓝",
            "price": 25,
            "tags": [],
            "img": "images/o2/31.jpg"
          },
          {
            "name": "芭乐牛油果",
            "price": 25,
            "tags": [],
            "img": "images/o2/32.jpg"
          },
          {
            "name": "萌宝活力·西瓜",
            "price": 14,
            "tags": [],
            "img": "images/o2/33.jpg"
          },
          {
            "name": "萌宝活力·鲜橙",
            "price": 18,
            "tags": [],
            "img": "images/o2/34.jpg"
          },
          {
            "name": "萌宝活力·鲜橙雪梨",
            "price": 17,
            "tags": [],
            "img": "images/o2/35.jpg"
          },
          {
            "name": "萌宝活力·苹果雪梨",
            "price": 14,
            "tags": [],
            "img": "images/o2/36.jpg"
          },
          {
            "name": "萌宝活力·芒果鲜橙雪梨",
            "price": 18,
            "tags": [],
            "img": "images/o2/37.jpg"
          },
          {
            "name": "萌宝活力·苹果胡萝卜雪梨",
            "price": 14,
            "tags": [],
            "img": "images/o2/38.jpg"
          },
          {
            "name": "莲雾雪梨",
            "price": 23,
            "tags": [],
            "img": "images/o2/39.jpg"
          },
          {
            "name": "超润杨桃轻",
            "price": 22,
            "tags": [],
            "img": "images/o2/40.jpg"
          },
          {
            "name": "怕上火杨桃",
            "price": 23,
            "tags": [],
            "img": "images/o2/41.jpg"
          },
          {
            "name": "一颗柠檬水（仅限冰饮）",
            "price": 11,
            "tags": [],
            "img": "images/o2/47.jpg"
          },
          {
            "name": "百香果柠檬（仅限冰饮）",
            "price": 14,
            "tags": [],
            "img": "images/o2/48.jpg"
          }
        ]
      },
      "kenyue": {
        "name": "肯悦咖啡",
        "logo": "KY",
        "skus": [
          {
            "name": "树番茄百香果特调果饮",
            "price": 16,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003696__ALL__L__20260723155916985.jpg"
          },
          {
            "name": "树番茄百香果特调茶",
            "price": 16,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003694__ALL__L__20260724142952547.jpg"
          },
          {
            "name": "爆汁三柠饮",
            "price": 16,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002954__ALL__L__20260127094404112.jpg"
          },
          {
            "name": "芒芒杨枝甘露",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003397__ALL__L__20260611151947584.jpg"
          },
          {
            "name": "超大杯爆汁三柠饮",
            "price": 19,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003547__ALL__L__20260611091546708.jpg"
          },
          {
            "name": "爆汁三柠浓浓抹茶(不含咖啡)",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002415__ALL__L__20260611152612027.jpg"
          },
          {
            "name": "苹果气泡浓浓抹茶",
            "price": 20,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002506__ALL__L__20260611152612104.jpg"
          },
          {
            "name": "爆汁苹果饮",
            "price": 16,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01002953__ALL__L__20260127094404073.jpg"
          },
          {
            "name": "红苹果冰茶",
            "price": 16,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003382__ALL__L__20260416132619588.jpg"
          },
          {
            "name": "红苹果金凤梨特调果饮",
            "price": 16,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003699__ALL__L__20260723155917298.jpg"
          },
          {
            "name": "红苹果金凤梨特调茶",
            "price": 16,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003697__ALL__L__20260724142952600.jpg"
          },
          {
            "name": "超大杯树番茄百香果特调气泡茶",
            "price": 19,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003705__ALL__L__20260723170408040.jpg"
          },
          {
            "name": "超大杯爆汁苹果饮",
            "price": 19,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003546__ALL__L__20260611091546647.jpg"
          },
          {
            "name": "超大杯红苹果金凤梨特调气泡茶",
            "price": 19,
            "tags": [],
            "img": "https://pcp-pic.hwwt8.com/1/01010/images/KG01003707__ALL__L__20260723170408220.jpg"
          }
        ],
        "logoImg": "images/logos/kenyue.jpg"
      }
    }
  },
  "other": {
    "label": "其他",
    "emoji": "🍦",
    "brands": {
      "starbucks": {
        "name": "星巴克",
        "logo": "🟢",
        "skus": [
          {
            "name": "抹茶可可碎片星冰乐®",
            "price": 34,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/b081c2a938384d1409d219d81b2147c4115008.jpg"
          },
          {
            "name": "抹茶星冰乐®",
            "price": 31,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/82df36771c0b30599d90e91d35ec82db109889.jpg"
          },
          {
            "name": "焙茶星冰乐",
            "price": 31,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/6b1d47a63caf53e0c65ca95afb3fae9f123055.jpg"
          },
          {
            "name": "米芝士软雪星冰乐",
            "price": 38,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/ede3ede47fc44baa3edcd15a2404ee97202732.jpg"
          },
          {
            "name": "意式开心果软雪星冰乐",
            "price": 38,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/804ea2a513e2df5a71add49fac1217c7184049.jpg"
          },
          {
            "name": "摩卡可可碎片星冰乐®",
            "price": 35,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/0a43e0261db0191455744a934f140763165920.png"
          },
          {
            "name": "焦糖咖啡星冰乐®",
            "price": 32,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/066984e3f5f3dd9baf8928b572b3d2f4133534.jpg"
          },
          {
            "name": "摩卡星冰乐®",
            "price": 32,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/7eb83d475a9c32ab29973b30e35da0a7111463.jpg"
          },
          {
            "name": "浓缩咖啡星冰乐®",
            "price": 32,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/21bcd8083fd581da514fadc17e62f3af141841.jpg"
          },
          {
            "name": "黄金奇异果果昔星冰乐",
            "price": 35,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/eedfa43cd8ad874287d0fc28d96e4d6c192590.jpg"
          },
          {
            "name": "红颜草莓星冰乐®",
            "price": 34,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/f0ae36c393b07f092564c8a8cc4429e8203879.jpg"
          },
          {
            "name": "比利时巧克力星冰乐®",
            "price": 34,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/efd8cce7dd2934dbe7206806bdc82d06209003.jpg"
          },
          {
            "name": "桃桃果冻星冰乐",
            "price": 34,
            "tags": [],
            "img": "https://p1.meituan.net/waimaiopenbucket/884670e13d7da903dc2bf8801d232846135395.jpg"
          },
          {
            "name": "芒果西番莲果茶星冰乐®",
            "price": 28,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/a2b17a0376cdef6855e641fe3563be47128909.jpg"
          },
          {
            "name": "香草风味星冰乐®",
            "price": 28,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/bd21e2b15ae91fcd606eae2659d2ea55103360.jpg"
          },
          {
            "name": "椰子好芒星冰乐",
            "price": 39,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/c0142fc834939680449e4478241a96a5143020.jpg"
          },
          {
            "name": "椰子可可香草星冰乐",
            "price": 39,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/c62cc59817238cbe4f3fedd4bd40030d138436.jpg"
          },
          {
            "name": "巧克力风味星冰乐®",
            "price": 31,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/b99671ed26b37668b30574bfdf9ee0ec28426.jpg"
          },
          {
            "name": "粉莓柠力生咖",
            "price": 34,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/97bee3fdf4ae418fe7a1a5c3a62de07e170359.jpg"
          },
          {
            "name": "原味蒸气奶",
            "price": 22,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/d7f06f82166cd3849c45e9dec00e490398837.jpg"
          },
          {
            "name": "香草味蒸气奶",
            "price": 25,
            "tags": [],
            "img": "https://p0.meituan.net/waimaiopenbucket/d7f06f82166cd3849c45e9dec00e490398837.jpg"
          }
        ]
      },
      "koi": {
        "name": "KOI",
        "logo": "🧋",
        "skus": [
          {
            "name": "芋圆牛奶",
            "price": 29,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2024/08/08/4b7c34eca3725196e9.jpg"
          },
          {
            "name": "红茶玛奇朵",
            "price": 20,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2023/07/14/cc68ce0d10674dd7c6.jpg"
          },
          {
            "name": "芒果绿茶玛奇朵",
            "price": 25,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2023/07/14/bdff8be461359645d6.jpg"
          },
          {
            "name": "阿萨姆红茶",
            "price": 15,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2023/07/14/3dc4d8844b8bbb8745.jpg"
          },
          {
            "name": "茉莉绿茶",
            "price": 15,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2024/06/03/a7d3d1ef1f9e3434ac.jpg"
          },
          {
            "name": "金乌龙",
            "price": 15,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2025/04/12/72b886e94f8e57790b.png"
          },
          {
            "name": "荞麦金乌龙",
            "price": 15,
            "tags": [],
            "img": "https://images.qmai.cn/s216627/2026/03/04/61649b68c5691df009.jpg"
          }
        ]
      }
    }
  }
};
