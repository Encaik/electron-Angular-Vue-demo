import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  isMax = false;

  constructor(private router: Router, private electronService: ElectronService) { }

  ngOnInit(): void { }

  min(): void {
    this.electronService.ipcRenderer.send("minimize");
  }

  max(): void {
    this.isMax = true;
    this.electronService.ipcRenderer.send("maximize", true);
  }

  unmax(): void {
    this.isMax = false;
    this.electronService.ipcRenderer.send("maximize", false);
  }

  close(): void {
    this.electronService.ipcRenderer.send("close");
  }

}
