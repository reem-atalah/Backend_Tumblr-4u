const {Blog}=require("../models/tumb")
// const {GroupBlog}=require("../models/tumb")
// const {TrendingBlog}=require("../models/tumb")
const {themes}=require("../models/tumb")
const {blogSettings}=require("../models/tumb")
const {blocks}=require("../models/tumb")
// const {notes}=require("../models/tumb")
// const {follow}=require("../models/tumb")
// const {ask}=require("../models/tumb")
const {posts}=require("../models/tumb")
// const {report}=require("../models/tumb")
// const {like}=require("../models/tumb")
// const {message}=require("../models/tumb")
const {chat}=require("../models/tumb")
// const {textPost}=require("../models/tumb")
// const {photoPost}=require("../models/tumb")
// const {quotePost}=require("../models/tumb")
// const {linkPost}=require("../models/tumb")
// const {chatPost}=require("../models/tumb")
// const {audioPost}=require("../models/tumb")
// const {videoPost}=require("../models/tumb")
// const {answerPost}=require("../models/tumb")
// const {submissionPost}=require("../models/tumb")
// const {reblogPost}=require("../models/tumb")
// const {trendingPost}=require("../models/tumb")
const {user}=require("../models/tumb")
// const {userSettings}=require("../models/tumb")
// const {filters}=require("../models/tumb")
const {notifications}=require("../models/tumb")

