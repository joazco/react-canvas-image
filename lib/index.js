"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var useSize_1 = require("./useSize");
var CanvasImageComponent = function (props) {
    var src = props.src, _a = props.center, center = _a === void 0 ? false : _a, _b = props.responsive, responsive = _b === void 0 ? false : _b, _c = props.blockAtMaxSize, blockAtMaxSize = _c === void 0 ? false : _c, _d = props.blockAtMinSize, blockAtMinSize = _d === void 0 ? false : _d, minSize = props.minSize, rest = __rest(props, ["src", "center", "responsive", "blockAtMaxSize", "blockAtMinSize", "minSize"]);
    var getSize = (0, useSize_1.default)();
    /**  */
    var canvasRef = (0, react_1.useRef)(null);
    var parentRef = (0, react_1.useRef)(null);
    /**  */
    var _e = (0, react_1.useState)(false), loaded = _e[0], setLoaded = _e[1];
    var image = (0, react_1.useMemo)(function () {
        var img = new Image();
        img.src = src;
        return img;
    }, []);
    (0, react_1.useEffect)(function () {
        if (loaded && canvasRef.current && parentRef.current) {
            var current = canvasRef.current;
            var ctx = current.getContext("2d");
            ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, current.width, current.height);
            var frameObjectSize = { w: image.naturalWidth, h: image.naturalHeight };
            var parentSize = {
                w: parentRef.current.clientWidth,
                h: parentRef.current.clientHeight,
            };
            var _a = getSize(parentSize, frameObjectSize, !!responsive, !!blockAtMaxSize, !!blockAtMinSize, minSize), pw = _a[0], ph = _a[1];
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, center ? (parentSize.w - pw) / 2 : 0, center ? (parentSize.h - ph) / 2 : 0, pw, ph);
        }
    }, [canvasRef, loaded, props]);
    // check img loaded
    (0, react_1.useEffect)(function () {
        var dispatchImgLoaded = function () {
            setLoaded(true);
        };
        if (image.complete) {
            dispatchImgLoaded();
        }
        else {
            image.addEventListener("load", dispatchImgLoaded);
            return function () {
                image.removeEventListener("load", dispatchImgLoaded);
            };
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: parentRef, style: { width: "100%", height: "100%" } }, rest, { children: loaded && parentRef.current && ((0, jsx_runtime_1.jsx)("canvas", { width: parentRef.current.clientWidth, height: parentRef.current.clientHeight, ref: canvasRef })) })));
};
exports.default = CanvasImageComponent;
