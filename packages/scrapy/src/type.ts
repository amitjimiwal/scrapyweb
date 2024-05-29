interface MetaData {
     alternateImage?: string;
     title: string;
     og?: {
          [key: string]: string | undefined;
     };
     twitter?: {
          [key: string]: string | undefined;
     };
     description?: string;
     keywords?: string;
};

export { MetaData };