const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const shortid = require('shortid');
const sanitizeHtml = require('sanitize-html');

const pubSchema = new mongoose.Schema({
    author_id: String,
    pub_id: { type: String, default: shortid.generate() },
    title: String,
    content: String,
    type: String,
    published: { type: Boolean, default: true },
    expires: String,

    channel_id: String,
    formOptions: Array,

    powers: Array,

}, { timestamps: true });

const Pub = mongoose.model('Pub', pubSchema);

module.exports = Pub;