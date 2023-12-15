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

      if (page) {
        this._mainContent.innerHTML = await page.renderPageContent();
        await page.applyDataContent();

        if (typeof page.afterRender === 'function') {
          await page.afterRender();
        }
      } else {
        this._mainContent.innerHTML = '<h1>404 Not Found</h1>';
      }
    } catch (error) {
      console.error('Error rendering page:', error);
    }
  }
}

export default App;
