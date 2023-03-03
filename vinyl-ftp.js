var fs = require("vinyl-fs");
var ftp = require("vinyl-ftp");
var reader = require("properties-reader");
var config = reader("config/config.properties");

var conn = new ftp({
  host: config.get("hosting.host"),
  user: config.get("hosting.user"),
  password: config.get("hosting.pass"),
  parallel: 10,
  secure: true,
  secureOptions: { rejectUnauthorized: false },
});

fs.src(["./dist/**"], { buffer: false }).pipe(conn.dest("/htdocs/gyar"));
