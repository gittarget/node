exports.build = function(title, pagetitle, content) {
    return ['<!doctype html>',
        '<html lang="en">\n\n<meta charset="utf-8">\n<title>{title}</title>',
        '<link rel="stylesheet" href="/assets/style.css" />\n',
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n',
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n',
        '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n',
        '<h1>{pagetitle}</h1>',
        '<div id="content">{content}</div>\n\n']
        .join('\n')
        .replace(/{title}/g, title)
        .replace(/{pagetitle}/g, pagetitle)
        .replace(/{content}/g, content);
};