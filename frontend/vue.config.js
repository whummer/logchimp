module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/styles/variables.sass";`
			}
		}
	},
	devServer: {
		disableHostCheck: true
	}
};
