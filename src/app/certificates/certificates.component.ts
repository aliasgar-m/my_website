import { Component } from '@angular/core';
import { certificates } from 'src/assets/data/certificates';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates = certificates;
}
