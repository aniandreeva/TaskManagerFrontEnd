import { TaskManagerAngularPage } from './app.po';

describe('task-manager-angular App', function() {
  let page: TaskManagerAngularPage;

  beforeEach(() => {
    page = new TaskManagerAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
