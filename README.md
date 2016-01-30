# tee-loader

This loader will output whatever text is passed to it, and then pass it along to the next loader. Like the inverse of what `| tee` does.

The goal is to keep this loader as lightweight as possible. No dependencies. No fluff.

The output will be in the following format:

```plain
====== TEE ======
/absolute/path/to/current/file.ext
-----------------
Content of the previous loader's output
====== TEE ======
/absolute/path/to/another/file.ext
-----------------
Content of the previous loader's output
```

# TODO

  - [ ] Add support for Regular Expression matching of file name/file content.
  - [ ] Add support for pretty printing input with CR/LF.
  - [ ] Add support for actual `| tee` behavior (saving to file system).
  - Probably not much else...

# CONTRIBUTING

  - Feel free to open an issue for a feature request
  - Feel free to submit a PR for a feature
    - Please be mindful with your features, this is supposed to be a simple loader used for debugging.
