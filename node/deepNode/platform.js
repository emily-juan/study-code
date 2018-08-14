// 技巧8 获取平台信息
// 使用 process.arch 和 process.platform属性
switch (process.arch) {
  case 'x64':
    // require('./lib.x64.node');
    console.log('64位的操作系统');
    break;

  case 'ia32':
    // require('./lib.Win32.node');
    console.log('32位的操作系统');
    break;
  default:
    throw new Error('Unsupported process.arch:', process.arch);
}

console.log(process.memoryUsage());
// rss 常驻内存大小 RAM中维持的  heapTotal 动态分配的可用内存 heapUsed 已经使用的堆大小