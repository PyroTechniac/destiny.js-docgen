const { relative } = require('path');
const DocumentedItem = require('./item');
const { root } = require('../config');

class DocumentedItemMeta extends DocumentedItem {
    registerMetaInfo(data) {
        this.directData = {
            line: data.lineno,
            file: data.filename,
            path: relative(root, data.path).replace(/\\/g, '/')
        };
    }
    serializer() {
        return {
            line: this.directData.line,
            file: this.directData.file,
            path: this.directData.path
        };
    }
}
module.exports = DocumentedItemMeta;
