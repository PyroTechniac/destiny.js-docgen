const path = require('path');
const DocumentedClass = require('./types/class');
const DocumentedInterface = require('./types/interface');
const DocumentedTypeDef = require('./types/typedef');
const DocumentedConstructor = require('./types/constructor');
const DocumentedMember = require('./types/member');
const DocumentedFunction = require('./types/function');
const DocumentedEvent = require('./types/event');
const DocumentedExternal = require('./types/external');
const version = require('../package').version;

class Documentation {
    constructor(items, custom) {
        this.rootTypes = {
            class: [DocumentedClass, 'classes'],
            interface: [DocumentedInterface, 'interfaces'],
            typedef: [DocumentedTypeDef, 'typedefs'],
            external: [DocumentedExternal, 'externals']
        };
        this.childTypes = {
            'constructor': DocumentedConstructor, // eslint-disable-line quote-props
            member: DocumentedMember,
            function: DocumentedFunction,
            event: DocumentedEvent
        };
    }
}