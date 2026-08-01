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
            "name": "石榴爆珠冰茶美式",
            "price": 42,
            "tags": [],
            "img": "images/starbucks/4.jpg"
          },
          {
            "name": "柚柚茉莉冰茶美式",
            "price": 42,
            "tags": [],
            "img": "images/starbucks/5.jpg"
          },
          {
            "name": "香草风味拿铁（不另加糖）",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/7.jpg"
          },
          {
            "name": "糯香斑斓风味拿铁（不另加糖）",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/8.jpg"
          },
          {
            "name": "莓莓风味拿铁（不另加糖）",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/9.jpg"
          },
          {
            "name": "玫瑰20拿铁（不另加糖）",
            "price": 39,
            "tags": [],
            "img": "images/starbucks/10.jpg"
          },
          {
            "name": "海盐焦糖风味馥芮白（不另加糖）",
            "price": 41,
            "tags": [],
            "img": "images/starbucks/11.jpg"
          },
          {
            "name": "香草风味高蛋白拿铁PRO",
            "price": 39,
            "tags": [],
            "img": "images/starbucks/12.jpg"
          },
          {
            "name": "海盐焦糖风味高蛋白拿铁PRO",
            "price": 39,
            "tags": [],
            "img": "images/starbucks/13.jpg"
          },
          {
            "name": "高蛋白拿铁PRO",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/14.jpg"
          },
          {
            "name": "玫瑰20轻甜奶油全冰美式",
            "price": 42,
            "tags": [],
            "img": "images/starbucks/16.jpg"
          },
          {
            "name": "玫瑰20拿铁",
            "price": 39,
            "tags": [],
            "img": "images/starbucks/17.jpg"
          },
          {
            "name": "玫瑰20美式",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/18.jpg"
          },
          {
            "name": "加浓全冰精萃美式",
            "price": 38,
            "tags": [],
            "img": "images/starbucks/20.jpg"
          },
          {
            "name": "轻甜奶油全冰美式",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/21.jpg"
          },
          {
            "name": "搅打稀奶油全冰美式",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/22.jpg"
          },
          {
            "name": "海盐焦糖风味美式",
            "price": 33,
            "tags": [],
            "img": "images/starbucks/23.jpg"
          },
          {
            "name": "星巴克美式咖啡",
            "price": 30,
            "tags": [],
            "img": "images/starbucks/24.jpg"
          },
          {
            "name": "加浓美式",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/25.jpg"
          },
          {
            "name": "拿铁",
            "price": 33,
            "tags": [],
            "img": "images/starbucks/26.jpg"
          },
          {
            "name": "星巴克馥芮白",
            "price": 38,
            "tags": [],
            "img": "images/starbucks/27.jpg"
          },
          {
            "name": "焦糖玛奇朵",
            "price": 37,
            "tags": [],
            "img": "images/starbucks/28.jpg"
          },
          {
            "name": "香草风味拿铁",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/29.jpg"
          },
          {
            "name": "榛果风味拿铁",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/30.jpg"
          },
          {
            "name": "浓郁咖啡拿铁",
            "price": 37,
            "tags": [],
            "img": "images/starbucks/31.jpg"
          },
          {
            "name": "摩卡",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/32.jpg"
          },
          {
            "name": "莓莓风味美式",
            "price": 33,
            "tags": [],
            "img": "images/starbucks/33.jpg"
          },
          {
            "name": "莓莓风味拿铁",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/34.jpg"
          },
          {
            "name": "糯香斑斓风味拿铁",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/35.jpg"
          },
          {
            "name": "糯香斑斓风味美式",
            "price": 33,
            "tags": [],
            "img": "images/starbucks/36.jpg"
          },
          {
            "name": "燕麦拿铁",
            "price": 33,
            "tags": [],
            "img": "images/starbucks/37.jpg"
          },
          {
            "name": "椰子丝绒燕麦拿铁",
            "price": 39,
            "tags": [],
            "img": "images/starbucks/38.jpg"
          },
          {
            "name": "燕麦焦糖玛奇朵",
            "price": 37,
            "tags": [],
            "img": "images/starbucks/39.jpg"
          },
          {
            "name": "红茶鸳鸯",
            "price": 39,
            "tags": [],
            "img": "images/starbucks/40.jpg"
          },
          {
            "name": "抹茶鸳鸯",
            "price": 39,
            "tags": [],
            "img": "images/starbucks/41.jpg"
          },
          {
            "name": "冷萃冰咖啡",
            "price": 37,
            "tags": [],
            "img": "images/starbucks/42.jpg"
          },
          {
            "name": "大溪地风情绵云冷萃",
            "price": 40,
            "tags": [],
            "img": "images/starbucks/43.jpg"
          },
          {
            "name": "金烘美式咖啡",
            "price": 30,
            "tags": [],
            "img": "images/starbucks/44.jpg"
          },
          {
            "name": "金烘馥芮白",
            "price": 38,
            "tags": [],
            "img": "images/starbucks/45.jpg"
          },
          {
            "name": "金烘拿铁",
            "price": 33,
            "tags": [],
            "img": "images/starbucks/46.jpg"
          },
          {
            "name": "海盐焦糖风味冰震浓缩",
            "price": 39,
            "tags": [],
            "img": "images/starbucks/47.jpg"
          },
          {
            "name": "大溪地香草风情冰震浓缩",
            "price": 39,
            "tags": [],
            "img": "images/starbucks/48.jpg"
          },
          {
            "name": "浓/小杯拿铁",
            "price": 29,
            "tags": [],
            "img": "images/starbucks/49.jpg"
          },
          {
            "name": "椰香浓/小杯拿铁",
            "price": 29,
            "tags": [],
            "img": "images/starbucks/50.jpg"
          },
          {
            "name": "摩卡可可碎片星冰乐",
            "price": 38,
            "tags": [],
            "img": "images/starbucks/57.jpg"
          },
          {
            "name": "焦糖咖啡星冰乐",
            "price": 35,
            "tags": [],
            "img": "images/starbucks/58.jpg"
          },
          {
            "name": "摩卡星冰乐",
            "price": 35,
            "tags": [],
            "img": "images/starbucks/59.jpg"
          },
          {
            "name": "浓缩咖啡星冰乐",
            "price": 35,
            "tags": [],
            "img": "images/starbucks/60.jpg"
          },
          {
            "name": "佛手柑柚冰摇美式",
            "price": 36,
            "tags": [],
            "img": "images/starbucks/65.jpg"
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
            "name": "小黄油美式（首创）",
            "price": 24,
            "tags": [],
            "img": "images/luckin/2.jpg"
          },
          {
            "name": "全冰黑巧美式",
            "price": 24,
            "tags": [],
            "img": "images/luckin/3.jpg"
          },
          {
            "name": "全冰奶酪美式",
            "price": 24,
            "tags": [],
            "img": "images/luckin/4.jpg"
          },
          {
            "name": "椰芙佳朵拿铁",
            "price": 24,
            "tags": [],
            "img": "images/luckin/7.jpg"
          },
          {
            "name": "百香果C美式",
            "price": 24,
            "tags": [],
            "img": "images/luckin/11.jpg"
          },
          {
            "name": "橙C美式（首创）",
            "price": 24,
            "tags": [],
            "img": "images/luckin/12.jpg"
          },
          {
            "name": "轻椰茉莉拿铁",
            "price": 24,
            "tags": [],
            "img": "images/luckin/14.jpg"
          },
          {
            "name": "标准美式",
            "price": 19,
            "tags": [],
            "img": "images/luckin/17.jpg"
          },
          {
            "name": "埃塞瑰夏冷萃",
            "price": 19,
            "tags": [],
            "img": "images/luckin/18.jpg"
          },
          {
            "name": "瑰夏云朵冷萃",
            "price": 25,
            "tags": [],
            "img": "images/luckin/19.jpg"
          },
          {
            "name": "埃塞金烘美式",
            "price": 19,
            "tags": [],
            "img": "images/luckin/20.jpg"
          },
          {
            "name": "深烘美式",
            "price": 19,
            "tags": [],
            "img": "images/luckin/21.jpg"
          },
          {
            "name": "加浓美式",
            "price": 22,
            "tags": [],
            "img": "images/luckin/22.jpg"
          },
          {
            "name": "茉莉花香美式",
            "price": 22,
            "tags": [],
            "img": "images/luckin/23.jpg"
          },
          {
            "name": "小黄油拿铁（首创）",
            "price": 25,
            "tags": [],
            "img": "images/luckin/24.jpg"
          },
          {
            "name": "小青桔C美式",
            "price": 24,
            "tags": [],
            "img": "images/luckin/25.jpg"
          },
          {
            "name": "缤纷C美式",
            "price": 24,
            "tags": [],
            "img": "images/luckin/26.jpg"
          },
          {
            "name": "柠C气泡美式",
            "price": 25,
            "tags": [],
            "img": "images/luckin/27.jpg"
          },
          {
            "name": "苹果C美式",
            "price": 24,
            "tags": [],
            "img": "images/luckin/28.jpg"
          },
          {
            "name": "柚C美式",
            "price": 24,
            "tags": [],
            "img": "images/luckin/29.jpg"
          },
          {
            "name": "鲜切柠C美式",
            "price": 24,
            "tags": [],
            "img": "images/luckin/30.jpg"
          },
          {
            "name": "椰青冰萃美式",
            "price": 25,
            "tags": [],
            "img": "images/luckin/31.jpg"
          },
          {
            "name": "葡萄冰萃美式",
            "price": 25,
            "tags": [],
            "img": "images/luckin/32.jpg"
          },
          {
            "name": "绿沙沙拿铁",
            "price": 25,
            "tags": [],
            "img": "images/luckin/59.jpg"
          },
          {
            "name": "绿沙沙拿铁（超大杯）",
            "price": 26,
            "tags": [],
            "img": "images/luckin/60.jpg"
          },
          {
            "name": "海盐焦糖拿铁",
            "price": 25,
            "tags": [],
            "img": "images/luckin/61.jpg"
          },
          {
            "name": "茉莉花香拿铁",
            "price": 22,
            "tags": [],
            "img": "images/luckin/62.jpg"
          },
          {
            "name": "丝绒拿铁",
            "price": 25,
            "tags": [],
            "img": "images/luckin/63.jpg"
          },
          {
            "name": "生椰丝绒拿铁",
            "price": 26,
            "tags": [],
            "img": "images/luckin/64.jpg",
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
            "name": "香草丝绒拿铁",
            "price": 26,
            "tags": [],
            "img": "images/luckin/65.jpg"
          },
          {
            "name": "埃塞金烘拿铁",
            "price": 21,
            "tags": [],
            "img": "images/luckin/66.jpg"
          },
          {
            "name": "深烘拿铁",
            "price": 21,
            "tags": [],
            "img": "images/luckin/67.jpg"
          },
          {
            "name": "拿铁",
            "price": 21,
            "tags": [],
            "img": "images/luckin/68.jpg"
          },
          {
            "name": "精萃澳瑞白",
            "price": 23,
            "tags": [],
            "img": "images/luckin/69.jpg"
          },
          {
            "name": "燕麦拿铁",
            "price": 21,
            "tags": [],
            "img": "images/luckin/70.jpg"
          },
          {
            "name": "焦糖玛奇朵",
            "price": 23,
            "tags": [],
            "img": "images/luckin/71.jpg"
          },
          {
            "name": "香草拿铁",
            "price": 23,
            "tags": [],
            "img": "images/luckin/72.jpg"
          },
          {
            "name": "卡布奇诺",
            "price": 23,
            "tags": [],
            "img": "images/luckin/73.jpg"
          },
          {
            "name": "耶加雪菲美式",
            "price": 24,
            "tags": [],
            "img": "images/luckin/74.jpg"
          },
          {
            "name": "耶加雪菲拿铁",
            "price": 27,
            "tags": [],
            "img": "images/luckin/75.jpg"
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
      "otlc": {
        "name": "OT另茶",
        "logo": "🍃",
        "skus": [
          {
            "name": "黑金咸摩卡",
            "price": 25,
            "tags": [],
            "img": "images/otlc/11.jpg"
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
      }
    }
  },
  "milktea": {
    "label": "奶茶",
    "emoji": "🥤",
    "brands": {
      "starbucks": {
        "name": "星巴克",
        "logo": "🟢",
        "skus": [
          {
            "name": "可可蒸气奶",
            "price": 25,
            "tags": [],
            "img": "images/starbucks/6.jpg"
          },
          {
            "name": "高蛋白抹茶拿铁PRO",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/15.jpg"
          },
          {
            "name": "玫瑰20抹茶拿铁",
            "price": 37,
            "tags": [],
            "img": "images/starbucks/19.jpg"
          },
          {
            "name": "抹茶可可碎片星冰乐",
            "price": 37,
            "tags": [],
            "img": "images/starbucks/51.jpg"
          },
          {
            "name": "抹茶星冰乐",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/52.jpg"
          },
          {
            "name": "焙茶星冰乐",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/53.jpg"
          },
          {
            "name": "米芝士软雪星冰乐",
            "price": 41,
            "tags": [],
            "img": "images/starbucks/54.jpg"
          },
          {
            "name": "可可榛果软雪星冰乐",
            "price": 41,
            "tags": [],
            "img": "images/starbucks/55.jpg"
          },
          {
            "name": "意式开心果软雪星冰乐",
            "price": 41,
            "tags": [],
            "img": "images/starbucks/56.jpg"
          },
          {
            "name": "香草风味星冰乐",
            "price": 31,
            "tags": [],
            "img": "images/starbucks/63.jpg"
          },
          {
            "name": "巧克力风味星冰乐",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/64.jpg"
          },
          {
            "name": "青绿入画绵云抹茶拿铁",
            "price": 35,
            "tags": [],
            "img": "images/starbucks/74.jpg"
          },
          {
            "name": "红茶拿铁",
            "price": 31,
            "tags": [],
            "img": "images/starbucks/75.jpg"
          },
          {
            "name": "焙茶拿铁",
            "price": 31,
            "tags": [],
            "img": "images/starbucks/76.jpg"
          },
          {
            "name": "加浓焙茶拿铁",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/77.jpg"
          },
          {
            "name": "星巴克抹茶拿铁",
            "price": 31,
            "tags": [],
            "img": "images/starbucks/78.jpg"
          },
          {
            "name": "加浓抹茶拿铁",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/79.jpg"
          },
          {
            "name": "薄荷冰巧风味饮",
            "price": 33,
            "tags": [],
            "img": "images/starbucks/80.jpg"
          },
          {
            "name": "经典巧克力饮品",
            "price": 33,
            "tags": [],
            "img": "images/starbucks/81.jpg"
          },
          {
            "name": "原味蒸气奶",
            "price": 22,
            "tags": [],
            "img": "images/starbucks/82.jpg"
          },
          {
            "name": "香草味蒸气奶",
            "price": 25,
            "tags": [],
            "img": "images/starbucks/83.jpg"
          },
          {
            "name": "可可蒸气奶",
            "price": 25,
            "tags": [],
            "img": "images/starbucks/84.jpg"
          }
        ]
      },
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
            "name": "抹茶丝绒拿铁",
            "price": 26,
            "tags": [],
            "img": "images/luckin/5.jpg"
          },
          {
            "name": "Hello苹果茉莉",
            "price": 22,
            "tags": [],
            "img": "images/luckin/40.jpg"
          },
          {
            "name": "小青桔茉莉冰奶",
            "price": 22,
            "tags": [],
            "img": "images/luckin/41.jpg"
          },
          {
            "name": "小青桔茉莉冰奶（超大杯）",
            "price": 25,
            "tags": [],
            "img": "images/luckin/42.jpg"
          },
          {
            "name": "Hello苹果茉莉（超大杯）",
            "price": 25,
            "tags": [],
            "img": "images/luckin/43.jpg"
          },
          {
            "name": "鲜萃轻轻茉莉（特大杯）",
            "price": 23,
            "tags": [],
            "img": "images/luckin/44.jpg"
          },
          {
            "name": "鲜萃轻轻茉莉",
            "price": 20,
            "tags": [],
            "img": "images/luckin/45.jpg"
          },
          {
            "name": "生椰杨枝甘露（超大杯）",
            "price": 25,
            "tags": [],
            "img": "images/luckin/46.jpg"
          },
          {
            "name": "生椰杨枝甘露",
            "price": 22,
            "tags": [],
            "img": "images/luckin/47.jpg"
          },
          {
            "name": "雪酪芝士抹茶",
            "price": 25,
            "tags": [],
            "img": "images/luckin/48.jpg"
          },
          {
            "name": "瑞之抹茶（特大杯）",
            "price": 23,
            "tags": [],
            "img": "images/luckin/50.jpg"
          },
          {
            "name": "瑞之抹茶",
            "price": 20,
            "tags": [],
            "img": "images/luckin/51.jpg"
          },
          {
            "name": "抹茶丝绒拿铁",
            "price": 26,
            "tags": [],
            "img": "images/luckin/52.jpg"
          },
          {
            "name": "抹茶好喝椰",
            "price": 26,
            "tags": [],
            "img": "images/luckin/53.jpg"
          },
          {
            "name": "抹茶拿铁",
            "price": 23,
            "tags": [],
            "img": "images/luckin/54.jpg"
          },
          {
            "name": "瓦尔登蓝芒果酸奶昔",
            "price": 24,
            "tags": [],
            "img": "images/luckin/55.jpg"
          },
          {
            "name": "瓦尔登蓝芒果酸奶昔（冰沙）",
            "price": 29,
            "tags": [],
            "img": "images/luckin/56.jpg"
          },
          {
            "name": "奶霜青露茉莉（特大杯）",
            "price": 23,
            "tags": [],
            "img": "images/luckin/57.jpg"
          },
          {
            "name": "纯牛奶",
            "price": 19,
            "tags": [],
            "img": "images/luckin/58.jpg"
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
            "name": "泰式咸法酪(首创)",
            "price": 24,
            "tags": [],
            "img": "images/otlc/8.jpg"
          },
          {
            "name": "黑熔岩泰奶",
            "price": 25,
            "tags": [],
            "img": "images/otlc/9.jpg"
          },
          {
            "name": "泰式冰茶",
            "price": 21,
            "tags": [],
            "img": "images/otlc/10.jpg"
          },
          {
            "name": "黑熔岩雪域",
            "price": 25,
            "tags": [],
            "img": "images/otlc/12.jpg"
          },
          {
            "name": "雪盐生椰茉莉",
            "price": 20,
            "tags": [],
            "img": "images/otlc/13.jpg"
          },
          {
            "name": "醇抹咸法酪(首创)",
            "price": 27,
            "tags": [],
            "img": "images/otlc/17.jpg"
          },
          {
            "name": "鲜芒清抹生椰",
            "price": 25,
            "tags": [],
            "img": "images/otlc/22.jpg"
          },
          {
            "name": "鲜乳茶",
            "price": 18,
            "tags": [],
            "img": "images/otlc/23.jpg"
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
            "name": "酪酪菠萝夹心奶绿",
            "price": 27,
            "tags": [],
            "img": "images/koi/3.jpg"
          },
          {
            "name": "香草籽冰淇淋奶茶",
            "price": 25,
            "tags": [],
            "img": "images/koi/4.jpg"
          },
          {
            "name": "香草籽冰淇淋抹茶奶茶",
            "price": 23,
            "tags": [],
            "img": "images/koi/6.jpg"
          },
          {
            "name": "烤糖粉糿冬瓜金乌龙奶茶",
            "price": 20,
            "tags": [],
            "img": "images/koi/7.jpg"
          },
          {
            "name": "黄金珍奶",
            "price": 20,
            "tags": [],
            "img": "images/koi/10.jpg"
          },
          {
            "name": "饼干奶茶",
            "price": 25,
            "tags": [],
            "img": "images/koi/11.jpg"
          },
          {
            "name": "浆果乳酪奶绿",
            "price": 25,
            "tags": [],
            "img": "images/koi/12.jpg"
          },
          {
            "name": "布蕾咸芝士奶绿",
            "price": 23,
            "tags": [],
            "img": "images/koi/13.jpg"
          },
          {
            "name": "比利时酥酪金乌龙奶茶",
            "price": 23,
            "tags": [],
            "img": "images/koi/14.jpg"
          },
          {
            "name": "炒米荞麦乌龙咸奶茶",
            "price": 21,
            "tags": [],
            "img": "images/koi/15.jpg"
          },
          {
            "name": "波霸奶茶",
            "price": 20,
            "tags": [],
            "img": "images/koi/16.jpg"
          },
          {
            "name": "比利时酥酪奶茶",
            "price": 23,
            "tags": [],
            "img": "images/koi/17.jpg"
          },
          {
            "name": "酪酪浆果夹心奶绿",
            "price": 27,
            "tags": [],
            "img": "images/koi/18.jpg"
          },
          {
            "name": "酪酪多莓果夹心奶绿",
            "price": 27,
            "tags": [],
            "img": "images/koi/19.jpg"
          },
          {
            "name": "酪酪芒果夹心奶绿",
            "price": 27,
            "tags": [],
            "img": "images/koi/20.jpg"
          },
          {
            "name": "多莓果乳酪奶绿",
            "price": 25,
            "tags": [],
            "img": "images/koi/21.jpg"
          },
          {
            "name": "水蜜桃乳酪奶绿",
            "price": 25,
            "tags": [],
            "img": "images/koi/22.jpg"
          },
          {
            "name": "芒果乳酪奶绿",
            "price": 25,
            "tags": [],
            "img": "images/koi/23.jpg"
          },
          {
            "name": "葡萄乳酪奶绿",
            "price": 25,
            "tags": [],
            "img": "images/koi/24.jpg"
          },
          {
            "name": "金乌龙咸拿铁",
            "price": 20,
            "tags": [],
            "img": "images/koi/30.jpg"
          },
          {
            "name": "茶拿铁",
            "price": 20,
            "tags": [],
            "img": "images/koi/31.jpg"
          },
          {
            "name": "芋圆红茶拿铁",
            "price": 23,
            "tags": [],
            "img": "images/koi/32.jpg"
          },
          {
            "name": "芋圆牛乳",
            "price": 26,
            "tags": [],
            "img": "images/koi/33.jpg"
          },
          {
            "name": "金乌龙咸奶茶",
            "price": 17,
            "tags": [],
            "img": "images/koi/34.jpg"
          },
          {
            "name": "烤糖粉糿奶茶",
            "price": 20,
            "tags": [],
            "img": "images/koi/35.jpg"
          },
          {
            "name": "咸芝士奶绿",
            "price": 20,
            "tags": [],
            "img": "images/koi/36.jpg"
          },
          {
            "name": "阿萨姆奶茶",
            "price": 17,
            "tags": [],
            "img": "images/koi/37.jpg"
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
            "name": "巴西莓酸奶果昔星冰乐",
            "price": 41,
            "tags": [],
            "img": "images/starbucks/2.jpg"
          },
          {
            "name": "黄金奇异果果昔星冰乐",
            "price": 38,
            "tags": [],
            "img": "images/starbucks/3.jpg"
          },
          {
            "name": "红颜草莓星冰乐",
            "price": 37,
            "tags": [],
            "img": "images/starbucks/61.jpg"
          },
          {
            "name": "芒果西番莲果茶星冰乐",
            "price": 31,
            "tags": [],
            "img": "images/starbucks/62.jpg"
          },
          {
            "name": "晚霞冰摇茶",
            "price": 37,
            "tags": [],
            "img": "images/starbucks/66.jpg"
          },
          {
            "name": "柚香茉吉托冰摇茶",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/67.jpg"
          },
          {
            "name": "红石榴莓莓爆珠冰摇茶",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/68.jpg"
          },
          {
            "name": "杭青映夏冰摇茶",
            "price": 32,
            "tags": [],
            "img": "images/starbucks/69.jpg"
          },
          {
            "name": "星星淘梨冰摇茶",
            "price": 28,
            "tags": [],
            "img": "images/starbucks/70.jpg"
          },
          {
            "name": "冰摇桃桃乌龙茶",
            "price": 34,
            "tags": [],
            "img": "images/starbucks/71.jpg"
          },
          {
            "name": "星巴克冰摇红莓黑加仑茶",
            "price": 28,
            "tags": [],
            "img": "images/starbucks/72.jpg"
          },
          {
            "name": "冰摇柠檬茶",
            "price": 28,
            "tags": [],
            "img": "images/starbucks/73.jpg"
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
            "name": "大菠萝生椰冷萃",
            "price": 24,
            "tags": [],
            "img": "images/luckin/6.jpg"
          },
          {
            "name": "大菠萝海盐气泡水（鲜柠）",
            "price": 22,
            "tags": [],
            "img": "images/luckin/8.jpg"
          },
          {
            "name": "百香果凤梨气泡水（鲜柠）",
            "price": 22,
            "tags": [],
            "img": "images/luckin/9.jpg"
          },
          {
            "name": "百香果C冰茶",
            "price": 19,
            "tags": [],
            "img": "images/luckin/10.jpg"
          },
          {
            "name": "大西瓜生椰冷萃",
            "price": 24,
            "tags": [],
            "img": "images/luckin/13.jpg"
          },
          {
            "name": "苹果C冰茶",
            "price": 19,
            "tags": [],
            "img": "images/luckin/15.jpg"
          },
          {
            "name": "羽衣轻体果蔬茶",
            "price": 22,
            "tags": [],
            "img": "images/luckin/16.jpg"
          },
          {
            "name": "苹果C冰茶",
            "price": 19,
            "tags": [],
            "img": "images/luckin/33.jpg"
          },
          {
            "name": "橙C冰茶",
            "price": 19,
            "tags": [],
            "img": "images/luckin/34.jpg"
          },
          {
            "name": "小青桔C冰茶",
            "price": 19,
            "tags": [],
            "img": "images/luckin/35.jpg"
          },
          {
            "name": "柚C冰茶",
            "price": 19,
            "tags": [],
            "img": "images/luckin/36.jpg"
          },
          {
            "name": "葡萄冰茶",
            "price": 19,
            "tags": [],
            "img": "images/luckin/37.jpg"
          },
          {
            "name": "手打鲜切柠檬茶（超大杯）",
            "price": 23,
            "tags": [],
            "img": "images/luckin/38.jpg"
          },
          {
            "name": "葡萄鲜切柠檬茶（超大杯）",
            "price": 25,
            "tags": [],
            "img": "images/luckin/39.jpg"
          },
          {
            "name": "羽衣轻体果蔬茶（超大杯）",
            "price": 25,
            "tags": [],
            "img": "images/luckin/49.jpg"
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
            "name": "虎斑手摇冻柠茶",
            "price": 21,
            "tags": [],
            "img": "images/otlc/2.jpg"
          },
          {
            "name": "菠萝冰萃肯尼亚",
            "price": 23,
            "tags": [],
            "img": "images/otlc/3.jpg"
          },
          {
            "name": "氧气油柑青苹果",
            "price": 23,
            "tags": [],
            "img": "images/otlc/4.jpg"
          },
          {
            "name": "圣胡安火凤梨",
            "price": 23,
            "tags": [],
            "img": "images/otlc/5.jpg"
          },
          {
            "name": "火凤梨冰茉莉",
            "price": 23,
            "tags": [],
            "img": "images/otlc/6.jpg"
          },
          {
            "name": "黑凤梨椰子冰",
            "price": 25,
            "tags": [],
            "img": "images/otlc/7.jpg"
          },
          {
            "name": "血橙茉莉鲜柠茶",
            "price": 21,
            "tags": [],
            "img": "images/otlc/14.jpg"
          },
          {
            "name": "茉莉山柚鲜柠茶",
            "price": 21,
            "tags": [],
            "img": "images/otlc/15.jpg"
          },
          {
            "name": "经典酒鬼鲜柠茶",
            "price": 21,
            "tags": [],
            "img": "images/otlc/16.jpg"
          },
          {
            "name": "圣胡安火凤梨",
            "price": 23,
            "tags": [],
            "img": "images/otlc/18.jpg"
          },
          {
            "name": "黑凤梨椰子冰",
            "price": 25,
            "tags": [],
            "img": "images/otlc/19.jpg"
          },
          {
            "name": "火凤梨冰茉莉",
            "price": 23,
            "tags": [],
            "img": "images/otlc/20.jpg"
          },
          {
            "name": "花椰芒",
            "price": 25,
            "tags": [],
            "img": "images/otlc/21.jpg"
          },
          {
            "name": "清茶",
            "price": 13,
            "tags": [],
            "img": "images/otlc/24.jpg"
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
            "name": "菠萝青柠油柑果茶",
            "price": 22,
            "tags": [],
            "img": "images/koi/2.jpg"
          },
          {
            "name": "香草籽冰淇淋冬瓜金乌龙",
            "price": 20,
            "tags": [],
            "img": "images/koi/5.jpg"
          },
          {
            "name": "烤糖粉糿冬瓜柠檬茶",
            "price": 19,
            "tags": [],
            "img": "images/koi/8.jpg"
          },
          {
            "name": "烤糖粉糿冬瓜金乌龙",
            "price": 15,
            "tags": [],
            "img": "images/koi/9.jpg"
          },
          {
            "name": "多莓果茶",
            "price": 22,
            "tags": [],
            "img": "images/koi/25.jpg"
          },
          {
            "name": "青柠香茶",
            "price": 19,
            "tags": [],
            "img": "images/koi/26.jpg"
          },
          {
            "name": "水蜜桃果茶",
            "price": 22,
            "tags": [],
            "img": "images/koi/27.jpg"
          },
          {
            "name": "芒果果茶",
            "price": 19,
            "tags": [],
            "img": "images/koi/28.jpg"
          },
          {
            "name": "葡萄果茶",
            "price": 22,
            "tags": [],
            "img": "images/koi/29.jpg"
          },
          {
            "name": "红茶玛奇朵",
            "price": 17,
            "tags": [],
            "img": "images/koi/38.jpg"
          },
          {
            "name": "芒果绿茶玛奇朵",
            "price": 22,
            "tags": [],
            "img": "images/koi/39.jpg"
          },
          {
            "name": "阿萨姆红茶",
            "price": 12,
            "tags": [],
            "img": "images/koi/40.jpg"
          },
          {
            "name": "茉莉绿茶",
            "price": 12,
            "tags": [],
            "img": "images/koi/41.jpg"
          },
          {
            "name": "金乌龙",
            "price": 12,
            "tags": [],
            "img": "images/koi/42.jpg"
          },
          {
            "name": "荞麦金乌龙",
            "price": 12,
            "tags": [],
            "img": "images/koi/43.jpg"
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
      }
    }
  }
};
