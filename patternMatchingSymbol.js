// 使用pattern-matching symbol实现文件系统的通配符?和*

// 定义一个Glob类，目的是创建需要自定义相关模式匹配的对象
class Glob {
  constructor(glob) {
    this.glob = glob;
    this.regexpText = glob.replaceAll("?", "([^/])").replaceAll("*", "([^/]*)");
    this.regexp = new RegExp(`^${this.regexpText}$`, "u");
  }
  toString() {
    return this.glob;
  }
  [Symbol.search](s) {
    return s.search(this.regexp);
  }
  [Symbol.match](s) {
    return s.match(this.regexp);
  }
  [Symbol.replace](s, replacement) {
    return s.replace(this.regexp, replacement);
  }
}

// 创建需要自定义相关模式的对象
let pattern = new Glob("dir/*/*.jpeg");

let dir1 = "dir/zhjrcc/avatar.jpeg";

let dirSearch = dir1.search(pattern);
let dirMatch = dir1.match(pattern);
let dirReplace = dir1.replace(pattern, "web/$1/月照心头.jpeg");

console.log(dirSearch, dirMatch[1], dirMatch[2], dirReplace); //0 zhjrcc avatar dir/zhjrcc/月照心头.jpeg
