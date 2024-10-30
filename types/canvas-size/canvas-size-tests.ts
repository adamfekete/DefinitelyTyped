import canvasSize from "canvas-size";

const noop = () => void 0;

canvasSize.test({ width: 100, height: 100 }); // $ExpectType Promise<CanvasSizeReturn>
canvasSize.maxArea({ max: 1024, onSuccess: noop, onError: noop }); // $ExpectType Promise<CanvasSizeReturn>
canvasSize.maxHeight({ min: 1, step: 64 }); // $ExpectType Promise<CanvasSizeReturn>
canvasSize.maxWidth({ max: 1000, step: 64 }); // $ExpectType Promise<CanvasSizeReturn>
