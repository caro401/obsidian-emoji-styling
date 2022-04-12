## Obsidian Emoji Styling Plugin

Very simple plugin to wrap all emoji characters in `span` elements with the class `emoji`, to allow theme developers or CSS snippets to style emoji separately **in reader mode**.

This plugin is useful if you use emoji in text with gradients or background images applied, which break the colour of the emoji, for example in [Royal Velvet theme](https://github.com/caro401/royal-velvet).

You could do other things like make emoji characters larger or smaller, or have some extra space around them.

Define what emoji look like by adding some CSS to target the `.emoji` class, for example:

```css
.emoji {
	color: var(--text-normal);
	-webkit-text-fill-color: var(--text-normal);
	background: red;
	border-radius: 100%;
	font-size: 1.5em;
}
```

This snippet makes emoji have the right colour, be 1.5x as large as the surrounding text and be inside a red circle.

To achieve the same effect in **edit mode**, use the [Dynamic Highlights](https://github.com/nothingislost/obsidian-dynamic-highlights) plugin and import the configuration:

```json
{
	"emoji": {
		"class": "emoji",
		"color": "",
		"regex": true,
		"query": "\\p{Extended_Pictographic}",
		"mark": ["match", "start", "end"]
	}
}
```

### Releasing new releases

-   Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
-   Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
-   Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: <https://github.com/obsidianmd/obsidian-sample-plugin/releases>
-   Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
-   Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

### Adding your plugin to the community plugin list

-   Check <https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md>
-   Publish an initial version.
-   Make sure you have a `README.md` file in the root of your repo.
-   Make a pull request at <https://github.com/obsidianmd/obsidian-releases> to add your plugin.

### Manually installing the plugin

-   Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.
