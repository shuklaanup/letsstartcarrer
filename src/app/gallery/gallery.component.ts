import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private ser:ServiceService) { }

  userPost:any
  ngOnInit(): void {
   this.ser.feed().subscribe((res)=>{
      this.userPost=res
    })
  }
  
  pic=""
  image(event:any){
    this.pic=event.target.files[0]
  }
  upload=""
  post1(){
    this.upload="photo"
  }
  post2(){
    this.upload=""
  }

  Post(event:any){
    const formdata =new FormData()
    formdata.append('file',this.pic);
    formdata.append('comment',event.comment);
    // formdata.append('email',this.user.email)
    console.log(formdata)
    this.ser.addPost(formdata).subscribe((res)=>{
      this.userPost.push(res)
    });

  }
}
