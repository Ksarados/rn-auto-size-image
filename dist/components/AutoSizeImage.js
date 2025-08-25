"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoSizeImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const AutoSizeImage = ({ source, style, paddingHorizontal }) => {
    const screenWidth = react_native_1.Dimensions.get('window').width - (paddingHorizontal || 0) * 2;
    const [height, setHeight] = (0, react_1.useState)(screenWidth);
    (0, react_1.useEffect)(() => {
        //Если картинка локальная
        if (typeof source !== 'string' && !source.uri) {
            const { width, height } = react_native_1.Image.resolveAssetSource(source);
            setHeight(screenWidth * height / width);
        }
        else {
            //Если картинка сетевая
            const uri = typeof source === 'string' ? source : source.uri;
            react_native_1.Image.getSize(uri, (width, height) => {
                setHeight(screenWidth * height / width);
            });
        }
    }, [source]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { width: screenWidth, height }, children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { source: source, style: [style, { width: screenWidth, height, resizeMode: 'contain' }] }) }));
};
exports.AutoSizeImage = AutoSizeImage;
