const urls = [
    // youtube subdomains (m, www, etc.)
    "https://*.youtube.com/watch?v=rTgj1HxmUbg",
    "https://*.youtube.com/watch?v=Lrj2Hq7xqQ8",
    "https://*.youtube.com/watch?v=xaazUgEKuVA",
    "https://*.youtube.com/watch?v=oHg5SJYRHA0",
    "https://*.youtube.com/watch?v=HIcSWuKMwOw",
    "https://*.youtube.com/watch?v=iik25wqIuFo",
    "https://*.youtube.com/watch?v=cvh0nX08nRw",
    "https://*.youtube.com/watch?v=ghGoI7xVtSI",
    "https://*.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://*.youtube.com/watch?v=6_b7RDuLwcI",
    "https://*.youtube.com/watch?v=34Ig3X59_qA",
    "https://*.youtube.com/watch?v=VbUuB1aN2DA",
    "https://*.youtube.com/watch?v=IO9XlQrEt2Y",
    "https://*.youtube.com/watch?v=BjDebmqFRuc",
    "https://*.youtube.com/watch?v=DLzxrzFCyOs",
    "https://*.youtube.com/watch?v=QY7SxnKqMmE",
    "https://*.youtube.com/watch?v=R93Uy0dQazE",
    "https://*.youtube.com/watch?v=709ydk3PorM",
    "https://*.youtube.com/watch?v=QTT5iHCHSn0",
    "https://*.youtube.com/watch?v=iX6ex5fYT7o",
    "https://*.youtube.com/watch?v=NIjXpYSYDAU",
    "https://*.youtube.com/watch?v=uv9sUO36lkE",
    "https://*.youtube.com/watch?v=AdcS2kZJfVo",
    "https://*.youtube.com/watch?v=KOK0r08BXyI",
    "https://*.youtube.com/watch?v=Xz3C9VbKA74",
    "https://*.youtube.com/watch?v=dQObmjuS_Q4",
    "https://*.youtube.com/watch?v=fcZXfoB2f70",
    // youtube.com
    "https://youtube.com/watch?v=rTgj1HxmUbg",
    "https://youtube.com/watch?v=Lrj2Hq7xqQ8",
    "https://youtube.com/watch?v=xaazUgEKuVA",
    "https://youtube.com/watch?v=oHg5SJYRHA0",
    "https://youtube.com/watch?v=HIcSWuKMwOw",
    "https://youtube.com/watch?v=iik25wqIuFo",
    "https://youtube.com/watch?v=cvh0nX08nRw",
    "https://youtube.com/watch?v=ghGoI7xVtSI",
    "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "https://youtube.com/watch?v=6_b7RDuLwcI",
    "https://youtube.com/watch?v=34Ig3X59_qA",
    "https://youtube.com/watch?v=VbUuB1aN2DA",
    "https://youtube.com/watch?v=IO9XlQrEt2Y",
    "https://youtube.com/watch?v=BjDebmqFRuc",
    "https://youtube.com/watch?v=DLzxrzFCyOs",
    "https://youtube.com/watch?v=QY7SxnKqMmE",
    "https://youtube.com/watch?v=R93Uy0dQazE",
    "https://youtube.com/watch?v=709ydk3PorM",
    "https://youtube.com/watch?v=QTT5iHCHSn0",
    "https://youtube.com/watch?v=iX6ex5fYT7o",
    "https://youtube.com/watch?v=NIjXpYSYDAU",
    "https://youtube.com/watch?v=uv9sUO36lkE",
    "https://youtube.com/watch?v=AdcS2kZJfVo",
    "https://youtube.com/watch?v=KOK0r08BXyI",
    "https://youtube.com/watch?v=Xz3C9VbKA74",
    "https://youtube.com/watch?v=dQObmjuS_Q4",
    "https://youtube.com/watch?v=fcZXfoB2f70"
]

chrome.webRequest.onBeforeRequest.addListener(
	(details) => {
		const url = new URL(details.url);	
		return {
			redirectUrl: `https://rickrollnt.coleh.xyz/no.html`
		};
	},
	{
		urls: urls,
		types: [
			'main_frame',
			'sub_frame',
			'stylesheet',
			'script',
			'image',
			'object',
			'xmlhttprequest',
			'other'
		]
	},
	['blocking']
);
