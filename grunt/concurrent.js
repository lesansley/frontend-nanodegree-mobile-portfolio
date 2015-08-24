module.exports = {

    // Task options
    options: {
        limit: 3
    },

    // Dev tasks
    devFirst: [
        'clean',
        'jshint',
        'htmlmin'
    ],
    devSecond: [
        'uglify',
        'cssmin'
    ],

    // Production tasks
    prodFirst: [
        'clean',
        'jshint',
        'htmlmin'
    ],
    prodSecond: [
        'uglify',
        'cssmin'
    ],
    prodThird: [
        'inline'
    ],
    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};