export interface thglList {
    id: number;
    title: string;
    type: "นิยาย" | "ซีรี่ส์" | "คอมมิค";
    creator: string;
    category: string;
    status: "จบแล้ว" | "ยังไม่จบ";
    noOfEpisode: number;
    overview: string;
    opinion: string;
    imageString: string;
}

export const thglData: thglList[] = [
    {
        id: 1,
        title: "ใจซ่อนรัก",
        type: "ซีรี่ส์",
        creator: "ผู้กำกับ: สรัสวดี วงศ์สมเพ็ชร",
        category: "โรแมนติกดราม่า",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/Nongearn.jpg"
    },
    {
        id: 2,
        title: "ล้านวงโคจร",
        type: "ซีรี่ส์",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "แฟนตาซี",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "\tA captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past.\n\n{{video:https://www.youtube.com/embed/7FVuDuM66iU}}\n\nStill scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. \tBefore he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/reversewithme.jpg"
    },
    {
        id: 3,
        title: "23.5 องศาที่โลกเอียง",
        type: "ซีรี่ส์",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ระทึกขวัญ/สืบสวน",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "\n\n{{video:https://www.youtube.com/embed/7FVuDuM66iU}}\n\nA captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/235OngsaSun.jpg" 
    },
    {
        id: 4,
        title: "พลูโต นิทาน ดวงดาว ความรัก",
        type: "ซีรี่ส์",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ชีวิตประจำวัน",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/pluto.jpg"
    },
    {
        id: 5,
        title: "สุดท้ายก็คือเธอ",
        type: "คอมมิค",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "โรแมนติก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/bloomintou.png"
    },
    {
        id: 6,
        title: "ไกด์ไลน์ไกด์รัก",
        type: "คอมมิค",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "โรแมนติกดราม่า",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/relationshipguideline.jpg"
    },
    {
        id: 7,
        title: "เหรินเจียนไป๋หลีจิ่น",
        type: "คอมมิค",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "แอ็กชัน",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/beilijin.jpg"
    },
    {
        id: 8,
        title: "SQ จุดเริ่มต้นคือชื่อของเธอ",
        type: "คอมมิค",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/sq.jpg"
    },
    {
        id: 9,
        title: "เพื่อนรัก เกมลวง",
        type: "ซีรี่ส์",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "โรแมนติก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/friendlyrivalry.webp"
    },
    {
        id: 10,
        title: "เสียงเรียกจากดวงดาว",
        type: "คอมมิค",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "โรแมนติกดราม่า",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/listentostar.jpg"
    },
    {
        id:11,
        title: "การปฏิวัติเวทมนตร์ขององค์หญิงเกิดใหม่กับยัยคุณหนูยอดอัจฉริยะ",
        type: "ซีรี่ส์",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "แอ็กชัน",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/magic.webp"
    },
    {
        id: 12,
        title: "คนที่เธอปิ๊ง ความจริงไม่ใช่ผู้ชาย",
        type: "คอมมิค",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/theguyshewas.webp"
    },
    {
        id: 13,
        title: "ทำไงดีเกมนี้นางร้ายน่ารัก",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "โรแมนติก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/iminlovewithvillianess.webp"
    },
    {
        id: 14,
        title: "ใจซ่อนรัก",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "โรแมนติกดราม่า",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/tsounovel.webp"
    },
    {
        id:15,
        title: "หยดฝนกลิ่นสนิม",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "แอ็กชัน",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/หฝกสน.png"
    },
    {
        id: 16,
        title: "ล้านวงโคจร",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/reversewithmenovel.jpg"
    },
    {
        id: 17,
        title: "มูลค่าดาวล้านดวง",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "โรแมนติก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/aboutgalaxy.jpeg"
    },
    {
        id: 18,
        title: "ฟรังคล้ายเดือน",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "โรแมนติกดราม่า",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/moonlikeursmile.jpeg"
    },
    {
        id:19,
        title: "เจนจะเป็นดาวสินกํา",
        type: "ซีรี่ส์",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "แอ็กชัน",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/jenja.jpeg"
    },
    {
        id: 20,
        title: "ลัลล์ไม่ชอบไวน์",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/enemieswb.jpeg"
    },
    {
        id: 21,
        title: "อาหารของฉันดูน่ารักมาก",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/myfoodverycute.webp" 
    },
    {
        id: 22,
        title: "โปรดรังแกฉันทีคุณนางร้าย!",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/pleasebulyme.jpg" 
    },
    {
        id: 23,
        title: "บีมายเบบี้",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/bemybaby.jpeg" 
    },
    {
        id: 24,
        title: "คนโปรดของควีน",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/queen.jpeg" 
    },
    {
        id: 25,
        title: "ตะวันวินนี่",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/moreNmore.jpeg" 
    },
    {
        id: 26,
        title: "ธันวาเดือนหนาว",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/dangerfriend.jpeg" 
    },
    {
        id: 27,
        title: "วันนี้เธอก็ยังน่ารัก",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/mydarlingcute.jpeg" 
    },
    {
        id: 28,
        title: "โซลเมท",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/soulmate.jpg" 
    },
    {
        id: 29,
        title: "รักเราดั่งพายุดอกไม้",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/hananiarashi.jpg"
    },
    {
        id: 30,
        title: "อายากะจังรักรุ่นพี่ฮิโรโกะนะคะ",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/hirokoayaka.jpg"
    },
    {
        id: 31,
        title: "แอนนีโมนีในห้วงรัก",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/anemone.jpg"
    },
    {
        id: 32,
        title: "ช่วยโอ๋ฉันที คุณฮินาโมริ",
        type: "นิยาย",
        creator: "สรัสวดี วงศ์สมเพ็ชร",
        category: "ตลก",
        status: "จบแล้ว",
        noOfEpisode: 8,
        overview: "A captivating โรแมนติก-drama that follows Fahlada, an elegant dermatologist who hides a painful past. Still scarred by her breakup with her ex-girlfriend, Earn Sanithada, she has built high walls around her heart. But fate intervenes when Earn, a rising star actress, returns—lively, charming, and determined to win back the love she lost and take back her P'Mhor.",
        opinion: "It's a great drama. Before he moved to the inner city, he had always believed that security complexes were psychological. He stepped gingerly onto the bridge knowing that enchantment awaited on the other side...",
        imageString: "/allgl/spoilmepls.jpg"
    }
];