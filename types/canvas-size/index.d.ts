declare module "canvas-size" {
    type CanvasSizeCallbackParams = {
        width: number;
        height: number;
        testTime: number;
        totalTime: number;
    };

    type CanvasSizeOptions = {
        max?: number;
        min?: number;
        step?: number;
        useWorker?: boolean;
        onError?: (options: CanvasSizeCallbackParams) => unknown;
        onSuccess?: (options: CanvasSizeCallbackParams) => unknown;
    };

    type CanvasSizeReturn = CanvasSizeCallbackParams & { success: boolean };

    type CanvasSizeTestOptions = {
        width?: number;
        height?: number;
        sizes?: number[][];
        useWorker?: boolean;
        onError?: (options: CanvasSizeCallbackParams) => unknown;
        onSuccess?: (options: CanvasSizeCallbackParams) => unknown;
    };

    type CanvasSize = {
        maxArea(options?: CanvasSizeOptions): Promise<CanvasSizeReturn>;
        maxHeight(options?: CanvasSizeOptions): Promise<CanvasSizeReturn>;
        maxWidth(options?: CanvasSizeOptions): Promise<CanvasSizeReturn>;
        test(options?: CanvasSizeTestOptions): Promise<CanvasSizeReturn>;
    };

    const canvasSize: CanvasSize;
    export default canvasSize;
}
