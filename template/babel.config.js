module.exports = {
  "presets": [
    [
      "@vue/app",
      {
        "useBuiltIns": "entry"
      }
    ]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    [
      "transform-imports",
      {
        "vuetify": {
          "transform": "vuetify/es5/components/${member}",
          "preventFullImport": false
        }
      }
    ]
  ]
}