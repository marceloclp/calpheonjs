import https from "https";

/**
 * Fetches a url and retrieves the payload as a string.
 * 
 * If the data's length exceeds a certain amount, it will be assumed it's an
 * invalid url and it will return `null`. This is required because when querying
 * BDOCodex, if there is no match for the query parameters, it will return a
 * huge payload.
 * 
 * @param url - The url to be fetched.
 */
export const fetch = async (url: string): Promise<string | null> => {
    return new Promise((resolve, reject) => {
        const req = https.get(url, (res) => {
            const { statusCode } = res;
            
            if (statusCode !== 200) {
                throw new Error(`Request failed. Status Code: ${statusCode}`);
            }

            res.setEncoding('utf-8');

            let payload = '';
            res.on('data', (chunk) => {
                // Ignore huge payloads.
                if (payload.length > 3500000) {
                    res.destroy();
                    resolve(null);
                }
                payload += chunk;
            });

            res.on('end', () => {
                try {
                    resolve(payload);
                } catch (e) {
                    reject(e);
                }
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        req.end();
    });
}