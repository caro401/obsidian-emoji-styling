import { Plugin } from 'obsidian';


export default class EmojiStylingPlugin extends Plugin {
	async onload() {
		// in reader mode, find all characters that are emoji,
		// and wrap them in span elements with class emoji
		this.registerMarkdownPostProcessor((element, _context) => {
			const els = element.querySelectorAll("*");
			const replacer = (match: string) => {
				return `<span class="emoji">${match}</span>`
			}
			Array.from(els).map(e => {
				e.innerHTML = e.innerHTML.replace(/\p{Extended_Pictographic}/gu, replacer);
			})

		});
	}
}


