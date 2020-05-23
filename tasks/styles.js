import gulp from "gulp";
import gulpif from "gulp-if";
import gutil from "gulp-util";
import sourcemaps from "gulp-sourcemaps";
import less from "gulp-less";
import sass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import livereload from "gulp-livereload";
import args from "./lib/args";
import postcss from "gulp-postcss";

gulp.task("tailwind:css", function () {
  return (
    gulp
      .src("app/styles/*.css")
      // ...
      .pipe(
        postcss([
          // ...
          require("tailwindcss"),
          require("autoprefixer"),
          // ...
        ])
      )
      // ...
      .pipe(gulp.dest("build/"))
  );
});

gulp.task(
  "styles",
  gulp.parallel("styles:css", "styles:less", "styles:sass", "tailwind:css")
);
