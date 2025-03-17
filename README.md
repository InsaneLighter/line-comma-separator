# Line Comma Separator

一个简单的 VSCode 扩展，用于将选中的文本行用逗号分隔，并可选择是否用单引号包裹每一行。

## 功能

- 将选中的多行文本用逗号分隔
- 可选择是否用单引号包裹每一行
- 自动去除空行和行首尾空白字符
- 支持任意文本文件

## 使用方法

1. 在 VSCode 中选中要处理的文本
2. 按下 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（Mac）打开命令面板
3. 输入 "用逗号分隔行" 并选择该命令
4. 在弹出的选项中选择是否需要用单引号包裹每一行
5. 选中的文本将被处理并替换为用逗号分隔的形式

## 示例

原始文本：
```
apple
banana
orange
```

处理后（不带引号）：
```
apple,banana,orange
```

处理后（带引号）：
```
'apple','banana','orange'
```

## 安装

1. 打开 VSCode
2. 打开扩展面板（Ctrl+Shift+X）
3. 搜索 "Line Comma Separator"
4. 点击安装

## 卸载

1. 打开 VSCode
2. 打开扩展面板（Ctrl+Shift+X）
3. 找到 "Line Comma Separator"
4. 点击卸载

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT