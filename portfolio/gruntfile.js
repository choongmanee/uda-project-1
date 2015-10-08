module.exports = function(grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						// desktop
						width: 800,
						suffix: '_large_1x',
						quality: 50
					}, {
						// mobile and tablet
						width: 480,
						suffix: '_small_1x',
						quality: 50
					}]
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images_src/',
					dest: 'images/'
				}]
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: true,
				roundingPrecision: -1
			},
			target: {
				files: {
					'css/style.css': ['css_src/grid.css', 'css_src/main.css', 'css_src/responsive.css']
				}
			}
		},

		clean: {
			src: ['images'],
		},

		mkdir: {
			options: {
				create: ['images']
			}
		},

		watch: {
			files: ['index.html', 'css_src/main.css', 'css_src/responsive.css'],
			tasks: ['cssmin']
		}
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.registerTask('default', ['clean', 'mkdir', 'cssmin','responsive_images'])
};