/*
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50, eqeq: true, white: true */
/*global define */
/*
This JS file is used for setting the copy that appears in both the HTML Format Preference Window as well as the labels for the items in the HTML Format menu and right-click menu.
*/
define({
	"TITLE_MENU"						: "HTML Format",
	"TITLE_PREFERENCES"					: "HTML Format Preferences",
	"TITLE_CHARACTER"					: "Charater to be used for the keyboard shortcut.",
	"TITLE_CTRL"						: "Use the Control key for the keyboard shortcut modifier(s).",
	"TITLE_CMD"							: "Use the Command (⌘) key for the keyboard shortcut modifier(s).",
	"TITLE_SHIFT"						: "Use the Shift key for the keyboard shortcut modifier(s).",
	"TITLE_ALT"							: "Use the Alt key for the keyboard shortcut modifier(s).",
	"SHORTCUTS_WARNING_1"				: "WARNING: Keyboard shortcuts chosen can override those built into Brackets.",
	"SHORTCUTS_WARNING_2"				: "New/updated keyboard shortcuts will NOT work unless Brackets is reloaded.",
	"EXTENSION_LABEL"					: "Enter the extension types, separated by commas, that you want this extension to work with. It is possible for issues to occur if extensions for files, such as CSS, JS, Java, etc, that don't normally have HTML in them are entered here.",
	"DEFAULT_EXTENSIONS"				: "htm, html, php, asp",
	"MODIFIER_CONTROL_CMD"				: "Control",
	"MODIFIER_CONTROL"					: "Control",
	"MODIFIER_CMD"						: "Command",
	"MODIFIER_SHIFT"					: "Shift",
	"MODIFIER_ALT"						: "Alt",
	"BOLD_STRONG"						: "Use <strong> tag in place of <b>",
	"ITALIC_EM"							: "Use <em> tag in place of <i>",
	"ADD_RIGHT_CLICK"					: "Add bold, italic, and underline tag commands to the right-click menu.",
	"BREAK_TYPE"						: "Use <br> tag instead of <br /> when inserting break tag through HTML Format with the keyboard shortcut SHIFT + ENTER. If unchcked, it will use <br /> unless the HTML5 doctype is found in the document, in which case <br> will be used.",
	"BREAK_TYPE_NEXT_LINE"				: "Have SHIFT + ENTER add a break tag and move the cursor to the next line.",
	
	// Bold, Italic, Underline group
	"LABEL_BOLD_TAG_SHORTCUT"			: "Bold - tag",
	"LABEL_BOLD_STYLE_SHORTCUT"			: "Bold - style",
	"LABEL_ITALIC_TAG_SHORTCUT"			: "Italic - tag",
	"LABEL_ITALIC_STYLE_SHORTCUT"		: "Italic - style",
	"LABEL_UNDERLINE_TAG_SHORTCUT"		: "Underline - tag",
	"LABEL_UNDERLINE_STYLE_SHORTCUT"	: "Underline - style",
	
	// Anchor, Paragraph, Header group
	"LABEL_ANCHOR_TAG_SHORTCUT"			: "Anchor",
	"LABEL_PARAGRAPH_TAG_SHORTCUT"		: "Paragraph",
	"LABEL_H1_TAG_SHORTCUT"				: "H1",
	"LABEL_H2_TAG_SHORTCUT"				: "H2",
	"LABEL_H3_TAG_SHORTCUT"				: "H3",
	"LABEL_H4_TAG_SHORTCUT"				: "H4",
	"LABEL_H5_TAG_SHORTCUT"				: "H5",
	"LABEL_H6_TAG_SHORTCUT"				: "H6",
	
	// Span, Div, Structure group
	"LABEL_SPAN_TAG_SHORTCUT"			: "Span",
	"LABEL_DIV_TAG_SHORTCUT"			: "Div",
	"LABEL_HEADER_TAG_SHORTCUT"			: "Header",
	"LABEL_NAV_TAG_SHORTCUT"			: "Nav",
	"LABEL_MAIN_TAG_SHORTCUT"			: "Main",
	"LABEL_SECTION_TAG_SHORTCUT"		: "Section",
	"LABEL_ARTICLE_TAG_SHORTCUT"		: "Article",
	"LABEL_ASIDE_TAG_SHORTCUT"			: "Aside",
	"LABEL_FOOTER_TAG_SHORTCUT"			: "Footer",
	
	// Table group --- currently makes menu too long for a 1080p screen
	/*"LABEL_TABLE_TAG_SHORTCUT"			: "Table",
	"LABEL_TABLE_HEADER_TAG_SHORTCUT"	: "Table header",
	"LABEL_TABLE_BODY_TAG_SHORTCUT"		: "Table body",
	"LABEL_TABLE_FOOTER_TAG_SHORTCUT"	: "Table footer",
	"LABEL_ROW_TAG_SHORTCUT"			: "Row",
	"LABEL_COLUMN_HEADER_TAG_SHORTCUT"	: "Column Header",
	"LABEL_COLUMN_TAG_SHORTCUT"			: "Column",
	"LABEL_CAPTION_TAG_SHORTCUT"		: "Caption",
	"LABEL_COLUMN_GROUP_TAG_SHORTCUT"	: "Column Group",
	"LABEL_COLUMN_PROP_TAG_SHORTCUT"	: "Column Group Properties",*/
	
	// Additional formatting group
	"LABEL_STRIKE_TAG_SHORTCUT"			: "Strike - tag",
	"LABEL_STRIKE_STYLE_SHORTCUT"		: "Strike - style",
	"LABEL_TELETYPE_TAG_SHORTCUT"		: "Teletype - tag",
	"LABEL_TELETYPE_STYLE_SHORTCUT"		: "Teletype - style",
	
	// Phrase tags
	"LABEL_CODE_TAG_SHORTCUT"			: "Code",
	"LABEL_VARIABLE_TAG_SHORTCUT"		: "Variable",
	"LABEL_SAMPLE_TAG_SHORTCUT"			: "Sample",
	"LABEL_KEYBOARD_TAG_SHORTCUT"		: "Keyboard",
	
	// Markup, Modification group
	"LABEL_CITATION_TAG_SHORTCUT"		: "Citation",
	"LABEL_DEFINITION_TAG_SHORTCUT"		: "Definition",
	"LABEL_DELETED_TAG_SHORTCUT"		: "Deleted",
	"LABEL_INSERTED_TAG_SHORTCUT"		: "Inserted",
	
	// Empty tag, Preference group
	"LABEL_EMPTY_TAG_SHORTCUT"			: "Insert empty tag",
	//"LABEL_HTML_COMMENT_SHORTCUT"		: "Insert HTML comment",
	"LABEL_PREFERENCES_SHORTCUT"		: "HTML Format Preferences",
	"BTN_CLEAR"							: "Clear",
	"BTN_CANCEL"						: "Cancel",
	"BTN_SAVE"							: "Save",
	"BTN_SAVE_RELOAD"					: "Save & Reload"
});