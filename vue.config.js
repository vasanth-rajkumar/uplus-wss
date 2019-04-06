module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '../' : '/',
  pages: {
    commercial_bank: {
      entry: 'src/main.js',
      template: 'public/commercial_bank/index.html',
      filename: 'commercial_bank/index.html',
      title: 'U+ Commercial Bank',
      chunks: ['chunk-vendors', 'chunk-common', 'commercial_bank']
    },
    commercial_banksettings: {
      entry: 'src/settings.js',
      template: 'public/commercial_bank/index.html',
      filename: 'commercial_bank/settings.html',
      title: 'U+ Commercial Bank',
      chunks: ['chunk-vendors', 'chunk-common', 'commercial_bank']
    },
    commercial_bankoffer: {
      entry: 'src/offer.js',
      template: 'public/commercial_bank/index.html',
      filename: 'commercial_bank/offer.html',
      title: 'U+ Commercial Bank',
      chunks: ['chunk-vendors', 'chunk-common', 'commercial_bank']
    },
     retail_bank: {
      entry: 'src/main.js',
      template: 'public/retail_bank/index.html',
      filename: 'retail_bank/index.html',
      title: 'U+ Retail Bank',
      chunks: ['chunk-vendors', 'chunk-common', 'retail_bank']
    },
    retail_banksettings: {
      entry: 'src/settings.js',
      template: 'public/retail_bank/index.html',
      filename: 'retail_bank/settings.html',
      title: 'U+ Retail Bank',
      chunks: ['chunk-vendors', 'chunk-common', 'retail_bank']
    },
    retail_bankoffer: {
      entry: 'src/offer.js',
      template: 'public/retail_bank/index.html',
      filename: 'retail_bank/offer.html',
      title: 'U+ Retail Bank',
      chunks: ['chunk-vendors', 'chunk-common', 'retail_bank']
    },
    comms: {
      entry: 'src/main.js',
      template: 'public/comms/index.html',
      filename: 'comms/index.html',
      title: 'U+ Comms',
      chunks: ['chunk-vendors', 'chunk-common', 'comms']
    },
    commssettings: {
      entry: 'src/settings.js',
      template: 'public/comms/index.html',
      filename: 'comms/settings.html',
      title: 'U+ Comms',
      chunks: ['chunk-vendors', 'chunk-common', 'comms']
    },
    commsoffer: {
      entry: 'src/offer.js',
      template: 'public/comms/index.html',
      filename: 'comms/offer.html',
      title: 'U+ Comms',
      chunks: ['chunk-vendors', 'chunk-common', 'comms']
    },
    health_consumer: {
      entry: 'src/main.js',
      template: 'public/health_consumer/index.html',
      filename: 'health_consumer/index.html',
      title: 'U+ Health',
      chunks: ['chunk-vendors', 'chunk-common', 'health_consumer']
    },
    health_consumer_settings: {
      entry: 'src/settings.js',
      template: 'public/health_consumer/index.html',
      filename: 'health_consumer/settings.html',
      title: 'U+ Health',
      chunks: ['chunk-vendors', 'chunk-common', 'health_consumer']
    },
    health_consumer_offer: {
      entry: 'src/offer.js',
      template: 'public/health_consumer/index.html',
      filename: 'health_consumer/offer.html',
      title: 'U+ Health',
      chunks: ['chunk-vendors', 'chunk-common', 'health_consumer']
    },
    health_provider: {
      entry: 'src/main.js',
      template: 'public/health_provider/index.html',
      filename: 'health_provider/index.html',
      title: 'U+ Health',
      chunks: ['chunk-vendors', 'chunk-common', 'health_provider']
    },
    health_provider_settings: {
      entry: 'src/settings.js',
      template: 'public/health_provider/index.html',
      filename: 'health_provider/settings.html',
      title: 'U+ Health',
      chunks: ['chunk-vendors', 'chunk-common', 'health_provider']
    },
    health_provider_offer: {
      entry: 'src/offer.js',
      template: 'public/health_provider/index.html',
      filename: 'health_provider/offer.html',
      title: 'U+ Health',
      chunks: ['chunk-vendors', 'chunk-common', 'health_provider']
    },
    gov: {
      entry: 'src/main.js',
      template: 'public/gov/index.html',
      filename: 'gov/index.html',
      title: 'U+ Gov',
      chunks: ['chunk-vendors', 'chunk-common', 'gov']
    },
    govsettings: {
      entry: 'src/settings.js',
      template: 'public/gov/index.html',
      filename: 'gov/settings.html',
      title: 'U+ Gov',
      chunks: ['chunk-vendors', 'chunk-common', 'gov']
    },
    govoffer: {
      entry: 'src/offer.js',
      template: 'public/gov/index.html',
      filename: 'gov/offer.html',
      title: 'U+ Gov',
      chunks: ['chunk-vendors', 'chunk-common', 'gov']
    },
    insurance: {
      entry: 'src/main.js',
      template: 'public/insurance/index.html',
      filename: 'insurance/index.html',
      title: 'U+ Insurance',
      chunks: ['chunk-vendors', 'chunk-common', 'insurance']
    },
    insurancesettings: {
      entry: 'src/settings.js',
      template: 'public/insurance/index.html',
      filename: 'insurance/settings.html',
      title: 'U+ Insurance',
      chunks: ['chunk-vendors', 'chunk-common', 'insurance']
    },
    insuranceoffer: {
      entry: 'src/offer.js',
      template: 'public/insurance/index.html',
      filename: 'insurance/offer.html',
      title: 'U+ Insurance',
      chunks: ['chunk-vendors', 'chunk-common', 'insurance']
    },
    manufacturing: {
      entry: 'src/main.js',
      template: 'public/manufacturing/index.html',
      filename: 'manufacturing/index.html',
      title: 'U+ Manufacturing',
      chunks: ['chunk-vendors', 'chunk-common', 'manufacturing']
    },
    manufacturingsettings: {
      entry: 'src/settings.js',
      template: 'public/manufacturing/index.html',
      filename: 'manufacturing/settings.html',
      title: 'U+ Manufacturing',
      chunks: ['chunk-vendors', 'chunk-common', 'manufacturing']
    },
    manufacturingoffer: {
      entry: 'src/offer.js',
      template: 'public/manufacturing/index.html',
      filename: 'manufacturing/offer.html',
      title: 'U+ Manufacturing',
      chunks: ['chunk-vendors', 'chunk-common', 'manufacturing']
    },
  }
}