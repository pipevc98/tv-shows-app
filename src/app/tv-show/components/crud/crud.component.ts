import { Component, OnInit, ViewChild } from '@angular/core';
import { TvShowsService } from '../../services/tvShows.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {


  enable:boolean = false;

  public tvShows: any = []


  constructor(private tvShowsService:TvShowsService, private fb: FormBuilder){

  }

  tvShowForm: FormGroup = this.fb.group({
    favorite:  [false, [Validators.required]]
  })

  get favorite(): any {
    const favorite = this.tvShowForm.get('favorite') as FormControl;
    return favorite;
  }

  ngOnInit(): void {
  this.getTvShows();
  } 

  getTvShows(){
  this.tvShowsService.getTvShows().subscribe( data => {
  this.tvShows = data;

  });
  }

  deleteTvshow(id: any){
  console.log(id)
  this.tvShowsService.deleteTvShow(id).subscribe(() => {

  this.getTvShows();

  });

  }

  changeEnable(){
  this.enable = !this.enable;
  }

  putTvShow(item: any ){
    console.log(item);
  }

}
