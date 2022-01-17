import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  upload(files: FileList): void {
    const file = files.item(0);
    const data = new FormData();
    data.append('image', file);

    this.http.post(`${environment.api}/upload`, data).subscribe();
  }
}
