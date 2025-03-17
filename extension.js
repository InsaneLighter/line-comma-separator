const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.separateWithCommas', async function () {
        // 获取活动编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('请打开一个文件');
            return;
        }

        try {
            // 询问用户是否需要添加单引号
            const shouldAddQuotes = await vscode.window.showQuickPick(['是', '否'], {
                placeHolder: '是否需要用单引号包裹每一行?'
            });

            if (shouldAddQuotes === undefined) {
                return; // 用户取消了操作
            }

            const addQuotes = shouldAddQuotes === '是';

            // 获取所有选中的文本
            const selection = editor.selection;
            const text = editor.document.getText(selection);

            if (!text) {
                vscode.window.showInformationMessage('请选择要处理的文本');
                return;
            }

            // 分割文本为行
            const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');

            // 处理每一行
            const processedLines = lines.map(line => {
                const trimmedLine = line.trim();
                return addQuotes ? `'${trimmedLine}'` : trimmedLine;
            });

            // 用逗号连接所有行
            const result = processedLines.join(',');

            // 替换选中的文本
            editor.edit(editBuilder => {
                editBuilder.replace(selection, result);
            });

            vscode.window.showInformationMessage('处理完成！');
        } catch (error) {
            vscode.window.showErrorMessage('处理过程中发生错误：' + error.message);
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};