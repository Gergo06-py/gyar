var fs = require("vinyl-fs");
var ftp = require("vinyl-ftp");

var conn = new ftp({
  host: "ftpupload.net",
  user: ".",
  password: ".",
  parallel: 10,
  secure: true,
  secureOptions: { rejectUnauthorized: false },
});

fs.src(["./dist/**"], { buffer: false }).pipe(conn.dest("/htdocs/gyar"));
