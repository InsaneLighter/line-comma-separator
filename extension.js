const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.separateWithCommas', async function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('请打开一个文件！');
            return;
        }

        try {
            // 询问是否需要用单引号包裹
            const shouldWrapInQuotes = await vscode.window.showQuickPick(
                [
                    { label: '是', value: true },
                    { label: '否', value: false }
                ],
                {
                    placeHolder: '是否需要用单引号包裹每一行？'
                }
            );

            if (shouldWrapInQuotes === undefined) {
                return;
            }

            const document = editor.document;
            const lines = document.getText().split(/\r?\n/);
            
            // 过滤空行并处理每一行
            const processedLines = lines
                .filter(line => line.trim() !== '')
                .map(line => {
                    const trimmedLine = line.trim();
                    return shouldWrapInQuotes.value ? `'${trimmedLine}'` : trimmedLine;
                });

            // 用逗号连接所有行
            const result = processedLines.join(',');

            // 创建新文档显示结果
            const resultDocument = await vscode.workspace.openTextDocument({
                content: result,
                language: 'text'
            });

            vscode.window.showTextDocument(resultDocument, {
                viewColumn: vscode.ViewColumn.Beside
            });

        } catch (error) {
            vscode.window.showErrorMessage('处理文件时发生错误：' + error.message);
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};