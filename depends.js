enyo.depends(
	//vendors
	"vendors/humane.js",
	"vendors/humane-themes/bold-dark.css",
	"vendors/cache.js",
	"vendors/jsOAuth-1.1.js",
	"vendors/jquery.min.js",
	"vendors/jquery.embedly.js",
	"vendors/showdown.js",
	"vendors/oauth-urlencode.js",
	"vendors/spazcore.js", // includes underscore, underscore.string
	"vendors/spazcore-enyo-webos-network.js",
	"vendors/ekl/List/",
	"vendors/ekl/Layout/",
	"vendors/twitter-text.js",

	// config
	"source/javascript/config/auth_config.js",
	"source/javascript/config/default_preferences.js",

	// constants we use
	"source/javascript/resources/consts.js",

	// helpers
	"source/javascript/helpers/apputils.js",
	"source/javascript/helpers/appui.js",

	// libs
	"source/javascript/libs/emoticons.js",
	"source/javascript/libs/emoticons/simplesmileys.js",
	"source/javascript/libs/emoticons/sae-tweek.js",

	// filters
	"source/javascript/filters/default_filters.js",

	// models
	"source/javascript/models/cache.js",
	"source/javascript/models/lastread.js",

	//core
	"source/javascript/Spaz.js",
	"source/javascript/SpazPopup.js",
	"source/javascript/SpazNotifier.js",
	"source/javascript/SpazRichText.js",

	//views
	"source/javascript/Sidebar.js",
	"source/javascript/Container.js", //container for columns
	"source/javascript/Column.js",
	"source/javascript/SearchColumn.js",
	"source/javascript/UnifiedColumn.js",

	//popouts
	"source/javascript/EntryView.js",
	"source/javascript/UserView.js",

	//popups
	"source/javascript/ComposePopup.js",
	"source/javascript/ColumnsPopup.js",
	"source/javascript/SearchPopup.js",
	"source/javascript/SettingsPopup.js",
	"source/javascript/AccountsPopup.js",
	"source/javascript/EntryClickPopup.js",
	"source/javascript/ImageViewPopup.js",
	"source/javascript/AboutPopup.js",

	//containers
	"source/javascript/NewColumnsContainer.js",
	"source/javascript/AccountsList.js",

	//custom widgets
	"source/javascript/VirtualList.js",
	"source/javascript/Entry.js",
	"source/javascript/Conversation.js",
	"source/javascript/NumberButton.js",
	"source/javascript/RadioButton.js",
	"source/javascript/ActivityIconButton.js",

	//css
	"source/css/core.css"
);
