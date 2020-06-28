import https from "https";

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