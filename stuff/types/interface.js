const DocumentedClass = require('./class');

class DocumentedInterface extends DocumentedClass {
    registerMetaInfo(data) {
        super.registerMetaInfo(data);
        this.directData = data;
    }
    serializer() {
        const serialized = super.serializer();
        serialized.description = this.directData.classdesc;
        return serialized;
    }
}
module.exports = DocumentedInterface;
