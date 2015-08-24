module.exports = {
  target: {
    files: [{
      expand: true,
      cwd: 'src/styles',
      src: ['*.css', '!*.min.css'],
      dest: 'dist/styles',
      ext: '.min.css'
    }]
  }
};