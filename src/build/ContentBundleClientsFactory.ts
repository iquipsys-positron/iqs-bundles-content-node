import { CompositeFactory } from 'pip-services3-components-node';
import { DefaultContainerFactory } from 'pip-services3-container-node';

import { DashboardsClientFactory } from 'pip-clients-dashboards-node';
import { HelpClientFactory } from 'pip-clients-help-node';
import { TipsClientFactory } from 'pip-clients-tips-node';
import { GuidesClientFactory } from 'pip-clients-guides-node';
import { ImageSetsClientFactory } from 'pip-clients-imagesets-node';
// import { QuotesClientFactory } from 'pip-clients-quotes-node';
import { ApplicationsClientFactory } from 'pip-clients-applications-node';
import { MessageTemplatesClientFactory } from 'pip-clients-msgtemplates-node';
// import { EmailTemplatesClientFactory } from 'pip-clients-emailtemplates-node';
import { AttachmentsClientFactory } from 'pip-clients-attachments-node';


export class ContentBundleClientsFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new DashboardsClientFactory);
        this.add(new HelpClientFactory);
        this.add(new TipsClientFactory);
        this.add(new GuidesClientFactory);
        this.add(new ImageSetsClientFactory);
        // this.add(new QuotesClientFactory);
        this.add(new ApplicationsClientFactory);
        this.add(new MessageTemplatesClientFactory);
        // this.add(new EmailTemplatesClientFactory);
        this.add(new AttachmentsClientFactory);

    }

}
