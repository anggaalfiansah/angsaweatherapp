/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {useDispatch} from 'react-redux';
import {
  processRawDataHomeCuaca,
  processRawDataHomePeringatan,
} from '../../redux/action';
import {base_url_BMKG} from '../../constant/constant';

const BaseDataScrapper = () => {
  const [scrapper, setScrapper] = useState(true);
  const dispatch = useDispatch();
  const INJECTED_JAVASCRIPT = `(() => {
    setInterval(() => {
      const cuaca = document.querySelector("#meteorologi-geofisika > div > div > div.col-md-8.md-margin-bottom-20 > div.prakicu-kota-besar.no-space-carousel-block.owl-carousel-v1.margin-bottom-10.md-margin-bottom-20 > div.prakicu-kota-besar-bg > div > div.owl-wrapper-outer > div").innerHTML
      const peringatan = document.querySelector("#meteorologi-geofisika > div > div > div.col-md-8.md-margin-bottom-20 > div.peringatan-dini-home.owl-carousel-v1.md-margin-bottom-20 > div > div.peringatan-dini-home-bg.col-md-10 > div > div.owl-wrapper-outer > div").innerHTML
      const data = {cuaca,peringatan}
      ReactNativeWebView.postMessage(JSON.stringify(data));
      }, 3000);
    })();`;
  const onMessage = async e => {
    const data = JSON.parse(e.nativeEvent.data);
    if (data?.cuaca && data?.peringatan) {
      dispatch(processRawDataHomeCuaca(data?.cuaca));
      dispatch(processRawDataHomePeringatan(data?.peringatan));
      setScrapper(false);
    }
  };
  return (
    <>
      {scrapper && (
        <WebView
          startInLoadingState={true}
          javaScriptEnabled={true}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          onMessage={onMessage}
          source={{
            uri: base_url_BMKG,
          }}
        />
      )}
    </>
  );
};

export default BaseDataScrapper;
