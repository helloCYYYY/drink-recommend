// ============================================================
//  饮料数据文件 —— 你以后只需要改这里！
// ============================================================
//
//  结构说明（照着填就行，别删字段）：
//  - category（大类）：coffee=咖啡 / milktea=奶茶 / fruittea=果茶
//      - label：大类中文名
//      - emoji：大类图标
//      - brands（品牌）：starbucks / luckin / heytea / guming
//          - name：品牌中文名
//          - logo：品牌图标（随便选个 emoji 即可）
//          - skus（具体饮品）：每一项是一杯
//              - name：饮品名
//              - price：价格（数字，单位元）
//              - tags：口味标签（数组，可写多个，如 ['甜','小料']）
//
//  注意：
//  1. 每条之间用逗号分隔，最后一个不要逗号（看下面例子）。
//  2. 引号要用英文半角 " 或 ' 。
//  3. 改完保存，刷新页面即可生效，不用改其他文件。
// ============================================================

const DATA = {
  coffee: {
    label: '咖啡',
    emoji: '☕',
    brands: {
      starbucks: {
        name: '星巴克',
        logo: '🟢',
        skus: [
          { name: '美式', price: 27, tags: ['清爽', '微苦'] },
          { name: '拿铁', price: 29, tags: ['奶香'] },
          { name: '燕麦拿铁', price: 33, tags: ['低卡', '奶香'] },
          { name: '焦糖玛奇朵', price: 35, tags: ['甜', '香浓'] },
          { name: '冷萃', price: 30, tags: ['清爽', '顺滑'] },
        ],
      },
      luckin: {
        name: '瑞幸',
        logo: '🔵',
        skus: [
          { name: '生椰拿铁', price: 18, tags: ['椰香', '爆款'] },
          { name: '厚乳拿铁', price: 18, tags: ['奶香', '醇厚'] },
          { name: '美式', price: 13, tags: ['清爽', '微苦'] },
          { name: '丝绒拿铁', price: 18, tags: ['丝滑'] },
          { name: '橙C美式', price: 18, tags: ['果香', '清爽'] },
          { name: '陨石拿铁', price: 19, tags: ['奶香', '嚼着喝'] },
        ],
      },
    },
  },

  milktea: {
    label: '奶茶',
    emoji: '🥤',
    brands: {
      heytea: {
        name: '喜茶',
        logo: '🟣',
        skus: [
          { name: '烤黑糖波波牛乳', price: 19, tags: ['甜', '小料'] },
          { name: '芝芝莓莓', price: 29, tags: ['草莓', '芝士'] },
          { name: '芝芝芒芒', price: 29, tags: ['芒果', '芝士'] },
          { name: '满杯红柚', price: 21, tags: ['柚子', '清爽'] },
        ],
      },
      guming: {
        name: '古茗',
        logo: '🟡',
        skus: [
          { name: '烤奶', price: 12, tags: ['甜', '经典'] },
          { name: '古茗奶茶', price: 10, tags: ['经典', '平价'] },
          { name: '超A芝士葡萄', price: 16, tags: ['葡萄', '芝士'] },
          { name: '杨枝甘露', price: 15, tags: ['芒果', '西米'] },
        ],
      },
    },
  },

  fruittea: {
    label: '果茶',
    emoji: '🍹',
    brands: {
      starbucks: {
        name: '星巴克',
        logo: '🟢',
        skus: [
          { name: '冰摇柠檬茶', price: 24, tags: ['柠檬', '清爽'] },
          { name: '芒果西米露', price: 28, tags: ['芒果', '香甜'] },
        ],
      },
      luckin: {
        name: '瑞幸',
        logo: '🔵',
        skus: [
          { name: '满杯杨梅', price: 18, tags: ['杨梅', '酸甜'] },
          { name: '葡萄冰萃', price: 18, tags: ['葡萄', '清爽'] },
        ],
      },
      heytea: {
        name: '喜茶',
        logo: '🟣',
        skus: [
          { name: '多肉葡萄', price: 29, tags: ['葡萄', '爆款'] },
          { name: '满杯红柚', price: 21, tags: ['柚子', '清爽'] },
          { name: '芝芝桃桃', price: 25, tags: ['桃子', '芝士'] },
        ],
      },
      guming: {
        name: '古茗',
        logo: '🟡',
        skus: [
          { name: '超A芝士葡萄', price: 16, tags: ['葡萄', '芝士'] },
          { name: '杨枝甘露', price: 15, tags: ['芒果', '西米'] },
          { name: '百香果双响炮', price: 12, tags: ['百香果', '酸甜'] },
        ],
      },
    },
  },
};
