const macy = Macy({
	container: '#macy-container',
	trueOrder: false,
	waitForImages: false,
	margin: 14,
	columns: 3,
	breakAt: {
    1367: {
      margin: 12,
    }
	},
	breakAt: {
		1200: 2,
		768: 1,
	},
});
