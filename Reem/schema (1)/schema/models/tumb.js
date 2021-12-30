const mongoose = require("mongoose")
var blog = new mongoose.Schema({
    // id: {
    //     type: "String",
    //     required: true,

    // },
    title: {
        type: "String",
        required: true,

    },
    reblog_parent_id: {
        type: "String",
        required: false,

    },
    group_blogs_id: {
        type: "String",
        required: false,

    },
    name: {
        type: "String",
        required: true,
    },
    updated: {
        type: "Number",

    },
    description: {
        type: "String"
    },
    password: {
        type: "String",
        required: true
    },
    isBlockedFromPrimary: {
        type: "Boolean",

    },
    isPrimary: {
        type: "Boolean",

    },
    blogVisitor: {
        type: "Number"
    },
    followedTags: {
        type: [String]
    },
    isDeleted: {
        type: "Boolean"
    },
    themeId: String,
    // createdBy: {
    //     type: "String",
    //     required: true
    // }
});


// var groupblog = new mongoose.Schema({
//     id: {
//         type: "String",
//         required: true,

//     },
//     blogId: {
//         type: "String",
//         required: true,

//     },

//     isAdmin: {
//         type: "Boolean",
//         required: true,
//     },

//     isDeleted: {
//         type: "Boolean"
//     },
// });
// var trendingblog = new mongoose.Schema({
//     id: {
//         type: "String",
//         required: true,

//     },
//     trendingblogId: {
//         type: "String",
//         required: true,

//     },

//     country: {
//         type: "String",
//         required: true,
//     },

//     region: {
//         type: "String",
//         required: true,
//     },

// });
var theme = mongoose.Schema({
    id: {
        type: "String",
        required: true,

    },
    blogId: {
        type: "String",
        required: true,

    },
    avatar: {
        type: Array,

    },
    avatarShape: {
        type: "String",
    },
    backgroundColor: {
        type: "String",
    },
    bodyFront: {
        type: "String",
    },
    headerBounds: {
        type: "String",

    },
    headerImage: {
        type: "String",
    },
    headerImageFocused: {
        type: "String",
    },
    headerImagePoster: {
        type: "String",
    },
    headerImageScaled: {
        type: "String",
    },
    hedaerStretch: {
        type: "Boolean"
    },
    linkColor: {
        type: "String",
    },
    showAvatar: { type: "Boolean" },
    showDescription: {
        type: "Boolean"
    },
    showHeaderImage: { type: "Boolean" },
    showTitle: { type: "Boolean" },
    titleColor: { type: "String", },
    titleFront: { type: "String", },
    titleFrontWeight: { type: "String", },
    layout: { type: "String", },
    slidingHeader: { type: "Boolean" },
    showNavigation: { type: "Boolean" },
    endlessScrolling: { type: "Boolean" },
    syntaxHighlighting: { type: "Boolean" },
    relatedPosts: { type: "Boolean" },
    disqusShortName: { type: "String", },
    googleAnalyticId: { type: "String", },
});
var blogSettings = mongoose.Schema({
    id: {
        type: "String",
        required: true,

    },
    likes: {
        type: "Boolean"
    },
    following: { type: "Boolean" },
    replies: {
        type: "String",
    },
    ask: { type: "Boolean" },
    allowAnonymousQuestions: { type: "Boolean" },
    askPageTitle: {
        type: "String",
    },
    letPeopleSubmitPosts: { type: "Boolean" },
    submissionsPageTitle: {
        type: "String",
    },
    submissionsGuidelines: {
        type: "String",
    },
    allowedSubmissionsPostTypes: {
        type: "String",
    },
    onlyAllowedMessagesFromTumblrsYouFollow: { type: "Boolean" },
    queue: {
        type: "String",
    },
    language: {
        type: "String",
    },
    timeZone: {
        type: "String",
    },
    timeZoneOffset: {
        type: "String",
    },
    hideblog: { type: "Boolean" },
    hideblogFromSearchResults: { type: "Boolean" }
});
var block = new mongoose.Schema({
    id: {
        type: "String",
        required: true,

    },
    blogId: {
        type: "String",
        required: true,

    },

    blockedblogId: {
        type: "String",
        required: true,
    },
    postId: {
        type: "String",
        required: true,
    },
    isDeleted: {
        type: "Boolean"
    }
});
// var like = new mongoose.Schema({
//     id: {
//         type: "String",
//         required: true,

