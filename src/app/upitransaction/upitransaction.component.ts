import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-upitransaction',
  templateUrl: './upitransaction.component.html',
  styleUrls: ['./upitransaction.component.css']
})
export class UPITransactionComponent implements OnInit {

  
  constructor( private _router: Router ) { }
 
  onresrvationClick():void{
    this._router.navigate(['/reservation']);

  }

  ngOnInit(): void {
  }

}
