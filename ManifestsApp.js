/**
 * GitHub  https://github.com/tanaikech/ManifestsApp<br>
 * @param {String} Project ID
 * @return {ManifestsApp}
 */
function setProjectId(id) {
    this.projectId = id;
    return this
}

/**
 * Retrieve Raw Manifests data.<br>
 * @return {Object} Return whole Manifests as a raw data. (JSON object)
 */
function getManifestsRaw() {
    return new ManifestsApp(this.projectId).getManifestsRaw();
}

/**
 * Set Manifests by raw data.<br>
 * @param {Object} manifests Whole raw manifests (JSON object)
 * @return {Object} Return project information.
 */
function setManifestsByRaw(manifests) {
    return new ManifestsApp(this.projectId).setManifestsByRaw(manifests);
}

/**
 * Retrieve Timezone.<br>
 * @return {String} Return Timezone
 */
function getTimezone() {
    return new ManifestsApp(this.projectId).getTimezone();
}

/**
 * Set Timezone.<br>
 * @param {String} timeZone Timezone
 * @return {Object} Return project information.
 */
function setTimezone(timeZone) {
    return new ManifestsApp(this.projectId).setTimezone(timeZone);
}

/**
 * Retrieve OauthScopes.<br>
 * @return {String[]} Return OauthScopes.
 */
function getOauthScopes() {
    return new ManifestsApp(this.projectId).getOauthScopes();
}

/**
 * Set OauthScopes.<br>
 * @param {String[]} oauthScopes OauthScopes
 * @return {Object} Return project information.
 */
function setOauthScopes(oauthScopes) {
    return new ManifestsApp(this.projectId).setOauthScopes(oauthScopes);
}

/**
 * Retrieve AdvancedServices.<br>
 * @return {Object} Return AdvancedServices as JSON.
 */
function getAdvancedServices() {
    return new ManifestsApp(this.projectId).getAdvancedServices();
}

/**
 * Enable AdvancedServices.<br>
 * @param {String} userSymbol userSymbol
 * @param {String} serviceId serviceId
 * @param {String} version version
 * @return {Object} Return project information.
 */
function enableAdvancedService(userSymbol, serviceId, version) {
    return new ManifestsApp(this.projectId).enableAdvancedService(userSymbol, serviceId, version);
}

/**
 * Disable AdvancedService.<br>
 * @param {String} serviceId serviceId that you want to disable.
 * @return {Object} Return project information.
 */
function disableAdvancedService(serviceId) {
    return new ManifestsApp(this.projectId).disableAdvancedService(serviceId);
}

/**
 * Retrieve Libraries.<br>
 * @return {Object} Return Libraries as JSON.
 */
function getLibraries() {
    return new ManifestsApp(this.projectId).getLibraries();
}

/**
 * Install Library.<br>
 * @param {String} userSymbol userSymbol
 * @param {String} libraryId libraryId
 * @param {String} version version
 * @param {Boolean} developmentMode developmentMode
 * @return {Object} Return project information.
 */
function installLibrary(userSymbol, libraryId, version, developmentMode) {
    return new ManifestsApp(this.projectId).installLibrary(userSymbol, libraryId, version, developmentMode);
}

/**
 * Uninstall Library.<br>
 * @param {String} userSymbol userSymbol that you want to uninstall.
 * @return {Object} Return project information.
 */
function uninstallLibrary(userSymbol) {
    return new ManifestsApp(this.projectId).uninstallLibrary(userSymbol);
}

/**
 * Retrieve ExceptionLogging.<br>
 * @return {String} Return ExceptionLogging.
 */
function getExceptionLogging() {
    return new ManifestsApp(this.projectId).getExceptionLogging();
}

/**
 * Set ExceptionLogging.<br>
 * @param {String} value value
 * @return {Object} Return project information.
 */
function setExceptionLogging(value) {
    return new ManifestsApp(this.projectId).setExceptionLogging(value);
}

/**
 * Retrieve Web App information.<br>
 * @return {Object} Return Web App information as JSON.
 */
function getWebapp() {
    return new ManifestsApp(this.projectId).getWebapp();
}

/**
 * Set Web App.<br>
 * @param {String} access access
 * @param {String} executeAs executeAs
 * @return {Object} Return project information.
 */
function setWebapp(access, executeAs) {
    return new ManifestsApp(this.projectId).setWebapp(access, executeAs);
}

/**
 * Retrieve UrlFetchWhitelist.<br>
 * @return {Object} Return UrlFetchWhitelist as an array.
 */
function getUrlFetchWhitelist() {
    return new ManifestsApp(this.projectId).getUrlFetchWhitelist();
}

/**
 * Set UrlFetchWhitelist.<br>
 * @param {Object} urlFetchWhitelist urlFetchWhitelist which is 1 dimensional array.
 * @return {Object} Return project information.
 */
function setUrlFetchWhitelist(urlFetchWhitelist) {
    return new ManifestsApp(this.projectId).setUrlFetchWhitelist(urlFetchWhitelist);
}

