module.exports = copy = () => {
  return app.gulp.src('src/assets/**/*.*').pipe(app.gulp.dest('assets/'))
}
