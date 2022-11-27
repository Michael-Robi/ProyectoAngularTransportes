import { Component, OnInit, HostBinding } from '@angular/core';

import { LogisticaMarinaService } from '../../services/logistica-marina.service';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-logistica-marina-list',
  templateUrl: './logistica-marina-list.component.html',
  styleUrls: ['./logistica-marina-list.component.css']
})
export class LogisticaMarinaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  logisticaMarina: any = [];

  constructor(private objService: LogisticaMarinaService) { }


  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.objService.getLogisticasMarina()
      .subscribe(
        res => {
          this.logisticaMarina = res;
        },
        err => console.log(err)
      );
  }

  deleteGame(id: string) {
    this.objService.deleteLogisticaMarina(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
        },
        err => console.log(err)
      )
  }

}
