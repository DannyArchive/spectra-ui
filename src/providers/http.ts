/**
 * The http provider is a wrapper around the Fetch API, additionally an XHR method
 * is included for uploading files, with a method to get progress updates. This is
 * because Fetch does not yet support upload progress.
 * 
 * @class HttpProvider
 */
export class HttpProvider {

	/**
	 * The standard HTTP GET request using the Fetch API.
	 * 
	 * @param url The URL to make the request to.
	 * @param headers Any headers you wish to send with the request. (Optional)
	 * @param signal An abort signal, in case you need to abort the request. (Optional)
	 */
	public async get(url: string, headers?: any, signal?: AbortSignal): Promise<Response> {
		return await fetch(url, {
			method: 'GET',
			headers: headers,
			credentials: 'include',
			mode: 'cors',
			signal: signal,
		});
	}
}