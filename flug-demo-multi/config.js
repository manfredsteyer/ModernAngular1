System.config({
  "baseURL": "/",
  "paths": {
    "app": "app.js",
    "*": "components/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "node_modules/*": "node_modules/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.15",
    "babel": "npm:babel-core@5.0.12",
    "babel-runtime": "npm:babel-runtime@5.0.12",
    "bootstrap": "github:twbs/bootstrap@3.3.4",
    "core-js": "npm:core-js@0.8.1",
    "traceur": "github:jmcriffey/bower-traceur@0.0.87",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.87",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:twbs/bootstrap@3.3.4": {
      "jquery": "github:components/jquery@2.1.3"
    },
    "npm:core-js@0.8.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

