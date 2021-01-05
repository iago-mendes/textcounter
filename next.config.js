const withImages = require('next-images')

module.exports = withImages({
	esModule: true,
	publicRuntimeConfig:
	{
		gaId: process.env.GA_TRACKING_ID,
		adClient: process.env.DATA_AD_CLIENT
	}
})