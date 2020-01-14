import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { ContentBundleServicesFactory } from '../build/ContentBundleServicesFactory';
import { ContentBundleClientsFactory } from '../build/ContentBundleClientsFactory';

export class ContentBundleProcess extends ProcessContainer {

    public constructor() {
        super("content", "Content bundle for iQuipsys Positron");
        this._factories.add(new ContentBundleServicesFactory);
        this._factories.add(new ContentBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