// exports.hello=(req,res)=>{
// res.send("hello, i am an engineer")
// }
exports.createdb=(req,res)=>{
    console.log("creating a blog")
    // var rprt=new report({
    //     id:String,
    //     reportingBlogId:String,
    //     reportedPostId:String,
    //     reportType:String,
    //     reportContent:String
    // })
    // rprt.save();
//     var photopost=new photoPost({
//    id: "String",
//     postId:"String",
//     caption: "String",
//     captionSuppliedByUser: "String",
//     width: 11,
//     height: 100,
//     widthOfIndImg: 12,
//     heightOfIndImg: 100,
//     link: "String",
// });
// photopost.save();
// var qoutepost=new quotePost({
//     id: String,
//     postId: String,
//     text: String,
//     Source: String,
// });
// qoutepost.save();
// var linkpost = new linkPost({
//     id: String,
//     postId: String,
//     title: String,
//     summery: String,
//     description: String,
//     url: String,
//     linkAuthor: String,


// });
// linkpost.save();
// var chatpost = new chatPost({
//     id: String,
//     postId: String,
//     title: String,
//     body: String

// });
// chatpost.save();
// var audiopost = new audioPost({
//     id: String,
//     postId: String,
//     caption: String,
//     external: String,
//     data: String,
//     artist: String,
//     album: String,
//     trackName: String,
//     trackNumber: 15
// });
// audiopost.save();
// var videopost = new videoPost({
//     id: String,
//     postId: String,
//     caption: String,
//     data: String,
//     embed: String,
// });
// videopost.save();
// var answerpost = new answerPost({
//     id: String,
//     postId: String,
//     askingName: String,
//     askingURL: String,
//     question: String,
//     answer: String

// });
// answerpost.save();
// var submissionpost = new submissionPost({
//     id: String,
//     postId: String,
//     submittedblogName: String,
//     submittedblogLink: String,
// });
// submissionpost.save();
// var reblogpost = new reblogPost({
//     id: String,
//     postId: String,
//     rebloggedPostId: String,
//     description: String,
// });
//  reblogpost.save();
// var trendingpost = new trendingPost({
//     id: String,
//     trendingPostId: String,
//     type: String,
//     region: String
// });
// trendingpost.save()
var usr = new user({
    id: String,
    name: String,
    blogs_id: [],
    email: String,
    age: 15,
    favorite_blogs: [],
    following_blogs: [],
    followers_blogs: [],
    likes_posts_id: [],
    blocking_bblogs_id: [],
    theme_id: String,
    password: String,
    body_color: 15,
    is_deleted: true,
    is_verified: true
});
usr.save();
// var usersettings = new userSettings({
//     id: String,
//     user_id: String,
//     // filterId: String,
//     account: {
//         // loginOptions: String,
//         // findblogWithEmail: true,
//         // emailMeAboutAccountActivity: true,
//         filtered_tags: [],
//         filtered_postContent: [],
//         location: String,
//         // country: String,
//         // browser: String,
//         // lastSeen: String,
//         // language: String,
//     },
//     // dashboard: {
//     //     sounds: true,
//     //     bestStuffFirst: true,
//     //     includeStuffInyourOrbit: true,
//     //     includeFollowedTagPosts: true,
//     //     enableColorizedTags: true,
//     // },
//     notifications: {
//         email_you_about: {
//             new_followers: true,
//             new_replies: true,
//             new_submissions: true,
//             mentions: true,
//             newAsks: true,
//             answeredAsks: true,
//             tumblrNews: true,
//             conversationalNotifications: true,

//         }
//     },
    // privacy: {
    //     letOthersSeeThatYoureActive: true,
    //     improvedSearch: true,

    // }
// });
// usersettings.save();
// var filter = new filters({
//     id: String,
//     userId: String,
//     groupSimilarNotifications: true,
//     mentions: true,
//     mentionInPost: true,
//     mentionInReply: true,
//     reblogs: true,
//     reblogsWithComment: true,
//     reblogsWithoutComment: true,
//     showTagsAddedInReblogs: true,
//     newFollowers: true,
//     likes: true,
//     replies: true,
//     asks: true,
//     receivedNewAsk: true,
//     askAnswered: true,
//     noteSubscriptions: true,
//     contentFlagging: true,
//     postFlagged: true,
//     appealRejected: true,
//     appealAccepted: true,
//     spamReported: true,
//     yourGIFusedInPost: true,
//     postsMissed: true,
//     newGroupblogMembers: true
// });
// filter.save();
var notification = new notifications({
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
notification.save();
//     var txtpost=new textPost({
//          id: "String",
//     postId:"String",
//     title:"String",
//     body:"String",
// });
// txtpost.save();
    // var msg = new message({
    //     id:"String",
    //     submissionPostId: "String",
    //     askedPostId: "String",
    //     isDeleted: true
    // });
    // msg.save();
   var post = new posts({
        id: "String",
        blogId: "String",
        postURL: "String",
        type: "String",
        tags: ["{ type: [String] }","h"],
        // mobile: true,
        date: Date.now(),
        timeStamp:88,
        scheduleTime: Date.now(),
        // slug: "String",
        data: {
            id:"String",
            isPinned:true,
            fontType:"String",
            strickThrough: true,
            isSmall: true,
            fontColor: "String",
            link: "String",
            photo: [],
            video: [],
            audio: [],
            gif: [],
            Link:[],
            keepReading: [],
            isSubmission: true,
            isPrivate:true,
            isDeleted: true
        },
    });
    post.save();
    var cht = new chat({
        id:"String",
        myblogId: "String",
        chatFriendblogId: "String",
        messeges: {
            sender: "String",
            receiver: "String",
            content: "String",
            time: "String",
        }
    });
    cht.save();
    // var foll=new follow({
    //     id:"String",
    //     userId:"String",
    //     followingblogId:"String",
    //     followerblogId: "String",
    //     isDeleted: true
    // });
    // foll.save();
    // var ask_ = new ask({
    //     id: "String",
    //     text: "String",
    //     askingblogId: "String",
    //     askedblogId: "String",
    //     isDeleted: true
    // });
    // ask_.save();
    // var note=new notes(
    //    {     id: "String",
    //         blogId:"String",
    //         note: "String",
    //         postId: "String",
    //         isDeleted:true
    //     }
    // );
    // note.save();
    // var block=new blocks(
    //     {
    //         id: "String",
    //         blogId: "String",
    //         blockedblogId:"String",
    //         postId: "String",
    //         isDeleted: true
    //     });
    // block.save();

    // var lik = new like({
    //     id:"String",
    //     blogId: "String",
    //     postId:"String",
    //     isDeleted: true,
    // });
    // lik.save();

    // var blogsettings=new blogSettings(
    // {   id:String,
    //     likes:true,
    //     following: true,
    //     replies:String,
    //     ask: true,
    //     allowAnonymousQuestions:true,
    //     askPageTitle:String,
    //     letPeopleSubmitPosts: true,
    //     submissionsPageTitle: String,
    //     // submissionsGuidelines: String,
    //     // allowedSubmissionsPostTypes:String,
    //     // onlyAllowedMessagesFromTumblrsYouFollow:true,
    //     queue: String, //?
    //     // language: String,
    //     // timeZone:String,
    //     // timeZoneOffset:String,
    //     // hideblog: true,
    //     // hideblogFromSearchResults:true
    // }
    // );
    // blogsettings.save();
//     var trendingBlog=new TrendingBlog(
//         {
            
//                 id:"1",
//                 trendingblogId:"1",
            
//                country:"Egypt",
                
            
//                 region:"Cairo",
//         }
//     )
//   trendingBlog.save();
    // var groupBlog=new GroupBlog(
    //     {
    //         id:"1",
    //         blogId:"1",
    //         isAdmin: true,
    //         isDeleted: true,
    //     }
    // )
    // groupBlog.save();
    var blog=new Blog(
        {
            id:"1",
            title:"nouro",
            reblog_parent_id:"string",
            email:"@roaun",
            name:"nour",
            password:"nopassword",
            // updated:64,
            description:"description",
            // isBlockedFromPrimary:true,
            isPrimary:true,
            blogVisitor:55,
            followedTags:["tags","otherTages"],
            // isDeleted:true,
            // themeId:"55",
            // createdBy:"126"
        }
    )
    blog.save();
    var theme=new themes({
        id:  "String",
        blogId: "String",
        avatar: [],
        avatarShape: "String",
        backgroundColor: "String",
        // bodyFront: "String",
        // headerBounds: "String",
        headerImage: "String",
        // headerImageFocused: "String",
        // headerImagePoster: "String",
        // headerImageScaled: "String",
        // hedaerStretch: true,
        linkColor: "String",
        showAvatar:true,
        showDescription:true,
        showHeaderImage: true,
        showTitle: true,
        titleColor:"String",
        titleFont: "String",
        // titleFontWeight: "String",
        // layout: "String",
        // slidingHeader:true,
        // showNavigation: true,
        endlessScrolling: true,
        // syntaxHighlighting: true,
        // relatedPosts:true,
        // disqusShortName:"String",
        // googleAnalyticId: "String",
    });
    theme.save();
    // console.log(`ablog created: ${trendingBlog}`)
};

exports.hello=(req,res)=>{
    res.send("hello, i am an engineer")
    }
