const gulp = require("gulp"),
  sass = require("gulp-sass"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  connect = require("gulp-connect");

const jsSources = ["app/js/*.js"],
  sassSources = ["app/styles/styles.scss"],
  htmlSources = ["app/*.html"],
  outputDir = "dist";

gulp.task("scss", function () {
  return gulp
    .src(sassSources)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(gulp.dest(outputDir + "/styles/"))
    .pipe(connect.reload());
});

gulp.task("js", function () {
  return gulp
    .src(jsSources)
    .pipe(uglify())
    .pipe(concat("script.js"))
    .pipe(gulp.dest(outputDir + "/scripts/"))
    .pipe(connect.reload());
});

gulp.task("html", function () {
  return gulp
    .src(htmlSources)
    .pipe(gulp.dest(outputDir))
    .pipe(connect.reload());
});

gulp.task("assets", function () {
  return gulp
    .src(["app/assets/*.wav", "app/assets/*.png"])
    .pipe(gulp.dest(outputDir + "/assets/"))
    .pipe(connect.reload());
});

gulp.task("fonts", function () {
  return gulp
    .src(["app/assets/fonts/*.{ttf}"])
    .pipe(gulp.dest(outputDir + "/assets/fonts"))
    .pipe(connect.reload());
});

gulp.task("connect", function () {
  connect.server({
    root: "dist",
    livereload: true,
    host: "localhost",
    port: "8080",
  });
});

gulp.task("watch", function () {
  gulp.watch("app/js/*.js", gulp.series("js"));
  gulp.watch("app/styles/*.scss", gulp.series("scss"));
  gulp.watch("app/**.html", gulp.series("html"));
});

gulp.task(
  "default",
  gulp.series(
    "js",
    "scss",
    "html",
    "assets",
    "fonts",
    gulp.parallel("connect", "watch")
  )
);
