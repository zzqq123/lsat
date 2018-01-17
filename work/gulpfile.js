const gulp = require('gulp');
const Sass = require('gulp-sass');
const webServer = require('gulp-webserver');

const fs = require('fs');
const path = require('path');

function GetJson(pathName,res){
    var data = fs.readFileSync(path.join('Data/'+pathName+'.json'))
    res.end(data);
}

gulp.task('Sass',function(){
    gulp.src('Content/css/*.scss')
    .pipe(Sass())
    .pipe(gulp.dest('./Content/css'));
    })

gulp.task('Watch',function(){
    gulp.watch('Content/css/**/*scss',['Sass']);
    })

gulp.task('WebServer',function(){
    gulp.src('.')
    .pipe(webServer({
        host:'localhost',
        port:8080,
        livereload:true,
        fallback:'index.html'
        }))
    })
gulp.task('Web',function(){
    gulp.src('.')
    .pipe(webServer({
        host:'localhost',
        port:8090,
        middleware:function(req,res,next){
            var pathName = req.url.split('/')[1];
            res.writeHead(200,{
                'Content-type':'text/json',
                'Access-Control-Allow-Origin':'*'
                })
            switch(req.url){
                case '/data':
                GetJson(pathName,res);
                case '/detail':
                GetJson(pathName,res);
            }
        }
        }))
    })

gulp.task('default',['WebServer','Web','Watch']);