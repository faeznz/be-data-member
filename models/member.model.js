const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  nik: {
    type: String,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  },
  noHp: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true
  },
  tanggalKadaluarsa: {
    type: Date,
    required: true,
    get: function (value) {
      if (value) {
        return value.toISOString().split('T')[0];
      }
      return value;
    }
  },
  jenisMember: {
    type: String,
    required: true
  }
}, {
  toJSON: { getters: true }
});

module.exports = mongoose.model('Member', memberSchema);