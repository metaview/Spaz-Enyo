enyo.kind({
	name: "Spaz.TweetView",
	kind: "SlidingView",
	flex: 1,
	published: {
		tweet: {}
	},
	components: [
		//{kind: "Header", content:"Tweet"},
		{kind: "Scroller", flex: 1, className: "tweet-view", components: [
			{kind: "VFlexBox", className: "header", components: [
				{kind: "HFlexBox", components: [
					{kind: "Image", width: "75px",  height: "75px", className: "avatar"},
					{kind: "VFlexBox", flex: 1, components: [
						{name: "realname", className: "realname"},
						{name: "username", className: "link username"}
					]},		
				]},
				{name: "bio", className: "small"},
				{kind: "Divider", className: "divider", style: "display: none", caption: ""},
				{name: "tweet", className: "tweet"},
				{name: "timeFrom", className: "small", style: "padding-top: 10px"}
			]}
		]},
		{kind: "Toolbar", components: [
			{kind: "GrabButton"},
			{kind: "Spacer"},
			{kind: "ToolButton", disabled: true, icon: "source/images/icon-reply.png"},
			{kind: "ToolButton", disabled: true, icon: "source/images/icon-share.png"},
			{kind: "ToolButton", disabled: true, icon: "source/images/icon-favorite.png"},
			{kind: "Spacer"}
		]}
	],
	tweetChanged: function(){
		if(this.$.tweet.content !== this.tweet.message){
			this.$.image.setSrc(this.tweet.avatar);
			this.$.image.applyStyle("display", "");
			this.$.realname.setContent(this.tweet.realname);
			this.$.username.setContent("@" + this.tweet.username);
			this.$.bio.setContent("Developer of Koto Player and Mojo Messenger for webOS");
			this.$.timeFrom.setContent(this.tweet.time + " from <span class='link'>" + this.tweet.from + "</span>");
			this.$.tweet.setContent(this.tweet.message);
			this.$.divider.applyStyle("display", "");
		} else {
			this.$.image.applyStyle("display", "none");
			this.$.realname.setContent("");
			this.$.username.setContent("");
			this.$.bio.setContent("");
			this.$.timeFrom.setContent("");
			this.$.tweet.setContent("");
			this.$.divider.applyStyle("display", "none");
		}
	}
});