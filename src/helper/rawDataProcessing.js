/* eslint-disable prettier/prettier */
import {parse} from 'himalaya';
import {base_url_BMKG} from '../constant/constant';

export const homeDataRawProcessCuaca = async raw => {
  const cuaca = [];
  const processedCuaca = await parse(raw);
  await Promise.all(
    processedCuaca.map(item => {
      const nama_kota =
        item.children[0].children[1].children[1].children[1].children[0]
          .content;
      const waktu =
        item.children[0].children[1].children[1].children[3].children[0].content.replace(
          '&nbsp;',
          ' ',
        );
      const icon =
        base_url_BMKG +
        item.children[0].children[1].children[1].children[5].attributes[0]
          .value;
      const kondisi =
        item.children[0].children[1].children[1].children[7].children[0]
          .content;
      const suhu =
        item.children[0].children[1].children[1].children[9].children[0]
          .content;
      const data = {nama_kota, waktu, icon, kondisi, suhu};
      cuaca.push(data);
    }),
  );
  return cuaca;
};
export const homeDataRawProcessPeringatan = async raw => {
  const peringatan = [];
  const processedPeringatan = await parse(raw);
  await Promise.all(
    processedPeringatan.map(item => {
      const waktu_tempat = item.children[0].children[0].children[0].content;
      const keterangan = item.children[0].children[1].content.replace(
        '&nbsp;',
        ' ',
      );
      const data = {waktu_tempat, keterangan};
      peringatan.push(data);
    }),
  );
  return peringatan;
};
export const homeDataRawProcessCitra = async raw => {
  const citra = [];
  const processedSatelit = await parse(raw.satelit);
  const satelit = processedSatelit[1].attributes[1].value;
  citra.push({nama: 'Citra Satelit', gambar: satelit});
  const processedGelombang = await parse(raw.gelombang);
  const gelombang = processedGelombang[1].attributes[1].value;
  citra.push({nama: 'Prakiraan Tinggi Gelombang', gambar: gelombang});
  const processedAngin = await parse(raw.angin);
  const angin = processedAngin[1].attributes[1].value;
  citra.push({nama: 'Prakiraan Angin', gambar: angin});
  const processedKebakaranHutan = await parse(raw.kebakaran_hutan);
  const kebakaran_hutan = processedKebakaranHutan[1].attributes[1].value;
  citra.push({nama: 'Potensi Kebakaran Hutan', gambar: kebakaran_hutan});
  return citra;
};
export const dataRawProcessPerkiraanCuacaIndonesia = async raw => {
  console.tron.log(raw);
  const perkiraanCuaca = [];
  const tanggal = [];
  const listData = [];
  const data = [];
  const processedTanggal = await parse(raw.tanggal_cuaca);
  await Promise.all(
    processedTanggal
      .filter(item => item.tagName)
      .map(item => {
        const tgl = item.children[0].children[0].content;
        tanggal.push(tgl.replace(/\//g, ''));
      }),
  );
  const processedData = await parse(raw.data_cuaca);
  await Promise.all(
    processedData
      .filter(item => item.children)
      .map(item => {
        const subData = item.children[1].children[1].children.filter(
          items => items.tagName === 'tbody',
        );
        listData.push(subData);
      }),
  );
  console.tron.log(listData);
};
