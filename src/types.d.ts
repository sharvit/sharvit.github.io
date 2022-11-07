// types.d.ts

declare module '*.module.css' {
  const classes: { [key: string]: string };

  export = classes;
}
