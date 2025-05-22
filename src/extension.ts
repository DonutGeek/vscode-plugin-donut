import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-plugin-donut" is now active!');

	const disposable = vscode.commands.registerCommand('vscode-plugin-donut.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from vscode-plugin-donut!');
	});
	context.subscriptions.push(disposable);

	const copyNameCmd = vscode.commands.registerCommand('vscode-plugin-donut.copyName', (uri) => {
		if (!uri || !uri.fsPath) return;

		const path = require('path');
		const name = path.basename(uri.fsPath);

		vscode.env.clipboard.writeText(name);
		vscode.window.showInformationMessage(`已复制名称：${name}`);
	});

	context.subscriptions.push(copyNameCmd);
}

export function deactivate() { }
