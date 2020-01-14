import { CompositeFactory } from 'pip-services3-components-node';
import { DefaultContainerFactory } from 'pip-services3-container-node';

import { DashboardsServiceFactory } from 'pip-services-dashboards-node';
import { HelpServiceFactory } from 'pip-services-help-node';
import { TipsServiceFactory } from 'pip-services-tips-node';
import { GuidesServiceFactory } from 'pip-services-guides-node';
import { ImageSetsServiceFactory } from 'pip-services-imagesets-node';
// import { QuotesServiceFactory } from 'pip-services-quotes-node';
import { ApplicationsServiceFactory } from 'pip-services-applications-node';
import { MessageTemplatesServiceFactory } from 'pip-services-msgtemplates-node';
// import { EmailTemplatesServiceFactory } from 'pip-services-emailtemplates-node';
import { AttachmentsServiceFactory } from 'pip-services-attachments-node';


export class ContentBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new DashboardsServiceFactory);
        this.add(new HelpServiceFactory);
        this.add(new TipsServiceFactory);
        this.add(new GuidesServiceFactory);
        this.add(new ImageSetsServiceFactory);
        // this.add(new QuotesServiceFactory);
        this.add(new ApplicationsServiceFactory);
        this.add(new MessageTemplatesServiceFactory);
        // this.add(new EmailTemplatesServiceFactory);
        this.add(new AttachmentsServiceFactory);
        
    }

}
