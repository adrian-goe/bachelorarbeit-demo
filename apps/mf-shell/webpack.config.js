const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  ['libs/matches/domain/src/index.ts']);

module.exports = {
  output: {
    uniqueName: "mfShell",
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

      remotes: {
        "teams": "teams@http://localhost:4202/remoteEntry.js",
        "matches": "matches@http://localhost:4204/remoteEntry.js",
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
