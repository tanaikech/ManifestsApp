ManifestsApp
=====

<a name="TOP"></a>
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENCE)

<a name="Overview"></a>
# Overview
This is a Manifests library for Google Apps Scripts.

# Demo
![](images/demo.gif)

In this demonstration, all scripts in a project are retrieved using ``getProjectBlob()``.


<a name="Description"></a>
# Description
By recent update of Google, [Manifests](https://developers.google.com/apps-script/concepts/manifests) was added to Google Apps Script Project. At the moment I saw the detail, I thought that this Manifests will blow a new wind for a lot of GAS developers. So I created this. If this was useful for you, I'm glad.

# Library's project key
~~~
1g0_wywpigtU_xA01D5IrRuBuDD5unieYl7nVXQR8DM_An0eUnB0NcTcx
~~~

# How to install
- [Install ManifestsApp library](https://developers.google.com/apps-script/guides/libraries).
    - Library's project key is **``1g0_wywpigtU_xA01D5IrRuBuDD5unieYl7nVXQR8DM_An0eUnB0NcTcx``**.
- [Enable Drive API at API console](https://console.developers.google.com/apis/api/drive/overview)
    - On script editor
    - Resources -> Cloud Platform project
    - View API console
    - At Getting started, click Enable APIs and get credentials like keys.
    - At left side, click Library.
    - At Search for APIs & services, input **Drive API**. And click Google Drive API.
    - Click Enable button.
        - If it has already been enabled, please don't turn off.
- [Set scopes at Manifests](https://developers.google.com/apps-script/concepts/manifests)
    - On script editor
        - View -> Show manifest file
    - Add **"oauthScopes"** to "appsscript.json". After you installed the library and added the scopes to the default "appsscript.json", it becomes as follows. This timeZone is my current time zone. <u>Of course, you can install the library by directly modifying "appsscript.json".</u>

~~~json
{
  "timeZone": "Asia/Tokyo",
  "dependencies": {
    "libraries": [{
      "userSymbol": "ManifestsApp",
      "libraryId": "1g0_wywpigtU_xA01D5IrRuBuDD5unieYl7nVXQR8DM_An0eUnB0NcTcx",
      "version": "1",
      "developmentMode": true
    }]
  },
  "exceptionLogging": "STACKDRIVER",
  "oauthScopes": [
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/script.scriptapp",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.scripts"
  ]
}
~~~

Installing is done. You can use ManifestsApp.

# Usage
Methods that ManifestsApp has are as follows.

| Methods | Return | Descriptions |
|:------|:------|:------|
| getManifestsRaw() | Object | Retrieve Raw Manifests data. |
| setManifestsByRaw(manifests) | Object | Set Manifests by raw data with overwrite. |
| getTimezone() | String | Retrieve Timezone. |
| setTimezone(timeZone) | Object | Set Timezone with overwrite. |
| getOauthScopes() | String[] | Retrieve OauthScopes. |
| setOauthScopes(oauthScopes) | Object | Set OauthScopes with overwrite. |
| getAdvancedServices() | Object | Retrieve AdvancedServices. |
| enableAdvancedService(userSymbol, serviceId, version) | Object | Enable AdvancedServices. |
| disableAdvancedService(serviceId) | Object | Disable AdvancedService. |
| getLibraries() | Object | Retrieve Libraries. |
| installLibrary(userSymbol, libraryId, version, developmentMode) | Object | Install Library. |
| uninstallLibrary(userSymbol) | Object | Uninstall Library. |
| getExceptionLogging() | String | Retrieve ExceptionLogging. |
| setExceptionLogging(value) | Object | Set ExceptionLogging with overwrite. |
| getWebapp() | Object | Retrieve Web App information. |
| setWebapp(access, executeAs) | Object | Set Web App with overwrite. |
| getUrlFetchWhitelist() | String[] | Retrieve UrlFetchWhitelist. |
| setUrlFetchWhitelist(urlFetchWhitelist) | Object | Set UrlFetchWhitelist with overwrite. |
| getGmail() | Object | Retrieve Gmail. |
| setGmail(resources) | Object | Set Gmail with overwrite. |

You can also see the documents at the following URL.

[https://script.google.com/macros/library/versions/d/1g0_wywpigtU_xA01D5IrRuBuDD5unieYl7nVXQR8DM_An0eUnB0NcTcx](https://script.google.com/macros/library/versions/d/1g0_wywpigtU_xA01D5IrRuBuDD5unieYl7nVXQR8DM_An0eUnB0NcTcx)

And you can see the detail structure for each parameters at the following URL.

[https://developers.google.com/apps-script/concepts/manifests](https://developers.google.com/apps-script/concepts/manifests)

## Samples
When you want to retrieve Manifests as raw data (JSON), you can use scripts like below.

~~~javascript
var ma = ManifestsApp.setProjectId(projectId); // Retrieve the instance
var r = ma.getManifestsRaw();
Logger.log(r)
~~~

or

~~~javascript
var r = ManifestsApp.setProjectId(projectId).getManifestsRaw();
Logger.log(r)
~~~

# Library used at ManifestsApp
In order to operate Manifests, it is required to access GAS projects. For this, at first, I created [ProjectApp](https://github.com/tanaikech/ProjectApp). ManifestsApp has already used ProjectApp. So you are not necessary to install ProjectApp.

<a name="Licence"></a>
# Licence
[MIT](LICENCE)

<a name="Author"></a>
# Author
[Tanaike](https://tanaikech.github.io/about/)

If you have any questions and commissions for me, feel free to tell me.

<a name="Update_History"></a>
# Update History
* v1.0.0 (November 9, 2017)

    Initial release.

[TOP](#TOP)
