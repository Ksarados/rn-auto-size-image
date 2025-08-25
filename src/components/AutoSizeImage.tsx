import React, { useState, useEffect, PropsWithChildren } from 'react';
import { View, Image, Dimensions } from 'react-native';

type AutoSizeImageProps = {
    source: any;
    style?: any;
    paddingHorizontal?: number;
};

export const AutoSizeImage = ({ source, style, paddingHorizontal }: PropsWithChildren<AutoSizeImageProps>) => {
    const screenWidth = Dimensions.get('window').width - (paddingHorizontal || 0) * 2;
    const [height, setHeight] = useState(screenWidth);

    useEffect(() => {
        //Если картинка локальная
        if (typeof source !== 'string' && !source.uri) {
            const { width, height } = Image.resolveAssetSource(source);
            setHeight(screenWidth * height / width);
        } else {
            //Если картинка сетевая
            const uri = typeof source === 'string' ? source : source.uri;
            Image.getSize(uri, (width, height) => {
                setHeight(screenWidth * height / width);
            });
        }
    }, [source]);

    return (
        <View style={{ width: screenWidth, height }}>
            <Image source={source} style={[style, { width: screenWidth, height, resizeMode: 'contain' }]} />
        </View>
    );
}