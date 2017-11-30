import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalService],
})

export class EntryListComponent implements OnInit {

  list: Array<any> = [];

  constructor(public journalService: JournalService) {


    this.journalService.getJournalList()
      .subscribe(list => {
        this.list = list;
      });
  }

  ngOnInit() {
  }

}
