/***********************************************
> deleteHeader & Anti-Cache 304 by andanh447
***********************************************/	

const version = 'V2.0.0';

const headersToStrip = [
  'x-revenuecat-etag',
  'if-none-match',
  'if-modified-since',
  'x-goog-if-none-match'
];

let modifiedHeaders = (typeof $request !== "undefined" && $request && $request.headers) ? Object.assign({}, $request.headers) : {};

for (let key of Object.keys(modifiedHeaders)) {
  if (headersToStrip.includes(key.toLowerCase())) {
    modifiedHeaders[key] = "";
    delete modifiedHeaders[key];
  }
}

$done({ headers: modifiedHeaders });
