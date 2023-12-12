const AgendaSource = {
  async listAgenda() {
    try {
      const response = await fetch('https://agendes-back-end.vercel.app/agenda');
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async detailAgenda(id) {
    try {
      const response = await fetch(`https://agendes-back-end.vercel.app/agenda/${id}`);
      // console.log(response.json());
      return response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default AgendaSource;
