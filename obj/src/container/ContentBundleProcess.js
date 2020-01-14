"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const ContentBundleServicesFactory_1 = require("../build/ContentBundleServicesFactory");
const ContentBundleClientsFactory_1 = require("../build/ContentBundleClientsFactory");
class ContentBundleProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("content", "Content bundle for iQuipsys Positron");
        this._factories.add(new ContentBundleServicesFactory_1.ContentBundleServicesFactory);
        this._factories.add(new ContentBundleClientsFactory_1.ContentBundleClientsFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
    }
}
exports.ContentBundleProcess = ContentBundleProcess;
//# sourceMappingURL=ContentBundleProcess.js.map