//     },
//     blogId: {
//         type: "String",
//         required: true,

//     },


//     postId: {
//         type: "String",
//         required: true,
//     },
//     isDeleted: {
//         type: "Boolean"
//     }
// });
// var notes = new mongoose.Schema({
//     id: {
//         type: "String",
//         required: true,

//     },
//     blogId: {
//         type: "String",
//         required: true,

//     },

//     note: {
//         type: "String",
//         required: true,
//     },
//     postId: {
//         type: "String",
//         required: true,
//     },
//     isDeleted: {
//         type: "Boolean"
//     }
// });
// var follow = new mongoose.Schema({
//     id: {
//         type: "String",
//         required: true,

//     },
//     userId: {
//         type: "String",
//         required: true,
//     },
//     followingblogId: {
//         type: "String",
//         required: true,

//     },

//     followerblogId: {
//         type: "String",
//         required: true,
//     },

//     isDeleted: {
//         type: "Boolean"
//     }
// });
// var ask = new mongoose.Schema({
//     id: {
//         type: "String",
//         required: true,

//     },
//     text: {
//         type: "String",
//         required: true,
//     },
//     askingblogId: {
//         type: "String",
//         required: true,

//     },

//     askedblogId: {
//         type: "String",
//         required: true,
//     },

//     isDeleted: {
//         type: "Boolean"
//     }
// });
// var message = new mongoose.Schema({
//     id: {
//         type: "String",
//         required: true,

//     },
//     submissionPostId: {
//         type: "String",
//         required: true,
//     },

//     askedPostId: {
//         type: "String",
//         required: true,
//     },


//     isDeleted: {
//         type: "Boolean"
//     }
// });

var post = new mongoose.Schema({
    // id: {
    //     type: "String",
    //     required: true,
    // },
    blogId: {
        type: "String",
        required: true,
    },
    postURL: {
        type: "String",
        required: true,
    },
    type: {
        type: "String",
        required: true,
    },
    tags: { type: [String] },
    mobile: { type: "Boolean" },
    date: { type: Date },
    timeStamp: { type: "Number" },
    scheduleTime: { type: Date },
    
    data: {
        id: {
            type: "String",
            required: true,
        },
        isPinned: { type: "Boolean" },
        fontType: {
            type: "String",
            required: true,
        },
        strickThrough: { type: "Boolean" },
        isSmall: { type: "Boolean" },
        fontColor: {
            type: "String",
            required: true,
        },
        link: { type: "String" },
        photo: { type: [Object] },
        video: { type: [Object] },
        audio: { type: [Object] },
        gif: { type: [Object] },
        Link: { type: [Object] },
        keepReading: { type: [Object] },
        isSubmission: { type: "Boolean" },
        isPrivate: { type: "Boolean" },
        isDeleted: { type: "Boolean" }
    },
});

var chat = new mongoose.Schema({
    id: {
        type: "String",
        required: true,

    },
    myblogId: {
        type: "String",
        required: true,
    },

    chatFriendblogId: {
        type: "String",
        required: true,
    },
    messeges: {
        sender: {
            type: "String",
            required: true,
        },
        receiver: {
            type: "String",
            required: true,
        },
        content: {
            type: "String",
            required: true,
        },
        time: {
            type: "String",
            required: true,
        }

    }

});

// var textPost = new mongoose.Schema({
//     id: {
//         type: "String",
//         required: true,

//     },
//     postId: {

//         type: "String",
//         required: true,

//     },
//     title: {
//         type: "String",
//         required: true,
//     },
//     body: {
//         type: "String",
//         required: true,
//     }

