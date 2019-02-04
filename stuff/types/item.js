class DocumentedItem {
    constructor(parent, info) {
        this.parent = parent;
        this.directData = null;

        try {
            this.registerMetaInfo(info);
        } catch (error) {
            error.message = `Error while loading ${this.detailedName(info)}: ${error.message}`;
            throw error;
        }
    }
    serialize() {
        try {
            return this.serializer();
        } catch (error) {
            error.message = `Error while serializing ${this.detailedName(this.directData)}: ${error.message}`;
            throw error;
        }
    }
    /* eslint-disable no-empty-function */
    registerMetaInfo() {}
    serializer() {}
    /* eslint-enable no-empty-function */
    detailedName(data) {
        if (!data) return this.constructor.name;
        if (data.id) return `${data.id} (${this.constructor.name})`;
        if (data.name) return `${data.name} (${this.constructor.name})`;
        return this.constructor.name;
    }
}
module.exports = DocumentedItem;
