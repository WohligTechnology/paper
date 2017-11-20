var schema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true,
    },
    package: {
        type: String,
    },
    expiry: {
        type: Date,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed']
    },
    paymentMethod: {
        type: date
    },
    paymentLogs: {
        type: string
    },
    credits: {
        type: string
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('UserPackage', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);