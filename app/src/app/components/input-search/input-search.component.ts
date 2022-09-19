import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {debounceTime} from 'rxjs/operators';

import { FormBuilder, FormGroup } from '@angular/forms';

const empty = '';
const SECOND_TIME = 200;

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})

export class InputSearchComponent implements OnInit {
  @Input() debounceTime = SECOND_TIME;

  @Output() valueChange = new EventEmitter<string>();

  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchInput: ['']
    });
  }

  ngOnInit() {
    this.formSubscribeChangeValues();
  }

  verifyValidSearch(search: string): boolean {
    return typeof search === 'string' && search !== empty;
  }

  emitInputSearchValue(value: string): void {
    this.valueChange.emit(value);
  }

  emitSearchValue(inputSearchValue): void {
    if (this.verifyValidSearch(inputSearchValue)) {
      this.emitInputSearchValue(inputSearchValue);
    } else {
      this.emitInputSearchValue(empty);
    }
  }

  formSubscribeChangeValues(): void {
    const searchFormControls = this.searchForm.controls;
    const searchInput = searchFormControls.searchInput;
    const valueChanges = searchInput.valueChanges;
    valueChanges.pipe(debounceTime(this.debounceTime))
      .subscribe((inputSearchValue) => {
        inputSearchValue = inputSearchValue.trim();
        try {
          this.emitSearchValue(inputSearchValue);
        } catch (err) {
          console.log(err);
        }
      });
  }
}
