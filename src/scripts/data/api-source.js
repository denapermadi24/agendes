const AgendaSource = {
  async listAgenda() {
    const response = await fetch('https://agendes-back-end.vercel.app/agenda');
    const responseJson = await response.json();
    return responseJson.data;
  },
};

export default AgendaSource;
