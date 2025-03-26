export interface glList {
    id: number;
    title: string;
    type: "novel" | "series" | "comic";
    creator: string;
    category: string;
    status: "ongoing" | "finish";
    noOfEpisode: number;
    overview: string;
    opinion: string;
    imageString: string;
}

export const glData: glList[] = [
    {
        id: 1,
        title: "The Secret of Us",
        type: "series",
        creator: "Director: Saratswadee Wongsomphet",
        category: "romance-drama",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/Nongearn.jpg"
    },
    {
        id: 2,
        title: "Reverse With Me",
        type: "series",
        creator: "Saratswadee Wongsomphet",
        category: "fantasy",
        status: "finish",
        noOfEpisode: 8,
        overview: "\tA captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past.\n\n{{video:https://www.youtube.com/embed/7FVuDuM66iU}}\n\nStill scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. \tBefore he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/reversewithme.jpg"
    },
    {
        id: 3,
        title: "23.5 When the Earth Spinning Around",
        type: "series",
        creator: "Saratswadee Wongsomphet",
        category: "thriller/mystery",
        status: "finish",
        noOfEpisode: 8,
        overview: "\n\n{{video:https://www.youtube.com/embed/7FVuDuM66iU}}\n\nA captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/235OngsaSun.jpg" 
    },
    {
        id: 4,
        title: "Pluto",
        type: "series",
        creator: "Saratswadee Wongsomphet",
        category: "slice of life",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/pluto.jpg"
    },
    {
        id: 5,
        title: "Bloom Into You",
        type: "comic",
        creator: "Saratswadee Wongsomphet",
        category: "romance",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/bloomintou.png"
    },
    {
        id: 6,
        title: "Relationship Guidelines",
        type: "comic",
        creator: "Saratswadee Wongsomphet",
        category: "romance-drama",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/relationshipguideline.jpg"
    },
    {
        id: 7,
        title: "Bai Lijin Among Mortals",
        type: "comic",
        creator: "Saratswadee Wongsomphet",
        category: "action",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/beilijin.jpg"
    },
    {
        id: 8,
        title: "SQ Begin W/Your Name",
        type: "comic",
        creator: "Saratswadee Wongsomphet",
        category: "comedy",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/sq.jpg"
    },
    {
        id: 9,
        title: "Friendly Rivalry",
        type: "series",
        creator: "Saratswadee Wongsomphet",
        category: "romance",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/friendlyrivalry.webp"
    },
    {
        id: 10,
        title: "Listening to the Stars",
        type: "comic",
        creator: "Saratswadee Wongsomphet",
        category: "romance-drama",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/listentostar.jpg"
    },
    {
        id:11,
        title: "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady",
        type: "series",
        creator: "Saratswadee Wongsomphet",
        category: "action",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/magic.webp"
    },
    {
        id: 12,
        title: "The Guy She Was Interested in Wasn't a Guy at All",
        type: "comic",
        creator: "Saratswadee Wongsomphet",
        category: "comedy",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/theguyshewas.webp"
    },
    {
        id: 13,
        title: "I'm in Love with the Villainess",
        type: "novel",
        creator: "Saratswadee Wongsomphet",
        category: "romance",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/iminlovewithvillianess.webp"
    },
    {
        id: 14,
        title: "The Secret of Us",
        type: "novel",
        creator: "Saratswadee Wongsomphet",
        category: "romance-drama",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/tsounovel.webp"
    },
    {
        id:15,
        title: "Rust in the Rain",
        type: "novel",
        creator: "Saratswadee Wongsomphet",
        category: "action",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/หฝกสน.png"
    },
    {
        id: 16,
        title: "Reverse With Me",
        type: "novel",
        creator: "Saratswadee Wongsomphet",
        category: "comedy",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/reversewithmenovel.jpg"
    },
    {
        id: 17,
        title: "About Galaxy",
        type: "novel",
        creator: "Saratswadee Wongsomphet",
        category: "romance",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/aboutgalaxy.jpeg"
    },
    {
        id: 18,
        title: "The moon likes your smile",
        type: "novel",
        creator: "Saratswadee Wongsomphet",
        category: "romance-drama",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/moonlikeursmile.jpeg"
    },
    {
        id:19,
        title: "Like A Palette",
        type: "series",
        creator: "Saratswadee Wongsomphet",
        category: "action",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/jenja.jpeg"
    },
    {
        id: 20,
        title: "Enemies With Benefits",
        type: "novel",
        creator: "Saratswadee Wongsomphet",
        category: "comedy",
        status: "finish",
        noOfEpisode: 8,
        overview: "A captivating romance-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/enemieswb.jpeg"
    }
];