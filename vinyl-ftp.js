var fs = require("vinyl-fs");
var ftp = require("vinyl-ftp");

var conn = new ftp({
  host: "ftpupload.net",
  user: "epiz_33705925",
  password: "7z1uRuRFmlp",
  parallel: 10,
  secure: true,
  secureOptions: { rejectUnauthorized: false },
});

fs.src(["./dist/**"], { buffer: false }).pipe(conn.dest("/htdocs/gyar"));
