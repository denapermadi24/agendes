const FormatDateTime = {
  formatDate: Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    dateStyle: 'long',
  }),

  formatTime: Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    timeStyle: 'short',
  }),

};

export default FormatDateTime;
