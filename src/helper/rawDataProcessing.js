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
