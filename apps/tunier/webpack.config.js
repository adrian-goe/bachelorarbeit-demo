const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const {shareAll} = require("@angular-architects/module-federation/webpack");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "tunier",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

      name: "tunier",
      filename: "remoteEntry.js",
      exposes: {
        './Tunier': './apps/tunier/src/app/tunier/tunier.module.ts',
      },

      shared: share({
        "@angular/core": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common/http": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/router": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/forms": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@ngxs/devtools-plugin": {singleton: true, strictVersion: true, requiredVersion: '3.7.2'},
        "@ngxs/store": {singleton: true, strictVersion: true, requiredVersion: '3.7.2'},
        "rxjs": { singleton: true, strictVersion: true, requiredVersion: '6.6.7' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
