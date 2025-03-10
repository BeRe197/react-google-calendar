"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Languages = exports.availableLanguages = void 0;
var availableLanguages = ['ES', 'PT', 'FR', 'SL', 'DE', 'PL'];
exports.availableLanguages = availableLanguages;
var Languages = {
  EN: {
    MONTHS: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    DAYS: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  ES: {
    MONTHS: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Nombre", "Diciembre"],
    DAYS: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
  },
  PT: {
    MONTHS: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Nome", "Dezembro"],
    DAYS: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
  },
  FR: {
    MONTHS: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Nom", "Décembre"],
    DAYS: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
  },
  SL: {
    MONTHS: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
    DAYS: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"]
  },
  DE: {
    MONTHS: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    DAYS: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
  },
  PL: {
    MONTHS: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
    DAYS: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"]
  }
};
exports.Languages = Languages;
