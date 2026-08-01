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
      "heytea": {
        "name": "喜茶",
        "logo": "🟣",
        "skus": [
          {
            "name": "烤黑糖波波牛乳",
            "price": 19,
            "tags": [
              "甜",
              "小料"
            ],
            "img": ""
          },
          {
            "name": "芝芝莓莓",
            "price": 29,
            "tags": [
              "草莓",
              "芝士"
            ],
            "img": ""
          },
          {
            "name": "芝芝芒芒",
            "price": 29,
            "tags": [
              "芒果",
              "芝士"
            ],
            "img": ""
          },
          {
            "name": "满杯红柚",
            "price": 21,
            "tags": [
              "柚子",
              "清爽"
            ],
            "img": ""
          }
        ]
      },
      "guming": {
        "name": "古茗",
        "logo": "🟡",
        "skus": [
          {
            "name": "烤奶",
            "price": 12,
            "tags": [
              "甜",
              "经典"
            ],
            "img": ""
          },
          {
            "name": "古茗奶茶",
            "price": 10,
            "tags": [
              "经典",
              "平价"
            ],
            "img": ""
          },
          {
            "name": "超A芝士葡萄",
            "price": 16,
            "tags": [
              "葡萄",
              "芝士"
            ],
            "img": ""
          },
          {
            "name": "杨枝甘露",
            "price": 15,
            "tags": [
              "芒果",
              "西米"
            ],
            "img": ""
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
      "heytea": {
        "name": "喜茶",
        "logo": "🟣",
        "skus": [
          {
            "name": "多肉葡萄",
            "price": 29,
            "tags": [
              "葡萄",
              "爆款"
            ],
            "img": ""
          },
          {
            "name": "满杯红柚",
            "price": 21,
            "tags": [
              "柚子",
              "清爽"
            ],
            "img": ""
          },
          {
            "name": "芝芝桃桃",
            "price": 25,
            "tags": [
              "桃子",
              "芝士"
            ],
            "img": ""
          }
        ]
      },
      "guming": {
        "name": "古茗",
        "logo": "🟡",
        "skus": [
          {
            "name": "超A芝士葡萄",
            "price": 16,
            "tags": [
              "葡萄",
              "芝士"
            ],
            "img": ""
          },
          {
            "name": "杨枝甘露",
            "price": 15,
            "tags": [
              "芒果",
              "西米"
            ],
            "img": ""
          },
          {
            "name": "百香果双响炮",
            "price": 12,
            "tags": [
              "百香果",
              "酸甜"
            ],
            "img": ""
          }
        ]
      }
    }
  }
};
