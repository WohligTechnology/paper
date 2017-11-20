var schema = new Schema({
    name: {
        type: String,
        required: true,
        excel: {
            name: Name
        }
    },
    duration: {
        type: String,
        required: true,
        excel: {
            name: Duration
        }
    },
    features: {
        type: String,
        required: true,
        excel: {
            name: Features
        }
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Package', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);