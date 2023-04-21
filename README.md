# react-canvas-image

React component to draw image in canvas.

## Installation

```sh
npm i react-canvas-image
```

## React

### Declaration

```typescript
export declare type ObjectSize = {
  w: number;
  h: number;
};
export declare type CanvasImageProps = {
  src: string;
  center?: boolean;
  responsive?: boolean;
  blockAtMaxSize?: boolean;
  blockAtMinSize?: boolean;
  minSize?: ObjectSize;
};
declare type CanvasImageComponentProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  CanvasImageProps;
declare const CanvasImageComponent: React.FC<CanvasImageComponentProps>;
export default CanvasImageComponent;
```

### In ReactJS

```typescript
import CanvasImageComponent from "react-canvas-image";

function App() {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <CanvasImageComponent src="images/idle_sprite_1.png" center />
    </div>
  );
}
```

## Example

```bash
git clone https://github.com/joazco/react-sprite-image-atlas.git
cd example
npm install
npm start
```
