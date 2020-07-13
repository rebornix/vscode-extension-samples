import * as vscode from 'vscode';

class TestNB implements vscode.NotebookContentProvider {
	private _onDidChangeNotebook = new vscode.EventEmitter<vscode.NotebookDocumentContentChangeEvent | vscode.NotebookDocumentEditEvent>();
	onDidChangeNotebook = this._onDidChangeNotebook.event;

	async openNotebook(uri: vscode.Uri, openContext: vscode.NotebookDocumentOpenContext): Promise<vscode.NotebookData> {
		return {
			languages: ['javascript'],
			metadata: {},
			cells: [
				{
					cellKind: vscode.CellKind.Code,
					language: 'javascript',
					source: 'console.log',
					metadata: {},
					outputs: []
				}
			]
		}
	}

	async resolveNotebook(document: vscode.NotebookDocument, webview: vscode.NotebookCommunication): Promise<void> {
		// throw new Error("Method not implemented.");
	}
	async saveNotebook(document: vscode.NotebookDocument, cancellation: vscode.CancellationToken): Promise<void> {
		// throw new Error("Method not implemented.");
	}
	async saveNotebookAs(targetResource: vscode.Uri, document: vscode.NotebookDocument, cancellation: vscode.CancellationToken): Promise<void> {
		// throw new Error("Method not implemented.");
	}

	async backupNotebook(document: vscode.NotebookDocument, context: vscode.NotebookDocumentBackupContext, cancellation: vscode.CancellationToken): Promise<vscode.NotebookDocumentBackup> {
		// throw new Error("Method not implemented.");
		return {
			id: '1',
			delete: () => {}
		}
	}
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.notebook.registerNotebookContentProvider('notebook-test-provider', new TestNB()));
}
