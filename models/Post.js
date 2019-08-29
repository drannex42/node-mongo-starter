const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const shortid = require('shortid');
const sanitizeHtml = require('sanitize-html');

const postSchema = new mongoose.Schema({
    author_id: String,
    post_id: { type: String, default: shortid.generate() },
    title: String,
    content: String,
    type: String,
    published: { type: Boolean, default: true },
    expires: String,

}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;