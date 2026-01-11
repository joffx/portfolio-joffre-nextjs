// types/ua-parser-js.d.ts

declare module 'ua-parser-js' {
    interface UAParserResult {
      ua: string;
      browser: {
        name: string;
        version: string;
      };
      engine: {
        name: string;
        version: string;
      };
      os: {
        name: string;
        version: string;
      };
      device: {
        model: string;
        type: string;
        vendor: string;
      };
      cpu: {
        architecture: string;
      };
    }
  
    class UAParser {
      constructor(userAgent?: string);
      setUA(userAgent: string): UAParser;
      getResult(): UAParserResult;
    }
  
    export default UAParser;
  }
  