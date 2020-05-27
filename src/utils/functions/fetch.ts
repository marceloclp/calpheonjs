import https from "https";
import cheerio from "cheerio";

export const fetch = async (url: string): Promise<CheerioStatic> => {
    return new Promise((resolve, reject) => {
        const req = https.get(url, (res) => {
            const { statusCode } = res;
            
            if (statusCode !== 200) {
                throw new Error(`Request failed. Status Code: ${statusCode}`);
            }

            res.setEncoding('utf-8');
            let rawData = '';
            
            res.on('data', (chunk) => {
                rawData += chunk;
            });

            res.on('end', () => {
                try {
                    const $ = cheerio.load(rawData);
                    resolve($);
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