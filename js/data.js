/* ===== 数据层:书库 + localStorage 订单/发布/我的 ===== */
const BOOKS = [
  { id: "b01", title: "高等数学(上册)", author: "同济大学数学系", orig: 42.5, price: 18, course: "高数", cond: "八成新", emoji: "📐", color: "#4f7cc9", tag: "理工", desc: "同济第七版,高数 A 教材。前 8 章重点划线清晰,课后习题做了大半,无缺页。", seller: "王同学", sellerMajor: "自动化 · 大二", loc: "二食堂门口", sold: false, time: "3天前" },
  { id: "b02", title: "大学英语综合教程(二)", author: "上海外语教育出版社", orig: 59.8, price: 22, course: "大学英语", cond: "九成新", emoji: "📖", color: "#e07a5f", tag: "英语", desc: "大英二教材,基本全新,只有前几页少量笔记。附赠配套练习册。", seller: "李同学", sellerMajor: "经管 · 大二", loc: "图书馆东门", sold: false, time: "1天前" },
  { id: "b03", title: "线性代数及其应用", author: "David C. Lay", orig: 49.0, price: 15, course: "线代", cond: "七成新", emoji: "🧮", color: "#6d597a", tag: "理工", desc: "线代教材,概念部分画了重点。有学长留下的解题笔记,适合期末冲刺。", seller: "张同学", sellerMajor: "计算机 · 大三", loc: "三号宿舍楼下", sold: false, time: "5天前" },
  { id: "b04", title: "经济学原理(宏观分册)", author: "曼昆", orig: 62.0, price: 25, course: "经济学", cond: "八成新", emoji: "📈", color: "#3d9970", tag: "人文社科", desc: "曼昆宏观,章节课后题答案已附。封面有轻微磨损,内页干净。", seller: "赵同学", sellerMajor: "金融 · 大二", loc: "图书馆东门", sold: false, time: "2天前" },
  { id: "b05", title: "数据结构(C语言版)", author: "严蔚敏", orig: 45.0, price: 20, course: "数据结构", cond: "八成新", emoji: "🌳", color: "#2a9d8f", tag: "理工", desc: "经典教材,考研/期末两用。重点章节笔记齐全,无写画破坏。", seller: "王同学", sellerMajor: "计算机 · 大三", loc: "二食堂门口", sold: false, time: "4天前" },
  { id: "b06", title: "大学物理(上)", author: "张三慧", orig: 48.0, price: 17, course: "大学物理", cond: "七五成新", emoji: "⚡", color: "#f4a261", tag: "理工", desc: "物理上教材,公式推导处有铅笔标注(可擦除)。习题部分空白。", seller: "刘同学", sellerMajor: "机械 · 大二", loc: "三号宿舍楼下", sold: false, time: "6天前" },
  { id: "b07", title: "考研英语词汇(乱序版)", author: "新东方", orig: 55.0, price: 12, course: "考研英语", cond: "九成新", emoji: "📚", color: "#9b5de5", tag: "英语", desc: "考研红宝书乱序版,只翻过前两章。附赠 APP 激活码(未用)。", seller: "陈同学", sellerMajor: "外国语 · 大四", loc: "二食堂门口", sold: false, time: "8小时前" },
  { id: "b08", title: "会计学原理", author: "陈信元", orig: 46.0, price: 18, course: "会计学", cond: "八成新", emoji: "🧾", color: "#577590", tag: "经管", desc: "会计学原理,分录部分勾画了重点,例题答案完整。", seller: "赵同学", sellerMajor: "金融 · 大二", loc: "图书馆东门", sold: false, time: "1周前" },
  { id: "b09", title: "思想道德与法治", author: "本书编写组", orig: 29.0, price: 8, course: "思政", cond: "九成新", emoji: "🕊️", color: "#e9c46a", tag: "公共课", desc: "马原公共课教材,几乎全新。学期结束低价出,传家宝级教材。", seller: "孙同学", sellerMajor: "外语 · 大三", loc: "三号宿舍楼下", sold: false, time: "2天前" },
  { id: "b10", title: "概率论与数理统计", author: "浙大版", orig: 44.0, price: 16, course: "概率论", cond: "八成新", emoji: "🎲", color: "#e76f51", tag: "理工", desc: "概率论教材,课后习题答案附页。重点公式笔记整齐。", seller: "张同学", sellerMajor: "计算机 · 大三", loc: "三号宿舍楼下", sold: false, time: "3天前" },
  { id: "b11", title: "C语言程序设计", author: "谭浩强", orig: 39.0, price: 12, course: "C语言", cond: "七成新", emoji: "💻", color: "#457b9d", tag: "理工", desc: "C语言入门经典,例题代码有手写注释,书脊有折痕。", seller: "王同学", sellerMajor: "自动化 · 大二", loc: "二食堂门口", sold: false, time: "1周前" },
  { id: "b12", title: "中国近现代史纲要", author: "高教社", orig: 26.0, price: 7, course: "思政", cond: "八五成新", emoji: "🏛️", color: "#a98467", tag: "公共课", desc: "史纲教材,期末重点已划。字迹工整,无破损。", seller: "李同学", sellerMajor: "经管 · 大二", loc: "图书馆东门", sold: false, time: "4天前" },
  { id: "b13", title: "高等数学(下册)", author: "同济大学数学系", orig: 42.5, price: 18, course: "高数", cond: "八成新", emoji: "📐", color: "#4f7cc9", tag: "理工", desc: "同济第七版下册,与上册同套。章节重点清楚,无缺页。", seller: "王同学", sellerMajor: "自动化 · 大二", loc: "二食堂门口", sold: false, time: "3天前" },
  { id: "b14", title: "计算机网络(第7版)", author: "谢希仁", orig: 52.0, price: 22, course: "计算机网络", cond: "九成新", emoji: "🕸️", color: "#3a86ff", tag: "理工", desc: "计网教材,考研必备。几乎全新,重点笔记在 PDF 版里有对照。", seller: "张同学", sellerMajor: "计算机 · 大三", loc: "三号宿舍楼下", sold: false, time: "5小时前" },
  { id: "b15", title: "现代汉语(增订六版)", author: "黄伯荣 廖序东", orig: 58.0, price: 21, course: "现代汉语", cond: "八成新", emoji: "✍️", color: "#d1495b", tag: "人文社科", desc: "汉语言专业教材,上下两册合售。重点语法章节有笔记。", seller: "陈同学", sellerMajor: "外国语 · 大四", loc: "二食堂门口", sold: false, time: "6天前" },
  { id: "b16", title: "马克思主义基本原理", author: "本书编写组", orig: 25.0, price: 6, course: "马原", cond: "九五成新", emoji: "⭐", color: "#8e9aaf", tag: "公共课", desc: "马原教材,几乎全新。考前划的重点还在,低价出。", seller: "孙同学", sellerMajor: "外语 · 大三", loc: "三号宿舍楼下", sold: false, time: "1天前" }
];

