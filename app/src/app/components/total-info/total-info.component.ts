import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  ITotalEnterprises,
  ITotalClients,
} from 'src/interface/total.interface';

@Component({
  selector: 'app-total-info',
  templateUrl: './total-info.component.html',
  styleUrls: ['./total-info.component.scss']
})

export class TotalInfoComponent implements OnInit {
  ngOnInit(): void {}

  @Input() totalInfo: ITotalEnterprises | ITotalClients;

}
