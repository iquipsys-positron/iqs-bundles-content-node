"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services_dashboards_node_1 = require("pip-services-dashboards-node");
const pip_services_help_node_1 = require("pip-services-help-node");
const pip_services_tips_node_1 = require("pip-services-tips-node");
const pip_services_guides_node_1 = require("pip-services-guides-node");
const pip_services_imagesets_node_1 = require("pip-services-imagesets-node");
// import { QuotesServiceFactory } from 'pip-services-quotes-node';
const pip_services_applications_node_1 = require("pip-services-applications-node");
const pip_services_msgtemplates_node_1 = require("pip-services-msgtemplates-node");
// import { EmailTemplatesServiceFactory } from 'pip-services-emailtemplates-node';
const pip_services_attachments_node_1 = require("pip-services-attachments-node");
class ContentBundleServicesFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_services_dashboards_node_1.DashboardsServiceFactory);
        this.add(new pip_services_help_node_1.HelpServiceFactory);
        this.add(new pip_services_tips_node_1.TipsServiceFactory);
        this.add(new pip_services_guides_node_1.GuidesServiceFactory);
        this.add(new pip_services_imagesets_node_1.ImageSetsServiceFactory);
        // this.add(new QuotesServiceFactory);
        this.add(new pip_services_applications_node_1.ApplicationsServiceFactory);
        this.add(new pip_services_msgtemplates_node_1.MessageTemplatesServiceFactory);
        // this.add(new EmailTemplatesServiceFactory);
        this.add(new pip_services_attachments_node_1.AttachmentsServiceFactory);
    }
}
exports.ContentBundleServicesFactory = ContentBundleServicesFactory;
//# sourceMappingURL=ContentBundleServicesFactory.js.map