const CATS = [
  { id: "all", name: "全部" },
  { id: "理工", name: "理工科" },
  { id: "经管", name: "经管" },
  { id: "英语", name: "英语" },
  { id: "公共课", name: "公共课" },
  { id: "人文社科", name: "人文社科" }
];

const MEET_LOCS = ["二食堂门口", "图书馆东门", "三号宿舍楼下", "一教大厅", "体育馆门口"];

/* ---- localStorage 工具 ---- */
const LS = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
};

/* 我的发布: {id, title, price, cond, course, emoji, color, desc, loc, time} */
function myBooks() { return LS.get("sy_mybooks", []); }
function saveMyBooks(list) { LS.set("sy_mybooks", list); }

/* 订单: {id, bookId, title, emoji, color, price, loc, when, note, status, time, seller} */
function orders() { return LS.get("sy_orders", []); }
function saveOrders(list) { LS.set("sy_orders", list); }

/* 我的信息 */
function myInfo() { return LS.get("sy_info", { name: "同学", major: "未设置专业", campus: "主校区" }); }
function saveMyInfo(info) { LS.set("sy_info", info); }

/* ---- 工具 ---- */
function uid() { return "sy" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function go(url) { location.href = url; }
function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2200);
}
function bookById(id) { return BOOKS.find(b => b.id === id); }
function fmtTime(t) { return t; }
