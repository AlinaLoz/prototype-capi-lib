import { injectable, inject } from 'inversify';

import { TYPES_DEPENDENCIES } from '../constants/inversify.constants';

import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { IEthEventsClient } from '../interfaces/eth.events/eth.events.client.interface';

@injectable()
export class EventsClient implements IEventsClient {
	eth: IEthEventsClient;
	
	constructor(
		@inject(TYPES_DEPENDENCIES.IEthEventsClient) eth: IEthEventsClient,
	) {
		this.eth = eth;
	}
}
