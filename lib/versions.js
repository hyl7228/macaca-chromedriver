/**
 * Created by kyowang on 2017/7/11.
 */
'use strict';

const pkg = require('../package');
const logger = require('./logger');

// https://chromedriver.chromium.org/downloads

class ChromedriverVersion {
  constructor() {
    this.defaultVersion = pkg.config.defaultVersion;
    this.versionMap = [
      {
        chromedriverVersion: '114.0.5735.90',
        webviewVersions: '114'
      },
      {
        chromedriverVersion: '113.0.5672.63',
        webviewVersions: '113'
      },
      {
        chromedriverVersion: '112.0.5615.28',
        webviewVersions: '112'
      },
      {
        chromedriverVersion: '111.0.5563.64',
        webviewVersions: '111'
      },
      {
        chromedriverVersion: '110.0.5481.77',
        webviewVersions: '110'
      },
      {
        chromedriverVersion: '109.0.5414.74',
        webviewVersions: '109'
      },
      {
        chromedriverVersion: '108.0.5359.71',
        webviewVersions: '108'
      },
      {
        chromedriverVersion: '107.0.5304.62',
        webviewVersions: '107'
      },
      {
        chromedriverVersion: '106.0.5249.61',
        webviewVersions: '106'
      },
      {
        chromedriverVersion: '105.0.5195.52',
        webviewVersions: '105'
      },
      {
        chromedriverVersion: '104.0.5112.79',
        webviewVersions: '104'
      },
      {
        chromedriverVersion: '103.0.5060.134',
        webviewVersions: '103'
      },
      {
        chromedriverVersion: '102.0.5005.61',
        webviewVersions: '102'
      },
            {
        chromedriverVersion: '101.0.4951.41',
        webviewVersions: '101'
      },
      {
        chromedriverVersion: '100.0.4896.60',
        webviewVersions: '100'
      },
      {
        chromedriverVersion: '99.0.4844.17',
        webviewVersions: '99'
      },
      {
        chromedriverVersion: '98.0.4758.102',
        webviewVersions: '98'
      },
      {
        chromedriverVersion: '97.0.4692.20',
        webviewVersions: '97'
      },
      {
        chromedriverVersion: '96.0.4664.45',
        webviewVersions: '96'
      },
      {
        chromedriverVersion: '95.0.4638.17',
        webviewVersions: '95'
      },
      {
        chromedriverVersion: '94.0.4606.61',
        webviewVersions: '94'
      },
      {
        chromedriverVersion: '93.0.4577.15',
        webviewVersions: '93'
      },
      {
        chromedriverVersion: '92.0.4515.107',
        webviewVersions: '92'
      },
      {
        chromedriverVersion: '91.0.4472.19',
        webviewVersions: '91'
      },
      {
        chromedriverVersion: '90.0.4430.24',
        webviewVersions: '90'
      },
      {
        chromedriverVersion: '89.0.4389.23',
        webviewVersions: '89'
      },
      {
        chromedriverVersion: '88.0.4324.96',
        webviewVersions: '88'
      },
      {
        chromedriverVersion: '87.0.4280.88',
        webviewVersions: '87'
      },
      {
        chromedriverVersion: '86.0.4240.22',
        webviewVersions: '86'
      }, {
        chromedriverVersion: '84.0.4147.30',
        webviewVersions: '84'
      }, {
        chromedriverVersion: '83.0.4103.39',
        webviewVersions: '83'
      }, {
        chromedriverVersion: '81.0.4044.138',
        webviewVersions: '81'
      }, {
        chromedriverVersion: '80.0.3987.106',
        webviewVersions: '80'
      }, {
        chromedriverVersion: '79.0.3945.36',
        webviewVersions: '79'
      }, {
        chromedriverVersion: '78.0.3904.105',
        webviewVersions: '78'
      }, {
        chromedriverVersion: '77.0.3865.40',
        webviewVersions: '77'
      }, {
        chromedriverVersion: '76.0.3809.126',
        webviewVersions: '76'
      }, {
        chromedriverVersion: '75.0.3770.140',
        webviewVersions: '75'
      }, {
        chromedriverVersion: '74.0.3729.6',
        webviewVersions: '74'
      }, {
        chromedriverVersion: '73.0.3683.68',
        webviewVersions: '73'
      }
    ];
  }

  // get chromedriver version from webview version
  // if nothing match. return default version 2.20
  getVersionFromWebviewVersion(webviewVersion) {
    if (!webviewVersion) {
      return this.defaultVersion;
    }
    logger.info(`Chromedriver versions map: \n ${JSON.stringify(this.versionMap, null, 2)}`);
    for (let i = 0; i < this.versionMap.length; i++) {
      if (this.versionMap[i].webviewVersions === webviewVersion) {
        return this.versionMap[i].chromedriverVersion;
      }
      if (webviewVersion >= this.versionMap[i].webviewVersions[0] && webviewVersion <= this.versionMap[i].webviewVersions[1]) {
        return this.versionMap[i].chromedriverVersion;
      }
    }
    logger.error(`No proper chromedriver version found for webview version: ${webviewVersion}!`);
    logger.error(`Use version: ${this.defaultVersion} instead!`);
    return this.defaultVersion;
  }

  // get an array of chromedriver versions which we need install at the very moment of installation.
  getVersions() {
    const arr = [];
    for (let i = 0; i < this.versionMap.length; i++) {
      arr.push(this.versionMap[i].chromedriverVersion);
    }
    return arr;
  }
}

ChromedriverVersion.defaultVersion = pkg.config.defaultVersion;

module.exports = ChromedriverVersion;
