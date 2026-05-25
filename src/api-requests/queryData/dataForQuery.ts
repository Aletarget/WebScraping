export interface queryStructure {
    name: string
    query: string
}
export const Queries: queryStructure[] = [
    {
        name: "AccessoriesQuery",
        query: `(airpods OR earbuds OR headphones OR bose OR sony OR jbl OR anker OR logitech OR corsair OR steelseries OR fitbit OR garmin OR amazfit OR "apple watch" OR "galaxy watch") AND ("my experience" OR "i bought" OR "i got" OR "i've been using" OR "worth it" OR "happy with") AND (battery OR sound OR audio OR comfort OR anc OR microphone OR bluetooth OR connectivity) -is:reply -is:retweet -url:links -crypto -nft -job -hiring -giveaway -football -nba`
    },
    {
        name: "ComputersQuery",
        query: `(macbook OR macbooks OR thinkpad OR alienware OR razer OR msi OR asus OR acer OR dell OR hp OR lenovo OR surface OR ryzen OR intel OR amd OR nvidia OR rtx) AND ("my experience" OR "i bought" OR "i got" OR "i've been using" OR "worth it" OR "daily driver" OR "happy with") AND (performance OR gaming OR fps OR battery OR fan OR screen OR keyboard OR temperature OR productivity OR lag) -is:reply -is:retweet -url:links -crypto -nft -job -hiring -giveaway -football -nba`
    },
    {
        name: "PhonesQuery",
        query: `(iphone OR iphones OR samsung OR galaxy OR pixel OR xiaomi OR oneplus OR motorola OR huawei OR honor OR realme OR oppo OR vivo) AND ("my experience" OR "i bought" OR "i got" OR "i've been using" OR "worth it" OR "not worth it" OR "daily driver" OR "happy with") AND (battery OR camera OR performance OR display OR heating OR charging OR android OR ios OR lag) -is:reply -is:retweet -url:links -crypto -nft -job -hiring -giveaway -football -nba`
    }
]
export const TwitterUrl = `https://api.twitterapi.io/twitter/tweet/advanced_search`