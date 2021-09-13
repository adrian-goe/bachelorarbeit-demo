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
    uniqueName: "matches",
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

      name: "matches",
      filename: "remoteEntry.js",
      exposes: {
        './Matches': './apps/matches/src/app/matches/matches.module.ts',
        './TeamsMatches': './apps/matches/src/app/matches/teams-matches/teams-matches.module.ts',
      },

      shared: share({
        "@angular/core": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common/http": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/router": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/forms": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@ngxs/devtools-plugin": {singleton: true, strictVersion: true, requiredVersion: '3.7.2'},
        "@ngxs/store": {singleton: true, strictVersion: true, requiredVersion: '3.7.2'},
        "rxjs": {singleton: true, strictVersion: true, requiredVersion: '6.6.7'},
        "@tunierplanner/shared/utils": {
          singleton: true,
          import: "libs/shared/utils/src/index",
        },
        "@tunierplanner/matches/domain": {
          singleton: true,
          import: "libs/matches/domain/src/index",
        },
        ...sharedMappings.getDescriptors()
      })
    }),
    sharedMappings.getPlugin()
  ],
};
