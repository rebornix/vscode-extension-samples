'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "search-provider-sample" is now active!');
	
	let disposable = vscode.workspace.registerFileIndexProvider('file', {
		provideFileIndex: async (options: vscode.FileSearchOptions, token: vscode.CancellationToken): Promise<vscode.Uri[]> => {
			console.log(options);
			return [vscode.Uri.file(path.resolve(options.folder.fsPath, 'index.js'))];
		}
	});

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}