import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-plugin-donut" is now active!');

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
