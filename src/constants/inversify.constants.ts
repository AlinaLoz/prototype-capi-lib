const TYPES_DEPENDENCIES = {
	ICrypto: Symbol.for('ICrypto'),
	ICryptoConfig: Symbol.for('ICryptoConfig'),

	IApiClient: Symbol.for('IApiClient'),
	IEventsClient: Symbol.for('IEventsClient'),

	IEthApiClient: Symbol.for('IEthApiClient'),
	IEthEventsClient: Symbol.for('IEthEventsClient'),

	IEthAddressApi: Symbol.for('IEthAddressApi'),
	IEthMainInfoApi: Symbol.for('IEthMainInfoApi'),
	IEthNotifyApi: Symbol.for('IEthNotifyApi'),
	IEthContractApi: Symbol.for('IEthContractApi'),
	IEthRawTransactionApi: Symbol.for('IEthRawTransactionApi'),
};

export { TYPES_DEPENDENCIES };
