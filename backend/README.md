# Note App
Commonly, RESTful API is a stateless api and public API that have constraints, however, in our case we will be going against restful API rule and have session to store clients data.


## Deployment:


**`tsconfig.json` in Development**

```typescript
{
  "compilerOptions": {
    "target": "es2016",                                  
    "outDir": "./build",                                 
    "module": "commonjs",                                
    "typeRoots": [
      "node_modules/@types",
      "@types"
    ],                                                   
    "esModuleInterop": true,                             
    "forceConsistentCasingInFileNames": true,            
    "strict": true,                                      
    "skipLibCheck": true                                
  },
  "ts-node": {
    "files": true
  },
}

```


**`tsconfig.json` in Deployment:**

We moved `@types` into `/src` folder. and also added `"include": ["src/**/*"]`.

```typescript
{
  "compilerOptions": {
    "target": "es2016",                                  
    "outDir": "./build",                                 
    "module": "commonjs",                                
    "typeRoots": [
      "node_modules/@types",
      "src/@types"
    ],                                                   
    "esModuleInterop": true,                             
    "forceConsistentCasingInFileNames": true,            
    "strict": true,                                      
    "skipLibCheck": true                                
  },
  "ts-node": {
    "files": true
  },
  "include": ["src/**/*"]
}
```

<hr />


**`package.json` in Development**

```typescript
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.ts",
  "scripts": {
    "start": "nodemon src/server.ts",
    "lint": "eslint . --ext .ts",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.15",
    "@types/http-errors": "^2.0.1",
    "@types/morgan": "^1.9.4",
    "@typescript-eslint/eslint-plugin": "^5.48.1",
    "@typescript-eslint/parser": "^5.48.1",
    "eslint": "^8.32.0",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4"
  },
  "dependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/express-session": "^1.17.5",
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.1",
    "connect-mongo": "^4.6.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "envalid": "^7.3.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "mongoose": "^6.8.3",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.20"
  }
}
```


**`package.json` for compiling TS files to JS files**
use `compile": "tsc --project {PATH_TO_YOUR_TSCONFIG_JSON_FILE}",` to compile TS files in to build directories as JS files..

```typescript
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.ts",
  "scripts": {
    "compile": "tsc --project ./tsconfig.json",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.15",
    "@types/http-errors": "^2.0.1",
    "@types/morgan": "^1.9.4",
    "@typescript-eslint/eslint-plugin": "^5.48.1",
    "@typescript-eslint/parser": "^5.48.1",
    "eslint": "^8.32.0",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4"
  },
  "dependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/express-session": "^1.17.5",
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.1",
    "connect-mongo": "^4.6.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "envalid": "^7.3.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "mongoose": "^6.8.3",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.20"
  }
}
```



**`package.json` in Deployment**

```typescript
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.ts",
  "scripts": {
       "start": "node build/server.js",
        "postinstall": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.15",
    "@types/http-errors": "^2.0.1",
    "@types/morgan": "^1.9.4",
    "@typescript-eslint/eslint-plugin": "^5.48.1",
    "@typescript-eslint/parser": "^5.48.1",
    "eslint": "^8.32.0",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4"
  },
  "dependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/express-session": "^1.17.5",
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.1",
    "connect-mongo": "^4.6.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "envalid": "^7.3.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "mongoose": "^6.8.3",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.20"
  }
}
```