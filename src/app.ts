import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;
  message = 'rick and morty app !';
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'home';
    config.map([
      { route: ['', 'home'],          moduleId: './wrapper/wrapper',     name: 'home',    nav: true,   title: 'Home' },
      { route: '/quotes',  moduleId: './page1/page1', name:'quotes', nav: true,   title: 'quotes' },
      { route: '/images',  moduleId: './page2/page2', name:'images', nav: true,   title: 'rick and mortypictures' }
    ]);

    this.router = router;
  }
}