// });
// var photoPost = new mongoose.Schema({
//     id: {
//         type: "String",
//         required: true,

//     },
//     postId: {

//         type: "String",
//         required: true,

//     },
//     caption: {
//         type: "String",
//         required: true,
//     },
//     captionSuppliedByUser: {
//         type: "String",
//         required: true,
//     },
//     width: Number,
//     height: Number,
//     widthOfIndImg: Number,

//     heightOfIndImg: Number,
//     link: String,
// });
// var quotePost = new mongoose.Schema({
//     id: String,
//     postId: String,
//     text: String,
//     Source: String,
// });
// var linkPost = new mongoose.Schema({
//     id: String,
//     postId: String,
//     title: String,
//     summery: String,
//     description: String,
//     url: String,
//     linkAuthor: String,


// });
// var chatPost = new mongoose.Schema({
//     id: String,
//     postId: String,
//     title: String,
//     body: String

// });
// var audioPost = new mongoose.Schema({
//     id: String,
//     postId: String,
//     caption: String,
//     external: String,
//     data: String,
//     artist: String,
//     album: String,
//     trackName: String,
//     trackNumber: Number
// });
// var videoPost = new mongoose.Schema({
//     id: String,
//     postId: String,
//     caption: String,
//     data: String,
//     embed: String,


// });
// var answerPost = new mongoose.Schema({
//     id: String,
//     postId: String,
//     askingName: String,
//     askingURL: String,
//     question: String,
//     answer: String

// });
// var submissionPost = new mongoose.Schema({
//     id: String,
//     postId: String,
//     submittedblogName: String,
//     submittedblogLink: String,
// });
// var reblogPost = new mongoose.Schema({
//     id: String,
//     postId: String,
//     rebloggedPostId: String,
//     description: String,
// });
// var trendingPost = new mongoose.Schema({
//     id: String,
//     trendingPostId: String,
//     type: String,
//     region: String
// });
var user = new mongoose.Schema({
    id: String,
    name: String,
    blogsId: [String],
    email: String,
    age: Number,
    favoriteblogs: [String],
    following_blogs: [String],
    followers_blogs: [String],
    likes_posts_id: [String],
    blocking_bblogs_id: [String],
    themeId: String,
    password: String,
    bodyColor: Number,
    isDeleted: Boolean,
    isVerified: Boolean
});
// var userSettings = new mongoose.Schema({
//     id: String,
//     userId: String,
//     filterId: String,
//     account: {
//         loginOptions: String,
//         findblogWithEmail: Boolean,
//         emailMeAboutAccountActivity: Boolean,
//         filteredTags: [String],
//         filteredPostContent: [String],
//         location: String,
//         country: String,
//         browser: String,
//         lastSeen: String,
//         language: String,
//     },
//     dashboard: {
//         sounds: Boolean,
//         bestStuffFirst: Boolean,
//         includeStuffInyourOrbit: Boolean,
//         includeFollowedTagPosts: Boolean,
//         enableColorizedTags: Boolean,
//     },
//     notifications: {
//         emailYouAbout: {
//             newFollowers: Boolean,
//             newReplies: Boolean,
//             newSubmissions: Boolean,
//             mentions: Boolean,
//             newAsks: Boolean,
//             answeredAsks: Boolean,
//             tumblrNews: Boolean,
//             conversationalNotifications: Boolean,

//         }
//     },
//     privacy: {
//         letOthersSeeThatYoureActive: Boolean,
//         improvedSearch: Boolean,

