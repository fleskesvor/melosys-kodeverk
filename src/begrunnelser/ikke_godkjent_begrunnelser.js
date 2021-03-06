/**
 * Kodeverk/vesentligVirksomhet
 * ref: https://confluence.adeo.no/display/TEESSI/Ulike+begrunnelser
 * @module
 */
const ikke_godkjent_begrunnelser = [
  {
    kode: 'UTSENDELSE_OVER_24_MD',
    term: 'Utsendelseperioden overskrider 24 md'
  },
  {
    kode: 'TREDJELANDSBORGER_IKKE_AVTALELAND',
    term: 'Tredjelandsborger fra en ikke avtaleland'
  },
  {
    kode: 'ANNET',
    term: 'Fritekstfelt'
  }
];
module.exports.ikke_godkjent_begrunnelser = ikke_godkjent_begrunnelser;
