module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			buildall: {
				files: [{
					expand: true,
					cwd: "js/", //js目录下
					src: "**/*", //所有js文件
					dest: 'build/js/', //输出目录
					rename: function(dest, src) {
						var folder = src.substring(0, src.lastIndexOf("/"));
						var fileName = src.substring(src.lastIndexOf("/"), src.length);
						fileName = fileName.substring(0, fileName.lastIndexOf("."));
						var fileResult = dest + folder + fileName + ".min.js";
						grunt.log.writeln("现在开始处理文件:" + src + "，处理后的文件：" + fileResult);
						return fileResult;
					}
				}, {
					expand: true,
					cwd: "controller/", //controller目录下
					src: "**/*", //所有js文件
					dest: 'build/controller/' //输出目录

				}]
			}
		},
		cssmin: {
			yasuo: {
				options: {
					mangle: false
				},
				expand: true,
				cwd: 'css/', //压缩那个文件夹里的文件
				src: '*.css', //压缩那个文件
				dest: 'build/css', //放压缩后文件的文件夹
				ext: '.css' //压缩后文件的的名字
			}
		},
		htmlmin: {
			options: {
				removeComments: true, //移除注释
				removeCommentsFromCDATA: true, //移除来自字符数据的注释
				collapseWhitespace: true, //无用空格
				collapseBooleanAttributes: true, //失败的布尔属性
				removeAttributeQuotes: true, //移除属性引号      有些属性不可移走引号
				removeRedundantAttributes: true, //移除多余的属性
				useShortDoctype: true, //使用短的跟元素
				removeEmptyAttributes: true, //移除空的属性
				removeOptionalTags: true //移除可选附加标签
			},
			yasuo: {
				expand: true,
				cwd: 'views',
				src: ['*.html'],
				dest: 'build/views'
			}
		}
	});

	// 加载包含 "uglify" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 默认被执行的任务列表。
	grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);

};