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
//          - logo：品牌图标（随便选个 emoji 即可，留作无图时的兜底）
//          - logoImg：品牌 logo 图片路径（可选！）
//                把图片文件放进项目里的 images/ 文件夹，这里写 'images/starbucks.png'
//                留空 '' 就继续用上面的 emoji；填了路径就显示真实图片
//          - skus（具体饮品）：每一项是一杯
//              - name：饮品名
//              - price：价格（数字，单位元）
//              - tags：口味标签（数组，可写多个，如 ['甜','小料']）
//              - img：饮品图片路径（可选！）
//                同样把图片放进 images/ 文件夹，写 'images/shengyu_natile.png'
//                留空 '' 就用原来的图标；填了路径就显示真实图片
//
//  ★ 图片怎么放：
//    1) 在项目根目录建一个 images/ 文件夹（如果还没有）
//    2) 把图片文件丢进去，文件名用英文/数字，比如 starbucks.png、shengyu_natile.jpg
//    3) 在下面对应的 logoImg / img 里写 'images/xxx.png'（相对路径，注意引号英文）
//    4) 提交并推送后，GitHub Pages 会自动更新
//
//  注意：
//  1. 每条之间用逗号分隔，最后一个不要逗号（看下面例子）。
//  2. 引号要用英文半角 " 或 ' 。
//  3. 改完保存，刷新页面即可生效，不用改其他文件。
// ============================================================


// 参数系统（三级覆盖：SKU.opts > 大类 options > 这里全局默认）
// ------------------------------------------------------------------
// 1) 全局默认 OPTIONS：任何「没有单独定义 options 的大类」都会用这一套。
// 2) 大类级 options：写在下面 DATA 里每个大类底下（见 coffee/milktea/fruittea），
//    一旦写了，该大类就【只用自己这套】，不再套用上面的全局默认 —— 这就是「每类不一样」。
// 3) SKU 级 opts：在某一杯里加 opts 字段，做最细的覆盖：
//      opts: { topping:false }            -> 这杯隐藏「加料」组
//      opts: { topping:['珍珠','椰果'] }  -> 这杯加料只给这两样
//      opts: { temp:['热'] }              -> 这杯温度只能选热
// 想加新参数组（如浓度/份量）直接在大类 options 里加一项即可，例如：
//      strength: { label:'浓度', items:['标准','加浓','减淡'] }
//      size:     { label:'份量', items:['中杯','大杯'] }
// multi:true 表示可多选（如加料），不加或 false 为单选。
const OPTIONS = {
  temp:    { label: '温度', items: ['热', '少冰', '去冰'] },
  sugar:   { label: '甜度', items: ['全糖', '七分糖', '五分糖', '三分糖', '无糖'] },
  topping: { label: '加料', items: ['珍珠', '椰果', '布丁', '芋圆', '燕麦'], multi: true },
};


