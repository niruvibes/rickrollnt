const urls = [
    // youtube subdomains (m, www, etc.)
    '*://*.youtube.com/watch?v=rTgj1HxmUbg',
    '*://*.youtube.com/watch?v=Lrj2Hq7xqQ8',
    '*://*.youtube.com/watch?v=xaazUgEKuVA',
    '*://*.youtube.com/watch?v=oHg5SJYRHA0',
    '*://*.youtube.com/watch?v=HIcSWuKMwOw',
    '*://*.youtube.com/watch?v=iik25wqIuFo',
    '*://*.youtube.com/watch?v=cvh0nX08nRw',
    '*://*.youtube.com/watch?v=ghGoI7xVtSI',
    '*://*.youtube.com/watch?v=dQw4w9WgXcQ',
    '*://*.youtube.com/watch?v=6_b7RDuLwcI',
    '*://*.youtube.com/watch?v=34Ig3X59_qA',
    '*://*.youtube.com/watch?v=VbUuB1aN2DA',
    '*://*.youtube.com/watch?v=IO9XlQrEt2Y',
    '*://*.youtube.com/watch?v=BjDebmqFRuc',
    '*://*.youtube.com/watch?v=DLzxrzFCyOs',
    '*://*.youtube.com/watch?v=QY7SxnKqMmE',
    '*://*.youtube.com/watch?v=R93Uy0dQazE',
    '*://*.youtube.com/watch?v=709ydk3PorM',
    '*://*.youtube.com/watch?v=QTT5iHCHSn0',
    '*://*.youtube.com/watch?v=iX6ex5fYT7o',
    '*://*.youtube.com/watch?v=NIjXpYSYDAU',
    '*://*.youtube.com/watch?v=uv9sUO36lkE',
    '*://*.youtube.com/watch?v=AdcS2kZJfVo',
    '*://*.youtube.com/watch?v=KOK0r08BXyI',
    '*://*.youtube.com/watch?v=Xz3C9VbKA74',
    '*://*.youtube.com/watch?v=dQObmjuS_Q4',
    '*://*.youtube.com/watch?v=fcZXfoB2f70',
    '*://*.youtube.com/watch?v=HUgzYPm9g',
    '*://*.youtube.com/watch?v=gvGyS5j9aFY',
    '*://*.youtube.com/watch?v=r8tXjJL3xcM',
    '*://*.youtube.com/watch?v=cqF6M25kqq4',
    '*://*.youtube.com/watch?v=cqF6M25kqq4',
    '*://*.youtube.com/watch?v=fZi4JxbTwPo',
    '*://*.youtube.com/watch?v=VSa2IqDwnQ8',
    '*://*.youtube.com/watch?v=V-_O7nl0Ii0',
    '*://*.youtube.com/watch?v=j5a0jTc9S10',
    '*://*.youtube.com/watch?v=_h0kLUU-Gxs',
    '*://*.youtube.com/watch?v=fMnIpIMuBJI',
    '*://*.youtube.com/watch?v=Y5zbaF097lQ',
    '*://*.youtube.com/watch?v=N3MKlU5_Gs0',
    '*://*.youtube.com/watch?v=-ioFOx_pE6w',
    '*://*.youtube.com/watch?v=nQGsT44rVjk',
    '*://*.youtube.com/watch?v=nHRbZW097Uk',
    '*://*.youtube.com/watch?v=vkbQmH5MPME',
    '*://*.youtube.com/watch?v=8O_ifyIIrN4',
    // youtube.com
    '*://youtube.com/watch?v=rTgj1HxmUbg',
    '*://youtube.com/watch?v=Lrj2Hq7xqQ8',
    '*://youtube.com/watch?v=xaazUgEKuVA',
    '*://youtube.com/watch?v=oHg5SJYRHA0',
    '*://youtube.com/watch?v=HIcSWuKMwOw',
    '*://youtube.com/watch?v=iik25wqIuFo',
    '*://youtube.com/watch?v=cvh0nX08nRw',
    '*://youtube.com/watch?v=ghGoI7xVtSI',
    '*://youtube.com/watch?v=dQw4w9WgXcQ',
    '*://youtube.com/watch?v=6_b7RDuLwcI',
    '*://youtube.com/watch?v=34Ig3X59_qA',
    '*://youtube.com/watch?v=VbUuB1aN2DA',
    '*://youtube.com/watch?v=IO9XlQrEt2Y',
    '*://youtube.com/watch?v=BjDebmqFRuc',
    '*://youtube.com/watch?v=DLzxrzFCyOs',
    '*://youtube.com/watch?v=QY7SxnKqMmE',
    '*://youtube.com/watch?v=R93Uy0dQazE',
    '*://youtube.com/watch?v=709ydk3PorM',
    '*://youtube.com/watch?v=QTT5iHCHSn0',
    '*://youtube.com/watch?v=iX6ex5fYT7o',
    '*://youtube.com/watch?v=NIjXpYSYDAU',
    '*://youtube.com/watch?v=uv9sUO36lkE',
    '*://youtube.com/watch?v=AdcS2kZJfVo',
    '*://youtube.com/watch?v=KOK0r08BXyI',
    '*://youtube.com/watch?v=Xz3C9VbKA74',
    '*://youtube.com/watch?v=dQObmjuS_Q4',
    '*://youtube.com/watch?v=fcZXfoB2f70',
    '*://youtube.com/watch?v=HUgzYPm9g',
    '*://youtube.com/watch?v=gvGyS5j9aFY',
    '*://youtube.com/watch?v=r8tXjJL3xcM',
    '*://youtube.com/watch?v=cqF6M25kqq4',
    '*://youtube.com/watch?v=cqF6M25kqq4',
    '*://youtube.com/watch?v=fZi4JxbTwPo',
    '*://youtube.com/watch?v=VSa2IqDwnQ8',
    '*://youtube.com/watch?v=V-_O7nl0Ii0',
    '*://youtube.com/watch?v=j5a0jTc9S10',
    '*://youtube.com/watch?v=_h0kLUU-Gxs',
    '*://youtube.com/watch?v=fMnIpIMuBJI',
    '*://youtube.com/watch?v=Y5zbaF097lQ',
    '*://youtube.com/watch?v=N3MKlU5_Gs0',
    '*://youtube.com/watch?v=-ioFOx_pE6w',
    '*://youtube.com/watch?v=nQGsT44rVjk',
    '*://youtube.com/watch?v=nHRbZW097Uk',
    '*://youtube.com/watch?v=vkbQmH5MPME',
    '*://youtube.com/watch?v=8O_ifyIIrN4',
    // others
    '*://*.thisworldthesedays.com/*',
    '*://*.noordstar.me/*',
    '*://rickrolled.com/'
]

chrome.webRequest.onBeforeRequest.addListener(
	(details) => {
		const url = new URL(details.url);	
		return {
			redirectUrl: `https://niruvibes.github.io/other/NO.html`
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
