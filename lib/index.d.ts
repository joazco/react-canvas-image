/// <reference types="react" />
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
declare type CanvasImageComponentProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & CanvasImageProps;
declare const CanvasImageComponent: React.FC<CanvasImageComponentProps>;
export default CanvasImageComponent;
