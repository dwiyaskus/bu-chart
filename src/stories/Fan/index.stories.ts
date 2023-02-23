import { storiesOf } from '@storybook/angular';

import { FanComponent } from './fan.component';
storiesOf('Fan', module).add('Default', () => ({
  component: FanComponent,
  props: {
    data: [
      {
        period: '202303',
        id: 1,
        kpi: 'Pencatatan Efek Baru dan Emisi Obligasi Korporasi',
        target:
          '1. 68 Pencatatan Efek Baru, terdiri atas:\na. Perusahaan baru yang mencatatkan saham dan obligasi/sukuk; dan\nb. KIK baru yang mencatatkan DIRE, DINFRA, ETF, EBA, EBA-SP, EBASyariah, EBA-SP Syariah\n2. 95 Emisi Obligasi Korporasi',
        realisasi:
          '1. 15 Pencatatan Efek Baru:\n- 14 Pencatatan Saham Baru\n- 1 Pencatatan Obligasi Baru\n2. 22 Emisi Obligasi Korporasi dan Sukuk',
        realisasi_short: '1.  66 efek\n2. 122 emisi',
        catatan:
          'Total Pencatatan Efek Baru dan Emisi Obligasi Korporasi dari Januari s.d Desember 2022:\n1. Pencatatan Efek Baru:\n- 56 Pencatatan Saham Baru* (dari target 55 saham baru)\n- 9 Pencatatan Obligasi Baru (dari target 5 obligasi/sukuk baru)\n- 1 ETF Baru (dari target 8 ETF/EBA/EBA-SP/DIRE)\nTotal 66 Pencatatan Efek baru (97,06% dari target 68 pencatatan efek baru)\n2. Emisi Obligasi Korporasi:\n122 Emisi Obligasi Korporasi (128,42% dari target)',
        percentage: '1. 97.06%\n2. 128.42%',
        color_code: '#1398AF',
      },
      {
        period: '202303',
        id: 2,
        kpi: 'Jumlah Investor Baru',
        target: 'Penambahan 35% dari total investor 2021 (2.621.268)',
        realisasi:
          'a. Realisasi 107,65% dari target penambahan 35% dari tahun 2021  (Total penambahan investor Oktober s.d Desember 2022 adalah 534.118) ',
        realisasi_short:
          'Realisasi 2,82 juta vs target 2.62jt\n(Real:37,68%/Target: 35%)',
        catatan: 'free text ',
        percentage: '107.65%',
        color_code: '#8ED176',
      },
      {
        period: '202303',
        id: 3,
        kpi: '% Availability Sistem Perdagangan: JATS',
        target: '99,98% (SLA Sistem Perdagangan JATS)',
        realisasi: '100%',
        realisasi_short: '100%',
        catatan: 'free text ',
        percentage: '100%',
        color_code: '#8ED176',
      },
      {
        period: '202303',
        id: 4,
        kpi: 'Waktu Recovery Kegagalan Sistem Perdagangan Pasca Kegagalan yagn Tidak Dalam Kendali BEI',
        target: 'Maksimum 2 jam per kejadian',
        realisasi:
          'Pada periode TW IV 2022 tidak terdapat gangguan layanan yang terjadi yang disebabkan oleh kegagalan sistem perdagangan',
        realisasi_short: '100% (Tidak ada kejadian sepanjang 2022)',
        catatan: 'free text ',
        percentage: '100%',
        color_code: '#8ED176',
      },
      {
        period: '202303',
        id: 5,
        kpi: 'Tingkat Risiko AB berdasarkan Aspek Kepatuhan, Opersional dan Finansial',
        target: 'Minimal 92% AB memiliki tingkat risiko kategori rendah',
        realisasi: '100%',
        realisasi_short: '99,73% (dari target 92%)',
        catatan:
          '"Berikut adalah detil tingkat risiko AB berdasarkan aspek Kepatuhan, Operasional, dan Finansial priode Januari s.d September 2022: \n\nTriwulan I:  \nAB dengan Tingkat Risiko <= Low: 93 AB \nAB dengan Tingkat Risiko > Low: 1 AB \nTotal AB: 94 AB \nAB dengan tingkat risiko rendah: 98,94%\n\nTriwulan II: \nAB dengan Tingkat Risiko <= Low: 94 AB \nAB dengan Tingkat Risiko > Low: Tidak ada \nTotal AB: 94 AB \nAB dengan tingkat risiko rendah: 100% \n\nTriwulan III: \nAB dengan Tingkat Risiko <= Low: 94 AB \nAB dengan Tingkat Risiko > Low: Tidak ada \nTotal AB: 94 AB \nAB dengan tingkat risiko rendah: 100%\n4. Triwulan IV\nAB dengan Tingkat Risiko <= Low: 94 AB\nAB dengan Tingkat Risiko > Low: Tidak Ada\nTotal AB: 94 AB\nAB dengan tingkat risiko rendah: 100%\n\nRata-rata Tingkat Risiko AB berdasarkan aspek kepatuhan, operasional dan finansial Tahun 2022 adalah 99,74% (Realisasi 108,40% dari target)."',
        percentage: '108.40%',
        color_code: '#8ED176',
      },
      {
        period: '202303',
        id: 6,
        kpi: 'Indeks Kepuasan Pelanggan',
        target: '80%',
        realisasi: ' 84,91%\n(Realisasi 106,14% dari target) ',
        realisasi_short: '84,91% (target 82%)',
        catatan: 'free text ',
        percentage: '106.14%',
        color_code: '#8ED176',
      },
      {
        period: '202303',
        id: 7,
        kpi: 'Pengembangan Produk Baru dan Penyempurnaan Produk/Layanan Bursa',
        target:
          '7 produk baru atau penyempurnaan produk/layanan Bursa di tahun 2022',
        realisasi:
          '1. Indeks IDX Sharia Growth Index pada tanggal 31 Oktober 2022\n2. Penyediaan Informasi / Website Nilai ESG Perusahaan Tercatat pada 12 November 2022\n3. Indeks IDX LQ45 Low Carbon Leaders Index  pada tanggal 11 November 2022\n4. Papan Utama � Ekonomi Baru (Main - New Economy Board) telah pada tanggal 5 Desember\n5. Enhancement e-IPO requirement 2021 dan penyempurnaan hasil audit OJK telah live 10 Desember 2022.',
        realisasi_short:
          'Terdapat 10 Penyempurnaan Produk/ Layanan Bursa (target:7)',
        catatan: 'free text ',
        percentage: 'n/a',
        color_code: '#D9D9D9',
      },
      {
        period: '202303',
        id: 8,
        kpi: 'Trial KPI Fail',
        target: 'impossible',
        realisasi: 'not achieved',
        realisasi_short: 'failed',
        catatan: 'free text ',
        percentage: '45%',
        color_code: '#C00000',
      },
    ],
  },
}));
