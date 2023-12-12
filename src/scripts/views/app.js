import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor(mainContent) {
    this._mainContent = mainContent;
  }

  async renderPage() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._mainContent.innerHTML = await page.renderPageContent();
      await page.applyDataContent();
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;
