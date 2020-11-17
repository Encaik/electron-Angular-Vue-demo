import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  isMax = false;

  constructor(private router: Router, private electronService: ElectronService) { }

  ngOnInit(): void {

  }

  login(): void {
    this.router.navigate(["/detail"]);
    this.electronService.ipcRenderer.send("changeSize", { width: 800, height: 600 });
  }

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
