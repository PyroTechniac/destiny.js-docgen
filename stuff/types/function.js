const DocumentedItem = require('./item');
const DocumentedItemMeta = require('./item-meta');
const DocumentedVarType = require('./var-type');
const DocumentedParam = require('./param');

class DocumentedFunction extends DocumentedItem {
    registerMetaInfo(data) {
        data.meta = new DocumentedItemMeta(this, data.meta);
        if (data.returns) {
            let returnDescription;
            let returnNullable;
            if (data.returns[0].description) returnDescription = data.returns[0].description;
            if (data.returns[0].nullable) returnNullable = true;
            data.returns = new DocumentedVarType(this, data.returns[0].type);
            data.returns.directData.description = returnDescription;
            data.returns.directData.nullable = returnNullable;
        }
        if (data.params) {
            if (data.params.length > 0) {
                for (let i = 0; i < data.params.length; i++) data.params[i] = new DocumentedParam(this, data.params[i]);
            } else {
                data.params = undefined;
            }
        }
        this.directData = data;
    }
    serializer() {
        return {
            name: this.directData.name,
            description: this.directData.description,
            see: this.directData.see,
            scope: this.directData.scope !== 'instance' ? this.directData.scope : undefined,
            access: this.directData.access,
            inherits: this.directData.inherits,
            inherited: this.directData.inherited,
            examples: this.directData.examples,
            abstract: this.directData.virtual && !this.directData.inherited,
            deprecated: this.directData.deprecated,
            emits: this.directData.fires,
            throws: this.directData.throws,
            params: this.directData.params ? this.directData.params.map(p => p.serialize()) : undefined,
            async: this.directData.async,
            generator: this.directData.generator,
            returns: this.directData.returns ? this.directData.returns.serialize() : undefined,
            returnsDescription: this.directData.returnsDescription,
            meta: this.directData.meta.serialize()
        };
    }
}
module.exports = DocumentedFunction;
