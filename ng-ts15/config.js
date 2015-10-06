System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "*": "app/*.js",
    "github:*": "jspm_packages/github/*"
  },
  map: {
    "angular": "github:angular/bower-angular@1.4.7",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    }
  }
});
