declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// ReactComponent로 svg 파일 적용하는데 ts 에러가 나서 해당 파일 추가하고, tsconfig.json의 include에 포함시켜주었습니다.
