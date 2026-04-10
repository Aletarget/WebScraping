export interface TwitterAPIResponse {
    tweets:        Tweet[];
    has_next_page: boolean;
    next_cursor:   string;
}

export interface Tweet {
    type:              TweetType;
    id:                string;
    url:               string;
    twitterUrl:        string;
    text:              string;
    source:            Source;
    retweetCount:      number;
    replyCount:        number;
    likeCount:         number;
    quoteCount:        number;
    viewCount:         number;
    createdAt:         string;
    lang:              Lang;
    bookmarkCount:     number;
    isReply:           boolean;
    inReplyToId:       null | string;
    conversationId:    string;
    displayTextRange:  number[];
    inReplyToUserId:   null | string;
    inReplyToUsername: null | string;
    author:            Author;
    extendedEntities:  ExtendedEntities;
    card:              null;
    place:             Place;
    entities:          DescriptionClass;
    quoted_tweet:      null;
    retweeted_tweet:   null;
    isLimitedReply:    boolean;
    communityInfo:     null;
    article:           null;
}

export interface Author {
    type:                       AuthorType;
    userName:                   string;
    url:                        string;
    twitterUrl:                 string;
    id:                         string;
    name:                       string;
    isVerified:                 boolean;
    isBlueVerified:             boolean;
    verifiedType:               null | string;
    profilePicture:             string;
    coverPicture:               string;
    description:                string;
    location:                   string;
    followers:                  number;
    following:                  number;
    status:                     string;
    canDm:                      boolean;
    canMediaTag:                boolean;
    createdAt:                  string;
    entities:                   AuthorEntities;
    fastFollowersCount:         number;
    favouritesCount:            number;
    hasCustomTimelines:         boolean;
    isTranslator:               boolean;
    mediaCount:                 number;
    statusesCount:              number;
    withheldInCountries:        any[];
    affiliatesHighlightedLabel: Place;
    possiblySensitive:          boolean;
    pinnedTweetIds:             string[];
    profile_bio:                ProfileBio;
    isAutomated:                boolean;
    automatedBy:                null;
}

export interface Place {
}

export interface AuthorEntities {
    description: Description;
    url:         Place;
}

export interface Description {
    urls: URL[];
}

export interface URL {
    display_url:  string;
    expanded_url: string;
    indices:      number[];
    url:          string;
}

export interface ProfileBio {
    description: string;
    entities:    ProfileBioEntities;
}

export interface ProfileBioEntities {
    description: DescriptionClass;
    url?:        Description;
}

export interface DescriptionClass {
    hashtags:      Hashtag[];
    symbols:       any[];
    urls:          URL[];
    user_mentions: UserMention[];
    timestamps?:   any[];
}

export interface Hashtag {
    indices: number[];
    text:    string;
}

export interface UserMention {
    id_str:      string;
    indices:     number[];
    name:        string;
    screen_name: string;
}

export enum AuthorType {
    User = "user",
}

export interface ExtendedEntities {
    media?: Media[];
}

export interface Media {
    allow_download_status?: AllowDownloadStatus;
    display_url:            string;
    expanded_url:           string;
    ext_media_availability: EXTMediaAvailability;
    features:               Features;
    id_str:                 string;
    indices:                number[];
    media_key:              string;
    media_results:          MediaResults;
    media_url_https:        string;
    original_info:          OriginalInfo;
    sizes:                  Sizes;
    type:                   string;
    url:                    string;
}

export interface AllowDownloadStatus {
    allow_download: boolean;
}

export interface EXTMediaAvailability {
    status: string;
}

export interface Features {
    large: OrigClass;
    orig:  OrigClass;
    all?:  All;
}

export interface All {
    tags: Tag[];
}

export interface Tag {
    name:        string;
    screen_name: string;
    type:        AuthorType;
    user_id:     string;
}

export interface OrigClass {
    faces: FocusRect[];
}

export interface FocusRect {
    h: number;
    w: number;
    x: number;
    y: number;
}

export interface MediaResults {
    id:     string;
    result: Result;
}

export interface Result {
    __typename: string;
    id:         string;
    media_key:  string;
}

export interface OriginalInfo {
    focus_rects: FocusRect[];
    height:      number;
    width:       number;
}

export interface Sizes {
    large: SizesLarge;
}

export interface SizesLarge {
    h: number;
    w: number;
}

export enum Lang {
    En = "en",
    Es = "es",
    In = "in",
    Ja = "ja",
}

export enum Source {
    TwitterForIPhone = "Twitter for iPhone",
}

export enum TweetType {
    Tweet = "tweet",
}
