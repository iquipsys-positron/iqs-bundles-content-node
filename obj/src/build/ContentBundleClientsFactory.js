"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_clients_dashboards_node_1 = require("pip-clients-dashboards-node");
const pip_clients_help_node_1 = require("pip-clients-help-node");
const pip_clients_tips_node_1 = require("pip-clients-tips-node");
const pip_clients_guides_node_1 = require("pip-clients-guides-node");
const pip_clients_imagesets_node_1 = require("pip-clients-imagesets-node");
// import { QuotesClientFactory } from 'pip-clients-quotes-node';
const pip_clients_applications_node_1 = require("pip-clients-applications-node");
const pip_clients_msgtemplates_node_1 = require("pip-clients-msgtemplates-node");
// import { EmailTemplatesClientFactory } from 'pip-clients-emailtemplates-node';
const pip_clients_attachments_node_1 = require("pip-clients-attachments-node");
class ContentBundleClientsFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_clients_dashboards_node_1.DashboardsClientFactory);
        this.add(new pip_clients_help_node_1.HelpClientFactory);
        this.add(new pip_clients_tips_node_1.TipsClientFactory);
        this.add(new pip_clients_guides_node_1.GuidesClientFactory);
        this.add(new pip_clients_imagesets_node_1.ImageSetsClientFactory);
        // this.add(new QuotesClientFactory);
        this.add(new pip_clients_applications_node_1.ApplicationsClientFactory);
        this.add(new pip_clients_msgtemplates_node_1.MessageTemplatesClientFactory);
        // this.add(new EmailTemplatesClientFactory);
        this.add(new pip_clients_attachments_node_1.AttachmentsClientFactory);
    }
}
exports.ContentBundleClientsFactory = ContentBundleClientsFactory;
//# sourceMappingURL=ContentBundleClientsFactory.js.map