module.exports = {
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'src/index.html',     // 'destination': 'source'
        'dist/pizza.html': 'src/pizza.html',
        'dist/project-2048.html': 'src/project-2048.html',
        'dist/project-mobile.html': 'src/project-mobile.html',
        'dist/project-webperf.html': 'src/project-webperf.html'
      }
    },
    dev: {                                       // Another target
      files: {

      }
    }
};