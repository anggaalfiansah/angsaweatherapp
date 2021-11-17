/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {useDispatch} from 'react-redux';
import {base_url_BMKG} from '../../constant/constant';
import { processRawDataPerkiraanCuacaIndonesia } from '../../redux/action/perkiraanCuacaIndonesiaAction';

const PerkiraanCuacaIndonesia = () => {
  const [scrapper, setScrapper] = useState(true);
  const dispatch = useDispatch();
  const INJECTED_JAVASCRIPT = `(() => {
    setInterval(() => {
      const tanggal_cuaca = document.querySelector("body > div.wrapper > div.container.content > div > div.col-md-8.margin-bottom-20 > div > ul").innerHTML
      const data_cuaca = document.querySelector("body > div.wrapper > div.container.content > div > div.col-md-8.margin-bottom-20 > div > div.tab-content").innerHTML
      const data = {tanggal_cuaca,data_cuaca}
      ReactNativeWebView.postMessage(JSON.stringify(data));
      }, 3000);
    })();`;
  const onMessage = async e => {
    const data = JSON.parse(e.nativeEvent.data);
    if (data) {
      dispatch(processRawDataPerkiraanCuacaIndonesia(data));
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
            uri: base_url_BMKG + 'cuaca/prakiraan-cuaca-indonesia.bmkg',
          }}
        />
      )}
    </>
  );
};

export default PerkiraanCuacaIndonesia;