const DATA = {
  coffee: {
    label: '咖啡',
    emoji: '☕',
    // ☕ 咖啡的参数（与奶茶/果茶不同：用「浓度」代替「甜度」，加料是燕麦奶/厚乳/椰乳）
    options: {
      temp:    { label: '温度', items: ['热', '冰', '去冰'] },
      strength:{ label: '浓度', items: ['标准', '加浓', '减淡'] },
      topping: { label: '加料', items: ['燕麦奶', '厚乳', '椰乳'], multi: true },
    },
    brands: {
      starbucks: {
        name: '星巴克',
        logo: '🟢',
        logoImg: '', // 例：'images/starbucks.png'
        skus: [
          { name: '美式', price: 27, tags: ['清爽', '微苦'], img: '' },
          { name: '拿铁', price: 29, tags: ['奶香'], img: '' },
          { name: '燕麦拿铁', price: 33, tags: ['低卡', '奶香'], img: '' },
          { name: '焦糖玛奇朵', price: 35, tags: ['甜', '香浓'], img: '' },
          { name: '冷萃', price: 30, tags: ['清爽', '顺滑'], img: '' },
        ],
      },
      luckin: {
        name: '瑞幸',
        logo: '🔵',
        logoImg: '', // 例：'images/luckin.png'
        skus: [
          { name: '生椰拿铁', price: 18, tags: ['椰香', '爆款'], img: '' },
          { name: '厚乳拿铁', price: 18, tags: ['奶香', '醇厚'], img: '' },
          { name: '美式', price: 13, tags: ['清爽', '微苦'], img: '' },
          { name: '丝绒拿铁', price: 18, tags: ['丝滑'], img: '' },
          { name: '橙C美式', price: 18, tags: ['果香', '清爽'], img: '' },
          { name: '陨石拿铁', price: 19, tags: ['奶香', '嚼着喝'], img: '' },
        ],
      },
    },
  },

  milktea: {
    label: '奶茶',
    emoji: '🥤',
    // 🥤 奶茶的参数（经典：温度 + 甜度 + 加料）
    options: {
      temp:    { label: '温度', items: ['热', '少冰', '去冰'] },
      sugar:   { label: '甜度', items: ['全糖', '七分糖', '五分糖', '三分糖', '无糖'] },
      topping: { label: '加料', items: ['珍珠', '椰果', '布丁', '芋圆'], multi: true },
    },
    brands: {
      heytea: {
        name: '喜茶',
        logo: '🟣',
        logoImg: '', // 例：'images/heyta.png'
        skus: [
          { name: '烤黑糖波波牛乳', price: 19, tags: ['甜', '小料'], img: '' },
          { name: '芝芝莓莓', price: 29, tags: ['草莓', '芝士'], img: '' },
          { name: '芝芝芒芒', price: 29, tags: ['芒果', '芝士'], img: '' },
          { name: '满杯红柚', price: 21, tags: ['柚子', '清爽'], img: '' },
        ],
      },
      guming: {
        name: '古茗',
        logo: '🟡',
        logoImg: '', // 例：'images/guming.png'
        skus: [
          { name: '烤奶', price: 12, tags: ['甜', '经典'], img: '' },
          { name: '古茗奶茶', price: 10, tags: ['经典', '平价'], img: '' },
          { name: '超A芝士葡萄', price: 16, tags: ['葡萄', '芝士'], img: '' },
          { name: '杨枝甘露', price: 15, tags: ['芒果', '西米'], img: '' },
        ],
      },
    },
  },

  fruittea: {
    label: '果茶',
    emoji: '🍹',
    // 🍹 果茶的参数（温度 + 甜度 + 加料 + 份量）
    options: {
      temp:    { label: '温度', items: ['热', '少冰', '去冰'] },
      sugar:   { label: '甜度', items: ['全糖', '七分糖', '五分糖', '三分糖', '无糖'] },
      topping: { label: '加料', items: ['西米', '寒天', '脆波波'], multi: true },
      size:    { label: '份量', items: ['中杯', '大杯'] },
    },
    brands: {
      starbucks: {
        name: '星巴克',
        logo: '🟢',
        logoImg: '', // 例：'images/starbucks.png'
        skus: [
          { name: '冰摇柠檬茶', price: 24, tags: ['柠檬', '清爽'], img: '' },
          { name: '芒果西米露', price: 28, tags: ['芒果', '香甜'], img: '' },
        ],
      },
      luckin: {
        name: '瑞幸',
        logo: '🔵',
        logoImg: '', // 例：'images/luckin.png'
        skus: [
          { name: '满杯杨梅', price: 18, tags: ['杨梅', '酸甜'], img: '' },
          { name: '葡萄冰萃', price: 18, tags: ['葡萄', '清爽'], img: '' },
        ],
      },
      heytea: {
        name: '喜茶',
        logo: '🟣',
        logoImg: '', // 例：'images/heyta.png'
        skus: [
          { name: '多肉葡萄', price: 29, tags: ['葡萄', '爆款'], img: '' },
          { name: '满杯红柚', price: 21, tags: ['柚子', '清爽'], img: '' },
          { name: '芝芝桃桃', price: 25, tags: ['桃子', '芝士'], img: '' },
        ],
      },
      guming: {
        name: '古茗',
        logo: '🟡',
        logoImg: '', // 例：'images/guming.png'
        skus: [
          { name: '超A芝士葡萄', price: 16, tags: ['葡萄', '芝士'], img: '' },
          { name: '杨枝甘露', price: 15, tags: ['芒果', '西米'], img: '' },
          { name: '百香果双响炮', price: 12, tags: ['百香果', '酸甜'], img: '' },
        ],
      },
    },
  },
};
