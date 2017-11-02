
import {Aurelia } from 'aurelia-framework'
import environment from './environment';
import {HttpClient ,json } from 'aurelia-fetch-client';
import fetch from 'fetch';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');


    let container = aurelia.container;
    
    let http = new HttpClient();
    http.configure(config => {
      config
      .useStandardConfiguration()

  
    });
    
    container.registerInstance(HttpClient, http);
  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
