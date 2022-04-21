module.exports = function uploadFile(file, uploadPath) {
  return file.mv(uploadPath, function(err) {
    if (err)
        return err;
    return 'File uploaded!';
  })
}
