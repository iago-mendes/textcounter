const withImages = require('next-images')

module.exports = withImages({
	esModule: true,
	publicRuntimeConfig:
	{
		gaId: process.env.GA_TRACKING_ID
	}
})