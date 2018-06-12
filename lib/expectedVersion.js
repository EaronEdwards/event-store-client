var Long = require("long");

var ExpectedVersion = {
    // We don't care what the current version of the stream is
    Any:        Long.fromInt(-2),

    // We expect to that the stream doesn't exist
    NoStream:   Long.fromInt(-1)
};

module.exports = ExpectedVersion;
