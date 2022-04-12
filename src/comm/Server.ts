const API_URL = "https://gorest.co.in/public/v2/";

export enum RequestMethod
{
    GET = "GET",
    POST = "POST"
}

export function makeRequest(path:string, method:RequestMethod = RequestMethod.GET)
{
    return new Promise(function (resolve, reject)
    {
        let xhr = new XMLHttpRequest();
        xhr.open(method, API_URL + path);
        xhr.onload = function ()
        {
            if (this.status >= 200 && this.status < 300)
            {
                let resp = {};
                try
                {
                    resp = JSON.parse(xhr.response)
                }
                finally
                {
                    resolve(resp);
                }
            }
            else
            {
                reject({
                    status:this.status,
                    statusText:xhr.statusText
                });
            }
        };
        xhr.onerror = function ()
        {
            reject({
                status:this.status,
                statusText:xhr.statusText
            });
        };
        xhr.send();
    });
}