import { Component, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-i-osinstall',
  templateUrl: './i-osinstall.component.html',
  styleUrls: ['./i-osinstall.component.css']
})
export class IOSInstallComponent implements OnInit {

  constructor(private snackBarRef: MatSnackBarRef<IOSInstallComponent>) { }

  ngOnInit() {

  }

  close() {
    this.snackBarRef.dismiss();
  }

}
