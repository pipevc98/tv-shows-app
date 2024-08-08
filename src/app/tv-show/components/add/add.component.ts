import { Component, ViewChild } from '@angular/core';
import { TvShowsService } from '../../services/tvShows.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CrudComponent } from '../crud/crud.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor( private tvShowsService: TvShowsService, private fb: FormBuilder){}

  tvShowForm: FormGroup = this.fb.group({
    nombre: ['example', [ Validators.required, Validators.minLength(3)]],
    favorite:  [false, [Validators.required]]
  })

  postTvShows(){
    const body = this.tvShowForm.value;

    this.tvShowsService.postTvShows(body).subscribe();

    window.location.reload();
  }
}
