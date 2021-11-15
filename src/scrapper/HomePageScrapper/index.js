/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {useDispatch} from 'react-redux';
import {
  processRawDataHomeCuaca,
  processRawDataHomePeringatan,
  processRawDataHomeCitra,
} from '../../redux/action';
import {base_url_BMKG} from '../../constant/constant';

const HomePageScrapper = () => {
  const [scrapper, setScrapper] = useState(true);
  const dispatch = useDispatch();
  const INJECTED_JAVASCRIPT = `(() => {
    setInterval(() => {
      const cuaca = document.querySelector("#meteorologi-geofisika > div > div > div.col-md-8.md-margin-bottom-20 > div.prakicu-kota-besar.no-space-carousel-block.owl-carousel-v1.margin-bottom-10.md-margin-bottom-20 > div.prakicu-kota-besar-bg > div > div.owl-wrapper-outer > div").innerHTML
      const peringatan = document.querySelector("#meteorologi-geofisika > div > div > div.col-md-8.md-margin-bottom-20 > div.peringatan-dini-home.owl-carousel-v1.md-margin-bottom-20 > div > div.peringatan-dini-home-bg.col-md-10 > div > div.owl-wrapper-outer > div").innerHTML
      const satelit = document.querySelector("#klimatologi > div > div:nth-child(2) > div:nth-child(1) > div.img-mkg-home-bg > a").innerHTML
      const gelombang = document.querySelector("#klimatologi > div > div:nth-child(2) > div:nth-child(2) > div.img-mkg-home-bg > a").innerHTML
      const angin = document.querySelector("#klimatologi > div > div:nth-child(2) > div:nth-child(4) > div.img-mkg-home-bg > a").innerHTML
      const kebakaran_hutan = document.querySelector("#klimatologi > div > div:nth-child(2) > div:nth-child(5) > div.img-mkg-home-bg > a").innerHTML
      const citra = {satelit,gelombang,angin,kebakaran_hutan}
      const gambar_gempa = document.querySelector("#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > div > div:nth-child(1) > a").innerHTML
      const detail_gempa = document.querySelector("#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > div > div.col-md-6.col-xs-6.gempabumi-detail.no-padding > ul").innerHTML
      const detail_gempa2 = document.querySelector("#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > ul").innerHTML
      const gempa_terkini = {gambar_gempa,detail_gempa,detail_gempa2}
      const data = {cuaca,peringatan,citra,gempa_terkini}
      ReactNativeWebView.postMessage(JSON.stringify(data));
      }, 3000);
    })();`;
  const onMessage = async e => {
    const data = JSON.parse(e.nativeEvent.data);
    if (data) {
      dispatch(processRawDataHomeCuaca(data?.cuaca));
      dispatch(processRawDataHomePeringatan(data?.peringatan));
      dispatch(processRawDataHomeCitra(data?.citra));
      console.tron.log(data.gempa_terkini);
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

export default HomePageScrapper;
