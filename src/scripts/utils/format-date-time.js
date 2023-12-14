const FormatDateTime = {
  formatDate: Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Makassar',
    dateStyle: 'long',
  }),

  formatTime: Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Makassar',
    timeStyle: 'short',
  }),

};

export default FormatDateTime;
