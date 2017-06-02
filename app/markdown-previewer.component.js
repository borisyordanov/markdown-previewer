(function() {
	'use strict';

	angular.module('markdown-app')
		.component('markdownPreviewer', {
			controller: MarkdownPreviewerCtrl,
			templateUrl: 'app/markdown-previewer.component.html'
		});

	function MarkdownPreviewerCtrl() {

		this.outputText;
		
		this.onInputChange = function() {
			this.outputText = marked(this.inputText);
		}

		marked.setOptions({
			renderer: new marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: false, // if false -> allow plain old HTML ;)
			smartLists: true,
			smartypants: false,
			highlight: function(code, lang) {
				if (lang) {
					return hljs.highlight(lang, code).value;
				} else {
					return hljs.highlightAuto(code).value;
				}
			}
		});

	}

})();
