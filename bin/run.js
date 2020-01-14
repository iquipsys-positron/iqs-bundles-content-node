let ContentBundleProcess = require('../obj/src/container/ContentBundleProcess').ContentBundleProcess;

try {
    new ContentBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}