/**
 * Retrieve Gmail.<br>
 * @return {Object} Return Gmail as JSON.
 */
function getGmail() {
    return new ManifestsApp(this.projectId).getGmail();
}

/**
 * Set Gmail.<br>
 * @param {Object} resources resources which is JSON.
 * @return {Object} Return project information.
 */
function setGmail(resources) {
    return new ManifestsApp(this.projectId).setGmail(resources);
}
;
(function(r) {
  var ManifestsApp;
  ManifestsApp = (function() {
    var getSrc, makeBlob;

    ManifestsApp.name = "ManifestsApp";

    function ManifestsApp(p_) {
      if (p_ == null) {
        throw new Error("No project ID.");
      }
      this.projectId = p_;
      this.reference = "https://developers.google.com/apps-script/concepts/manifests";
    }

    ManifestsApp.prototype.getManifestsRaw = function() {
      var e, j, len, raw, rawManifects, ref;
      raw = ProjectApp2.getProjectRaw(this.projectId);
      rawManifects = {};
      ref = raw.files;
      for (j = 0, len = ref.length; j < len; j++) {
        e = ref[j];
        if (e.name === "appsscript") {
          rawManifects = e;
        }
      }
      return rawManifects;
    };

    ManifestsApp.prototype.setManifestsByRaw = function(manifests_) {
      if (manifests_ == null) {
        throw new Error("No JSON manifests. Reference is " + this.reference);
      }
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, manifests_));
    };

    ManifestsApp.prototype.getTimezone = function() {
      var src;
      src = getSrc.call(this);
      return src.timeZone;
    };

    ManifestsApp.prototype.setTimezone = function(timeZone_) {
      var src;
      if (timeZone_ == null) {
        throw new Error("No timeZone. Reference is " + this.reference);
      }
      src = getSrc.call(this);
      src.timeZone = timeZone_;
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, src));
    };

    ManifestsApp.prototype.getOauthScopes = function() {
      var src;
      src = getSrc.call(this);
      return src.oauthScopes;
    };

    ManifestsApp.prototype.setOauthScopes = function(oauthScopes_) {
      var src;
      if (oauthScopes_ == null) {
        throw new Error("No oauthScopes. Reference is " + this.reference);
      }
      if (!Array.isArray(oauthScopes_)) {
        throw new Error("'oauthScopes' has to be an array. Reference is " + this.reference);
      }
      src = getSrc.call(this);
      src.oauthScopes = oauthScopes_;
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, src));
    };

    ManifestsApp.prototype.getAdvancedServices = function() {
      var src;
      src = getSrc.call(this);
      return src.dependencies.enabledAdvancedServices;
    };

    ManifestsApp.prototype.enableAdvancedService = function(userSymbol_, serviceId_, version_) {
      var current, e, j, len, src;
      if (userSymbol_ == null) {
        throw new Error("No userSymbol. Reference is " + this.reference);
      }
      if (serviceId_ == null) {
        throw new Error("No serviceId. Reference is " + this.reference);
      }
      if (version_ == null) {
        throw new Error("No version. Reference is " + this.reference);
      }
      src = getSrc.call(this);
      current = src.dependencies.enabledAdvancedServices;
      if (current != null) {
        for (j = 0, len = current.length; j < len; j++) {
          e = current[j];
          if (e.userSymbol === userSymbol_ && e.serviceId === serviceId_ && e.version === version_) {
            throw new Error("Service with " + userSymbol_ + ", " + serviceId_ + " and " + version_ + " has already been enabled.");
          }
        }
      } else {
        src.dependencies.enabledAdvancedServices = [];
      }
      src.dependencies.enabledAdvancedServices.push({
        userSymbol: userSymbol_,
        serviceId: serviceId_,
        version: version_
      });
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, src));
    };

    ManifestsApp.prototype.disableAdvancedService = function(serviceId_) {
      var current, dis, e, i, j, len, src;
      if (serviceId_ == null) {
        throw new Error("No serviceId. Reference is " + this.reference);
      }
      src = getSrc.call(this);
      current = JSON.parse(JSON.stringify(src.dependencies.enabledAdvancedServices));
      dis = false;
      if (current != null) {
        for (i = j = 0, len = current.length; j < len; i = ++j) {
          e = current[i];
          if (e.serviceId === serviceId_) {
            src.dependencies.enabledAdvancedServices.splice(i, 1);
            if (src.dependencies.enabledAdvancedServices.length === 0) {
              delete src.dependencies["enabledAdvancedServices"];
            }
            dis = true;
            break;
          }
        }
        if (!dis) {
          throw new Error("Service of " + serviceId_ + " is not enabled yet.");
        }
      } else {
        throw new Error("No enabled services.");
      }
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, src));
    };

    ManifestsApp.prototype.getLibraries = function() {
      var src;
      src = getSrc.call(this);
      return src.dependencies.libraries;
    };

    ManifestsApp.prototype.installLibrary = function(userSymbol_, libraryId_, version_, developmentMode_) {
      var current, e, j, len, src;
      if (userSymbol_ == null) {
        throw new Error("No userSymbol. Reference is " + this.reference);
      }
      if (libraryId_ == null) {
        throw new Error("No libraryId. Reference is " + this.reference);
      }
      if (version_ == null) {
        throw new Error("No version. Reference is " + this.reference);
      }
      if (developmentMode_ != null) {
        developmentMode_;
      } else {
        true;
      }
      src = getSrc.call(this);
      current = src.dependencies.libraries;
      if (current != null) {
        for (j = 0, len = current.length; j < len; j++) {
          e = current[j];
          if (e.userSymbol === userSymbol_) {
            throw new Error("Library with " + userSymbol_ + ", " + libraryId_ + " and " + version_ + " has already been installed.");
          }
        }
      } else {
        src.dependencies.libraries = [];
      }
      src.dependencies.libraries.push({
        userSymbol: userSymbol_,
        libraryId: libraryId_,
        version: version_,
        developmentMode: developmentMode_
      });
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, src));
    };

    ManifestsApp.prototype.uninstallLibrary = function(userSymbol_) {
      var current, dis, e, i, j, len, src;
      if (userSymbol_ == null) {
        throw new Error("No userSymbol. Reference is " + this.reference);
      }
      src = getSrc.call(this);
      current = JSON.parse(JSON.stringify(src.dependencies.libraries));
      dis = false;
      if (current != null) {
        for (i = j = 0, len = current.length; j < len; i = ++j) {
          e = current[i];
          if (e.userSymbol === userSymbol_) {
            src.dependencies.libraries.splice(i, 1);
            if (src.dependencies.libraries.length === 0) {
              delete src.dependencies["libraries"];
            }
            dis = true;
            break;
          }
        }
        if (!dis) {
          throw new Error("Library of " + userSymbol_ + " is not installed yet.");
        }
      } else {
        throw new Error("No installed libraries.");
      }
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, src));
    };

    ManifestsApp.prototype.getExceptionLogging = function() {
      var src;
      src = getSrc.call(this);
      return src.exceptionLogging;
    };

    ManifestsApp.prototype.setExceptionLogging = function(value_) {
      var src;
      if (value_ == null) {
        throw new Error("No value. Reference is " + this.reference);
      }
      src = getSrc.call(this);
      src.exceptionLogging = value_;
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, src));
    };

    ManifestsApp.prototype.getWebapp = function() {
      var src;
      src = getSrc.call(this);
      return src.webapp;
    };

    ManifestsApp.prototype.setWebapp = function(access_, executeAs_) {
      var src;
      if (access_ == null) {
        throw new Error("No access. Reference is " + this.reference);
      }
      if (executeAs_ == null) {
        throw new Error("No executeAs. Reference is " + this.reference);
      }
      src = getSrc.call(this);
      if (!src.webapp) {
        src.webapp = {};
      }
      src.webapp.access = access_;
      src.webapp.executeAs = executeAs_;
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, src));
    };

    ManifestsApp.prototype.getUrlFetchWhitelist = function() {
      var src;
      src = getSrc.call(this);
      return src.urlFetchWhitelist;
    };

    ManifestsApp.prototype.setUrlFetchWhitelist = function(urlFetchWhitelist_) {
      var src;
      if (urlFetchWhitelist_ == null) {
        throw new Error("No urlFetchWhitelist. Reference is " + this.reference);
      }
      if (!Array.isArray(urlFetchWhitelist_)) {
        throw new Error("'urlFetchWhitelist' has to be an array. Reference is " + this.reference);
      }
      src = getSrc.call(this);
      src.urlFetchWhitelist = urlFetchWhitelist_;
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, src));
    };

    ManifestsApp.prototype.getGmail = function() {
      var src;
      src = getSrc.call(this);
      return src.gmail;
    };

    ManifestsApp.prototype.setGmail = function(resources_) {
      var src;
      if (resources_ == null) {
        throw new Error("No resources. Reference is " + this.reference);
      }
      if (typeof resources_ !== "object") {
        throw new Error("'resources' has to be a nested object. Reference is " + this.reference);
      }
      src = getSrc.call(this);
      src.gmail = resources_;
      return ProjectApp2.updateProjectByBlob(this.projectId, makeBlob.call(this, src));
    };

    makeBlob = function(raw_) {
      return Utilities.newBlob(JSON.stringify(raw_, null, "  ")).setName("appsscript.json");
    };

    getSrc = function() {
      var e;
      try {
        return JSON.parse((this.getManifestsRaw(this.projectId)).source);
      } catch (error) {
        e = error;
        if (~e.toString().indexOf("Unexpected token")) {
          throw new Error("Cannot find Manifest file. Please show Manifest file at the project you want to access. (On the script editor, View -> Show manifest file)");
        }
      }
    };

    return ManifestsApp;

  })();
  return r.ManifestsApp = ManifestsApp;
})(this);
