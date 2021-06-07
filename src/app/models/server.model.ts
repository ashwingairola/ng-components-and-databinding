export enum EServerType {
	SERVER = 'server',
	BLUEPRINT = 'blueprint'
}

export interface IServer {
	type: EServerType;
	name: string;
	content: string;
}
