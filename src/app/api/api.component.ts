import { Component } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
})
export class ApiComponent {
  apiDescriptionUrl = 'https://raw.githubusercontent.com/banksiaglobal/fhir-open-api/master/swagger.yml';
  basePath = environment.basePath ? `${environment.basePath}/fhir-open-api` : 'fhir-open-api';
}
