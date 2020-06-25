# TypeScript Sandbox
Useful sections/something really new:
1. Function types and Callbacks using ts

## Simple steps
1. Watchmode -> tsc app.ts -w / tsc app.ts --watch -> npm run start. Downside, only one file is being watched. Use a general watchmode.
2. Do ```$ tsc --init``` -> ts project -> ```$ tsc ``` to compile all files. Finally, do ```$ tsc -w```
3. Exclude unwanted files in tsconfig.json such as node_modules (but it's actually excluded by default)