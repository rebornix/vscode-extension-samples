var crypto = require('crypto');
var fs = require('fs'); 
var tmp = require('tmp');
var fs = require('fs');

import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {

	test('Sample test', async () => {
		var tmpObj = tmp.fileSync({ prefix: 'projectA-', postfix: '.nbtest' });
		const resource = vscode.Uri.file(tmpObj.name);
		await vscode.commands.executeCommand('vscode.openWith', resource, 'notebook-test-provider');
		const firstEditor = vscode.notebook.activeNotebookEditor;
		assert.equal(firstEditor?.active, true);
		assert.equal(firstEditor?.visible, true);

	});
});