//     }
// });
// var filters = new mongoose.Schema({
//     id: String,
//     userId: String,
//     groupSimilarNotifications: Boolean,
//     mentions: Boolean,
//     mentionInPost: Boolean,
//     mentionInReply: Boolean,
//     reblogs: Boolean,
//     reblogsWithComment: Boolean,
//     reblogsWithoutComment: Boolean,
//     showTagsAddedInReblogs: Boolean,
//     newFollowers: Boolean,
//     likes: Boolean,
//     replies: Boolean,
//     asks: Boolean,
//     receivedNewAsk: Boolean,
//     askAnswered: Boolean,
//     noteSubscriptions: Boolean,
//     contentFlagging: Boolean,
//     postFlagged: Boolean,
//     appealRejected: Boolean,
//     appealAccepted: Boolean,
//     spamReported: Boolean,
//     yourGIFusedInPost: Boolean,
//     postsMissed: Boolean,
//     newGroupblogMembers: Boolean
// });
var notifications = new mongoose.Schema({
    id: String,
    like: String,
    reply: String,
    ask: String,
    follow: String,
    mentionInPost: String,
    mentionInReply: String,
    reblogNaked: String,
    reblogWithContent: String,
    answeredAsk: String,
    newGroupblogMember: String,
    postAttribution: String,

    askAnswered: String,
    conversationalNote: String,
    postFlagged: String,
    appealRejected: String,
    appealAccepted: String,

    postsMissed: String,

});
var report=new mongoose.Schema({
    id:String,
    reportingBlogId:String,
    reportedPostId:String,
    reportType:String,
    reportContent:String
})
const blogSchm = mongoose.model("blogs", blog)
// const groupblogSchm = mongoose.model("group_blogs", groupblog)
// const trendingblogSchm = mongoose.model("trending_blogs", trendingblog)
const themeSchm = mongoose.model("themes", theme)
const blogsettingsSchm = mongoose.model("blog_settings", blogSettings)
const blockSchm = mongoose.model("blocks", block)
// const likeSchm = mongoose.model("likes", like)
// const askSchm = mongoose.model("asks", ask)
// const messageSchm = mongoose.model("messages", message)
const reportSchm = mongoose.model("reports", report)

// const notesSchm = mongoose.model("notes", notes)
// const followSchm = mongoose.model("follows", follow)
const postSchm = mongoose.model("posts", post)
const chatSchm = mongoose.model("chats", chat)
// const textPostsSchm = mongoose.model("text_Posts", textPost)
// const photopostSchm = mongoose.model("photo_Posts", photoPost)
// const quotePostsSchm = mongoose.model("quote_Posts", quotePost)
// const linkpostSchm = mongoose.model("link_posts", linkPost)
// const chatPostSchm = mongoose.model("chat_Posts", chatPost)
// const audioPostSchm = mongoose.model("audioPosts", audioPost)
// const videoPostSchm = mongoose.model("video_posts", videoPost)
// const answerPostSchm = mongoose.model("answer_Posts", answerPost)
// const submissionpostSchm = mongoose.model("submission_posts", submissionPost)
// const reblogpostsSchm = mongoose.model("reblog_posts", reblogPost)
// const trendingpostSchm = mongoose.model("trending_posts", trendingPost)
const userSchm = mongoose.model("users", user)
// const userSettingsSchm = mongoose.model("users_settings", userSettings)
// const filtersSchm = mongoose.model("filters", filters)
const notificationsSchm = mongoose.model("notifications", notifications)


module.exports = {
    report:reportSchm,
    Blog: blogSchm,
    // GroupBlog: groupblogSchm,
    // TrendingBlog: trendingblogSchm,
    themes: themeSchm,
    // blogSettings: blogsettingsSchm, 
    // blocks: blockSchm,
    // like: likeSchm,
    // notes: notesSchm,
    // follow: followSchm,
    // ask: askSchm, 
    // message: messageSchm,
    posts: postSchm
    , chat: chatSchm,
    // textPost: textPostsSchm,
    // photoPost: photopostSchm,
    // quotePost: quotePostsSchm,
    // linkPost: linkpostSchm,
    // chatPost: chatPostSchm,
    // audioPost: audioPostSchm,
    // videoPost: videoPostSchm,
    // answerPost: answerPostSchm,
    // submissionPost: submissionpostSchm,
    // reblogPost: reblogpostsSchm,
    // trendingPost: trendingpostSchm,
    user: userSchm,
    // userSettings: userSettingsSchm,
    // filters: filtersSchm,
    notifications: notificationsSchm,

}